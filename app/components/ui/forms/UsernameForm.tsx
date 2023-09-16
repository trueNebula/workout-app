"use client";

import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@components/shadcn/ui/form";

import { Input } from "@components/shadcn/ui/input";
import { Button } from "@components/shadcn/ui/button";
import { headingFont } from "@utils/fonts";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Spinner from "../Spinner";
import { useDebounce } from "@hooks/useDebounce";
import useUserSession from "@hooks/useUserSession";

const formSchema = z.object({
  username: z.string().min(1, {
    message: "Required field.",
  }),
});

export default function UsernameForm() {
  const router = useRouter();
  const [user, userId] = useUserSession();

  const [formLoading, setformLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const debouncedUsername = useDebounce<string>(username, 200);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  useEffect(() => {
    async function checkUnique() {
      setLoading(true);
      setError("");

      const response = await fetch(`/api/users/${debouncedUsername}/unique`);
      const data = await response.json();
      const isUnique = data.data;

      isUnique ? setError("Good to go!") : setError("Username already exists!");
      setLoading(false);
    }

    if (debouncedUsername) {
      checkUnique();
    } else {
      setError("");
    }
  }, [debouncedUsername]);

  function onSubmit(values: z.infer<typeof formSchema>) {
    setformLoading(true);

    if (!userId) {
      setError("Something went wrong...");
      return;
    }

    fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/users/${userId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    }).then(() => router.push("/"));
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder=""
                  {...field}
                  onChange={(e) => {
                    field.onChange(e);
                    setUsername(e.target.value);
                  }}
                />
              </FormControl>
              <FormDescription className="min-h-[19.2px]">
                {error}
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        {formLoading && <Spinner />}
        <Button
          className={`${headingFont.className} text-xl w-full mb-2`}
          type="submit"
          disabled={error !== "Good to go!" && !loading}
        >
          Continue
        </Button>
      </form>
    </Form>
  );
}
