"use client";

import html2canvas from "html2canvas";
import CustomHeadline from "../CustomHeadline/CustomHeadline";
import { useFormContext } from "../context/FormContext";
import { Download } from "lucide-react";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

// Helper function to check if an object has at least one non-empty value
const hasNonEmptyValues = (obj) => {
    return Object.values(obj).some((value) => value && value.trim() !== "");
};

const DogtagPreview = () => {
    const { formData } = useFormContext();

    const [buynow, setBuynow] = useState(false);

    const renderFormData = (form) => {
        return Object.entries(form).map(([key, value]) => (
            <div key={key} className="plate py-2">
                {value}
            </div>
        ));
    };

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

    useEffect(() => {
        // Check if formData.form1 or formData.form2 has non-empty values
        if (
            formData &&
            hasNonEmptyValues(formData.form1 || {}) &&
            hasNonEmptyValues(formData.form2 || {})
        ) {
            setBuynow(true);
        } else {
            setBuynow(false);
        }
    }, [formData]);

    const handleGlobalSubmit = () => {

     Swal.fire({
          title: "Sorry",
          text: "It’s still in development. Please try something else",
          icon: "question"
        });
      

        
    };

    return (
        <div>
            <CustomHeadline title="My Dog Tag" />

            <div className="md:grid lg:grid-cols-2 gap-20 justify-center items-center w-full lg:max-w-[50%] mx-auto p-10 md:p-0">
                {/* div 1 */}
                <div
                    id="dogtag-1"
                    className="relative w-full h-52 bg-cover bg-center"
                    style={{ backgroundImage: "url('/plate.png')" }}>
                    <div className="absolute ml-40 mt-8">
                        <h1 className="text-3d uppercase text-center font-bold text-black">
                            {formData?.form1 ? renderFormData(formData.form1) : null}
                        </h1>
                    </div>

                    <div className="flex justify-end">
                        <button onClick={() => handleDownload("dogtag-1")}>
                            <Download />
                        </button>
                    </div>
                </div>

                {/* div 2 */}
                <div
                    id="dogtag-2"
                    className="relative w-full h-52 bg-cover bg-center"
                    style={{ backgroundImage: "url('/plate.png')" }}>
                    <div className="absolute ml-40 mt-8">
                        <h1 className="text-3d uppercase text-center font-bold text-black">
                            {formData?.form2 ? renderFormData(formData.form2) : null}
                        </h1>
                    </div>

                    <div className="flex justify-end">
                        <button onClick={() => handleDownload("dogtag-2")}>
                            <Download />
                        </button>
                    </div>
                </div>
            </div>

            {/* Buy Now Button */}
            {buynow && (
                <div className="flex justify-center p-2">
                    <Button
                        onClick={handleGlobalSubmit}
                        className="bg-main text-center text-2xl w-full lg:max-w-[30%] mx-auto my-20 py-6 border border-white">
                        Buy Now
                    </Button>
                </div>
            )}
        </div>
    );
};

export default DogtagPreview;
