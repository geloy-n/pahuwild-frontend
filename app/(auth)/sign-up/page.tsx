import SectionTitle from "@/components/shared/section-title";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TreePine } from "lucide-react";
import Link from "next/link";
import SignUpForm from "./sign-up-form";

const SignUpPage = () => {
  return (
    <div className="flex flex-col items-center -mt-50">
      <TreePine className="h-15 w-15 text-green-600" />
      <SectionTitle
        title="Join the Adventure"
        subTitle="create your account and start exploring wilderness retreats"
      />
      <Card className="border-2 border-green-100 shadow-lg min-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl text-center text-gray-900">
            Create Account
          </CardTitle>
          <CardDescription className="text-center text-gray-600">
            Fill in your details to get started
          </CardDescription>
        </CardHeader>
        <CardContent>
          <SignUpForm />

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Already have an account?{" "}
              <Link
                href="/sign-in"
                className="text-green-600 hover:text-green-700 font-medium hover:underline"
              >
                Sign in
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignUpPage;
