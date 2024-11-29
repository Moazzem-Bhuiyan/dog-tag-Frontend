"use client";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";

const DogtagTwo = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  console.log(watch("example"));

  return (
    <form className=" space-y-5" onSubmit={handleSubmit(onSubmit)}>
      <h1 className=" text-center text-2xl text-white py-1">Dog Tag 2 </h1>

      <Input {...register("input1")} />
      <Input {...register("input2")} />
      <Input {...register("input2")} />
      <Input {...register("input2")} />
      <Input {...register("input2")} />
      <Input {...register("input2")} />
      <Input {...register("input2")} />

      {errors.exampleRequired && <span>This field is required</span>}
    </form>
  );
};

export default DogtagTwo;
