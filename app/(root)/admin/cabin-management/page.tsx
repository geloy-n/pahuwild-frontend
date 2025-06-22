import { getAllCabins } from "@/actions/cabin-action";
import BookingHeading from "@/components/bookings/boooking-heading";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import ManageCabinCards from "./manage-cabin-cards";
import AddCabinButton from "./add-cabin-Button";

const CabinManagement = async () => {
  const cabins = await getAllCabins();

  return (
    <div className="container min-h-screen mx-auto px-4 py-8">
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
      <div className="flex flex-wrap items-center justify-between mb-8">
        <div>
          <BookingHeading
            title="Manage Cabin"
            subTitle="Manage cabin details, pricing, and availability"
          />
        </div>
        <AddCabinButton />
      </div>
      <ManageCabinCards cabins={cabins} />
    </div>
  );
};

export default CabinManagement;
