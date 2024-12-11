"use client";

import React, {useState} from "react";
import {Modal} from "antd";
import {useForm} from "react-hook-form";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {modifyPayload} from "../../../../../utils/modifyPayload";
import {registerUser} from "@/Services/actions/registeruser";
import {verifyOtp} from "@/Services/actions/verifyOtp";

import {toast} from "sonner";

const RegisterModal = ({isOpen, onClose, onLoginClick}) => {
     const {
          register,
          handleSubmit,
          formState: {errors},
          reset,
     } = useForm();

     const [isLoading, setIsLoading] = useState(false);
     const [otpModalVisible, setOtpModalVisible] = useState(false);
     const [otpToken, setOtpToken] = useState("");
     const [email, setEmail] = useState("");

     // Function to handle user registration
     const onSubmit = async (values) => {
          const data = modifyPayload(values);

          setIsLoading(true);

          try {
               const res = await registerUser(data);

               console.log("create user data", res);

               if (res.success) {
                    toast.success(res.message || "User created successfully!");

                    // Open OTP verification modal
                    setOtpModalVisible(true);
                    setOtpToken(res.data.otpToken.token); // Save OTP token
                    setEmail(res.data.user.email); // Save user's email
               } else {
                    toast.error(res.message || "User registration failed.");
               }
          } catch (error) {
               console.error("Error:", error);
               toast.error(error.message || "An unexpected error occurred.");
          } finally {
               setIsLoading(false);
               reset();
          }
     };

     const handleOtpVerification = async (data) => {
          try {
               const res = await verifyOtp({
                    email,
                    otp: data.otp,
                    token: otpToken,
               });

               if (res.success) {
                    toast.success(res.message || "OTP verified successfully!");
                    localStorage.setItem("token", res.data.token);

                    setOtpModalVisible(false);
                    onLoginClick();
               } else {
                    toast.error(res.message || "OTP verification failed.");
               }
          } catch (error) {
               console.error("Error:", error);
               toast.error(error.message || "An unexpected error occurred.");
          }
     };

     return (
          <>
               <Modal centered open={isOpen} onCancel={onClose} footer={null}>
                    <form
                         onSubmit={handleSubmit(onSubmit)}
                         className="flex flex-col gap-4 py-10">
                         <h1 className="text-center text-2xl font-bold text-white">
                              Create an Account
                         </h1>
                         <div>
                              <label
                                   htmlFor="name"
                                   className="block text-white">
                                   Name
                              </label>
                              <Input
                                   id="name"
                                   {...register("name", {
                                        required: "Name is required",
                                   })}
                                   className="border p-2 w-full"
                              />
                              {errors.name && (
                                   <p className="text-red-500">
                                        {errors.name.message}
                                   </p>
                              )}
                         </div>

                         <div>
                              <label
                                   htmlFor="email"
                                   className="block text-white">
                                   Email
                              </label>
                              <Input
                                   id="email"
                                   {...register("email", {
                                        required: "Email is required",
                                   })}
                                   className="border p-2 w-full"
                              />
                              {errors.email && (
                                   <p className="text-red-500">
                                        {errors.email.message}
                                   </p>
                              )}
                         </div>

                         <div>
                              <label
                                   htmlFor="password"
                                   className="block text-white">
                                   Password
                              </label>
                              <Input
                                   id="password"
                                   type="password"
                                   {...register("password", {
                                        required: "Password is required",
                                   })}
                                   className="border p-2 w-full"
                              />
                              {errors.password && (
                                   <p className="text-red-500">
                                        {errors.password.message}
                                   </p>
                              )}
                         </div>

                         <Button
                              type="submit"
                              className="mt-5"
                              disabled={isLoading}>
                              {isLoading ? "Registering..." : "Register"}
                         </Button>
                    </form>

                    <Button
                         onClick={onLoginClick}
                         className="text-white text-center w-full mx-auto"
                         variant="link">
                         Already have an account?{" "}
                         <span className="text-red-500">Login</span>
                    </Button>
               </Modal>

               {/* OTP Verification Modal */}
               <OtpVerificationModal
                    isOpen={otpModalVisible}
                    otpToken={otpToken}
                    email={email}
                    handleOtpVerification={handleOtpVerification}
                    onSuccess={onLoginClick}
               />
          </>
     );
};

// OTP Verification Modal Component
const OtpVerificationModal = ({
     isOpen,
     otpToken,
     email,
     handleOtpVerification,
     onSuccess,
}) => {
     const {register, handleSubmit} = useForm();

     return (
          <Modal
               centered
               open={isOpen}
               onCancel={() => setOtpModalVisible(false)}
               footer={null}>
               <form
                    onSubmit={handleSubmit((data) =>
                         handleOtpVerification(data),
                    )}
                    className="flex flex-col gap-4 py-10">
                    <h1 className="text-center text-2xl font-bold">
                         Verify OTP
                    </h1>
                    <div>
                         <label htmlFor="otp" className="block text-white">
                              OTP
                         </label>
                         <Input
                              id="otp"
                              {...register("otp", {
                                   required: "OTP is required",
                              })}
                              className="border p-2 w-full"
                         />
                    </div>

                    <Button type="submit" className="mt-5">
                         Verify
                    </Button>
               </form>
          </Modal>
     );
};

export default RegisterModal;
