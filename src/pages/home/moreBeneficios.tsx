import LovelyHands from "../../common/icons/LovelyHands";
import Security from "../../common/icons/Security";
import ShootingStars from "../../common/icons/ShootingStars";
import Card from "../../components/card";

const BenefitsSection = () => {
  return (
    <div className="absolute bg-purple-100 rounded-t-[100px] h-[943px] mt-20 flex flex-col items-center w-full left-0">
      <div className="">
        <h2 className="text-center lato-black mt-8">Más allá de los beneficios</h2>
        <p className="text-gray-700 mx-48 mt-4 text-center w-[595px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <div className="flex justify-around mt-56 mx-10 gap-8">
        <Card
          icon={<LovelyHands />}
          text=" Lorem ipsum amet, consectetur adipiscing elit. Suspendis varius enim eros elementum tristique. Duis cursus. Lorem ipsum amet, consectetur adipiscing"
        />
        <Card
          icon={<Security />}
          text=" Lorem ipsum amet, consectetur adipiscing elit. Suspendis varius enim eros elementum tristique. Duis cursus. Lorem ipsum amet, consectetur adipiscing"
        />
        <Card
          icon={<ShootingStars />}
          text=" Lorem ipsum amet, consectetur adipiscing elit. Suspendis varius enim eros elementum tristique. Duis cursus. Lorem ipsum amet, consectetur adipiscing"
        />
      </div>
    </div>
  );
};

export default BenefitsSection;
