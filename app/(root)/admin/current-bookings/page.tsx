import { getAllBookings } from "@/actions/admin-actions";
import BookingHeading from "@/components/bookings/boooking-heading";
import { Button } from "@/components/ui/button";

import Link from "next/link";
import CurrentBookingCardStatus from "../../../../components/bookings/admin/current-bookings/current-booking-status";
import CurrentBookingTable from "../../../../components/bookings/admin/current-bookings/current-booking-table";

const CurrentBookingsAdmin = async () => {
  const currentBooking = await getAllBookings();

  return (
    <div className="container min-h-screen mx-auto px-4 py-8">
      <div className="flex flex-wrap items-center justify-between mb-8">
        <div>
          <BookingHeading
            title="Current Bookings"
            subTitle="Manage and view all current customer bookings"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          <Button asChild variant="outline">
            <Link href="/admin/cancelled-bookings">View Cancelled</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/admin/completed-bookings">Completed Bookings</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/admin/cabin-management">Manage Cabins</Link>
          </Button>
        </div>
      </div>
      <CurrentBookingCardStatus currentBooking={currentBooking} />
      <CurrentBookingTable currentBooking={currentBooking} />
    </div>
  );
};

export default CurrentBookingsAdmin;
