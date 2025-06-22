"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Edit } from "lucide-react";
import CabinForm from "./cabin-form";
import { getCabinById } from "@/actions/cabin-action";
import { Cabin } from "@/types";

const EditCabinButton = ({ cabinId }: { cabinId: string }) => {
  const [open, setOpen] = useState(false);
  const [cabin, setCabin] = useState<Cabin | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (open) {
      setLoading(true);
      getCabinById(cabinId)
        .then((data) => setCabin(data))
        .finally(() => setLoading(false));
    }
  }, [open, cabinId]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="flex items-center">
          <Edit className="mr-1" />
          Edit
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Update Cabin</DialogTitle>
          <DialogDescription>
            Fill in the new details of this cabin
          </DialogDescription>
        </DialogHeader>

        {loading && <p>Loading cabin details...</p>}
        {cabin && <CabinForm cabin={cabin} onClose={() => setOpen(false)} />}
      </DialogContent>
    </Dialog>
  );
};

export default EditCabinButton;
