import HandUp from "../../common/images/handUp";
import CellPhone from "../../common/images/phone";

const Principal = () => {
    return (
        <>
            <div className="flex h-[774px]">
                <div className="w-[50%]">
                    <h1 className="text-7xl">Todo lo que necesitas en una plataforma genial</h1>
                    <span className="text-justify">Sigue los planes de tu equipo, registra su progreso y comenta todo en un solo lugar. Déjanos manejar tu trabajo sin problemas y no te pierdas de lo que hace tu equipo.</span>
                    <ul className="flex gap-4">
                        <li>Ver video</li>
                        <li>Reservar demo</li>
                    </ul>
                    <div>
                        <ul className="flex gap-4">
                            <li>Google play</li>
                            <li>App Store</li>
                            <li>AppGallery</li>
                        </ul>
                    </div>
                </div>
                <div className="w-[50%]">
                    <CellPhone />
                    <HandUp />
                </div>
            </div>
        </>
    )
}

export default Principal;