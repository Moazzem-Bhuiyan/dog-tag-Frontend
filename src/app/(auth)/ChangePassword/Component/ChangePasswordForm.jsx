
"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";

const ChangePasswordForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("ChangePassword:", data);
    // onClose(); // Optionally close the modal after registration
  };

  return (
    <div>
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
    </div>
  );
};

export default ChangePasswordForm;
