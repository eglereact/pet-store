import { fetchProductRating } from "@/utils/actions";
import { FaStar } from "react-icons/fa";
import RatingInAllProducts from "../products/RatingInAllProducts";

async function ProductRating({
  productId,
  type,
}: {
  productId: string;
  type?: string;
}) {
  const { rating, count } = await fetchProductRating(productId);

  const className = `flex gap-1 items-center text-md mt-1 mb-4`;
  const countValue = `(${count}) reviews`;

  if (type === "all") {
    return (
      <span className={className}>
        <RatingInAllProducts rating={+rating} />({count})
      </span>
    );
  }

  return (
    <span className={className}>
      <FaStar className="w-3 h-3" />
      {rating} {countValue}
    </span>
  );
}
export default ProductRating;
