import { Mousewheel, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper styles
import "swiper/css";
import { useEffect, useState } from "react";

const UsabilidadScroll = () => {
  const [number, setNumber] = useState(0);
  const images = [
    "src/images/home/phone.svg",
    "src/images/home/hand.svg",
    "src/images/home/iPhone 13.svg",
    "src/images/home/iPhone 13.svg",
    "src/images/home/phone.svg",
    "src/images/home/hand.svg",
    "src/images/home/iPhone 13.svg",
  ];

 const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log(entry.target.id); // Muestra el ID del div visible
        }
      });
    },
    {
      threshold: 0.5,
    }
  );

  useEffect(() => {
    const divs = document.querySelectorAll('.image');
    divs.forEach((div) => {
      observer.observe(div);
    });

    return () => {
      divs.forEach((div) => {
        observer.unobserve(div);
      });
    };
  }, []);
  const putImage = (position: number) => {
    const img = document.getElementById('imgCarrusel');
    
    img!.setAttribute('src',`${images[position - 1]}`);
  }

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
      {/*
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
      </div>*/}
      <div className="flex">
        <div className="w-1/2 bg-red-500">
          <div id="image1" className="flex flex-col justify-center items-center h-screen .image">
              <p className="lato-light-italic">¿Cómo funciona?</p>
              <h2 className="lato-black-italic">Crea tu cuenta en línea</h2>
              <p className="w-[400px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique laudantium porro sequi nulla fugiat omnis, et
                inventore saepe beatae iste, necessitatibus sunt aperiam
                pariatur quas, error itaque consequatur. Sapiente, unde?
              </p>
          </div>
          <div id="image2" onGotPointerCapture={() => console.log('funciona')
          } /*onFocus={() => putImage(2)}*/  className="p-14 h-screen .image ">
            <p className=" lato-light-italic">¿Cómo funciona?</p>
            <h2 className="lato-black-italic">Crea tu cuenta en línea</h2>
            <p className="w-[400px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Similique laudantium porro sequi nulla fugiat omnis, et
              inventore saepe beatae iste, necessitatibus sunt aperiam
              pariatur quas, error itaque consequatur. Sapiente, unde?
            </p>
          </div>
          <div id="image3" onFocus={() => putImage(3)} className="p-14 h-screen ">
            <p className=" lato-light-italic">¿Cómo funciona?</p>
            <h2 className="lato-black-italic">Crea tu cuenta en línea</h2>
            <p className="w-[400px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Similique laudantium porro sequi nulla fugiat omnis, et
              inventore saepe beatae iste, necessitatibus sunt aperiam
              pariatur quas, error itaque consequatur. Sapiente, unde?
            </p>
          </div>
        </div>
        <div>

        </div>
        <div className="w-1/2">
          <div className="sticky top-1/4 overflow-hidden m-auto rounded-[50px] bg-[#EDD9FF] w-[400px] h-[400px]">
            <div className="relative">
              <img id='imgCarrusel' src={images[0]} alt="" className="" />
              <div className="absolute top-0 bg-gradient-to-t from-[#e6d1f9] w-full h-full">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsabilidadScroll;
