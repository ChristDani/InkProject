import AppIco from '../../common/icons/App_Ico';
import GmailIco from '../../common/icons/gmailIco';
import PhoneIco from '../../common/icons/phoneIco';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import DownloadAS from '../../common/images/downloadAS';
import DownloadGS from '../../common/images/downloadGS';

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
                <div>
                  <div className="flex flex-col">
                    <div className="text-white">
                      Legales
                    </div>
                    <div className="text-white">
                      Terminos y Condiciones
                    </div>
                    <div className="text-white">
                      Politicas de Privacidad
                    </div>
                  </div>
                </div>
                <div className="text-white">
                  <div className="flex flex-col">
                    <div className="text-white">
                      Descarga la app
                    </div>
                    <div className="flex">
                      <DownloadGS />
                      <DownloadAS />
                    </div>
                  </div>
                </div>
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
                  <span className="text-white">
                    Siguenos en
                  </span>
                  <div className="flex flex-row">
                    <div className="w-10 h-10">
                      <FaFacebookF
                        style={{ color: '#2F5FE3!important' }}
                      />
                    </div>
                    <div className="w-10 h-10">
                      <FaTwitter />
                    </div>
                    <div className="w-10 h-10">
                      <FaLinkedinIn />
                    </div>
                    <div className="w-10 h-10">
                      <FaInstagram />
                    </div>
                  </div>
                </div>
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
