import AppIco from "../../common/icons/App_Ico";
import GmailIco from "../../common/icons/gmailIco";
import PhoneIco from "../../common/icons/phoneIco";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import DownloadAS from "../../common/images/downloadAS";
import DownloadGS from "../../common/images/downloadGS";

const Footer = () => {
  return (
    <>
      <div
        className="min-h-[690px] w-full relative"
        style={{ backgroundImage: 'URL("src/images/public/bg_footer.svg")' }}
      >
        <div>
          <div className="w-[1440px] mx-auto min-h-[603px] mt-[70px] mb-[17px]">
            <div className="flex flex-row min-h-[487px] gap-1">
              <div className="flex flex-col min-w-[482.5px] justify-between py-5">
                <div className="flex flex-col justify-start gap-6">
                  <AppIco />
                  <div className="text-white lato-medium w-[347px] h-[57px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Magni, labore vitae. Laudantium rem adipisci quod veritatis
                    labore accusamus
                  </div>
                </div>
                <div className="flex flex-col gap-6 justify-end">
                  <div className="text-white w-[422px] h-[58px] lato-black-thin">
                    Unete y recibe nuestro boletin informativo
                  </div>
                  <input
                    className="w-[474px] h-[65px] rounded-[30px]  placeholder:text-start pl-5 placeholder:text-gray-400"
                    type="text"
                    placeholder="Ingrese su correo electronico"
                  />
                </div>
              </div>
              <div className="flex flex-col min-w-[482.5px] justify-between py-5">
                <div>
                  <div className="flex flex-col gap-7">
                    <div className="text-white lato-black-thin" >Legales</div>
                    <div className="text-white">Terminos y Condiciones</div>
                    <div className="text-white">Politicas de Privacidad</div>
                  </div>
                </div>
                <div>
                  <div className="flex flex-col gap-4">
                    <div className="text-white lato-black-thin">Descarga la app</div>
                    <div className="flex gap-2">
                      <DownloadGS />
                      <DownloadAS />
                    </div>
                  </div>
                </div>
                <button className="w-[180px] bg-[#2F5FE3] h-[65px] rounded-[30px] text-white">
                  Suscribete
                </button>
              </div>
              <div className="flex flex-col min-w-[482.5px] justify-between py-5">
                <div className="flex flex-col">
                  <span className="text-white">Contacto</span>
                  <span className="text-white">Nuestro canal de soporte</span>
                  <span className="flex gap-4 text-white">
                    <PhoneIco /> (+51) 958 346 375
                  </span>
                  <span className="text-white">
                    Escribenos por correo electronico
                  </span>
                  <span className="flex gap-4 text-white">
                    <GmailIco /> info@inikuna.pe
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-white">Siguenos en</span>
                  <div className="flex flex-row">
                    <div className="w-10 h-10">
                      <FaFacebookF color="white"/>
                    </div>
                    <div className="w-10 h-10">
                      <FaTwitter color="white"/>
                    </div>
                    <div className="w-10 h-10">
                      <FaLinkedinIn color="white"/>
                    </div>
                    <div className="w-10 h-10">
                      <FaInstagram color="white"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="flex justify-center mt-12">
              <span className="text-white">
                © Copyright 2022 | inkuna.pe | Todos los derechos son reservados
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
