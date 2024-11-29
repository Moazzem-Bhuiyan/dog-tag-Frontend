import ColorPicker from "@/components/Color/Color";
import DogtagPreview from "@/components/DogtagPreview/DogtagPreview";
import FontType from "@/components/FontType/FontType";
import HomeCard from "@/components/HomeCard/HomeCard";
import ModifyCustomCustomText from "@/components/ModifyCustomText/ModifyCustomCustomText";


const HomePage = () => {
  return (
    <div>
      {/* <Hero /> */}
      <HomeCard />
      <DogtagPreview />
      <ModifyCustomCustomText />
      <FontType />
      <ColorPicker />
    </div>
  );
};

export default HomePage;
