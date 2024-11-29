import Image from "next/image";
import hero from "/public/hero.png";
import Navber from "./Navber";

const Hero = () => {
  return (
    <div className="bg-main h-[60vh] flex justify-center items-center ">
      <div className=" relative w-full">
        <div className=" flex justify-center items-center">
          {" "}
          <Image src={hero} alt="hero img" />
        </div>

        <div className="mt-32">
          {" "}
          <Navber />
        </div>
      </div>
    </div>
  );
};

export default Hero;
