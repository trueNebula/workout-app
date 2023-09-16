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
import { useState } from "react";
import { signIn } from "next-auth/react";

const formSchema = z.object({
  username: z.string().min(1, {
    message: "Required field.",
  }),
  password: z.string().min(1, {
    message: "Required field.",
  }),
});

export default function LoginForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const [usernameInput, setUsernameInput] = useState("");

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    signIn("credentials", {
      username: values.username,
      password: values.password,
      callbackUrl: "/",
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input
                  placeholder="@username"
                  {...field}
                  // TODO: Implement the custom @ Input
                  // value={"@" + usernameInput}
                  // onChange={(e: React.FormEvent<HTMLInputElement>) =>
                  //   setUsernameInput(e.currentTarget.value.slice(1))
                  // }
                />
              </FormControl>
              <FormDescription>Enter your username.</FormDescription>
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
                <Input placeholder="" {...field} />
              </FormControl>
              <FormDescription>Enter your password.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          className={`${headingFont.className} text-xl w-full mb-2`}
          type="submit"
        >
          Log In
        </Button>
      </form>
    </Form>
  );
}
