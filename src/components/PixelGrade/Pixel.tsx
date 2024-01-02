import Image from "next/image";
import PixelGrade from "../../../public/PixelGrade.svg";

export default function Pixel() {
    return (
        <section className="w-full h-[calc(100dvh_-_3.5rem)] flex flex-col lg:flex-row items-center justify-center">
            <div className="w-[40dvw] flex justify-center items-center">
                <Image src={PixelGrade} alt={""} width={391} height={407} />
            </div>
            <div className="flex flex-col gap-2 h-56 w-[80dvw] lg:w-[40dvw]">
                <h1 className="text-[#4D4D4D] text-xl lg:text-4xl font-bold">The unseen of spending three years at Pixelgrade</h1>
                <p className="text-xs text-[#717171]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
                <button
                    className="text-white mt-5 text-sm p-2 rounded-md w-24 bg-[#4CAF4F] border transition-all duration-300 border-transparent hover:border-[#4CAF4F] hover:bg-transparent hover:text-[#4CAF4F]"
                >
                    Learn More
                </button>
            </div>
        </section>
    )
}