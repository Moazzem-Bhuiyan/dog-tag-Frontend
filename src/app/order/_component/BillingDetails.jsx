"use client";

import {useProduct} from "@/components/context/ProductContext";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import Image from "next/image";
import React from "react";
import {useForm} from "react-hook-form";

const BillingDetails = () => {
     const {product} = useProduct();
     const {
          register,
          handleSubmit,
          formState: {errors},
     } = useForm();

     const onSubmit = (data) => {
          const billingDetails = {
               ...data,
               productName: product.name,
               productQuantity: product.quantity,
               totalPrice: product.price * product.quantity,
          };

          console.log("Billing Details Submitted:", billingDetails);
          alert("Payment successful! Billing details submitted.");
     };

     if (!product) {
          return <p>Loading product details...</p>;
     }

     return (
          <div className="p-8 grid grid-cols-2 gap-16 w-full max-w-[60%] mx-auto">
               {/* Right Section: Billing Form */}
               <div>
                    <h1 className="text-2xl font-bold mb-6">Billing Details</h1>
                    <form
                         onSubmit={handleSubmit(onSubmit)}
                         className="space-y-4">
                         <div>
                              <label className="block mb-1">First Name</label>
                              <Input
                                   {...register("firstName", {
                                        required: "First Name is required",
                                   })}
                                   className="w-full p-2 border rounded"
                                   placeholder="First Name"
                              />
                              {errors.firstName && (
                                   <span className="text-red-500 text-sm">
                                        {errors.firstName.message}
                                   </span>
                              )}
                         </div>

                         <div>
                              <label className="block mb-1">
                                   Street Address
                              </label>
                              <Input
                                   {...register("streetAddress", {
                                        required: "Street Address is required",
                                   })}
                                   className="w-full p-2 border rounded"
                                   placeholder="Street Address"
                              />
                              {errors.streetAddress && (
                                   <span className="text-red-500 text-sm">
                                        {errors.streetAddress.message}
                                   </span>
                              )}
                         </div>

                         <div>
                              <label className="block mb-1">Town/City</label>
                              <Input
                                   {...register("city", {
                                        required: "City is required",
                                   })}
                                   className="w-full p-2 border rounded"
                                   placeholder="Town/City"
                              />
                              {errors.city && (
                                   <span className="text-red-500 text-sm">
                                        {errors.city.message}
                                   </span>
                              )}
                         </div>

                         <div>
                              <label className="block mb-1">Postal Code</label>
                              <Input
                                   {...register("postalCode", {
                                        required: "Postal Code is required",
                                   })}
                                   className="w-full p-2 border rounded"
                                   placeholder="Postal Code"
                              />
                              {errors.postalCode && (
                                   <span className="text-red-500 text-sm">
                                        {errors.postalCode.message}
                                   </span>
                              )}
                         </div>

                         <div>
                              <label className="block mb-1">Phone Number</label>
                              <Input
                                   {...register("phoneNumber", {
                                        required: "Phone Number is required",
                                   })}
                                   className="w-full p-2 border rounded"
                                   placeholder="Phone Number"
                              />
                              {errors.phoneNumber && (
                                   <span className="text-red-500 text-sm">
                                        {errors.phoneNumber.message}
                                   </span>
                              )}
                         </div>

                         <div>
                              <label className="block mb-1">
                                   Email Address
                              </label>
                              <Input
                                   type="email"
                                   {...register("email", {
                                        required: "Email Address is required",
                                   })}
                                   className="w-full p-2 border rounded"
                                   placeholder="Email Address"
                              />
                              {errors.email && (
                                   <span className="text-red-500 text-sm">
                                        {errors.email.message}
                                   </span>
                              )}
                         </div>

                         <Button
                              type="submit"
                              className="w-full bg-black text-white py-2 rounded hover:bg-gray-800">
                              Pay Now
                         </Button>
                    </form>
               </div>

               {/* Left Section: Billing Details */}
               <div className=" mt-24">
                    <div className=" flex gap-5">
                         <Image
                              src={product.image}
                              alt="product img"
                              className="w-40 rounded-md"
                              width={1200}
                              height={1200}
                         />
                         <p className="mt-4">
                              <strong>Product:</strong> {product.name}
                         </p>
                    </div>

                    <div className=" flex justify-between items-center">
                         <h1>Subtotal :</h1>
                         <h2>${product.price * product.quantity}</h2>
                    </div>
                    <hr />
                    
                    <div className=" flex justify-between items-center">
                         <h1>Shipping :</h1>
                         <h2>Free</h2>
                    </div>
                    <hr />

                    <div className=" flex justify-between items-center">
                         <h1>Total :</h1>
                         <p>${product.price * product.quantity}</p>
                    </div>
               </div>
          </div>
     );
};

export default BillingDetails;