import Image from "next/image";

interface OverlayImage1Props {
    imageSrc: string;
    text: string;
}

export default function OverlayImage1({ imageSrc, text }: OverlayImage1Props) {
    return (
        <div className="relative w-full h-[60vh] flex items-center justify-center">
            {/* Background Image */}
            <div>
                <Image 
                    src={imageSrc} 
                    alt={text}
                    fill
                    sizes='100vw'
                    style={{ objectFit: "cover" }}
                />
            </div>

            {/* Overlay Text */}
            <h1 className="relative z-10 text-2xl md:text-3xl font-extrabold text-white text-center text-outline">
                {text}
            </h1>
        </div>
    )
}
