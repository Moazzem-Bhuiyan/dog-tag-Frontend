"use client";

import React from "react";
import { Modal } from "antd";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const RegisterModal = ({ isOpen, onClose, onLoginClick }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Register Data:", data);
    // onClose(); // Optionally close the modal after registration
  };

  return (
    <Modal centered open={isOpen} onCancel={onClose} footer={null}>
      
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 py-10"
      >
        <h1 className="text-center text-2xl font-bold">Create an Account</h1>
        <div>
          <label htmlFor="name" className="block text-white">
            Name
          </label>
          <Input
            id="name"
            {...register("name", { required: "Name is required" })}
            className="border p-2 w-full"
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-white">
            Email
          </label>
          <Input
            id="email"
            {...register("email", { required: "Email is required" })}
            className="border p-2 w-full"
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="password" className="block text-white">
            Password
          </label>
          <Input
            id="password"
            type="password"
            {...register("password", { required: "Password is required" })}
            className="border p-2 w-full"
          />
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}
        </div>

        <Button type="submit" className="mt-5">
          Register
        </Button>
      </form>

      <Button
        onClick={onLoginClick}
        className="text-white text-center w-full mx-auto"
        variant="link"
      >
        Already have an account? <span className="text-red-500">Login</span>
      </Button>
    </Modal>
  );
};

export default RegisterModal;
