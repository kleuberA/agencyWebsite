import Image from "next/image";

import Logo from "../../../public/Logo.svg";

interface MenuProps {

}
export default function Menu(props: MenuProps) {
    return (
        <header className="w-full bg-[#F5F7FA] h-14">
            <div className="container mx-auto flex flex-row justify-around items-center h-full">
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
            </div>
        </header>
    )
}