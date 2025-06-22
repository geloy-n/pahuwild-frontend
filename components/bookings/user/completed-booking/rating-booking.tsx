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
import { CircleCheck, Star } from "lucide-react";
import RatingBookingForm from "./rating-booking-form";

const RatingBooking = ({ booking }: { booking: getBookingType }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {booking.hasReview === false ? (
          <Button className="flex-1 flex items-center justify-center bg-amber-700 hover:bg-amber-600 cursor-pointer">
            <Star className="h-4 w-4 mr-2" />
            Write a Review
          </Button>
        ) : (
          <Button
            disabled
            className="flex-1 flex items-center justify-center bg-gray-800"
          >
            <CircleCheck className="h-4 w-4 mr-2" />
            Review Submitted
          </Button>
        )}
      </DialogTrigger>

      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center">
            <Star className="h-6 w-6 mr-2 text-yellow-600" />
            Review Booking
          </DialogTitle>
          <DialogDescription>
            Share your experience to help other travelers discover amazing
            wilderness retreats.
          </DialogDescription>
        </DialogHeader>
        <RatingBookingForm booking={booking} />
      </DialogContent>
    </Dialog>
  );
};

export default RatingBooking;
