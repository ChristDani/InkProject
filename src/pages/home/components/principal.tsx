import HandUp from "../../../common/images/handUp";
import CellPhone from "../../../common/images/phone";
import Play from '../../../common/icons/Play';

import { BiLogoPlayStore } from "react-icons/bi";
import { FaApple } from "react-icons/fa";
import { RiShoppingBag2Fill } from "react-icons/ri";

const Principal = () => {
    return (
        <>
            <div className="w-full min-h-[1098px] h-full MainGradient absolute">

            </div>
            <div className="flex h-[774px]">
                <div className="w-[50%] flex flex-col gap-8">
                    <h1 className="lato-black">Todo lo que necesitas en una plataforma genial</h1>
                    <div className="text-justify">Sigue los planes de tu equipo, registra su progreso y comenta todo en un solo lugar. Déjanos manejar tu trabajo sin problemas y no te pierdas de lo que hace tu equipo.</div>
                    <ul className="flex gap-4">
                        <li>
                            <div className="cursor-pointer flex items-center justify-center gap-6 min-h-[65px] min-w-[185px] bg-white rounded-[30px]">
                                <span className="lato-bold">
                                    Ver video
                                </span>
                                <Play />
                            </div>
                        </li>
                        <li>
                            <div className="cursor-pointer flex items-center justify-center min-h-[65px] min-w-[165px] bg-[#2F5FE3] rounded-[30px]">
                                <span className="lato-bold text-white">
                                    Reservar demo
                                </span>
                            </div>
                        </li>
                    </ul>
                    <div className="flex flex-col gap-5">
                        <div className="lato-medium">Descargalo en</div>
                        <ul className="flex gap-4">
                            <li>
                                <div className="cursor-pointer flex items-center justify-center gap-1 min-h-[30px] min-w-[120px] bg-black rounded-[30px]">
                                    <BiLogoPlayStore color="white" />
                                    <span className="lato-light text-white">
                                        Google play
                                    </span>
                                </div>
                            </li>
                            <li>
                                <div className="cursor-pointer flex items-center justify-center gap-1 min-h-[30px] min-w-[120px] bg-black rounded-[30px]">
                                    <FaApple color="white" />
                                    <span className="lato-light text-white">
                                        App Store
                                    </span>
                                </div>
                            </li>
                            <li>
                                <div className="cursor-pointer flex items-center justify-center gap-1 min-h-[30px] min-w-[120px] bg-black rounded-[30px]">
                                    <RiShoppingBag2Fill color="white" />
                                    <span className="lato-light text-white">
                                        AppGallery
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="w-[50%] relative">
                    <div className="w-[70%] h-[70%] bg-[#f7d1ca] rounded-[100%] absolute left-[30%] top-[-4%]"></div>
                    <div className="absolute left-[-3%] top-[-19%]">
                        <CellPhone />
                    </div>
                    <div className="absolute left-[23.8%] top-[22.7%]">
                        <HandUp />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Principal;