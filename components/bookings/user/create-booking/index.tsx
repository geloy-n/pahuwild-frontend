import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../ui/dialog";
import { Button } from "../../../ui/button";
import { Cabin } from "@/types";
import BookingDetailsForm from "./booking-details-form";
import { checkAuth } from "@/lib/check-auth";
import Link from "next/link";

const ConfirmDetails = async ({ cabin }: { cabin: Cabin }) => {
  const session = await checkAuth();

  if (!cabin.isAvailable) {
    return (
      <>
        <Button
          className="w-full bg-gray-400 text-white py-3 text-lg font-semibold cursor-not-allowed"
          disabled
        >
          Currently Unavailable
        </Button>
        <p className="text-center text-sm text-gray-500 mt-2">
          This cabin is not available for booking right now.
        </p>
      </>
    );
  }

  if (!session) {
    return (
      <Link href={`/sign-in?callbackUrl=/cabin/${cabin.slug}`}>
        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-semibold">
          Sign in to Book
        </Button>
      </Link>
    );
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-semibold">
          Book Room
        </Button>
      </DialogTrigger>
      <p className="text-center text-sm text-gray-500 mt-2">
        You won&apos;t be charged yet
      </p>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Complete Your Booking</DialogTitle>
          <DialogDescription>
            You&apos;re just one step away from your wilderness retreat!
          </DialogDescription>
        </DialogHeader>
        <BookingDetailsForm cabin={cabin} />
      </DialogContent>
    </Dialog>
  );
};

export default ConfirmDetails;
