import LovelyHands from "../../../common/icons/LovelyHands";
import Security from "../../../common/icons/Security";
import ShootingStars from "../../../common/icons/ShootingStars";
import Card from "../../../components/card";

const MoreBenefits = () => {
  return (
    <>
      <div className="absolute bg-purple-100 rounded-t-[100px] min-h-[943px] mt-60 pb-10 flex flex-col items-center w-full left-0 -z-10"></div>
      <div className="mt-72 right-2">
        <div className="text-center flex flex-col items-center">
          <h2 className=" lato-black">Más allá de los beneficios</h2>
          <p className="text-gray-700 mx-48 mt-4  right-10 w-[595px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="flex flex-wrap justify-around mt-44 mx-10 w-[1410px] gap-[30px] mb-10">
          <Card
            icon={<LovelyHands primaryColor="8700FF" secondaryColor="E7CCFF"/>}
            text=" Lorem ipsum amet, consectetur adipiscing elit. Suspendis varius enim eros elementum tristique. Duis cursus. Lorem ipsum amet, consectetur adipiscing"
          />
          <Card
            icon={<Security primaryColor="8700FF" secondaryColor="E7CCFF"/>}
            text=" Lorem ipsum amet, consectetur adipiscing elit. Suspendis varius enim eros elementum tristique. Duis cursus. Lorem ipsum amet, consectetur adipiscing"
          />
          <Card
            icon={<ShootingStars primaryColor="8700FF" secondaryColor="E7CCFF"/>}
            text=" Lorem ipsum amet, consectetur adipiscing elit. Suspendis varius enim eros elementum tristique. Duis cursus. Lorem ipsum amet, consectetur adipiscing"
          />
        </div>
      </div>
    </>
  );
};

export default MoreBenefits;
