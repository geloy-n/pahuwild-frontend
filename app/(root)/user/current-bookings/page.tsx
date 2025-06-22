import { getBookings } from "@/actions/booking-actions";
import BookingHeading from "@/components/bookings/boooking-heading";
import CancelDetails from "@/components/bookings/user/cancel-booking";
import BookingCard from "@/components/bookings/booking-card";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeftIcon, ClockIcon } from "lucide-react";
import Link from "next/link";

const CurrentBookings = async () => {
  const allBookings = await getBookings();

  const pendingBookings = allBookings.filter(
    (booking) =>
      booking.status !== "completed" && booking.status !== "cancelled"
  );

  return (
    <div className="container min-h-screen mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <Button
            asChild
            variant="ghost"
            className="text-amber-700 hover:text-amber-800 hover:bg-amber-50 mb-4"
          >
            <Link href="/" className="flex items-center">
              <ArrowLeftIcon className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
          </Button>
          <BookingHeading
            title="My Pending Bookings"
            subTitle="View and manage your upcoming cabin reservations"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          <Button asChild variant="outline">
            <Link href="/user/cancelled-bookings">View Cancelled</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/user/completed-bookings">Completed Bookings</Link>
          </Button>
        </div>
      </div>

      {pendingBookings.length === 0 ? (
        <Card className="text-center py-12">
          <CardContent>
            <ClockIcon className="h-16 w-16 mx-auto text-gray-400 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No Pending Bookings
            </h3>
            <p className="text-gray-600 mb-6">
              You don&apos;t have any upcoming reservations at the moment.
            </p>
            <Button asChild>
              <Link href="/cabin">Browse Cabins</Link>
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-6">
          {pendingBookings.map((booking) => (
            <BookingCard
              key={booking.id}
              booking={booking}
              ActionComponent={CancelDetails}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CurrentBookings;
