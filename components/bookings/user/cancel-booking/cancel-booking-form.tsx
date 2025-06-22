"use client";

import { Button } from "../../../ui/button";
import { Label } from "../../../ui/label";
import { Textarea } from "../../../ui/textarea";
import { useState } from "react";
import { getBookingType } from "@/types";

const CancelBookingForm = ({
  booking,
  onConfirmCancellation,
}: {
  booking: getBookingType;
  onConfirmCancellation: (cancellationReason: string) => void; // Type the prop
}) => {
  const [cancellationReason, setCancellationReason] = useState("");

  const handleSubmit = () => {
    if (cancellationReason.trim()) {
      onConfirmCancellation(cancellationReason);
    }
  };

  return (
    <div className="space-y-4">
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-medium text-gray-900 mb-2">{booking.cabinName}</h4>
        <div className="text-sm text-gray-600">
          <div className="space-y-2">
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
              {new Date(booking.checkOutDate).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
              {" - "}
              {booking.checkOutTime}
            </div>
            <div>
              <p className="text-sm text-gray-600">Total: ${booking.total}</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Label htmlFor="cancellation-reason">Reason for Cancellation </Label>
        <Textarea
          id="cancellation-reason"
          placeholder="Please tell us why you're cancelling this booking..."
          value={cancellationReason}
          onChange={(e) => setCancellationReason(e.target.value)}
          rows={4}
          className="mt-1"
        />
      </div>

      <div className="flex justify-end space-x-2 pt-4">
        <Button
          variant="destructive"
          disabled={!cancellationReason.trim()}
          onClick={handleSubmit} // Handle form submission
        >
          Confirm Cancellation
        </Button>
      </div>
    </div>
  );
};

export default CancelBookingForm;
