"use client";
import { useState } from "react";
import FormContainer from "../form/FormContainer";
import { SubmitButton } from "../form/Buttons";
import { addToCartAction } from "@/utils/actions";
import { useAuth } from "@clerk/nextjs";
import { ProductSignInButton } from "../form/Buttons";
import { formatCurrency } from "@/utils/format";

function AddToCartFromProducts({
  productId,
  price,
}: {
  productId: string;
  price: number;
}) {
  const [amount, setAmount] = useState(1);
  const { userId } = useAuth();
  return (
    <div>
      {userId ? (
        <FormContainer action={addToCartAction}>
          <input type="hidden" name="productId" value={productId} />
          <input type="hidden" name="amount" value={amount} />
          <SubmitButton
            text={`add to cart - ${formatCurrency(price)}`}
            className="w-full bg-transparent text-gray-900 rounded-full"
          />
        </FormContainer>
      ) : (
        <ProductSignInButton text={`add to cart - ${formatCurrency(price)}`} />
      )}
    </div>
  );
}
export default AddToCartFromProducts;
