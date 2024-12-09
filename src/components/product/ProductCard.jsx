import Image from "next/image";
import Link from "next/link";

const ProductCard = ({product}) => {
     const domain = process.env.NEXT_PUBLIC_IMAGE_DOMAIN;

     // console.log("domain", domain)

     return (
          <div className=" md:w-[350px] p-4 rounded border">
               <Link href={`/ProductDetails/${product._id}`}>
                    <Image
                         src={
                              domain + product.images[0]?.url ||
                              "/placeholder.png"
                         }
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
