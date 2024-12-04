import { products } from "../../../../utils/ProductData";
import ProductDetails from "../_component/DisplayDetails";


const ProductDetailsPage = async ({ params }) => {
  const { id } = await params; 

  const product = products.find((p) => p.id === parseInt(id));

  return <ProductDetails product={product} />;
};

export default ProductDetailsPage;
