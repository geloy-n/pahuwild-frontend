"use client";

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
import { useState } from "react";

const FullBookingDetails = ({ booking }: { booking: getBookingType }) => {
  const [isDetailsModalOpen, setIsDetailsodalOpen] = useState(false);

  return (
    <Dialog open={isDetailsModalOpen} onOpenChange={setIsDetailsodalOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          Full Details
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center">
            {booking.firstName} {booking.lastName}
          </DialogTitle>
          <DialogDescription>
            Complete customer booking details
          </DialogDescription>

          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              {booking.cabin && (
                <h4 className="font-medium text-gray-900 mb-2">
                  {booking.cabin.name}
                </h4>
              )}

              <div className="text-sm text-gray-600">
                <div className="space-y-2">
                  <h1 className="text-sm text-gray-600">
                    Booking ID: {booking.id.slice(0, 8)}
                  </h1>

                  <h1 className="text-sm text-gray-600">
                    email: {booking.email}
                  </h1>

                  <h1 className="text-sm text-gray-600">
                    phone: {booking.phoneNumber}
                  </h1>

                  <div>
                    Check-In:{" "}
                    {new Date(booking.checkInDate).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                    {" - "}
                    {booking.checkInTime}
                  </div>
                  <div>
                    Check-Out:{" "}
                    {new Date(booking.checkOutDate).toLocaleDateString(
                      "en-US",
                      {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      }
                    )}
                    {" - "}
                    {booking.checkOutTime}
                  </div>

                  {booking.cabin && (
                    <h1 className="text-sm text-gray-600">
                      Guests: {booking.cabin.guests}
                    </h1>
                  )}

                  <h1 className="text-sm text-gray-600">
                    Request: {booking.requests}
                  </h1>
                  <div>
                    <p className="text-sm text-gray-600">
                      Total: ${booking.total}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default FullBookingDetails;
