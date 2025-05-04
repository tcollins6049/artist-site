import { Geist, Playfair_Display, Marcellus, Alegreya, Rye } from "next/font/google";


// Good font for whole page
export const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

// Slightly styled font
export const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-playfair",
});

// Decent, a little faded looking
export const marcellus = Marcellus({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-marcellus",
});

export const alegreya = Alegreya({
  subsets: ["latin"],
  weight: ["400", "700"], // Adjust weights as needed
  variable: "--font-alegreya",
});

// Very country looking, still just decent
export const rye = Rye({
  subsets: ["latin"],
  weight: "400", // Rye is mostly used in its regular weight
  variable: "--font-rye",
});