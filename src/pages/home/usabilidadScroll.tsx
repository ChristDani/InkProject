import { Mousewheel, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper styles
import "swiper/css";
import Phone2 from "../../common/images/phone2";

const UsabilidadScroll = () => {
  const images = [
    "src/images/home/phone.svg",
    "src/images/home/hand.svg",
    "src/images/home/iPhone 13.svg",
    "src/images/home/iPhone 13.svg",
    "src/images/home/phone.svg",
    "src/images/home/hand.svg",
    "src/images/home/iPhone 13.svg",
  ];
  return (
    <div>
      <div className="text-center m-4">
        <h2 className="lato-black">Fácil y flexible de usar</h2>
        <p className="text-[16px] leadint-[19px] mx-96 ">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae
          aspernatur quam laborum cupiditate possimus maxime at, quod ducimus
          aperiam aliquam ipsa id iusto.
        </p>
      </div>
      <div className="flex">
        <Swiper
          direction={"vertical"}
          slidesPerView={1}
          spaceBetween={15}
          mousewheel={true}
          pagination={{
            clickable: true,
          }}
          modules={[Mousewheel, Pagination]}
          className="bg-white h-screen"
        >
          { images.map((image, i) => (
            <SwiperSlide key={i} className="bg-red-500 ">
              <div className="">
                <p className=" lato-light-italic">¿Cómo funciona?</p>
                <h2 className="lato-black-italic">Crea tu cuenta en línea</h2>
                <p className="w-[400px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Similique laudantium porro sequi nulla fugiat omnis, et
                  inventore saepe beatae iste, necessitatibus sunt aperiam
                  pariatur quas, error itaque consequatur. Sapiente, unde?
                </p>
              </div>
              <div className="my-6 ">
                <img src={image} alt="" />
              </div>
            </SwiperSlide>
          ))
          }
        </Swiper>
      </div>
    </div>
  );
};

export default UsabilidadScroll;
