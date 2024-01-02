import Image from "next/image";
import Pana from "../../../public/Pana.svg";

export default function Did() {
    return (
        <section className="w-full h-[calc(100dvh_-_3.5rem)] flex flex-col lg:flex-row items-center justify-center">
            <div className="w-[40dvw] flex justify-center items-center">
                <Image src={Pana} alt={""} width={391} height={407} />
            </div>
            <div className="flex flex-col gap-5 lg:gap-2 h-56 w-[90dvw] lg:w-[40dvw]">
                <h1 className="text-[#4D4D4D] text-xl lg:text-4xl font-bold">How to design your site footer like we did</h1>
                <p className="text-xs text-[#717171]">
                    Donec a eros justo. Fusce egestas tristique ultrices.
                    Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu,
                    at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis.
                    In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus.
                    In euismod augue vitae nisi ultricies, non aliquet urna tincidunt.
                    Integer in nisi eget nulla commodo faucibus efficitur quis massa.
                    Praesent felis est, finibus et nisi ac, hendrerit venenatis libero.
                    Donec consectetur faucibus ipsum id gravida.</p>
                <button
                    className="text-white mt-5 text-sm p-2 rounded-md w-24 bg-[#4CAF4F] border transition-all duration-300 border-transparent hover:border-[#4CAF4F] hover:bg-transparent hover:text-[#4CAF4F]"
                >
                    Learn More
                </button>
            </div>
        </section>
    )
}