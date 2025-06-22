import { getAllBookings } from "@/actions/admin-actions";
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

const CancelledBookingsAdmin = async () => {
  const currentBooking = await getAllBookings();

  const filteredBookings = currentBooking.filter(
    (booking) => booking.status === "cancelled"
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
            title="Cancelled Bookings"
            subTitle="View all cancelled customer bookings"
          />
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Cancelled Bookings</CardTitle>
          <CardDescription>Complete list of cancelled bookings</CardDescription>
        </CardHeader>
        <CardContent>
          <Table className="table-auto w-full">
            <TableHeader>
              <TableRow>
                <TableHead>Booking ID</TableHead>
                <TableHead>Cabin</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Cancel Reason</TableHead>
                <TableHead>Cancelled By</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredBookings.map((booking) => (
                <TableRow key={booking.id}>
                  <TableCell className="font-medium">
                    {booking.id.slice(0, 8)}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <MapPinIcon className="h-4 w-4 mr-2 text-gray-400" />
                      {booking.cabin
                        ? booking.cabin.name
                        : "Cabin No Longer Available"}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <UserIcon className="h-4 w-4 mr-2 text-gray-400" />
                      {booking.firstName} {booking.lastName}
                    </div>
                  </TableCell>
                  <TableCell className="font-medium max-w-xs break-words whitespace-normal overflow-hidden">
                    {booking.isCancelledReason}
                  </TableCell>
                  <TableCell>{booking.isCancelledBy}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default CancelledBookingsAdmin;
