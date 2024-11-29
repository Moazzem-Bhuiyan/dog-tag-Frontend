import Image from "next/image";
import CustomHeadline from "../CustomHeadline/CustomHeadline";
import plate from "/public/plate.png";

const DogtagPreview = () => {
  return (
    <div>
      <CustomHeadline title="My Dog Tag" />

      <div className=" grid grid-cols-2 gap-20 justify-center items-center w-full max-w-[50%] mx-auto">
        <div>
          <Image className=" w-full" src={plate} alt="img" />
        </div>
        <div>
          <Image className=" w-full"  src={plate} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default DogtagPreview;
