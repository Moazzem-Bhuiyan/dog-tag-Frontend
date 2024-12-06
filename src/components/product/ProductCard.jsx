import Image from "next/image";
import Link from "next/link";

const ProductCard = ({product}) => {
     return (
          <div className="w-[350px] p-4 rounded">
               <Link href={`/ProductDetails/${product._id}`}>
                    <Image
                         src={product.images[0]?.url || "/placeholder.png"}
                         alt="Product img"
                         className="w-full h-auto object-cover rounded-md"
                         width={1200}
                         height={1200}
                    />
                    <h2 className="text-xl font-semibold mt-4">
                         {product.name}
                    </h2>
                    <p className="text-white">£ {product.price}</p>
               </Link>
          </div>
     );
};

export default ProductCard;
