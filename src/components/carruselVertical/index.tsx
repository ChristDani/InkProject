import { useEffect, useRef, useState } from "react";

const Carrusel = ({
  interval = 3000,
  images,
}: {
  interval: number;
  images: string[];
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef<null | number>(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      interval
    );

    return () => {
      resetTimeout();
    };
  }, [currentIndex, images.length, interval]);

  return (
    <div className="flex gap-10">
      <div className=" overflow-hidden h-[640px]  w-[640px] bg-gradient-to-b from-fuchsia-200 to-fuchsia-100 border rounded-[40px] ">
        <div
          className=" flex flex-col transition-transform duration-700 ease-linear "
          style={{ transform: `translateY(${-((1/images.length) * currentIndex) * 100}%)` }}
        >
          {images.map((src, index) => (
            <div className="flex-shrink-0 w-full " key={index}>
              <img
                src={src}
                className="h-[640px] w-[640px]  text-center"
                alt={`Slide ${index}`}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="  right-8 transform  flex flex-col space-y-2 my-auto">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-[40px] h-[40px] rounded-full ${
              index === currentIndex ? "bg-[#FD1775]" : ""
            }`}
            onClick={() => setCurrentIndex(index)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Carrusel;
