"use client";
import {useProduct} from "@/components/context/ProductContext";
import {Button} from "@/components/ui/button";
import Image from "next/image";
import {useRouter} from "next/navigation";

import {useState} from "react";

const ProductDetails = ({product}) => {
     const [quantity, setQuantity] = useState(1);
     const {setProduct} = useProduct();
     const router = useRouter();

     if (!product) {
          return (
               <h1 className="text-center text-2xl mt-10">
                    Product not found!
               </h1>
          );
     }

     const increaseQuantity = () => {
          setQuantity((prevQuantity) => prevQuantity + 1);
     };

     const decreaseQuantity = () => {
          if (quantity > 1) {
               setQuantity((prevQuantity) => prevQuantity - 1);
          }
     };

     //   const handleBuyNow = () => {
     //     alert(`You have purchased ${quantity} of ${product.name}!`);
     //   };
     const handleBuyNow = () => {
          setProduct({...product, quantity}); // Set the product in context
          router.push("/order"); // Navigate to the billing details page
     };

     return (
          <div className="p-8">
               <div className="grid grid-cols-2 gap-10 w-full max-w-[60%] mx-auto">
                    {/* Left Section - Product Image */}
                    <div>
                         <Image
                              src={product.image}
                              alt={product.name}
                              className="w-[80%] m-auto object-cover rounded-md mb-4"
                              width={1200}
                              height={1200}
                         />
                    </div>

                    {/* Right Section - Product Details */}
                    <div className="space-y-5">
                         <h1 className="text-start text-2xl font-bold">
                              {product.name}
                         </h1>
                         <p className="text-2xl font-bold text-white">
                              ${product.price}
                         </p>
                         <p className="text-white">{product.description}</p>
                         <hr />

                         <div className=" grid grid-cols-2 items-center pt-10 ">
                              {/* Quantity Selector */}

                              <div className="flex items-center space-x-4 border border-white w-[124px] h-10">
                                   <button
                                        className="px-4 w-full h-full border-r text-white hover:bg-white hover:text-black"
                                        onClick={decreaseQuantity}>
                                        -
                                   </button>
                                   <span className="text-xl">{quantity}</span>
                                   <button
                                        className="px-4 h-full  border-l text-white hover:bg-white hover:text-black"
                                        onClick={increaseQuantity}>
                                        +
                                   </button>
                              </div>

                              {/* Buy Button */}
                              <div className="">
                                   <Button
                                        className="w-full  py-2 bg-white text-black hover:text-white"
                                        onClick={handleBuyNow}>
                                        Buy Now
                                   </Button>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default ProductDetails;
