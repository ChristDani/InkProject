import AppIco from '../../common/icons/App_Ico';

const Footer = () => {
  return (
    <>
      <div
        className="min-h-[690px] w-full relative"
        style={{ backgroundImage: 'URL("src/images/public/bg_footer.svg")' }}>
        <div>
          <div className="w-[1440px] mx-auto min-h-[603px] mt-[70px] mb-[17px]">
            <div className="flex flex-row min-h-[487px] gap-1">
              <div className="flex flex-col min-w-[482.5px] justify-between py-5">
                <div><AppIco /></div>
                <div className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, labore vitae. Laudantium rem adipisci quod veritatis labore accusamus et cupiditate explicabo impedit, repellat, dolorum animi nihil eum ab officia minima!</div>
                <input className="w-[474px] h-[65px] rounded-[30px]" type="text" placeholder="Ingrese su correo electronico" />
              </div>
              <div className="flex flex-col min-w-[482.5px] justify-between py-5">
                <div className="text-white">Legales</div>
                <div className="text-white">Descarga la app</div>
                <button className="w-[180px] bg-[#2F5FE3] h-[65px] rounded-[30px] text-white">Suscribete</button>
              </div>
              <div className="flex flex-col min-w-[482.5px] justify-between py-5">
                <div className="flex flex-col">
                  <span className="text-white">
                    Contacto
                  </span>
                  <span className="text-white">
                    Nuestro canal de soporte
                  </span>
                  <span className="text-white">
                    (+51) 958 346 375
                  </span>
                  <span className="text-white">
                    Escribenos por correo electronico
                  </span>
                  <span className="text-white">
                    info@inikuna.pe
                  </span>
                </div>
                <div className="text-white">Siguenos en</div>
              </div>
            </div>
            <hr />
            <div className="flex justify-center mt-12">
              <span className="text-white">© Copyright 2022 | inkuna.pe | Todos los derechos son reservados</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
