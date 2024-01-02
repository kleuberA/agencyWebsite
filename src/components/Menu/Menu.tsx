"use client"
import Image from "next/image";

import Logo from "../../../public/Logo.svg";
import { useState } from "react";
import { motion } from "framer-motion";

interface MenuProps {

}
export default function Menu(props: MenuProps) {

    let [open, setOpen] = useState(false);

    return (
        <header className="w-full bg-[#F5F7FA] h-14">
            <motion.div
                className="container hidden mx-auto lg:flex flex-row justify-around items-center h-full"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >

                <div>
                    <Image src={Logo} alt={""} width={155} height={24} />
                </div>
                <div>
                    <ul className="flex flex-row gap-5">
                        <li className="text-sm text-[#18191F] font-semibold hover:text-[#4CAF4F] transition-all duration-300 cursor-pointer">Home</li>
                        <li className="text-sm text-[#18191F] hover:text-[#4CAF4F] transition-all duration-300 cursor-pointer">Service</li>
                        <li className="text-sm text-[#18191F] hover:text-[#4CAF4F] transition-all duration-300 cursor-pointer">Feature</li>
                        <li className="text-sm text-[#18191F] hover:text-[#4CAF4F] transition-all duration-300 cursor-pointer">Product</li>
                        <li className="text-sm text-[#18191F] hover:text-[#4CAF4F] transition-all duration-300 cursor-pointer">Testimonial</li>
                        <li className="text-sm text-[#18191F] hover:text-[#4CAF4F] transition-all duration-300 cursor-pointer">FAQ</li>
                    </ul>
                </div>
                <div className="flex flex-row gap-3">
                    <button className="text-[#4CAF4F] text-sm">Login</button>
                    <button
                        className="text-white text-sm p-2 rounded-md w-24 bg-[#4CAF4F] border transition-all duration-300 border-transparent hover:border-[#4CAF4F] hover:bg-transparent hover:text-[#4CAF4F]"
                    >
                        Sign up
                    </button>
                </div>

            </motion.div>
            <div className="container flex mx-auto lg:hidden flex-row justify-around items-center h-full">
                <div className="lg:hidden flex flex-row justify-between w-[90%]">
                    <Image src={Logo} alt={""} width={155} height={24} />
                    <svg onClick={() => setOpen(!open)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </div>
            </div>
            {open && (
                <div className="relative">
                    <div className="absolute w-full h-screen bg-black/75 flex flex-col">
                        <div className="w-full h-full">
                            <ul className="flex flex-col gap-1 justify-center items-center h-full">
                                <li className="text-xl text-white font-semibold hover:text-[#4CAF4F] transition-all duration-300 cursor-pointer">Home</li>
                                <li className="text-xl text-white hover:text-[#4CAF4F] transition-all duration-300 cursor-pointer">Service</li>
                                <li className="text-xl text-white hover:text-[#4CAF4F] transition-all duration-300 cursor-pointer">Feature</li>
                                <li className="text-xl text-white hover:text-[#4CAF4F] transition-all duration-300 cursor-pointer">Product</li>
                                <li className="text-xl text-white hover:text-[#4CAF4F] transition-all duration-300 cursor-pointer">Testimonial</li>
                                <li className="text-xl text-white hover:text-[#4CAF4F] transition-all duration-300 cursor-pointer">FAQ</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </header>
    )
}