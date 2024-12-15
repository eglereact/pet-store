import { formatCurrency } from "@/utils/format";
import { Product } from "@prisma/client";
import Link from "next/link";
import Image from "next/image";
import FavoriteToggleButton from "./FavoriteToggleButton";
import ProductRating from "../single-product/ProductRating";
import AddToCartFromProducts from "./AddToCartFromProducts";

const ProductsGrid = ({ products }: { products: Product[] }) => {
  return (
    <div className="pt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
      {products.map((product) => {
        const { name, price, image } = product;
        const productId = product.id;
        const dollarsAmount = formatCurrency(price);
        return (
          <>
            {/* add group in classname if you want all hover effects at the same time */}
            <article key={productId} className="relative">
              <Link href={`/products/${productId}`}>
                {/*  remove group from here */}
                <div className="group relative h-64 md:h-80 overflow-hidden">
                  <Image
                    src={image}
                    alt={name}
                    fill
                    sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw "
                    priority
                    className="rounded w-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </Link>
              <div className="mt-4 text-left text-gray-900">
                <p className="mt-2">{dollarsAmount}</p>
                <Link
                  href={`/products/${productId}`}
                  className="text-lg capitalize font-bold relative group"
                >
                  <span className="relative">
                    {name}
                    <span className="absolute left-0 bottom-0 w-0 group-hover:w-full transition-all duration-500 h-[1px] bg-gray-900 "></span>
                  </span>
                </Link>
              </div>
              <ProductRating productId={productId} type="all" />
              <div className="absolute top-4 right-4 z-5">
                <FavoriteToggleButton productId={productId} />
              </div>
              <AddToCartFromProducts productId={productId} price={price} />
            </article>
          </>
        );
      })}
    </div>
  );
};
export default ProductsGrid;
