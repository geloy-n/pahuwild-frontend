"use client";

import { updateBookingStatus } from "@/actions/admin-actions";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getBookingType } from "@/types";
import { MapPinIcon, UserIcon } from "lucide-react";
import FullBookingDetails from "./full-booking-details";
import CancelDetailsAdmin from "../cancelled-bookings";
import CompletedButton from "../completed-bookings/completed-button";

const CurrentBookingTable = ({
  currentBooking,
}: {
  currentBooking: getBookingType[];
}) => {
  const filteredBookings = currentBooking.filter(
    (booking) =>
      booking.status !== "completed" && booking.status !== "cancelled"
  );
  const handleStatusChange = async (bookingId: string, newStatus: string) => {
    await updateBookingStatus(bookingId, newStatus);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>All Bookings</CardTitle>
        <CardDescription>
          Complete list of current bookings with customer details and status
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
              <TableHead>Status</TableHead>
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
                    {booking.cabin.name}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center">
                    <UserIcon className="h-4 w-4 mr-2 text-gray-400" />
                    {booking.firstName} {booking.lastName}
                  </div>
                </TableCell>
                <TableCell className="font-medium">${booking.total}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Select
                      value={booking.status}
                      onValueChange={(newStatus) =>
                        handleStatusChange(booking.id, newStatus)
                      }
                    >
                      <SelectTrigger className="w-32">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pending">Pending</SelectItem>
                        <SelectItem value="confirmed">Confirmed</SelectItem>
                        <SelectItem value="checkedIn">Checked In</SelectItem>
                      </SelectContent>
                    </Select>
                    <FullBookingDetails booking={booking} />
                    <CancelDetailsAdmin booking={booking} />
                    <CompletedButton
                      booking={booking}
                      handleStatusChange={handleStatusChange}
                    />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default CurrentBookingTable;
