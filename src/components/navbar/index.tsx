// import { useEffect, useRef, useState } from 'react';
import Logo_Image from '../../common/images/Logo_Image'
import Logo_Text from '../../common/images/Logo_Text';

const Navbar = () => {
    return (
        <>
            <nav className='w-[1440px] min-h-[324px] flex justify-between mx-auto'>
                <div className='flex items-center gap-3'>
                    <Logo_Image />
                    <Logo_Text />
                </div>
                <div className='flex items-center'>
                    <ul className='list-none flex justify-around text-black gap-8 items-center'>
                        <li className='cursor-pointer hover:border-b-2 hover:border-cyan-500'>
                            <a href="/">
                                Inicio
                            </a>
                        </li>
                        <li className='cursor-pointer hover:border-b-2 hover:border-cyan-500'>
                            <a href="/beneficios">
                                Beneficios
                            </a>
                        </li>
                        <li className='cursor-pointer hover:border-b-2 hover:border-cyan-500'>
                            <a href="/planes">
                                Planes
                            </a>
                        </li>
                        <li className='cursor-pointer hover:border-b-2 hover:border-cyan-500'>
                            <a href="/nosotros">
                                ¿Por qué Inkuña?
                            </a>
                        </li>
                        <li className='text-white bg-[#2F5FE3] w-[165px] h-[65px] hover:bg-[#2f4ae3] focus:ring-4 focus:ring-blue-300 font-medium rounded-[30px] px-5 py-2.5 me-2 mb-2 focus:outline-none cursor-pointer flex items-center justify-center shadow-sm'>
                            <a href="/demo">
                                Reservar Demo
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar;