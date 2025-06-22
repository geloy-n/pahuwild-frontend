import SectionTitle from "@/components/shared/section-title";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TreePine } from "lucide-react";
import SignInForm from "./sign-in-form";
import Link from "next/link";

const SignInPage = () => {
  return (
    <div className="flex flex-col items-center -mt-50">
      <TreePine className="h-15 w-15 text-green-600" />
      <SectionTitle
        title="Welcome Back to the Wild"
        subTitle="sign in to continue your wilderness adventure"
      />
      <Card className="border-2 border-green-100 shadow-lg min-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl text-center text-gray-900">
            Sign In
          </CardTitle>
          <CardDescription className="text-center text-gray-600">
            Enter your credentials to access your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <SignInForm />

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              New to Pahuwild?{" "}
              <Link
                href="/sign-up"
                className="text-green-600 hover:text-green-700 font-medium hover:underline"
              >
                Create an account
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignInPage;
