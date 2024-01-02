import Image from "next/image";

import Illustration from "../../../public/Illustration.svg";

export default function Hero() {
    return (
        <section className="w-full bg-[#F5F7FA] h-[calc(100dvh_-_3.5rem)] flex flex-row items-center justify-center">
            <div className="flex flex-col gap-2 h-56 w-[40dvw]">
                <h1 className="text-[#4D4D4D] w-96 text-4xl font-bold">Lessons and insights <span className="text-[#4CAF4F]">from 8 years</span> </h1>
                <p className="text-xs text-[#717171]">Where to grow your business as a photographer: site or social media?</p>
                <button
                    className="text-white mt-5 text-sm p-2 rounded-md w-24 bg-[#4CAF4F] border transition-all duration-300 border-transparent hover:border-[#4CAF4F] hover:bg-transparent hover:text-[#4CAF4F]"
                >
                    Register
                </button>
            </div>
            <div className="w-[40dvw] flex justify-center items-center">
                <Image src={Illustration} alt={""} width={391} height={407} />
            </div>
        </section>
    )
}