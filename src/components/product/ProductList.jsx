import ProductCard from "./ProductCard";

const ProductList = ({products}) => {
     return (
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 gap-20 mx-auto">
               {products.map((product) => (
                    <ProductCard key={product._id} product={product} />
               ))}
          </div>
     );
};

export default ProductList;
