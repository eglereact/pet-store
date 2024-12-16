"use client";

import FormContainer from "../form/FormContainer";
import { SubmitButton } from "../form/Buttons";
import { addToCartAction } from "@/utils/actions";
import { useAuth } from "@clerk/nextjs";
import { ProductSignInButton } from "../form/Buttons";
import { formatCurrency } from "@/utils/format";
import { FaShoppingCart } from "react-icons/fa";

function AddToCartFromProducts({
  productId,
  price,
}: {
  productId: string;
  price: number;
}) {
  const { userId } = useAuth();
  return (
    <div>
      {userId ? (
        <FormContainer action={addToCartAction}>
          <input type="hidden" name="productId" value={productId} />
          <input type="hidden" name="amount" value={1} />
          <div className="relative w-full rounded-full border-2 border-gray-400 shadow-none hover:border-gray-900 hover:bg-transparent transition-all duration-300 group ">
            <SubmitButton
              text={`add to cart - ${formatCurrency(price)}`}
              className="w-full bg-transparent text-gray-900 hover:bg-transparent shadow-none"
            />
            {/* Icon appears on hover */}
            <FaShoppingCart
              className="absolute left-9 top-1/2 transform -translate-y-1/2 text-gray-400 opacity-0 group-hover:opacity-100 group-hover:text-gray-900 transition-opacity duration-300"
              size={20}
            />
          </div>
        </FormContainer>
      ) : (
        <div className="relative w-full rounded-full border-2 border-gray-400 shadow-none hover:border-gray-900 hover:bg-transparent transition-all duration-300 group ">
          <ProductSignInButton
            text={`add to cart - ${formatCurrency(price)}`}
          />
          <FaShoppingCart
            className="absolute left-9 top-1/2 transform -translate-y-1/2 text-gray-400 opacity-0 group-hover:opacity-100 group-hover:text-gray-900 transition-opacity duration-300"
            size={20}
          />
        </div>
      )}
    </div>
  );
}
export default AddToCartFromProducts;
