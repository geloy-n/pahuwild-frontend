"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CirclePlus } from "lucide-react";
import CabinForm from "./cabin-form";

const AddCabinButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <CirclePlus className="mr-2" />
          Add Cabin
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Add a New Cabin</DialogTitle>
          <DialogDescription>
            Fill in the details of the new cabin
          </DialogDescription>
        </DialogHeader>
        <CabinForm onClose={() => setOpen(false)} />
      </DialogContent>
    </Dialog>
  );
};

export default AddCabinButton;
