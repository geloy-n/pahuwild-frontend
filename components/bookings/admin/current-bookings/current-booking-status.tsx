import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getBookingType } from "@/types";

const CurrentBookingCardStatus = ({
  currentBooking,
}: {
  currentBooking: getBookingType[];
}) => {
  const filteredBookings = currentBooking.filter(
    (booking) =>
      booking.status !== "completed" && booking.status !== "cancelled"
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-gray-600">
            Current Bookings
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-gray-900">
            {filteredBookings.length}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-gray-600">
            Confirmed
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-blue-600">
            {currentBooking.filter((b) => b.status === "confirmed").length}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-gray-600">
            Checked In
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-green-600">
            {currentBooking.filter((b) => b.status === "checkedIn").length}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CurrentBookingCardStatus;
