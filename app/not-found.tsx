"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const NotFoundPage = () => {
  return (
    <div className=" flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-50 to-amber-50">
      <div className="flex flex-col items-center p-6 rounded-lg border-t-2 shadow-md text-center px-15">
        <h1 className="text-2xl font-bold mb-4">Page Not Found</h1>
        <Button
          className="font-bold cursor-pointer bg-green-800 hover:bg-green-700"
          onClick={() => (window.location.href = "/")}
        >
          <div className="hidden md:flex justify-center items-center space-x-2">
            <ArrowLeft /> <span> Back</span>
          </div>
          <span className="md:hidden">
            <ArrowLeft />
          </span>
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;
