"use client";

import React, {useState} from "react";
import {Modal} from "antd";
import {useForm} from "react-hook-form";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {modifyPayload} from "../../../../../utils/modifyPayload";
import {registerUser} from "@/Services/actions/registeruser";
import {toast} from "sonner";

const RegisterModal = ({isOpen, onClose, onLoginClick}) => {
     const {
          register,
          handleSubmit,
          formState: {errors},
          reset,
     } = useForm();

     const [isLoading, setIsLoading] = useState(false);

     const onSubmit = async (values) => {
          const data = modifyPayload(values);

          setIsLoading(true);
          onLoginClick();

          try {
               const res = await registerUser(data);

               console.log(res);

               if (res.success) {
                    toast.success(res.message || "User created successfully!");
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

     return (
          <Modal centered open={isOpen} onCancel={onClose} footer={null}>
               <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col gap-4 py-10">
                    <h1 className="text-center text-2xl font-bold">
                         Create an Account
                    </h1>
                    <div>
                         <label htmlFor="name" className="block text-white">
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
                         <label htmlFor="email" className="block text-white">
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
                         <label htmlFor="password" className="block text-white">
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

                    <Button type="submit" className="mt-5" disabled={isLoading}>
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
     );
};

export default RegisterModal;
