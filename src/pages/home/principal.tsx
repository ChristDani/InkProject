import HandUp from "../../common/images/handUp";
import CellPhone from "../../common/images/phone";
import Play from '../../common/icons/Play';

const Principal = () => {
    return (
        <>
            <div className="w-full h-full MainGradient absolute">

            </div>
            <div className="flex h-[774px]">
                <div className="w-[50%]">
                    <h1 className="lato-black">Todo lo que necesitas en una plataforma genial</h1>
                    <span className="text-justify">Sigue los planes de tu equipo, registra su progreso y comenta todo en un solo lugar. Déjanos manejar tu trabajo sin problemas y no te pierdas de lo que hace tu equipo.</span>
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
                    <div>
                        <span>Descargalo en</span>
                        <ul className="flex gap-4">
                            <li>Google play</li>
                            <li>App Store</li>
                            <li>AppGallery</li>
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