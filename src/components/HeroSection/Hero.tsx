"use client"
import Image from "next/image";

import Illustration from "../../../public/Illustration.svg";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="w-full bg-[#F5F7FA] h-[calc(100dvh_-_3.5rem)] flex flex-col lg:flex-row items-center justify-center">
            <motion.div
                initial={{ opacity: 0, translateX: -1000 }}
                animate={{ opacity: 1, translateX: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
            >
                <div className="flex flex-col gap-2 h-56 w-[80%] mx-auto lg:w-[40dvw]">
                    <h1 className="text-[#4D4D4D] w-96 text-xl lg:text-4xl font-bold">Lessons and insights <span className="text-[#4CAF4F]">from 8 years</span> </h1>
                    <p className="text-xs text-[#717171]">Where to grow your business as a photographer: site or social media?</p>
                    <button
                        className="text-white mt-5 text-sm p-2 rounded-md w-24 bg-[#4CAF4F] border transition-all duration-300 border-transparent hover:border-[#4CAF4F] hover:bg-transparent hover:text-[#4CAF4F]"
                    >
                        Register
                    </button>
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, translateX: 1000 }}
                animate={{ opacity: 1, translateX: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
            >
                <div className="w-[40dvw] flex justify-center items-center">
                    <Image src={Illustration} alt={""} width={391} height={407} />
                </div>
            </motion.div>
        </section>
    )
}