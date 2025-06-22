import { CalendarIcon, MapPinIcon, UsersIcon } from "lucide-react";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Badge } from "../ui/badge";
import { Cabin } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { API_URL } from "@/lib/api";

const CabinCard = ({ cabin }: { cabin: Cabin }) => {
  return (
    <Card className="w-full max-w-[350px] overflow-hidden transition-all duration-300 hover:shadow-lg bg-white border-2 border-amber-100">
      <div className="relative h-48 w-full overflow-hidden rounded-tl-2xl rounded-tr-2xl -mt-6.5">
        <Image
          src={`${API_URL}/cabins/${cabin.slug}.jpg?${Date.now()}`}
          alt={cabin.name}
          fill
          priority={true}
        />
        {/* src={`${API_URL}/cabins/${cabin.slug}.jpg`} */}
        {cabin.isAvailable ? (
          <Badge className="absolute right-2 top-2 bg-green-600 hover:bg-green-700">
            Available
          </Badge>
        ) : (
          <Badge className="absolute right-2 top-2 bg-red-600 hover:bg-red-700">
            Unavailable
          </Badge>
        )}
      </div>

      <CardHeader>
        <CardTitle className="text-xl font-bold text-amber-900">
          {cabin.name}
        </CardTitle>
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center">
            <MapPinIcon className="mr-1 h-4 w-4" />
            <span>{cabin.location}</span>
          </div>
          <div className="flex items-center">
            <UsersIcon className="mr-1 h-4 w-4" />
            <span>Up to {cabin.guests} guests</span>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <CardDescription className="line-clamp-2 text-gray-600">
          {cabin.description}
        </CardDescription>
      </CardContent>

      <CardFooter className="flex items-center justify-between border-t border-amber-100">
        <div className="flex items-center">
          <CalendarIcon className="mr-1 h-4 w-4 text-amber-700" />
          <span className="font-semibold text-amber-900">${cabin.price}</span>
          <span className="text-gray-500 text-sm"> / night</span>
        </div>
        <Button
          variant="outline"
          className="border-amber-700 text-amber-800 hover:bg-amber-50 hover:text-amber-900 cursor-pointer"
        >
          <Link href={`/cabin/${cabin.slug}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CabinCard;
