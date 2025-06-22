import { StarIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Cabin } from "@/types";
import { getReviewsByCabinId } from "@/actions/review-actions";
import IndividualReview from "./individual-review";

const Reviews = async ({ cabin }: { cabin: Cabin }) => {
  const reviews = await getReviewsByCabinId(cabin.id);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <StarIcon className="h-6 w-6 mr-2 text-yellow-500 fill-yellow-500" />
          Recent Reviews
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <IndividualReview reviews={reviews} />
        </div>
      </CardContent>
    </Card>
  );
};

export default Reviews;
