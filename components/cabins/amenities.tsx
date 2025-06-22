import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cabin } from "@/types";
import { BedIcon, Car, CoffeeIcon, TreePineIcon, WifiIcon } from "lucide-react";

const Amenities = ({ cabin }: { cabin: Cabin }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <TreePineIcon className="h-6 w-6 mr-2 text-green-600" />
          Amenities & Features
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {/* Wifi */}
          {cabin.wifi && (
            <div className="flex items-center justify-start space-x-2">
              <div className="text-green-600">
                <WifiIcon className="h-5 w-5" />
              </div>
              <div className="text-gray-700 text-sm">Wifi</div>
            </div>
          )}

          {/* Fireplace */}
          {cabin.fireplace && (
            <div className="flex items-center justify-start space-x-2">
              <div className="text-green-600">
                <BedIcon className="h-5 w-5" />
              </div>
              <div className="text-gray-700 text-sm">Fireplace</div>
            </div>
          )}

          {/* Hot Tub */}
          {cabin.hotTub && (
            <div className="flex items-center justify-start space-x-2">
              <div className="text-green-600">
                <BedIcon className="h-5 w-5" />
              </div>
              <div className="text-gray-700 text-sm">Hot Tub</div>
            </div>
          )}

          {/* Kitchen */}
          {cabin.kitchen && (
            <div className="flex items-center justify-start space-x-2">
              <div className="text-green-600">
                <CoffeeIcon className="h-5 w-5" />
              </div>
              <div className="text-gray-700 text-sm">Kitchen</div>
            </div>
          )}

          {/* Parking */}
          {cabin.parking && (
            <div className="flex items-center justify-start space-x-2">
              <div className="text-green-600">
                <Car className="h-5 w-5" />
              </div>
              <div className="text-gray-700 text-sm">Parking</div>
            </div>
          )}

          {/* Hiking */}
          {cabin.hiking && (
            <div className="flex items-center justify-start space-x-2">
              <div className="text-green-600">
                <BedIcon className="h-5 w-5" />
              </div>
              <div className="text-gray-700 text-sm">Hiking</div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default Amenities;
