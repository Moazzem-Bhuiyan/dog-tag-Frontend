import React from "react";
import { Modal } from "antd";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";

const ForgetPasswordModal = ({ isOpen, onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("ForgetPass:", data);
    // onClose(); // Close modal after successful login
  };

  return (
    <Modal
      centered
      open={isOpen}
      onCancel={onClose}
      footer={null} // Custom footer
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 py-10"
      >
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

        <Button
          type="submit"
          className="relative group px-6 py-3 font-medium text-black bg-black overflow-hidden mt-5"
        >
          <span className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 transform origin-top-left group-hover:origin-top-left transition-transform duration-1000 ease-in-out"></span>
          <span className="z-50 relative text-white group-hover:text-black transition-colors duration-1000 ease-in-out">
            Send Code
          </span>
        </Button>
      </form>
    </Modal>
  );
};

export default ForgetPasswordModal;
