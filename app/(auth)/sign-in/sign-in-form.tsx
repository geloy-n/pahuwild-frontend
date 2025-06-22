"use client";
import { signInUser } from "@/actions/user-actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useActionState, useState } from "react";

const SignInForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [state, formAction] = useActionState(signInUser, { error: "" });

  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  return (
    <form action={formAction} className="px-6 mx-auto space-y-5">
      <input type="hidden" name="callbackUrl" value={callbackUrl} />
      <Input
        id="email"
        name="email"
        type="mail"
        placeholder="Email"
        className="border-green-200 focus:border-green-400 focus:ring-green-400"
      />

      <div className="relative">
        <Input
          id="password"
          name="password"
          type={showPassword ? "text" : "password"}
          placeholder="Enter your password"
          required
          className="border-green-200 focus:border-green-400 focus:ring-green-400 pr-10"
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
        >
          {showPassword ? (
            <EyeOff className="h-4 w-4" />
          ) : (
            <Eye className="h-4 w-4" />
          )}
        </button>
      </div>

      <div>
        {state.error && (
          <p className="text-sm text-center text-red-500">{state.error}</p>
        )}
      </div>

      <Button
        type="submit"
        className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md transition-colors"
      >
        Sign In
      </Button>
    </form>
  );
};

export default SignInForm;
