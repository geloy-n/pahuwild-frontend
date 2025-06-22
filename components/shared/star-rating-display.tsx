import { StarIcon } from "lucide-react";

const StarRatingDisplay = ({ rating }: { rating: number | string }) => {
  const numericRating = parseFloat(rating as string);

  if (isNaN(numericRating)) {
    return <div className="flex items-center">No rating available</div>;
  }

  const fullStars = Math.floor(numericRating);
  const hasHalfStar = numericRating % 1 >= 0.5;
  const totalStars = 5;

  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <svg
        key={`full-star-${i}`} // Add unique key for each full star
        width="20"
        height="20"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className="mr-1"
      >
        <path
          d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
          fill="#D59C38"
          stroke="#D59C38"
          strokeWidth="2"
        />
      </svg>
    );
  }

  if (hasHalfStar) {
    stars.push(
      <svg
        key="half-star" // Add unique key for the half star
        width="20"
        height="20"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className="mr-1"
      >
        <defs>
          <mask id="half-star-mask">
            <rect x="0" y="0" width="50%" height="100%" fill="white" />
          </mask>
        </defs>
        <path
          d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
          fill="#D59C38"
          mask="url(#half-star-mask)"
          stroke="#D59C38"
          strokeWidth="2"
        />
      </svg>
    );
  }

  for (let i = fullStars + (hasHalfStar ? 1 : 0); i < totalStars; i++) {
    stars.push(
      <StarIcon
        key={`empty-${i}`}
        className="h-5 w-5 fill-gray-300 text-gray-300 mr-1"
      />
    );
  }

  return (
    <div className="flex items-center">
      <span className="font-semibold mr-2">{numericRating.toFixed(1)}</span>
      {stars}
    </div>
  );
};

export default StarRatingDisplay;
