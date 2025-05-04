interface RoundedButtonProps {
    text: string;
    hasBorder?: boolean;
    isTransparent?: boolean;
    bgColor?: string;
    textColor?: string;
    moreSettings?: string;  // If another component wants to add additional customization to the button
}

export default function RoundedButton({
    text,
    hasBorder = false,
    isTransparent = false,
    bgColor = "blue",
    textColor = "white",
    moreSettings = "",
}: RoundedButtonProps) {

    return (
        <button
            className={`
                rounded-xl font-semibold transition
                ${hasBorder ? "border-2 border-black" : ""}
                ${isTransparent ? "bg-transparent" : `${bgColor}`}
                ${textColor} text-sm px-6 py-3
                shadow-md hover:shadow-xl
                hover:brightness-110 hover:scale-101
                ${moreSettings}
            `}
        >
            {text}
        </button>
    );
}
