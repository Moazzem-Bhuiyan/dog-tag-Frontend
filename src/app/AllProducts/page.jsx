
import ProductList from "@/components/product/ProductList";
import { products } from "../../../utils/ProductData";


const AllProducts = () => {
  return (
    <div className="p-8 w-full max-w-[60%] mx-auto">
      <h1 className="text-3xl font-bold mb-6">All Products</h1>
      <ProductList products={products} />
    </div>
  );
};

export default AllProducts;
