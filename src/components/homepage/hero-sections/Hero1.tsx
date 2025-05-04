import { rye } from "@/styles/fonts";
import RoundedButton from "@/components/shared/buttons/RoundedButton";
import Image from "next/image";

export default function Hero1() {
    return (
        <section 
            className="relative h-[80vh] flex items-center bg-cover bg-center px-10"
        >
            <div className="absolute inset-0">
                <Image
                    src="/images/concert_crowd.jpg"
                    alt="Concert Crowd"
                    fill
                    style={{objectFit:"cover"}}
                />
            </div>

            {/* Medium and Large Screens */}
            <div className="hidden md:block absolute top-[30%] left-[100px]">
                <h1
                    className={`
                        text-5xl font-extrabold text-white
                        text-outline ${rye.variable} font-rye
                    `}
                >
                    2025 TOUR
                </h1>
                <p className="text-xl font-semibold text-white mt-6 text-outline">
                        Tickets on Sale now
                </p>
                <RoundedButton text="GET TICKETS" bgColor="bg-gray-100" textColor="text-gray-800" moreSettings="mt-6" />
            </div>

            {/* Small Screens */}
            <div className="block md:hidden absolute top-[30%] left-1/2 transform -translate-x-1/2 text-center">
                <h1
                    className={`
                        text-4xl font-extrabold text-white
                        text-outline ${rye.variable} font-rye
                    `}
                >
                    2025 TOUR
                </h1>
                <p className="text-lg font-semibold text-white mt-6 text-outline">
                    Tickets on Sale now
                </p>
                <RoundedButton text="GET TICKETS" bgColor="bg-gray-100" textColor="text-gray-800" moreSettings="mt-6" />
            </div>

        </section>
    );
};
