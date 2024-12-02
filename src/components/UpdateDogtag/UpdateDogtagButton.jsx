"use client";
import { useRouter } from "next/navigation";
import { useFormContext } from "../context/FormContext";



const GlobalSubmit = () => {
  const { formData } = useFormContext();
  const router = useRouter();

  const handleGlobalSubmit = () => {
    router.push("/"); 
  };

  return (
    <div className="p-5 space-y-5">
      <button
        onClick={handleGlobalSubmit}
        className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-700"
      >
        Submit All Forms
      </button>
    </div>
  );
};

export default GlobalSubmit;
