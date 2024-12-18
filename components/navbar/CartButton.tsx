import Link from "next/link";
import { Button } from "../ui/button";
import { FaCartShopping } from "react-icons/fa6";
import { fetchCartItems } from "@/utils/actions";

const CartButton = async () => {
  const numItemsInCart = await fetchCartItems();
  return (
    <Button
      asChild
      variant="ghost"
      className="flex justify-center items-center relative hover:bg-transparent hover:text-red-500"
    >
      <Link href="/cart">
        <FaCartShopping size={25} />
        <span className="absolute -top-1 right-1 bg-red-500 flex font-bold text-white rounded-full h-5 w-5 items-center justify-center text-sm">
          {numItemsInCart}
        </span>
      </Link>
    </Button>
  );
};
export default CartButton;
