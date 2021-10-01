import React from 'react';
import { Link } from 'react-scroll';

export default function BigNavbar() {

    return (
        <nav className="hidden w-full lg:flex flex-row font-Bodoni justify-center my-5">
            <ul className="flex flex-row justify-center items-center">
                <Link href="/"><li className="mx-2 text-lg font-bold text-white py-2 hover:text-mainCol transition-all duration-300 cursor-pointer hover:animate-bounce">Home</li></Link>
                <Link to="AboutMe" smooth={true} duration={500}><li className="mx-2 text-lg font-bold text-white py-2 hover:text-mainCol transition-all duration-300 cursor-pointer hover:animate-bounce">About Me</li></Link>
                <Link to="mySkills" smooth={true} duration={500}><li className="mx-2 text-lg font-bold text-white py-2 hover:text-mainCol transition-all duration-300 cursor-pointer hover:animate-bounce">My Skills</li></Link>
                <Link to="myWorks" smooth={true} duration={500}><li className="mx-2 text-lg font-bold text-white py-2 hover:text-mainCol transition-all duration-300 cursor-pointer hover:animate-bounce">My Works</li></Link>
                <Link to="contactMe" smooth={true} duration={500}><li className="mx-2 text-lg font-bold text-white py-2 hover:text-mainCol transition-all duration-300 cursor-pointer hover:animate-bounce">Contact Me</li></Link>
            </ul>
        </nav>
    )
}