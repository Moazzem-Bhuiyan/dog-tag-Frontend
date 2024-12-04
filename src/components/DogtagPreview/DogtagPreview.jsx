"use client";
import Image from "next/image";
import CustomHeadline from "../CustomHeadline/CustomHeadline";
import plate from "/public/plate.png";
import { useFormContext } from "../context/FormContext";

const DogtagPreview = () => {
  const { formData } = useFormContext();

  const renderFormData = (form) => {
    return Object.entries(form).map(([key, value]) => (
      <div key={key} className="plate py-2">
        {value}
      </div>
    ));
  };

  return (
    <div>
      <CustomHeadline title="My Dog Tag" />

      <div className=" grid grid-cols-2 gap-20 justify-center items-center w-full max-w-[50%] mx-auto">
        <div
          className="relative w-full h-52 bg-cover bg-center"
          style={{ backgroundImage: "url('/plate.png')" }}
        >
          <div className="absolute ml-40 mt-8">
            <h1 className=" text-3d uppercase text-center font-bold text-black">
              {renderFormData(formData.form1)}
            </h1>
          </div>
        </div>

        <div
          className="relative w-full h-52 bg-cover bg-center"
          style={{ backgroundImage: "url('/plate.png')" }}
        >
          <div className="absolute ml-40 mt-8">
            <h1 className=" text-3d uppercase text-center font-bold text-black">
              {renderFormData(formData.form2)}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DogtagPreview;
