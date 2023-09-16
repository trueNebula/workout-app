import { buttonVariants } from "@components/shadcn/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@components/shadcn/ui/card";
import RegisterForm from "@components/ui/forms/RegisterForm";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="">
      <Card className="w-96">
        <CardHeader>
          <CardTitle>Create an account</CardTitle>
          <CardDescription>
            Please create an account or log in to use the app
          </CardDescription>
        </CardHeader>
        <CardContent>
          <RegisterForm />
        </CardContent>
        <CardFooter className="flex flex-col w-full">
          <Link className={buttonVariants({ variant: "link" })} href="/login">
            Already have an account?
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
