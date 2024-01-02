import Image from "next/image";

import ImageCard from "../../../public/ImageCard.svg";
import ImageCard2 from "../../../public/ImageCard2.svg";
import ImageCard3 from "../../../public/ImageCard3.svg";

export default function Caring() {
    return (
        <section className="w-full h-auto lg:h-[70dvh]">
            <div className="mx-auto w-[90%] flex flex-col gap-3">
                <div className="flex flex-col items-center justify-center gap-2 text-center">
                    <h1 className="text-[#4D4D4D] text-4xl font-bold">Caring is the new marketing</h1>
                    <p className="text-xs text-[#717171] w-[90dvw] lg:w-[550px]">The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​</p>
                </div>
                <div className="flex flex-col lg:flex-row gap-24 lg:gap-5 justify-around">
                    <div className="relative">
                        <div>
                            <Image src={ImageCard} alt={""} width={368} height={287} />
                        </div>
                        <div className="absolute bg-[#F5F7FA] w-[70%] rounded-md mx-auto p-3 left-14 -bottom-14 shadow-md shadow-[#ABBED1] flex flex-col items-center justify-center">
                            <h1 className="text-center text-[#717171] text-sm p-3">Creating Streamlined Safeguarding Processes with OneRen</h1>
                            <button className="flex text-sm flex-row gap-2 items-center mb-3 text-[#4CAF4F] hover:text-[#4D4D4D]">
                                Readmore
                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="11" viewBox="0 0 17 11" fill="none">
                                    <path d="M12.4999 9.39905L15.7928 6.10615C16.1834 5.71563 16.1834 5.08246 15.7928 4.69194L12.4999 1.39905M15.4999 5.39905L1.49994 5.39905" stroke="#4CAF4F" strokeWidth="1.5" strokeLinecap="round" />
                                </svg></button>
                        </div>
                    </div>
                    <div className="relative">
                        <div>
                            <Image src={ImageCard2} alt={""} width={368} height={287} />
                        </div>
                        <div className="absolute bg-[#F5F7FA] w-[70%] rounded-md mx-auto p-3 left-14 -bottom-14 shadow-md shadow-[#ABBED1] flex flex-col items-center justify-center">
                            <h1 className="text-center text-[#717171] text-sm p-3">What are your safeguarding responsibilities and how can you manage them?</h1>
                            <button className="flex text-sm flex-row gap-2 items-center mb-3 text-[#4CAF4F] hover:text-[#4D4D4D]">
                                Readmore
                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="11" viewBox="0 0 17 11" fill="none">
                                    <path d="M12.4999 9.39905L15.7928 6.10615C16.1834 5.71563 16.1834 5.08246 15.7928 4.69194L12.4999 1.39905M15.4999 5.39905L1.49994 5.39905" stroke="#4CAF4F" strokeWidth="1.5" strokeLinecap="round" />
                                </svg></button>
                        </div>
                    </div>
                    <div className="relative">
                        <div>
                            <Image src={ImageCard3} alt={""} width={368} height={287} />
                        </div>
                        <div className="absolute bg-[#F5F7FA] w-[70%] rounded-md mx-auto p-3 left-14 -bottom-14 shadow-md shadow-[#ABBED1] flex flex-col items-center justify-center">
                            <h1 className="text-center text-[#717171] text-sm p-3">Revamping the Membership Model with Triathlon Australia</h1>
                            <button className="flex text-sm flex-row gap-2 items-center mb-3 text-[#4CAF4F] hover:text-[#4D4D4D]">
                                Readmore
                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="11" viewBox="0 0 17 11" fill="none">
                                    <path d="M12.4999 9.39905L15.7928 6.10615C16.1834 5.71563 16.1834 5.08246 15.7928 4.69194L12.4999 1.39905M15.4999 5.39905L1.49994 5.39905" stroke="#4CAF4F" strokeWidth="1.5" strokeLinecap="round" />
                                </svg></button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}