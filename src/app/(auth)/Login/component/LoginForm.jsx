"use client";

import React from "react";
import {Checkbox, Modal, message} from "antd";
import {useForm} from "react-hook-form";
import {useRouter} from "next/navigation"; // Use this for navigation in Next.js App Router
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {loginUser} from "@/Services/actions/loginUser";
import {toast} from "sonner";

const LoginPage = ({isOpen, onClose, onSignupClick, onForgetPasswordClick}) => {
     const {
          register,
          handleSubmit,
          reset,
          formState: {errors},
     } = useForm();

     const [loading, setLoading] = React.useState(false);
     const router = useRouter();

     const onSubmit = async (values) => {
          setLoading(true);

          try {
               const res = await loginUser(values);

               const {accessToken, refreshToken, user} = res.data;

               localStorage.setItem("accessToken", accessToken);
               localStorage.setItem("refreshToken", refreshToken);

               toast.success(`Welcome back, ${user.name}!`);

               router.push("/");
               router.refresh();

               onClose();
          } catch (error) {
               message.error(error.response?.data?.message || "Login failed!");
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
                    <h1 className="text-center text-2xl font-bold">
                         Welcome Back
                    </h1>

                    <div>
                         <label htmlFor="email" className="block text-gray-700">
                              Email
                         </label>
                         <Input
                              id="email"
                              type="email"
                              {...register("email", {
                                   required: "Email is required",
                                   pattern: {
                                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                        message: "Invalid email address",
                                   },
                              })}
                              className="border p-2 w-full"
                              placeholder="Enter your email"
                         />
                         {errors.email && (
                              <p className="text-red-500 text-sm">
                                   {errors.email.message}
                              </p>
                         )}
                    </div>

                    <div>
                         <label
                              htmlFor="password"
                              className="block text-gray-700">
                              Password
                         </label>
                         <Input
                              id="password"
                              type="password"
                              {...register("password", {
                                   required: "Password is required",
                                   minLength: {
                                        value: 6,
                                        message: "Password must be at least 6 characters",
                                   },
                              })}
                              className="border p-2 w-full"
                              placeholder="Enter your password"
                         />
                         {errors.password && (
                              <p className="text-red-500 text-sm">
                                   {errors.password.message}
                              </p>
                         )}
                    </div>

                    <div className="flex justify-between items-center mt-5">
                         <div className="flex items-center space-x-2">
                              <Checkbox />
                              <label
                                   htmlFor="rememberMe"
                                   className="text-sm font-medium leading-none">
                                   Remember me
                              </label>
                         </div>
                         <Button
                              onClick={onForgetPasswordClick}
                              className="text-white"
                              variant="link"
                              type="button">
                              Forgot Password?
                         </Button>
                    </div>

                    <Button type="submit" className="mt-5" disabled={loading}>
                         {loading ? "Logging in..." : "Login"}
                    </Button>
               </form>

               <Button
                    onClick={onSignupClick}
                    className="text-center w-full mt-4 text-white"
                    variant="link">
                    Don&apos;t have an account?{" "}
                    <span className="text-red-500">Register</span>
               </Button>
          </Modal>
     );
};

export default LoginPage;

