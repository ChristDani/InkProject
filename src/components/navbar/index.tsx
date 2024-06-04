// import { useEffect, useRef, useState } from 'react';
import Logo_Image from '../../common/images/Logo_Image'
import Logo_Text from '../../common/images/Logo_Text';

const Navbar = () => {
    return (
        <>
            <nav className='w-[1440px] h-[180px] flex justify-between mx-auto my-14'>
                <div className='flex items-center gap-3'>
                    <Logo_Image />
                    <Logo_Text />
                </div>
                <div className='flex items-center'>
                    <ul className='list-none flex justify-around text-black gap-8 items-center'>
                        <li>Inicio</li>
                        <li>Beneficios</li>
                        <li>Planes</li>
                        <li>¿Por qué Inkuña?</li>
                        <li className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none cursor-pointer'>Reservar Demo</li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar;