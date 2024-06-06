import Carrusel from "../../components/carruselVertical";

const Usabilidad = () => {
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
        <h2 className="lato-black">
          Fácil y flexible de usar
        </h2>
        <p className="text-[16px] leadint-[19px] mx-96 ">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae
          aspernatur quam laborum cupiditate possimus maxime at, quod ducimus
          aperiam aliquam ipsa id iusto.
        </p>
      </div>
      <div className="flex w-max">
        <div className="w-[640px] my-24">
          <p className=" lato-light-italic">¿Cómo funciona?</p>
          <h2 className="lato-black-italic">Crea tu cuenta en línea</h2>
          <p className="w-[400px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            laudantium porro sequi nulla fugiat omnis, et inventore saepe beatae
            iste, necessitatibus sunt aperiam pariatur quas, error itaque
            consequatur. Sapiente, unde?
          </p>
        </div>
        {/* <div className="w-[750px] h-[640px] bg-gradient-to-b from-fuchsia-200 to-fuchsia-100 border rounded-[40px] my-6">
            <Carrusel images={images}  interval={4000} />
        </div> */}
        <div className="my-6 ">
          <Carrusel images={images} interval={4000} />
        </div>
      </div>
    </div>
  );
};

export default Usabilidad;
