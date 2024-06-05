import Phone2 from "../../common/images/phone2";

const Usabilidad = () => {
  return (
    <div>
      <div className="text-center m-4">
        <h2 className="text-[86px] leadint-[103px]">
          Fácil y flexible de usar
        </h2>
        <p className="text-[16px] leadint-[19px] mx-96 ">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae
          aspernatur quam laborum cupiditate possimus maxime at, quod ducimus
          aperiam aliquam ipsa id iusto.
        </p>
      </div>
      <div className="flex">
        <div className="w-[640px] my-24">
          <p className="w-[300px]">¿Cómo funciona?</p>
          <h2 className="text-[40px]">Crea tu cuenta en línea</h2>
          <p className="w-[400px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            laudantium porro sequi nulla fugiat omnis, et inventore saepe beatae
            iste, necessitatibus sunt aperiam pariatur quas, error itaque
            consequatur. Sapiente, unde?
          </p>
        </div>
        <div className="w-[640px] bg-gradient-to-b from-fuchsia-200 to-fuchsia-100 border rounded-[40px] my-6">
          <div
            id="controls-carousel"
            className="relative w-full"
            data-carousel="static"
          >
            <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
              <div
                className=" duration-700 ease-in-out"
                data-carousel-item
              >
                <Phone2/>
              </div>

              <div
                className=" duration-700 ease-in-out"
                data-carousel-item="active"
              >
                <Phone2/>
              </div>

              <div
                className=" duration-700 ease-in-out"
                data-carousel-item
              >
                <Phone2/>
              </div>

              <div
                className=" duration-700 ease-in-out"
                data-carousel-item
              >
                <Phone2/>
              </div>

              <div
                className="hidden duration-700 ease-in-out"
                data-carousel-item
              >
                <Phone2/>
              </div>
            </div>

            <button
              type="button"
              className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              data-carousel-prev
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg
                  className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 1 1 5l4 4"
                  />
                </svg>
                <span className="sr-only">Previous</span>
              </span>
            </button>
            <button
              type="button"
              className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              data-carousel-next
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg
                  className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <span className="sr-only">Next</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Usabilidad;
