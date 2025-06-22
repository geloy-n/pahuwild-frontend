import { Review } from "@/types";
import StarRatingDisplay from "../shared/star-rating-display";

const IndividualReview = ({ reviews }: { reviews: Review[] }) => {
  return (
    <div className="space-y-4">
      {reviews.map((review) => (
        <div key={review.id} className="border-b pb-4 last:border-b-0">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2">
              <span className="font-medium text-gray-900">
                {review.user.name}
              </span>
              <StarRatingDisplay rating={review.rating} />
            </div>
          </div>
          <p className="text-gray-700 text-sm">{review.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default IndividualReview;
