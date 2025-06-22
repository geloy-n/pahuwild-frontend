"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { getBookingType } from "@/types";
import { XCircleIcon } from "lucide-react";
import { useState } from "react";
import CancelBookingForm from "./cancel-booking-form";
import { updateBookingStatusCancel } from "@/actions/admin-actions";

const CancelDetails = ({ booking }: { booking: getBookingType }) => {
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);

  const handleCancelBooking = async (cancellationReason: string) => {
    await updateBookingStatusCancel(
      booking.id,
      "cancelled",
      cancellationReason
    );
  };

  return (
    <Dialog open={isCancelModalOpen} onOpenChange={setIsCancelModalOpen}>
      <DialogTrigger asChild>
        <Button
          variant="destructive"
          className="flex-1 flex items-center justify-center cursor-pointer"
        >
          <XCircleIcon className="h-4 w-4 mr-2" />
          Cancel Booking
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center">
            <XCircleIcon className="h-6 w-6 mr-2 text-red-600" />
            Cancel Booking
          </DialogTitle>
          <DialogDescription>
            We&apos;re sorry to see you cancel your reservation. Please let us
            know why you&apos;re cancelling so we can improve our service.
          </DialogDescription>
        </DialogHeader>
        <CancelBookingForm
          booking={booking}
          onConfirmCancellation={handleCancelBooking}
        />
      </DialogContent>
    </Dialog>
  );
};

export default CancelDetails;
