"use client";

import {useProducts} from "@/components/context/ProductContext";
import ProductList from "@/components/product/ProductList";

const AllProducts = () => {
     const {products, loading, error} = useProducts();

     if (loading) return <div>Loading...</div>;
     if (error) return <div>{error}</div>;

     return (
          <div className="p-8 w-full max-w-[60%] mx-auto">
               <h1 className="text-3xl font-bold mb-6">All Products</h1>
               <ProductList products={products} />
          </div>
     );
};

export default AllProducts;
