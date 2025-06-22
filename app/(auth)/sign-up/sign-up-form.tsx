"use client";
import { createUser } from "@/actions/user-actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";

const SignUpForm = () => {
  const [state, formAction] = useActionState(createUser, { error: "" });

  const SignUpButton = () => {
    const { pending } = useFormStatus();

    return (
      <Button
        disabled={pending}
        className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md transition-colors"
        variant="default"
      >
        {pending ? "Submitting..." : "Sign Up"}
      </Button>
    );
  };
  return (
    <form action={formAction} className="px-6 mx-auto space-y-5">
      <div className="space-y-4">
        <Input
          id="name"
          name="name"
          type="text"
          placeholder="Name"
          className="w-full border-green-200 focus:border-green-400 focus:ring-green-400"
        />

        <Input
          id="email"
          name="email"
          type="mail"
          placeholder="Email"
          className="w-full border-green-200 focus:border-green-400 focus:ring-green-400"
        />

        <Input
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          className="w-full border-green-200 focus:border-green-400 focus:ring-green-400"
        />

        <Input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          className="w-full border-green-200 focus:border-green-400 focus:ring-green-400"
        />
      </div>

      <div>
        {state.error && (
          <p className="text-sm text-red-500 text-center">{state.error}</p>
        )}
      </div>

      <SignUpButton />
    </form>
  );
};

export default SignUpForm;
