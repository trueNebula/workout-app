import { buttonVariants } from "@components/shadcn/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@components/shadcn/ui/card";
import GoogleLoginButton from "@components/ui/GoogleLoginButton";
import LoginForm from "@components/ui/forms/LoginForm";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="w-4/5 max-w-sm">
      <Card className="">
        <CardHeader>
          <CardTitle>Log in to your account</CardTitle>
          <CardDescription>Please log in to use the app.</CardDescription>
        </CardHeader>
        <CardContent>
          <LoginForm />
        </CardContent>
        <CardFooter className="flex flex-col w-full">
          <GoogleLoginButton />
          <Link
            className={buttonVariants({ variant: "link" })}
            href="/register"
          >
            Don&lsquo;t have an account?
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
