import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const TimeSelector = () => {
  return (
    <>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select time" />
      </SelectTrigger>
      <SelectContent>
        {[
          "12:00 AM",
          "01:00 AM",
          "02:00 AM",
          "03:00 AM",
          "04:00 AM",
          "05:00 AM",
          "06:00 AM",
          "07:00 AM",
          "08:00 AM",
          "09:00 AM",
          "10:00 AM",
          "11:00 AM",
          "12:00 PM",
          "01:00 PM",
          "02:00 PM",
          "03:00 PM",
        ].map((time) => (
          <SelectItem key={time} value={time}>
            {time}
          </SelectItem>
        ))}
      </SelectContent>
    </>
  );
};

export default TimeSelector;
