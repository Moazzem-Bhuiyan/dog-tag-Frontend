"use client";

import html2canvas from "html2canvas";
import CustomHeadline from "../CustomHeadline/CustomHeadline";
import { useFormContext } from "../context/FormContext";
import { Download } from "lucide-react";

const DogtagPreview = () => {


  const { formData } = useFormContext();

  const renderFormData = (form) => {
    return Object.entries(form).map(([key, value]) => (
      <div key={key} className="plate py-2">
        {value}
      </div>
    ));
  };

  // make image sections

  const handleDownload = async (divId) => {
    const element = document.getElementById(divId);
    if (element) {
      const canvas = await html2canvas(element);
      const link = document.createElement("a");
      link.download = `${divId}-image.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
    }
  };

  

  return (
    <div>
      <CustomHeadline title="My Dog Tag" />
      <div className="grid grid-cols-2 gap-20 justify-center items-center w-full max-w-[50%] mx-auto">
        {/* div 1 */}
        <div
          id="dogtag-1"
          className="relative w-full h-52 bg-cover bg-center"
          style={{ backgroundImage: "url('/plate.png')" }}
        >
          <div className="absolute ml-40 mt-8">
            <h1 className="text-3d uppercase text-center font-bold text-black">
              {renderFormData(formData.form1)}
            </h1>
          </div>

          <div className=" flex justify-end">
            <button onClick={() => handleDownload("dogtag-1")}>
              <Download />
            </button>
          </div>
        </div>

        {/* div 2 */}
        <div
          id="dogtag-2"
          className="relative w-full h-52 bg-cover bg-center"
          style={{ backgroundImage: "url('/plate.png')" }}
        >
          <div className="absolute ml-40 mt-8">
            <h1 className="text-3d uppercase text-center font-bold text-black">
              {renderFormData(formData.form2)}
            </h1>
          </div>

          <div className=" flex justify-end">
            <button onClick={() => handleDownload("dogtag-2")}>
              <Download />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DogtagPreview;
