import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { API_URL } from "@/lib/api";
import { getBookingType } from "@/types";
import { CalendarIcon, MapPinIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type BookingCardProps = {
  booking: getBookingType;
  ActionComponent: React.ComponentType<{ booking: getBookingType }>;
};

const BookingCard: React.FC<BookingCardProps> = async ({
  booking,
  ActionComponent,
}) => {
  return (
    <Card className="overflow-hidden p-0">
      {booking.cabin ? (
        <div className="md:flex">
          <div className="md:w-1/3">
            <Image
              src={`${API_URL}/cabins/${booking.cabin.slug}.jpg?${Date.now()}`}
              alt={booking.cabin.name}
              width={400}
              height={0}
              className="w-full h-75 object-cover"
            />
          </div>

          <div className="flex flex-col justify-center md:w-2/3 p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {booking.cabin.name}
                </h3>
                <div className="flex items-center text-gray-600 mb-2">
                  <MapPinIcon className="h-4 w-4 mr-1" />
                  <span>{booking.cabin.location}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <CalendarIcon className="h-4 w-4 mr-1" />
                  <span>
                    {new Date(booking.checkInDate).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}{" "}
                    {booking.checkInTime} -{" "}
                    {new Date(booking.checkOutDate).toLocaleDateString(
                      "en-US",
                      {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      }
                    )}{" "}
                    {booking.checkOutTime}
                  </span>
                </div>
              </div>

              <Badge
                className={
                  booking.status === "pending"
                    ? "bg-yellow-500 text-white"
                    : booking.status === "confirmed"
                    ? "bg-blue-800 text-white"
                    : booking.status === "checkedIn"
                    ? "bg-orange-500 text-white"
                    : booking.status === "completed"
                    ? "bg-green-700 text-white"
                    : ""
                }
              >
                {booking.status.toUpperCase()}
              </Badge>
            </div>

            <div
              className={`grid gap-4 mb-6 ${
                booking.status === "completed"
                  ? "grid-cols-1 md:grid-cols-4"
                  : "grid-cols-1 md:grid-cols-3"
              }`}
            >
              <div>
                <p className="text-sm text-gray-500">Booking ID</p>
                <p className="font-medium">{booking.id.slice(0, 8)}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Guests</p>
                <p className="font-medium">{booking.cabin.guests} people</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Total Amount</p>
                <p className="font-medium text-green-600">${booking.total}</p>
              </div>
              {booking.status === "completed" && (
                <div>
                  <p className="text-sm text-gray-500">Completed</p>
                  <p className="font-medium">
                    {new Date(booking.checkOutDate).toLocaleDateString(
                      "en-US",
                      {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      }
                    )}
                  </p>
                </div>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild variant="outline" className="flex-1">
                <Link href={`/cabin/${booking.cabin.slug}`}>
                  View Cabin Details
                </Link>
              </Button>

              {ActionComponent && booking.status !== "checkedIn" && (
                <ActionComponent booking={booking} />
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="p-6 bg-gray-50 border-l-4 border-red-500">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <div className="flex items-center mb-2">
                <Badge
                  variant="destructive"
                  className="bg-red-600 hover:bg-red-700"
                >
                  Cabin No Longer Available
                </Badge>
              </div>
              <div className="flex items-center text-gray-600 mb-2">
                <CalendarIcon className="h-4 w-4 mr-1" />

                <span>
                  {new Date(booking.checkInDate).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}{" "}
                  {booking.checkInTime} -{" "}
                  {new Date(booking.checkOutDate).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}{" "}
                  {booking.checkOutTime}
                </span>
              </div>
              <p className="text-sm text-gray-500">
                This cabin is no longer available for booking, but your
                completed stay record is preserved.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <p className="text-sm text-gray-500">Booking ID</p>
              <p className="font-medium">{booking.id.slice(0, 8)}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Total Paid</p>
              <p className="font-medium text-green-600">${booking.total}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Completed</p>
              <p className="font-medium">
                {new Date(booking.checkOutDate).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button variant="outline" disabled className="flex-1">
              Cabin No Longer Available
            </Button>
          </div>
        </div>
      )}
    </Card>
  );
};

export default BookingCard;
