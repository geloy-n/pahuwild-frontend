"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { AlertDialogTrigger } from "@radix-ui/react-alert-dialog";
import { Delete } from "lucide-react";
import { useState } from "react";
import { deleteCabin } from "@/actions/cabin-action";

type DeleteCabinButtonProps = {
  cabinId: string;
  onDeleteSuccess?: () => void;
};

const DeleteCabinButton = ({
  cabinId,
  onDeleteSuccess,
}: DeleteCabinButtonProps) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleDelete = async () => {
    setLoading(true);
    setError("");
    try {
      await deleteCabin(cabinId);
      onDeleteSuccess?.();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setError(err.message || "Failed to delete cabin");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger className="flex border p-1.2 px-2 rounded-sm font-medium text-sm items-center cursor-pointer">
        <Delete className="h-4 w-4 mr-1" />
        Delete
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete This Cabin</AlertDialogTitle>
          <AlertDialogDescription>
            Are you certain you want to delete? This action cannot be undone
          </AlertDialogDescription>
          {error && <p className="text-red-600 mt-2">{error}</p>}
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel disabled={loading}>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={handleDelete}
            disabled={loading}
            className="bg-red-600 hover:bg-red-700 text-white"
          >
            {loading ? "Deleting..." : "Delete"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteCabinButton;
