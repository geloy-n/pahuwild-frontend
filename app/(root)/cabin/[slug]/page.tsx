import { getCabinBySlug } from "@/actions/cabin-action";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPinIcon, UsersIcon } from "lucide-react";
import Image from "next/image";
import Amenities from "../../../../components/cabins/amenities";
import ConfirmDetails from "@/components/bookings/user/create-booking";
import BackButton from "@/components/shared/back-button";
import StarRatingDisplay from "@/components/shared/star-rating-display";
import Reviews from "@/components/reviews";
import { API_URL } from "@/lib/api";

const CabinDetailsPage = async (props: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await props.params;

  const cabin = await getCabinBySlug(slug);

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-4">
        <BackButton />
      </div>

      <div className="container mx-auto px-4 mb-8 space-y-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="relative h-64 lg:h-155 overflow-hidden rounded-lg">
              <Image
                src={`${API_URL}/cabins/${cabin.slug}.jpg?${Date.now()}`}
                fill
                alt={cabin.name}
                priority={true}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">
                  {cabin.name}
                </h1>
                {cabin.isAvailable ? (
                  <Badge className="bg-green-600 hover:bg-green-700">
                    Available
                  </Badge>
                ) : (
                  <Badge className="bg-red-600 hover:bg-red-700">
                    Unavailable
                  </Badge>
                )}
              </div>

              <div className="flex items-center space-x-4 text-gray-600">
                <div className="flex items-center">
                  <MapPinIcon className="h-5 w-5 mr-1" />
                  <span>{cabin.location}</span>
                </div>
                <div className="flex items-center">
                  <UsersIcon className="h-5 w-5 mr-1" />
                  <span>Up to {cabin.guests} guests</span>
                </div>
              </div>

              <div className="flex items-center">
                <span className="text-gray-600 ml-2">
                  ({cabin.numReviews} reviews)
                </span>
              </div>

              <p className="text-gray-600 leading-relaxed">
                {cabin.description}
              </p>

              <Amenities cabin={cabin} />
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-amber-900">
                    ${cabin.price}
                    <span className="text-base font-normal text-gray-500">
                      {" "}
                      / night
                    </span>
                  </span>

                  {cabin.numReviews !== 0 ? (
                    <StarRatingDisplay rating={cabin.rating} />
                  ) : (
                    <span className="text-gray-500">No reviews</span>
                  )}
                </CardTitle>

                <ConfirmDetails cabin={cabin} />
              </CardHeader>
            </Card>
          </div>
        </div>

        {cabin.numReviews !== 0 && <Reviews cabin={cabin} />}
      </div>
    </div>
  );
};

export default CabinDetailsPage;
