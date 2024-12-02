"use client";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";

const DogTagone = ({ onChange }) => {
  const [localData, setLocalData] = useState({
    input1: "",
    input2: "",
    input3: "",
    input4: "",
    input5: "",
    input6: "",
  
  });

  useEffect(() => {
    onChange(localData); // Send local data back to the parent on every change
  }, [localData, onChange]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLocalData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="space-y-5 p-5 border rounded-lg">
      <h1 className="text-center text-2xl">Dog Tag 1</h1>
      <Input
        name="input1"
        value={localData.input1}
        onChange={handleInputChange}
        placeholder="Input 1"
      />
      <Input
        name="input2"
        value={localData.input2}
        onChange={handleInputChange}
        placeholder="Input 2"
      />
      <Input
        name="input3"
        value={localData.input3}
        onChange={handleInputChange}
        placeholder="Input 3"
      />
      <Input
        name="input4"
        value={localData.input4}
        onChange={handleInputChange}
        placeholder="Input 4"
      />
      <Input
        name="input5"
        value={localData.input5}
        onChange={handleInputChange}
        placeholder="Input 5"
      />
      <Input
        name="input6"
        value={localData.input6}
        onChange={handleInputChange}
        placeholder="Input 6"
      />
    </div>
  );
};

export default DogTagone;
