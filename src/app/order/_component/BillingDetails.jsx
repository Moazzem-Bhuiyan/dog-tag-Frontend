"use client";

import {ProductContext, useProducts} from "@/components/context/ProductContext";
import {Button} from "@/components/ui/button";

import {Input} from "@/components/ui/input";

import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";

import Image from "next/image";
import React, {useContext} from "react";
import {useForm} from "react-hook-form";

const BillingDetails = () => {
     const {cardProducts} = useContext(ProductContext);

     console.log("product from context", cardProducts);

     // Product details extract

     const productDetails = cardProducts;

     const {
          register: registerItemTags,
          handleSubmit: handleSubmitItemTags,
          formState: {errors: errorsItemTags},
     } = useForm();

     const {
          register: registerMedicalTags,
          handleSubmit: handleSubmitMedicalTags,
          formState: {errors: errorsMedicalTags},
     } = useForm();

     const onSubmitItemTags = (data) => {
          // Handle submission for Item Tags form
          console.log("Item Tags Submitted:", data);
     };

     const onSubmitMedicalTags = (data) => {
          // Handle submission for Medical Tags form
          console.log("Medical Tags Submitted:", data);
     };

     if (!productDetails) {
          return <p>Loading Billing details...</p>;
     }

     const subtotal = productDetails?.price * (productDetails?.quantity || 1);

     console.log("quantity", productDetails?.quantity);

     const total = subtotal;

     const domain = process.env.NEXT_PUBLIC_IMAGE_DOMAIN;

     return (
          <div className="p-8 grid grid-cols-2 gap-16 w-full max-w-[60%] mx-auto">
               {/* Right Section: Billing Form */}

               <Tabs defaultValue="itemstag" className="w-[400px]">
                    <TabsList className="grid w-full grid-cols-2">
                         <TabsTrigger value="itemstag">Item Tags</TabsTrigger>
                         <TabsTrigger value="medical">
                              Medical Tags
                         </TabsTrigger>
                    </TabsList>

                    <TabsContent value="itemstag">
                         <form
                              onSubmit={handleSubmitItemTags(onSubmitItemTags)}
                              className="space-y-4">
                              <div>
                                   <label className="block mb-1">
                                        First Name
                                   </label>
                                   <Input
                                        {...registerItemTags("firstName", {
                                             required: "First Name is required",
                                        })}
                                        className="w-full p-2 border rounded"
                                        placeholder="First Name"
                                   />
                                   {errorsItemTags.firstName && (
                                        <span className="text-red-500 text-sm">
                                             {errorsItemTags.firstName.message}
                                        </span>
                                   )}
                              </div>

                              <div>
                                   <label className="block mb-1">Country</label>
                                   <Input
                                        {...registerItemTags("country", {
                                             required:
                                                  "Country Name is required",
                                        })}
                                        className="w-full p-2 border rounded"
                                        placeholder="Country Name"
                                   />
                                   {errorsItemTags.firstName && (
                                        <span className="text-red-500 text-sm">
                                             {
                                                  errorsItemTags.countryname
                                                       .message
                                             }
                                        </span>
                                   )}
                              </div>


                              <div>
                                   <label className="block mb-1">Country</label>
                                   <Input
                                   type="number"
                                        {...registerItemTags("phonenumber", {
                                             required:
                                                  "Phone Number is required",
                                        })}
                                        className="w-full p-2 border rounded"
                                        placeholder="Phone Number"
                                   />
                                   {errorsItemTags.firstName && (
                                        <span className="text-red-500 text-sm">
                                             {
                                                  errorsItemTags.phonenumber
                                                       .message
                                             }
                                        </span>
                                   )}
                              </div>

                              <div>
                                   <label className="block mb-1">Email</label>
                                   <Input
                                   type="email"
                                        {...registerItemTags("email", {
                                             required:
                                                 " Email is required",
                                        })}
                                        className="w-full p-2 border rounded"
                                        placeholder="Email"
                                   />
                                   {errorsItemTags.firstName && (
                                        <span className="text-red-500 text-sm">
                                             {
                                                  errorsItemTags.Email
                                                       .message
                                             }
                                        </span>
                                   )}
                              </div>

                             
                             

                              {/* Other fields for Item Tags form... */}

                              <Button
                                   type="submit"
                                   className="w-full bg-black text-white py-2 rounded hover:bg-gray-800">
                                   Pay Now
                              </Button>
                         </form>
                    </TabsContent>

                    <TabsContent value="medical">
                         <form
                              onSubmit={handleSubmitMedicalTags(
                                   onSubmitMedicalTags,
                              )}
                              className="space-y-4">
                              <div>
                                   <label className="block mb-1">
                                        First Name
                                   </label>
                                   <Input
                                        {...registerMedicalTags("firstName", {
                                             required: "First Name is required",
                                        })}
                                        className="w-full p-2 border rounded"
                                        placeholder="First Name"
                                   />
                                   {errorsMedicalTags.firstName && (
                                        <span className="text-red-500 text-sm">
                                             {
                                                  errorsMedicalTags.firstName
                                                       .message
                                             }
                                        </span>
                                   )}
                              </div>

                              {/* Other fields for Medical Tags form... */}

                              <Button
                                   type="submit"
                                   className="w-full bg-black text-white py-2 rounded hover:bg-gray-800">
                                   Pay Now
                              </Button>
                         </form>
                    </TabsContent>
               </Tabs>

               {/* Left Section: Product Details */}
               <div className="mt-24">
                    <div className="flex gap-5">
                         <Image
                              src={`${domain}${
                                   productDetails?.image || "/placeholder.png"
                              }`}
                              alt={`Image of ${productDetails?.name}`}
                              className="w-40 h-auto object-cover rounded-md"
                              width={1200}
                              height={1200}
                         />
                         <p className="mt-4">
                              <strong>Product:</strong> {productDetails?.name}
                         </p>
                    </div>

                    <div className="flex justify-between items-center">
                         <h1>Subtotal :</h1>
                         <h2>${subtotal}</h2>
                    </div>
                    <hr />

                    <div className="flex justify-between items-center">
                         <h1>Shipping :</h1>
                         <h2>Free</h2>
                    </div>
                    <hr />

                    <div className="flex justify-between items-center">
                         <h1>Total :</h1>
                         <p>${total}</p>
                    </div>
               </div>
          </div>
     );
};

export default BillingDetails;
