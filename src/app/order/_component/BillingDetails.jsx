"use client";

import {ProductContext, useProducts} from "@/components/context/ProductContext";
import {Button} from "@/components/ui/button";

import {Input} from "@/components/ui/input";

import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import axios from "axios";

import Image from "next/image";
import {redirect} from "next/navigation";
import React, {useContext, useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import {toast} from "sonner";

const BillingDetails = () => {
     const {cardProducts} = useContext(ProductContext);

     // Product details extract

     const productDetails = cardProducts;

     const [selectTab, setSelectedTab] = useState("itemsTag");

     const defaultorderType = "regular";
     const orderType = selectTab;

     useEffect(() => {
          console.log("cardProduct from useEffect", cardProducts);
          if (!cardProducts) {
               redirect("/");
          }
     }, [cardProducts]);

     const {
          register: registerItemTags,
          handleSubmit: handleSubmitItemTags,
          formState: {errors: errorsItemTags},
     } = useForm();

     const {
          register: registerMedicalTags,
          handleSubmit: handleSubmitMedicalTags,
          formState: {errors: errorsMedicalTags},
          reset,
     } = useForm();

     const token = localStorage.getItem("accessToken");

     // items tags submit button and backend logic here :

     const onSubmitItemTags = async (data) => {
          // validation and backend logic here :
          const finalData = {...data, orderType};

          const formDataWithProductId = {
               billingDetails: finalData,

               orderType: defaultorderType,
               product: productDetails?.id,
               quantity: productDetails?.quantity,
               totalAmount: total,
          };

          const orderPaymentLoading = toast.loading("Order creating....");
          // create order api......
          try {
               const res = await axios.post(
                    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/orders`,
                    formDataWithProductId,
                    {
                         headers: {
                              Authorization: `Bearer ${token}`,
                         },
                    },
               );

               const orderId = await res.data?.data;

               // Payment api....
               try {
                    const res = await axios.post(
                         `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/payments/checkout`,
                         {
                              order: orderId,
                         },
                         {
                              headers: {
                                   Authorization: `Bearer ${token}`,
                              },
                         },
                    );

                    const paymentLink = await res?.data?.data;

                    if (!paymentLink) {
                         return toast.error("Payment failed", {
                              id: orderPaymentLoading,
                         });
                    }

                    toast.success("Order created successfully", {
                         id: orderPaymentLoading,
                    });

                    // Redirection: redirect to payment page

                    if (window !== undefined) {
                         window.location.href = paymentLink;
                    }
               } catch (error) {
                    console.error(error);
               }
          } catch (error) {
               console.error("Error:", error);
          }
     };

     // medicaltags submit button and backend logic

     const onSubmitMedicalTags = async (data) => {
          // validation and backend logic here :
          const finalData = {...data, orderType};

          const formDataWithProductId = {
               billingDetails: finalData,

               orderType: defaultorderType,
               product: productDetails?.id,
               quantity: productDetails?.quantity,
               totalAmount: total,
          };

          // const orderPaymentLoading = toast.loading("Order creating....");
          // create order api......
          const orderPaymentLoading = toast.loading("Order creating....");
          try {
               const res = await axios.post(
                    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/orders`,
                    formDataWithProductId,
                    {
                         headers: {
                              Authorization: `Bearer ${token}`,
                         },
                    },
               );

               const orderId = await res.data?.data;

               // Payment api....
               try {
                    const res = await axios.post(
                         `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/payments/checkout`,
                         {
                              order: orderId,
                         },
                         {
                              headers: {
                                   Authorization: `Bearer ${token}`,
                              },
                         },
                    );

                    const paymentLinkk = await res?.data?.data;

                    if (!paymentLinkk) {
                         return toast.error("Payment failed", {
                              id: orderPaymentLoading,
                         });
                    }

                    toast.success("Order created successfully", {
                         id: orderPaymentLoading,
                    });

                    // Redirection: redirect to payment page

                    if (window !== undefined) {
                         window.location.href = paymentLinkk;
                    }
               } catch (error) {
                    console.error(error);
               }
          } catch (error) {
               console.error("Error:", error);
          } finally {
               reset();
          }
     };

     if (!productDetails) {
          return <p>Loading Billing details...</p>;
     }

     const subtotal = productDetails?.price * (productDetails?.quantity || 1);

     console.log("quantity", productDetails?.quantity);

     const total = subtotal;

     const domain = process.env.NEXT_PUBLIC_IMAGE_DOMAIN;

     return (
          <div className="p-8 grid grid-cols-1 xl:grid-cols-2  gap-16 w-full md:max-w-[60%] mx-auto">
               {/* Right Section: Billing Form */}

               <Tabs
                    defaultValue="itemsTag"
                    value={selectTab}
                    onValueChange={setSelectedTab}
                    className="w-[400px] order-2 md:order-1">
                    <TabsList className="grid w-full grid-cols-2">
                         <TabsTrigger value="itemsTag">Item Tags</TabsTrigger>
                         <TabsTrigger value="medicalTag">
                              Medical Tags
                         </TabsTrigger>
                    </TabsList>

                    <TabsContent value="itemsTag">
                         <form
                              onSubmit={handleSubmitItemTags(onSubmitItemTags)}
                              className="space-y-4">
                              <div>
                                   <label className="block mb-1">Name</label>
                                   <Input
                                        {...registerItemTags("name", {
                                             required: "Name is required",
                                        })}
                                        className="w-full p-2 border rounded"
                                        placeholder="Name"
                                   />
                                   {errorsItemTags?.billingDetails?.name && (
                                        <span className="text-red-500 text-sm">
                                             {errorsItemTags.name.message}
                                        </span>
                                   )}
                              </div>
                              <div>
                                   <label className="block mb-1">Address</label>
                                   <Input
                                        {...registerItemTags("address", {
                                             required: "Address is required",
                                        })}
                                        className="w-full p-2 border rounded"
                                        placeholder="Address"
                                   />
                                   {errorsItemTags?.address && (
                                        <span className="text-red-500 text-sm">
                                             {errorsItemTags.address.message}
                                        </span>
                                   )}
                              </div>
                              <div>
                                   <label className="block mb-1">Email</label>
                                   <Input
                                        {...registerItemTags("email", {
                                             required: "Email is required",
                                             pattern: {
                                                  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                                                  message: "Invalid email format",
                                             },
                                        })}
                                        className="w-full p-2 border rounded"
                                        placeholder="Email"
                                   />
                                   {errorsItemTags?.email && (
                                        <span className="text-red-500 text-sm">
                                             {errorsItemTags.email.message}
                                        </span>
                                   )}
                              </div>
                              <div>
                                   <label className="block mb-1">
                                        Phone Number
                                   </label>
                                   <Input
                                        {...registerItemTags("phoneNumber", {
                                             required:
                                                  "Phone number is required",
                                             pattern: {
                                                  value: /^[0-9]{10,15}$/,
                                                  message: "Invalid phone number",
                                             },
                                        })}
                                        className="w-full p-2 border rounded"
                                        placeholder="Phone Number"
                                   />
                                   {errorsItemTags?.phoneNumber && (
                                        <span className="text-red-500 text-sm">
                                             {
                                                  errorsItemTags.phoneNumber
                                                       .message
                                             }
                                        </span>
                                   )}
                              </div>
                              <Button
                                   type="submit"
                                   className="w-full bg-black text-white py-2 rounded hover:bg-gray-800">
                                   Pay Now
                              </Button>
                         </form>
                    </TabsContent>

                    <TabsContent value="medicalTag">
                         <form
                              onSubmit={handleSubmitMedicalTags(
                                   onSubmitMedicalTags,
                              )}
                              className="space-y-4">
                              <div>
                                   <label className="block mb-1">Name</label>
                                   <Input
                                        {...registerMedicalTags("name", {
                                             required: " Name is required",
                                        })}
                                        className="w-full p-2 border rounded"
                                        placeholder=" Name"
                                   />
                                   {errorsMedicalTags.name && (
                                        <span className="text-red-500 text-sm">
                                             {errorsMedicalTags.name.message}
                                        </span>
                                   )}
                              </div>
                              <div>
                                   <label className="block mb-1">Email</label>
                                   <Input
                                        {...registerMedicalTags("email", {
                                             required: " email is required",
                                        })}
                                        className="w-full p-2 border rounded"
                                        placeholder=" Email"
                                   />
                                   {errorsMedicalTags.email && (
                                        <span className="text-red-500 text-sm">
                                             {errorsMedicalTags.email.message}
                                        </span>
                                   )}
                              </div>

                              <div>
                                   <label className="block mb-1">Address</label>
                                   <Input
                                        {...registerMedicalTags("address", {
                                             required: " Address is required",
                                        })}
                                        className="w-full p-2 border rounded"
                                        placeholder="Address"
                                   />
                                   {errorsMedicalTags.address && (
                                        <span className="text-red-500 text-sm">
                                             {errorsMedicalTags.address.message}
                                        </span>
                                   )}
                              </div>
                              <div>
                                   <label className="block mb-1">
                                        Date of Birth
                                   </label>
                                   <Input
                                        {...registerMedicalTags("dob", {
                                             required: " Address is required",
                                        })}
                                        className="w-full p-2 border rounded"
                                        placeholder="Date of Birth"
                                   />
                                   {errorsMedicalTags.dob && (
                                        <span className="text-red-500 text-sm">
                                             {errorsMedicalTags.dob.message}
                                        </span>
                                   )}
                              </div>

                              <div>
                                   <label className="block mb-1">
                                        Emargency Contact
                                   </label>
                                   <Input
                                        {...registerMedicalTags(
                                             "emergencyContact",
                                             {
                                                  required:
                                                       " Number is required",
                                             },
                                        )}
                                        className="w-full p-2 border rounded"
                                        placeholder="Emargency Contact"
                                   />
                                   {errorsMedicalTags.emergencyContact && (
                                        <span className="text-red-500 text-sm">
                                             {
                                                  errorsMedicalTags
                                                       .emergencyContact.message
                                             }
                                        </span>
                                   )}
                              </div>
                              <div>
                                   <label className="block mb-1">
                                        Emargency Contact
                                   </label>
                                   <Input
                                        {...registerMedicalTags("phoneNumber", {
                                             required: " Number is required",
                                        })}
                                        className="w-full p-2 border rounded"
                                        placeholder="Phone Number"
                                   />
                                   {errorsMedicalTags.phoneNumber && (
                                        <span className="text-red-500 text-sm">
                                             {
                                                  errorsMedicalTags.phoneNumber
                                                       .message
                                             }
                                        </span>
                                   )}
                              </div>

                              <div>
                                   <label className="block mb-1">
                                        Blood Type
                                   </label>
                                   <Input
                                        {...registerMedicalTags("bloodType", {
                                             required:
                                                  " Blood type is required",
                                        })}
                                        className="w-full p-2 border rounded"
                                        placeholder="Blood Type"
                                   />
                                   {errorsMedicalTags.bloodType && (
                                        <span className="text-red-500 text-sm">
                                             {
                                                  errorsMedicalTags.bloodType
                                                       .message
                                             }
                                        </span>
                                   )}
                              </div>

                              <div>
                                   <label className="block mb-1">
                                        Health Conditions
                                   </label>
                                   <Input
                                        {...registerMedicalTags(
                                             "healthConditions",
                                             {
                                                  required:
                                                       " Health condition is required",
                                             },
                                        )}
                                        className="w-full p-2 border rounded"
                                        placeholder="Healthcondition"
                                   />
                                   {errorsMedicalTags.healthConditions && (
                                        <span className="text-red-500 text-sm">
                                             {
                                                  errorsMedicalTags
                                                       .healthConditions.message
                                             }
                                        </span>
                                   )}
                              </div>

                              <div>
                                   <label className="block mb-1">
                                        Allergies
                                   </label>
                                   <Input
                                        {...registerMedicalTags("allergies", {
                                             required:
                                                  " Allergies condition is required",
                                        })}
                                        className="w-full p-2 border rounded"
                                        placeholder="Allergies"
                                   />
                                   {errorsMedicalTags.allergies && (
                                        <span className="text-red-500 text-sm">
                                             {
                                                  errorsMedicalTags.allergies
                                                       .message
                                             }
                                        </span>
                                   )}
                              </div>
                              <div>
                                   <label className="block mb-1">
                                        Main Doctor
                                   </label>
                                   <Input
                                        {...registerMedicalTags("mainDoctor", {
                                             required: " Doctor is required",
                                        })}
                                        className="w-full p-2 border rounded"
                                        placeholder="Main Doctor"
                                   />
                                   {errorsMedicalTags.mainDoctor && (
                                        <span className="text-red-500 text-sm">
                                             {
                                                  errorsMedicalTags.mainDoctor
                                                       .message
                                             }
                                        </span>
                                   )}
                              </div>

                              <Button
                                   type="submit"
                                   className="w-full bg-black text-white py-2 rounded hover:bg-gray-800">
                                   Pay Now
                              </Button>
                         </form>
                    </TabsContent>
               </Tabs>

               {/* Left Section: Product Details */}
               <div className="order-1 md:order-2  ">
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
