"use client";
import { Select } from "@radix-ui/react-select";
import TimeSelector from "../../../cabins/time-selector";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useActionState, useEffect, useState } from "react";
import { Textarea } from "../../../ui/textarea";
import { Cabin } from "@/types";
import { Button } from "../../../ui/button";
import { bookCabin } from "@/actions/booking-actions";

const BookingDetailsForm = ({ cabin }: { cabin: Cabin }) => {
  const [nights, setNights] = useState<number>(1);
  const [state, formAction] = useActionState(bookCabin, { error: "" });
  const [checkInDate, setCheckInDate] = useState<Date>(new Date());
  const [checkOutDate, setCheckOutDate] = useState<Date>(
    new Date(Date.now() + 24 * 60 * 60 * 1000)
  );

  const [checkInTime, setCheckInTime] = useState("03:11 PM");
  const [checkOutTime, setCheckOutTime] = useState("03:11 PM");

  const total = cabin.price * nights + 75;

  const calculateNights = (checkIn: Date, checkOut: Date) => {
    const diffTime = Math.abs(checkOut.getTime() - checkIn.getTime());
    return Math.ceil(diffTime / (1000 * 3600 * 24));
  };

  useEffect(() => {
    if (checkInDate && checkOutDate) {
      setNights(calculateNights(checkInDate, checkOutDate));
    }
  }, [checkInDate, checkOutDate, setNights]);

  return (
    <>
      <div className="space-y-4">
        <div className="space-y-2 mb-6">
          <div className="flex justify-between text-sm">
            <span>
              ${cabin.price} x {nights} nights
            </span>
            <span>${cabin.price * nights}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Cleaning fee</span>
            <span>$50</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Service fee</span>
            <span>$25</span>
          </div>
          <hr />
          <div className="flex justify-between font-semibold text-lg">
            <span>Total</span>
            <span>${total}</span>
          </div>
        </div>
      </div>

      <form action={formAction}>
        <input
          type="text"
          name="cabinId"
          id="cabinId"
          defaultValue={cabin.id}
          hidden
        />

        <input
          type="number"
          name="nights"
          value={nights}
          onChange={(e) => setNights(Number(e.target.value))}
          readOnly
          hidden
        />

        <input
          type="text"
          name="total"
          id="total"
          defaultValue={total}
          hidden
        />

        {/* Check-in Date */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label
              htmlFor="modal-checkin-date"
              className="text-sm font-medium text-gray-700"
            >
              Check-In Date
            </Label>
            <div className="mt-1">
              <Input
                id="modal-checkin-date"
                name="checkInDate"
                type="date"
                value={
                  checkInDate ? checkInDate.toISOString().split("T")[0] : ""
                }
                onChange={(e) => setCheckInDate(new Date(e.target.value))}
                min={new Date().toISOString().split("T")[0]}
                className="w-full"
              />
            </div>
          </div>
          {/* Check-in Time */}
          <div>
            <Label
              htmlFor="modal-checkin-time"
              className="text-sm font-medium text-gray-700"
            >
              Check-In Time
            </Label>
            <div className="mt-1">
              <Select
                value={checkInTime}
                onValueChange={setCheckInTime}
                name="checkInTime"
              >
                <TimeSelector />
              </Select>
            </div>
          </div>
        </div>

        {/* Check-out Date */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label
              htmlFor="modal-checkout-date"
              className="text-sm font-medium text-gray-700"
            >
              Check-Out Date
            </Label>
            <div className="mt-1">
              <Input
                id="modal-checkout-date"
                name="checkOutDate"
                type="date"
                value={
                  checkOutDate ? checkOutDate.toISOString().split("T")[0] : ""
                }
                onChange={(e) => setCheckOutDate(new Date(e.target.value))}
                min={checkInDate ? checkInDate.toISOString().split("T")[0] : ""}
                className="w-full"
              />
            </div>
          </div>

          {/* Check-out Time */}
          <div>
            <Label
              htmlFor="modal-checkout-time"
              className="text-sm font-medium text-gray-700"
            >
              Check-Out Time
            </Label>
            <div className="mt-1">
              <Select
                value={checkOutTime}
                onValueChange={setCheckOutTime}
                name="checkOutTime"
              >
                <TimeSelector />
              </Select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-6">
          <div className="space-y-2">
            <Label htmlFor="firstName">First Name</Label>
            <Input id="firstName" name="firstName" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">Last Name</Label>
            <Input id="lastName" name="lastName" />
          </div>
        </div>

        <div className="space-y-2 mt-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" />
        </div>

        <div className="space-y-2 mt-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input id="phone" name="phoneNumber" type="tel" />
        </div>

        <div className="space-y-2 mt-2">
          <Label htmlFor="requests">Special Requests</Label>
          <Textarea
            id="requests"
            name="requests"
            placeholder="Any special requests or dietary requirements?"
            rows={3}
          />
        </div>

        <div className="mt-2 mb-2">
          {state.error && (
            <p className="text-sm text-red-500 text-center">{state.error}</p>
          )}
        </div>

        <Button className="w-full bg-green-600 hover:bg-green-700">
          Confirm Booking
        </Button>
      </form>
    </>
  );
};

export default BookingDetailsForm;
