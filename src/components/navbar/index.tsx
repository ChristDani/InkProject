// import AppIco from '../../common/icons/App_Ico';
import Logo_Image from '../../common/images/Logo_Image'
import Logo_Text from '../../common/images/Logo_Text';

const Navbar = () => {
    return (
        <>
            <nav>
                <div>
                    <div>
                        <Logo_Image />
                        <Logo_Text />
                    </div>
                    <div>
                        <ul className='list-none'>
                            <li>Inicio</li>
                            <li>Beneficios</li>
                            <li>Planes</li>
                            <li>¿Por qué Inkuña?</li>
                            <li>Reservar Demo</li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;