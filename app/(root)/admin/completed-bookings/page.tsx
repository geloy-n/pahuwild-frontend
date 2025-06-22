import { getAllBookings } from "@/actions/admin-actions";
import FullBookingDetails from "@/components/bookings/admin/current-bookings/full-booking-details";
import BookingHeading from "@/components/bookings/boooking-heading";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ArrowLeftIcon, MapPinIcon, UserIcon } from "lucide-react";
import Link from "next/link";

const CompletedBookingsAdmin = async () => {
  const currentBooking = await getAllBookings();

  const filteredBookings = currentBooking.filter(
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
            <Link href="/admin/current-bookings" className="flex items-center">
              <ArrowLeftIcon className="h-4 w-4 mr-2" />
              Back to Current Bookings
            </Link>
          </Button>
          <BookingHeading
            title="Completed Bookings"
            subTitle="View all completed customer bookings"
          />
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Completed Bookings</CardTitle>
          <CardDescription>
            Complete list of completed bookings with customer details and status
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Booking ID</TableHead>
                <TableHead>Cabin</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredBookings.map((booking) => (
                <TableRow key={booking.id}>
                  <TableCell className="font-medium">
                    {booking.id.slice(0, 8)}
                  </TableCell>
                  <TableCell>
                    {booking.cabin ? (
                      <div className="flex items-center">
                        <MapPinIcon className="h-4 w-4 mr-2 text-gray-400" />
                        {booking.cabin.name}
                      </div>
                    ) : (
                      <div className="flex items-center">
                        <p>Cabin No Longer Available</p>
                      </div>
                    )}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <UserIcon className="h-4 w-4 mr-2 text-gray-400" />
                      {booking.firstName} {booking.lastName}
                    </div>
                  </TableCell>
                  <TableCell className="font-medium">
                    ${booking.total}
                  </TableCell>
                  <TableCell>
                    <FullBookingDetails booking={booking} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default CompletedBookingsAdmin;
