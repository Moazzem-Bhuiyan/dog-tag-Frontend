"use client";

import React from "react";
import {Checkbox, Modal} from "antd";
import {useForm} from "react-hook-form";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {loginUser} from "@/Services/actions/loginUser";

const LoginPage = ({isOpen, onClose, onSignupClick, onForgetPasswordClick}) => {
     const {
          register,
          handleSubmit,
          reset,
          formState: {errors},
     } = useForm();

     const [loading, setLoading] = React.useState(false);

     const onSubmit = async (values) => {
       setLoading(true);
       
       try {
         const res = await loginUser(values);
         console.log("Login Response:", res);
     
    
       } catch (error) {
         console.error("Error occurred during login:", error.message);

       } finally {
         setLoading(false);
         reset();
       }
     };
     
     return (
          <Modal centered open={isOpen} onCancel={onClose} footer={null}>
               <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col gap-4 py-10">
                    <h1 className=" text-center text-2xl font-bold">
                         Welcome For Back
                    </h1>
                    <div>
                         <label htmlFor="email" className="block text-white">
                              Email
                         </label>
                         <Input
                              id="email"
                              type="email"
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
                              className="border p-2 w-full text"
                         />
                         {errors.password && (
                              <p className="text-red-500">
                                   {errors.password.message}
                              </p>
                         )}
                    </div>

                    <div className=" flex justify-between mt-10">
                         <div className="flex items-center space-x-2">
                              <Checkbox />
                              <label
                                   htmlFor="terms2"
                                   className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                   Remember me
                              </label>
                         </div>

                         <Button
                              onClick={onForgetPasswordClick}
                              className="text-white"
                              variant="link"
                              type="button">
                              Forget Password?
                         </Button>
                    </div>

                    <Button type="sumbit" className="mt-5" disabled={loading}>
                    {loading ? "Logging in..." : "Login"}
                    </Button>
               </form>

               <Button
                    onClick={onSignupClick}
                    className="text-white text-center w-full mx-auto"
                    variant="link">
                    {" "}
                    You Have No Account ?{" "}
                    <span className="text-red-500">Register</span>{" "}
               </Button>
          </Modal>
     );
};

export default LoginPage;
