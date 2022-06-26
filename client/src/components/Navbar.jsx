import { useState } from 'react';
import { HiMenu } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';

import logo from '../../images/logo.png'
const NavbarItem = ({ title, classProps }) => {
    return (
        < li className={`mx-4 cursor-pointer ${classProps}`}>
            {title}
        </li >
    );
}
const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <nav className='w-full flex md:justify-center justify-between item-center p-4'>
            <div className='md:flex-[0.5] flex-initial justify-center items-center'>
                <img src={logo} alt="KRIPTOWEB" class="w-32 cursor-pointer" />
            </div>
            {/* <ul className='text-black md:flex hidden list-none flex-row justify-between items-center flex-initial'>
                {["Market", "Exchange", "Tutorial", "Wallet"].map((item, index) => (
                    <NavbarItem key={item + index} title={item} />
                ))}
                <li className='bg-[#212121] text-white py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#3e3e3e]'>Login</li>
            </ul> */}
            <div className="flex relative">
                {toggleMenu
                    ? <AiOutlineClose className="text-black text-xl cursor-pointer" onClick={() => setToggleMenu(false)} />
                    : <HiMenu className="text-black text-lg cursor-pointer" onClick={() => setToggleMenu(true)} />}
                {toggleMenu && (
                    <ul
                        className='z-10 fixed top-0 -right-2 p-3 w-full h-screen shadow-2xl list-none 
                        flex flex-col justify-start items-end rounded-md bg-white'
                    >
                        <li className='text-xl w-full my-2 animate-slide-out'>
                            <AiOutlineClose  onClick={() => setToggleMenu(false)} />
                        </li>
                        {["Login", "Market", "Exchange", "Tutorial", "Wallet"].map((item, index) => (
                            <NavbarItem key={item + index} title={item} classProps="my-2 text-lg" />
                        ))}
                        <li>
                            <p className="p-3">Developed by Krithika Nithyanandam</p>
                        </li>
                    </ul>
                )}
            </div>
        </nav>
    );
}
export default Navbar;