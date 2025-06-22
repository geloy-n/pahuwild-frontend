import { getBookings } from "@/actions/booking-actions";
import BookingCard from "@/components/bookings/booking-card";
import BookingHeading from "@/components/bookings/boooking-heading";
import RatingBooking from "@/components/bookings/user/completed-booking/rating-booking";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeftIcon, ClockIcon } from "lucide-react";
import Link from "next/link";

const CompletedBookings = async () => {
  const allBookings = await getBookings();

  const completedBookings = allBookings.filter(
    (booking) => booking.status === "completed"
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
            <Link href="/user/current-bookings" className="flex items-center">
              <ArrowLeftIcon className="h-4 w-4 mr-2" />
              Back to Pending Bookings
            </Link>
          </Button>
          <BookingHeading
            title="Completed Bookings"
            subTitle="Review you pasw wilderness adventure and share your experiences"
          />
        </div>
      </div>

      {completedBookings.length === 0 ? (
        <Card className="text-center py-12">
          <CardContent>
            <ClockIcon className="h-16 w-16 mx-auto text-gray-400 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No Completed Bookings
            </h3>
            <p className="text-gray-600 mb-6">
              You don&apos;t have any completed reservations at the moment.
            </p>
            <Button asChild>
              <Link href="/cabin">Browse Cabins</Link>
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-6">
          {completedBookings.map((booking) => (
            <BookingCard
              key={booking.id}
              booking={booking}
              ActionComponent={RatingBooking}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CompletedBookings;
