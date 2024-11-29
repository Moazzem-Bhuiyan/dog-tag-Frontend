import CustomHeadline from "../CustomHeadline/CustomHeadline";
import { Button } from "../ui/button";
import DogTagone from "./component/DogTagone";
import DogtagTwo from "./component/DogtagTwo";

const ModifyCustomCustomText = () => {
  return (
    <div>
      <CustomHeadline title="Modify Custom Text" />

      <div className="grid grid-cols-2 gap-20 justify-center items-center w-full max-w-[50%] mx-auto">
        <DogTagone />
        <DogtagTwo />
      </div>

    <div className=" flex justify-center">
    <Button className=" bg-main text-center text-2xl w-full max-w-[30%] mx-auto my-20 p-2 ">Update Dog Tag</Button>
    </div>
    </div>
  );
};

export default ModifyCustomCustomText;
