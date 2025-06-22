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
import CancelBookingForm from "../../user/cancel-booking/cancel-booking-form";
import { updateBookingStatusCancel } from "@/actions/admin-actions";

const CancelDetailsAdmin = ({ booking }: { booking: getBookingType }) => {
  const handleCancelBooking = async (cancellationReason: string) => {
    await updateBookingStatusCancel(
      booking.id,
      "cancelled",
      cancellationReason
    );
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="cursor-pointer">
          <XCircleIcon className="h-4 w-4" />
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
            Are you certain you want to cancel? This action cannot be undone
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

export default CancelDetailsAdmin;
