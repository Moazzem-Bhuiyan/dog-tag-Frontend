"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useForm } from "react-hook-form";    

const DialogLogin = ({ children }) => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log("Form submitted with data:", data);
    alert("asgadfsg")
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl">
            Login to Account
          </DialogTitle>
          <DialogDescription className="text-center text-white">
            Please enter your email and password to continue
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="text-primary-black">
          <div>
            <Label htmlFor="email" className="font-semibold">
              Email
            </Label>
            <Input
              type="email"
              id="email"
              placeholder="Email"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <span className="text-red-500">{errors.email.message}</span>
            )}
          </div>

          <div className="mt-4">
            <Label htmlFor="password" className="font-semibold">
              Password
            </Label>
            <Input
              type="password"
              id="password"
              placeholder="Password"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && (
              <span className="text-red-500">{errors.password.message}</span>
            )}
          </div>
          <DialogFooter>  <div>
            <Button type="submit" className="w-full mt-5">
              SIGN IN
            </Button>
          </div></DialogFooter>

        
        </form>
        
      </DialogContent>
      
    </Dialog>
  );
};

export default DialogLogin;
