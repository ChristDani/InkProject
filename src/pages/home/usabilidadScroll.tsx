import { Mousewheel, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper styles
import "swiper/css";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const UsabilidadScroll = () => {
  const [isView, setIsView] = useState("");
  const ref1 = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);
  const ref3 = useRef<HTMLDivElement>(null);
  const ref4 = useRef<HTMLDivElement>(null);
  const ref5 = useRef<HTMLDivElement>(null);
  const ref6 = useRef<HTMLDivElement>(null);
  const images = [
    "src/images/home/phone.svg",
    "src/images/home/hand.svg",
    "src/images/home/iPhone 13.svg",
    "src/images/home/phone.svg",
    "src/images/home/hand.svg",
    "src/images/home/iPhone 13.svg",
    "src/images/home/phone.svg",
  ];
  useEffect(() => {
    const observer = new IntersectionObserver(([entries]) => {
      setIsView(entries.target.id);
    });
    
    observer.observe(ref1.current!);
    observer.observe(ref2.current!);
    observer.observe(ref3.current!);
    observer.observe(ref4.current!);
    observer.observe(ref5.current!);
    observer.observe(ref6.current!);
    return () => observer.disconnect();
  },[])

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
        <div className="w-1/2 bg-red-500" >
          <div ref={ref1} id="1" className="flex flex-col justify-center items-center h-screen .image">
              <p className="lato-light-italic">¿Cómo funciona?</p>
              <h2 className="lato-black-italic">Crea tu cuenta en línea</h2>
              <p className="w-[400px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique laudantium porro sequi nulla fugiat omnis, et
                inventore saepe beatae iste, necessitatibus sunt aperiam
                pariatur quas, error itaque consequatur. Sapiente, unde?
              </p>
          </div>
          <div ref={ref2} id="2" className="flex flex-col justify-center items-center h-screen .image">
              <p className="lato-light-italic">¿Cómo funciona?</p>
              <h2 className="lato-black-italic">Crea tu cuenta en línea</h2>
              <p className="w-[400px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique laudantium porro sequi nulla fugiat omnis, et
                inventore saepe beatae iste, necessitatibus sunt aperiam
                pariatur quas, error itaque consequatur. Sapiente, unde?
              </p>
          </div>
          <div ref={ref3} id="3" className="flex flex-col justify-center items-center h-screen .image">
              <p className="lato-light-italic">¿Cómo funciona?</p>
              <h2 className="lato-black-italic">Crea tu cuenta en línea</h2>
              <p className="w-[400px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique laudantium porro sequi nulla fugiat omnis, et
                inventore saepe beatae iste, necessitatibus sunt aperiam
                pariatur quas, error itaque consequatur. Sapiente, unde?
              </p>
          </div>
          <div ref={ref4} id="4" className="flex flex-col justify-center items-center h-screen .image">
              <p className="lato-light-italic">¿Cómo funciona?</p>
              <h2 className="lato-black-italic">Crea tu cuenta en línea</h2>
              <p className="w-[400px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique laudantium porro sequi nulla fugiat omnis, et
                inventore saepe beatae iste, necessitatibus sunt aperiam
                pariatur quas, error itaque consequatur. Sapiente, unde?
              </p>
          </div>
          <div ref={ref5} id="5" className="flex flex-col justify-center items-center h-screen .image">
              <p className="lato-light-italic">¿Cómo funciona?</p>
              <h2 className="lato-black-italic">Crea tu cuenta en línea</h2>
              <p className="w-[400px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique laudantium porro sequi nulla fugiat omnis, et
                inventore saepe beatae iste, necessitatibus sunt aperiam
                pariatur quas, error itaque consequatur. Sapiente, unde?
              </p>
          </div>
          <div ref={ref6} id="6" className="flex flex-col justify-center items-center h-screen .image">
              <p className="lato-light-italic">¿Cómo funciona?</p>
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
              <img id="imgCarrusel" src={images[parseInt(isView)-1]} alt="" className=""/>
              <div className="absolute top-0 bg-gradient-to-t from-[#e6d1f9] w-full h-full">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    

    // <div>
    //   <div className="text-center m-4">
    //     <h2 className="lato-black">Fácil y flexible de usar</h2>
    //     <p className="text-[16px] leadint-[19px] mx-96 ">
    //       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae
    //       aspernatur quam laborum cupiditate possimus maxime at, quod ducimus
    //       aperiam aliquam ipsa id iusto.
    //     </p>
    //   </div>
    //   {/* <div className="flex">
    //     <Swiper
    //       direction={"vertical"}
    //       slidesPerView={1}
    //       spaceBetween={15}
    //       mousewheel={true}
    //       pagination={{
    //         clickable: true,
    //       }}
    //       modules={[Mousewheel, Pagination]}
    //       className="bg-white h-screen"
    //     >
    //       { images.map((image, i) => (
    //         <SwiperSlide key={i} className="bg-red-500 ">
    //           <div className="">
    //             <p className=" lato-light-italic">¿Cómo funciona?</p>
    //             <h2 className="lato-black-italic">Crea tu cuenta en línea</h2>
    //             <p className="w-[400px]">
    //               Lorem ipsum dolor sit amet consectetur adipisicing elit.
    //               Similique laudantium porro sequi nulla fugiat omnis, et
    //               inventore saepe beatae iste, necessitatibus sunt aperiam
    //               pariatur quas, error itaque consequatur. Sapiente, unde?
    //             </p>
    //           </div>
    //           <div className="my-6 ">
    //             <img src={image} alt="" />
    //           </div>
    //         </SwiperSlide>
    //       ))
    //       }
    //     </Swiper>
    //   </div> */}
    //   <div className="flex">
    //     <div className="w-1/2 bg-red-500" >
    //       <div ref={ref} id="Contend-1" className="flex flex-col justify-center items-center h-screen .image">
    //           <p className="lato-light-italic">¿Cómo funciona?</p>
    //           <h2 className="lato-black-italic">Crea tu cuenta en línea</h2>
    //           <p className="w-[400px]">
    //             Lorem ipsum dolor sit amet consectetur adipisicing elit.
    //             Similique laudantium porro sequi nulla fugiat omnis, et
    //             inventore saepe beatae iste, necessitatibus sunt aperiam
    //             pariatur quas, error itaque consequatur. Sapiente, unde?
    //           </p>
    //       </div>
    //       <div id="Contend-2" className="flex flex-col justify-center items-center h-screen .image">
    //           <p className="lato-light-italic">¿Cómo funciona?</p>
    //           <h2 className="lato-black-italic">Crea tu cuenta en línea</h2>
    //           <p className="w-[400px]">
    //             Lorem ipsum dolor sit amet consectetur adipisicing elit.
    //             Similique laudantium porro sequi nulla fugiat omnis, et
    //             inventore saepe beatae iste, necessitatibus sunt aperiam
    //             pariatur quas, error itaque consequatur. Sapiente, unde?
    //           </p>
    //       </div>
    //       <div id="Contend-3" className="flex flex-col justify-center items-center h-screen .image">
    //           <p className="lato-light-italic">¿Cómo funciona?</p>
    //           <h2 className="lato-black-italic">Crea tu cuenta en línea</h2>
    //           <p className="w-[400px]">
    //             Lorem ipsum dolor sit amet consectetur adipisicing elit.
    //             Similique laudantium porro sequi nulla fugiat omnis, et
    //             inventore saepe beatae iste, necessitatibus sunt aperiam
    //             pariatur quas, error itaque consequatur. Sapiente, unde?
    //           </p>
    //       </div>
    //       <div id="Contend-4" className="flex flex-col justify-center items-center h-screen .image">
    //           <p className="lato-light-italic">¿Cómo funciona?</p>
    //           <h2 className="lato-black-italic">Crea tu cuenta en línea</h2>
    //           <p className="w-[400px]">
    //             Lorem ipsum dolor sit amet consectetur adipisicing elit.
    //             Similique laudantium porro sequi nulla fugiat omnis, et
    //             inventore saepe beatae iste, necessitatibus sunt aperiam
    //             pariatur quas, error itaque consequatur. Sapiente, unde?
    //           </p>
    //       </div>
    //       <div id="Contend-5" className="flex flex-col justify-center items-center h-screen .image">
    //           <p className="lato-light-italic">¿Cómo funciona?</p>
    //           <h2 className="lato-black-italic">Crea tu cuenta en línea</h2>
    //           <p className="w-[400px]">
    //             Lorem ipsum dolor sit amet consectetur adipisicing elit.
    //             Similique laudantium porro sequi nulla fugiat omnis, et
    //             inventore saepe beatae iste, necessitatibus sunt aperiam
    //             pariatur quas, error itaque consequatur. Sapiente, unde?
    //           </p>
    //       </div>
    //       <div id="Contend-6" className="flex flex-col justify-center items-center h-screen .image">
    //           <p className="lato-light-italic">¿Cómo funciona?</p>
    //           <h2 className="lato-black-italic">Crea tu cuenta en línea</h2>
    //           <p className="w-[400px]">
    //             Lorem ipsum dolor sit amet consectetur adipisicing elit.
    //             Similique laudantium porro sequi nulla fugiat omnis, et
    //             inventore saepe beatae iste, necessitatibus sunt aperiam
    //             pariatur quas, error itaque consequatur. Sapiente, unde?
    //           </p>
    //       </div>
    //     </div>
    //     <div>

    //     </div>
    //     <div className="w-1/2">
    //       <div className="sticky top-1/4 overflow-hidden m-auto rounded-[50px] bg-[#EDD9FF] w-[400px] h-[400px]">
    //         <div className="relative">
    //           <img id="imgCarrusel" src={images[1]} alt="" className="opacity-1 isImage1"/>
    //           <div className="absolute top-0 bg-gradient-to-t from-[#e6d1f9] w-full h-full">
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default UsabilidadScroll;
