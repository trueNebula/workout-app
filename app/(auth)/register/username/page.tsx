import { buttonVariants } from "@components/shadcn/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@components/shadcn/ui/card";
import UsernameForm from "@components/ui/forms/UsernameForm";

export default async function CreateUsernamePage() {
  // const user = await getCurrentUser();
  // console.log(user);
  return (
    <div className="">
      <Card className="w-96">
        <CardHeader>
          <CardTitle>Pick your username</CardTitle>
          <CardDescription>
            Time to pick your username! Try to think of something creative and
            unique...
          </CardDescription>
        </CardHeader>
        <CardContent>
          <UsernameForm />
        </CardContent>
      </Card>
    </div>
  );
}
