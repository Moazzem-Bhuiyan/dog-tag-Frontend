import Link from "next/link";
import { products } from "../../../utils/ProductData";
import ProductCard from "@/components/product/ProductCard";

const HomePageProduct = () => {
  const featuredProducts = products.slice(0, 6);

  return (
    <div className="p-8">
      <div className="mt-6  w-full max-w-[60%] mx-auto flex justify-between">
        <h1 className="text-3xl font-bold mb-6">Featured Products</h1>
        <Link href="/AllProducts">
          <button className="px-6 py-2 text-white">See All</button>
        </Link>
      </div>
      <div className=" w-full max-w-[60%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomePageProduct;
