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
  FormLabel,
  FormMessage,
} from "@components/shadcn/ui/form";

import { Input } from "@components/shadcn/ui/input";
import { Button } from "@components/shadcn/ui/button";
import { headingFont } from "@utils/fonts";
import { signIn } from "next-auth/react";
import { useState } from "react";
import Spinner from "../Spinner";

const formSchema = z.object({
  email: z
    .string()
    .min(1, {
      message: "Required field.",
    })
    .email({ message: "Invalid email." }),
  password: z.string().regex(new RegExp("^(?=.*[A-Z])(?=.*[0-9]).{8,}$"), {
    message:
      "Password must contain at least 8 characters, one uppercase letter and a number.",
  }),
});

export default function RegisterForm() {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    setError(false);
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((response) => response.json())
      .then((parsed) => {
        if (parsed.error) {
          setError(true);
        } else {
          signIn("credentials", {
            username: parsed.data.username,
            password: values.password,
            callbackUrl: "/register/username",
          });
        }
        setLoading(false);
      });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="name@domain.com"
                  {...field}
                  onChange={(e) => {
                    field.onChange(e);
                    setError(false);
                  }}
                />
              </FormControl>
              <FormDescription>
                {error
                  ? "Email already exists. Log in instead?"
                  : "Enter your email."}
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} type="password" />
              </FormControl>
              <FormDescription>Enter your password.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        {loading && <Spinner />}
        <Button
          className={`${headingFont.className} text-xl w-full mb-2`}
          type="submit"
        >
          Register
        </Button>
      </form>
    </Form>
  );
}
