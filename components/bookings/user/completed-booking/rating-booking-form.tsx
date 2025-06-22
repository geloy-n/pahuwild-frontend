"use client";
import { addReview } from "@/actions/review-actions";
import StarRating from "@/components/shared/star-rating";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { getBookingType } from "@/types";
import { Label } from "@radix-ui/react-label";
import { useActionState, useState } from "react";

const RatingBookingForm = ({ booking }: { booking: getBookingType }) => {
  const [review, setReview] = useState("");
  const [rating, setRating] = useState<number>(0);
  const [state, formAction] = useActionState(addReview, { error: "" });

  const handleSetRating = (newRating: number) => {
    setRating(newRating);
  };

  return (
    <div className="space-y-4">
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-medium text-gray-900 mb-2">{booking.cabinName}</h4>
        <div className="text-sm text-gray-600">
          <div>
            Stayed:{" "}
            {new Date(booking.checkInDate).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}{" "}
            To:{" "}
            {new Date(booking.checkOutDate).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </div>
        </div>
      </div>

      <form action={formAction}>
        <input
          type="text"
          name="bookingId"
          id="bookingId"
          defaultValue={booking.id}
          hidden
        />

        <input
          type="text"
          name="cabinId"
          id="cabinId"
          defaultValue={booking.cabinId}
          hidden
        />

        <div>
          <Label>Rate Your Stay</Label>

          <StarRating
            maxRating={5}
            rating={rating}
            onSetRating={handleSetRating}
          />
          <input
            type="text"
            value={rating}
            name="rating"
            id="rating"
            readOnly
            hidden
          />
        </div>

        <div>
          <Label htmlFor="comment">Tell us about your experience</Label>
          <Textarea
            id="comment"
            name="comment"
            placeholder="What did you love about this cabin? Any tips for future guests?"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            rows={4}
            className="mt-1"
          />
        </div>

        <div className="mt-2 mb-2">
          {state.error && (
            <p className="text-sm text-red-500 text-center">{state.error}</p>
          )}
        </div>

        <div className="flex justify-end space-x-2 pt-4">
          <Button
            className="bg-amber-700 hover:bg-amber-600"
            disabled={!review.trim() || rating === 0}
          >
            Submit Review
          </Button>
        </div>
      </form>
    </div>
  );
};

export default RatingBookingForm;
