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
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
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
                <Input placeholder="name@domain.com" {...field} />
              </FormControl>
              <FormDescription>Enter your email.</FormDescription>
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
          Register
        </Button>
      </form>
    </Form>
  );
}
