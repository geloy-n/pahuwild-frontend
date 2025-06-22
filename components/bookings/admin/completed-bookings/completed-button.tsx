import { getBookingType } from "@/types";
import { HandleStatusChangeType } from "@/types";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const CompletedButton = ({
  booking,
  handleStatusChange,
}: {
  booking: getBookingType;
  handleStatusChange: HandleStatusChangeType;
}) => {
  const handleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    await handleStatusChange(booking.id, "completed");
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger className="border h-8 rounded-md gap-1.5 px-3 font-medium rounded-sm bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50">
        Complete Booking
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Mark Booking as Completed</AlertDialogTitle>
          <AlertDialogDescription>
            Are you certain you want to complete this booking? This action
            cannot be undone
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleClick}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default CompletedButton;
