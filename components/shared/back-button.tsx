"use client"; // Ensure this is a client-side component

import { ArrowLeftIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const BackButton = () => {
  const goBack = () => {
    window.history.back();
  };

  return (
    <Button
      asChild
      variant="ghost"
      className="text-amber-700 hover:text-amber-800 hover:bg-amber-50 cursor-pointer"
      onClick={goBack}
    >
      <span className="flex items-center">
        <ArrowLeftIcon className="h-4 w-4 mr-2" />
        Back
      </span>
    </Button>
  );
};

export default BackButton;
