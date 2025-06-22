import { Badge } from "@/components/ui/badge";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Cabin } from "@/types";
import { DollarSignIcon, MapPinIcon, UsersIcon } from "lucide-react";
import Image from "next/image";
import EditCabinButton from "./edit-cabin-button";
import DeleteCabinButton from "./delete-cabin";
import { API_URL } from "@/lib/api";

const ManageCabinCards = ({ cabins }: { cabins: Cabin[] }) => {
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:px-0">
      {cabins.map((cabin) => (
        <Card key={cabin.id} className="overflow-hidden pt-0">
          <div className="relative h-48">
            <Image
              src={`${API_URL}/cabins/${cabin.slug}.jpg?${Date.now()}`}
              alt={cabin.name}
              fill
              priority={true}
            />
            {cabin.isAvailable ? (
              <Badge className="absolute top-2 right-2 bg-green-600 hover:bg-green-700">
                Available
              </Badge>
            ) : (
              <Badge className="absolute top-2 right-2 bg-red-600 hover:bg-red-700">
                Unavailable
              </Badge>
            )}
          </div>

          <CardHeader>
            <CardTitle className="text-xl">{cabin.name}</CardTitle>
            <CardDescription className="line-clamp-2">
              {cabin.description}
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center text-sm text-gray-600">
                <MapPinIcon className="h-4 w-4 mr-1" />
                {cabin.location}
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <UsersIcon className="h-4 w-4 mr-1" />
                {cabin.guests} guests
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <DollarSignIcon className="h-3 w-3 text-green-600" />
                <span className="text-md font-bold text-green-600">
                  {cabin.price}
                </span>
                <span className="text-gray-500 ml-1">/ night</span>
              </div>

              <div className="flex gap-2">
                <DeleteCabinButton cabinId={cabin.id} />

                <EditCabinButton cabinId={cabin.id} />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ManageCabinCards;
