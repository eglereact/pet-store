import { IoIosStarHalf, IoIosStar, IoIosStarOutline } from "react-icons/io";

function RatingInAllProducts({ rating }: { rating: number }) {
  const stars = Array.from({ length: 5 }, (_, i) => {
    if (rating >= i + 1) return "full"; // Full star
    if (rating > i && rating < i + 1) return "half"; // Half star
    return "empty"; // Empty star
  });
  return (
    <div className="flex items-center gap-x-1">
      {stars.map((star, i) => {
        const className = "w-4 h-4 text-gray-900";
        return star === "full" ? (
          <IoIosStar key={i} className={className} />
        ) : star === "half" ? (
          <IoIosStarHalf key={i} className={className} />
        ) : (
          <IoIosStarOutline key={i} className="w-4 h-4 text-gray-300" />
        );
      })}
    </div>
  );
}
export default RatingInAllProducts;
