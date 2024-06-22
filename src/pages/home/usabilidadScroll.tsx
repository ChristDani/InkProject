import { useEffect, useRef, useState } from "react";

const UsabilidadScroll = () => {
  const [isView, setIsView] = useState("");
  const ref1 = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);
  const ref3 = useRef<HTMLDivElement>(null);
  const ref4 = useRef<HTMLDivElement>(null);
  const ref5 = useRef<HTMLDivElement>(null);
  const ref6 = useRef<HTMLDivElement>(null);
  const ref7 = useRef<HTMLDivElement>(null);

  const images = [
    "phone.svg",
    "hand.svg",
    "iPhone 13.svg",
    "phone.svg",
    "hand.svg",
    "iPhone 13.svg",
    "phone.svg",
  ];

  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    // Cuando cambie isView, ajusta la opacidad para activar la transición
    setOpacity(0); // Oculta la imagen actual
    const timeoutId = setTimeout(() => setOpacity(1), 150); // Después de un pequeño retraso, muestra la nueva imagen
    return () => clearTimeout(timeoutId); // Limpiar el timeout para evitar fugas de memoria
  }, [isView]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsView(entry.target.id);
          }
        });
      },
      { threshold: 0.5 } // Ajusta el umbral de intersección según tus necesidades
    );

    observer.observe(ref1.current!);
    observer.observe(ref2.current!);
    observer.observe(ref3.current!);
    observer.observe(ref4.current!);
    observer.observe(ref5.current!);
    observer.observe(ref6.current!);
    observer.observe(ref7.current!);

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <div className="text-center m-10">
        <h2 className="lato-black">Fácil y flexible de usar</h2>
        <p className="text-[16px] leading-[19px] mx-96">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae
          aspernatur quam laborum cupiditate possimus maxime at, quod ducimus
          aperiam aliquam ipsa id iusto.
        </p>
      </div>
      <div className="flex">
        <div className="w-1/2">
          <div
            ref={ref1}
            id="1"
            className="flex flex-col justify-center items-center h-screen .image"
          >
            <p className="lato-light-italic">¿Cómo funciona?</p>
            <h2 className="lato-black-italic">Crea tu cuenta en línea</h2>
            <p className="w-[400px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              laudantium porro sequi nulla fugiat omnis, et inventore saepe
              beatae iste, necessitatibus sunt aperiam pariatur quas, error
              itaque consequatur. Sapiente, unde?
            </p>
          </div>
          <div
            ref={ref2}
            id="2"
            className="flex flex-col justify-center items-center h-screen .image"
          >
            <p className="lato-light-italic">¿Cómo funciona?</p>
            <h2 className="lato-black-italic">Crea tu cuenta en línea</h2>
            <p className="w-[400px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              laudantium porro sequi nulla fugiat omnis, et inventore saepe
              beatae iste, necessitatibus sunt aperiam pariatur quas, error
              itaque consequatur. Sapiente, unde?
            </p>
          </div>
          <div
            ref={ref3}
            id="3"
            className="flex flex-col justify-center items-center h-screen .image"
          >
            <p className="lato-light-italic">¿Cómo funciona?</p>
            <h2 className="lato-black-italic">Crea tu cuenta en línea</h2>
            <p className="w-[400px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              laudantium porro sequi nulla fugiat omnis, et inventore saepe
              beatae iste, necessitatibus sunt aperiam pariatur quas, error
              itaque consequatur. Sapiente, unde?
            </p>
          </div>
          <div
            ref={ref4}
            id="4"
            className="flex flex-col justify-center items-center h-screen .image"
          >
            <p className="lato-light-italic">¿Cómo funciona?</p>
            <h2 className="lato-black-italic">Crea tu cuenta en línea</h2>
            <p className="w-[400px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              laudantium porro sequi nulla fugiat omnis, et inventore saepe
              beatae iste, necessitatibus sunt aperiam pariatur quas, error
              itaque consequatur. Sapiente, unde?
            </p>
          </div>
          <div
            ref={ref5}
            id="5"
            className="flex flex-col justify-center items-center h-screen .image"
          >
            <p className="lato-light-italic">¿Cómo funciona?</p>
            <h2 className="lato-black-italic">Crea tu cuenta en línea</h2>
            <p className="w-[400px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              laudantium porro sequi nulla fugiat omnis, et inventore saepe
              beatae iste, necessitatibus sunt aperiam pariatur quas, error
              itaque consequatur. Sapiente, unde?
            </p>
          </div>
          <div
            ref={ref6}
            id="6"
            className="flex flex-col justify-center items-center h-screen .image"
          >
            <p className="lato-light-italic">¿Cómo funciona?</p>
            <h2 className="lato-black-italic">Crea tu cuenta en línea</h2>
            <p className="w-[400px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              laudantium porro sequi nulla fugiat omnis, et inventore saepe
              beatae iste, necessitatibus sunt aperiam pariatur quas, error
              itaque consequatur. Sapiente, unde?
            </p>
          </div>
          <div
            ref={ref7}
            id="7"
            className="flex flex-col justify-center items-center h-screen .image"
          >
            <p className="lato-light-italic">¿Cómo funciona?</p>
            <h2 className="lato-black-italic">Crea tu cuenta en línea</h2>
            <p className="w-[400px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              laudantium porro sequi nulla fugiat omnis, et inventore saepe
              beatae iste, necessitatibus sunt aperiam pariatur quas, error
              itaque consequatur. Sapiente, unde?
            </p>
          </div>
        </div>
        <div className="w-1/2">
          <div className="sticky  top-[20%]  m-auto  ">
            <div className="relative h-[640px]  overflow-hidden w-[640px] bg-gradient-to-b from-fuchsia-200 to-fuchsia-100 border rounded-[40px] ">
              <img
                id="imgCarrusel"
                src={images[parseInt(isView) - 1]}
                alt=""
                className="bg-cover bg-center bg-no-repeat h-[640px] w-[640px] transition-opacity duration-500 ease-in-out"
                style={{ opacity }}
              />
              <div className="absolute bottom-0 bg-gradient-to-t from-[#e6d1f9] w-full h-[320px]"></div>
            </div>
              <div className="absolute  -right-2 transform  flex flex-col space-y-2 my-auto top-1/4 ">
                {images.map((_, index) => (
                  <div
                    key={index}
                    className={`w-[40px] h-[40px] text-center p-2 pointer-events-none rounded-full ${
                      index + 1 === parseInt(isView) ? "bg-[#FD1775]" : ""
                    }`}
                  >
                    {index + 1}
                  </div>
                ))}
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsabilidadScroll;
