import { Button } from "../ui/button";

function AddToCart({ productId }: { productId: string }) {
  return <Button className="capitalize mt-8">Add To Cart {productId}</Button>;
}
export default AddToCart;
