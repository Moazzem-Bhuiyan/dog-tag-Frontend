"use client";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";

const DogTagtwo = ({ onChange }) => {
  const [localData, setLocalData] = useState({
    inputA: "",
    inputB: "",
    inputC: "",
    inputD: "",
    inputE: "",
    inputF: "",
  });

  useEffect(() => {
    onChange(localData); 
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
      <h1 className="text-center text-2xl">Dog Tag 2</h1>
      <Input
        name="inputA"
        value={localData.inputA}
        onChange={handleInputChange}
        placeholder="Input A"
      />
      <Input
        name="inputB"
        value={localData.inputB}
        onChange={handleInputChange}
        placeholder="Input B"
      />
      <Input
        name="inputC"
        value={localData.inputC}
        onChange={handleInputChange}
        placeholder="Input C"
      />
      <Input
        name="inputD"
        value={localData.inputD}
        onChange={handleInputChange}
        placeholder="Input D"
      />
      <Input
        name="inputE"
        value={localData.inputE}
        onChange={handleInputChange}
        placeholder="Input E"
      />
      <Input
        name="inputF"
        value={localData.inputF}
        onChange={handleInputChange}
        placeholder="Input F"
      />
    </div>
  );
};

export default DogTagtwo;
