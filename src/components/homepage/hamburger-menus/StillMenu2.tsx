"use client"

import { useState } from "react";
import Link from "next/link";
import Image from 'next/image';

export default function StillMenu2() {
    const [isOpen, set_isOpen] = useState(false);   // Tracks if menu is open

    const toggleMenu = () => set_isOpen(!isOpen);

    return (
        <div>
            {/* Hamburger button in header (Appears when menu is closed) */}
            <button
                className="
                    absolute top-8 right-8 text-white
                    hover:scale-110 transition-transform duration-200
                "
                onClick={toggleMenu}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                    fill="none"
                    stroke="#D3D3D3"
                    strokeWidth="2"
                >
                    <line x1="3" y1="5" x2="21" y2="5" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="19" x2="21" y2="19" />
                </svg>
            </button>

            {/* X button (appears when menu is open) */}
            {isOpen && (
                <button
                    className="
                        absolute top-8 right-8 text-white z-50
                        hover:scale-110 transition-transform duration-200
                    "
                    onClick={toggleMenu}
                    aria-label="Close menu"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="w-6 h-6"
                        fill="none"
                        stroke="#D3D3D3"
                        strokeWidth="2"
                        strokeLinecap="round"
                    >
                        <line x1="4" y1="4" x2="20" y2="20" />
                        <line x1="4" y1="20" x2="20" y2="4" />
                    </svg>
                </button>
            )}

            {/* Menu Content */}
            <div
                className={`
                    fixed top-0 right-0 h-full bg-[#1f1f1f] z-40
                    transition-all duration-300 ease-in-out overflow-hidden flex flex-col
                    ${isOpen ? "max-w-screen translate-x-0" : "max-w-screen translate-x-full"}
                `}
            >
                <nav className="flex flex-col items-center justify-center space-y-4 text-white font-bold h-full w-screen">
                    <Link href="/" className={`relative text-xl py-2 px-8 block transition-colors duration-300 group hover:translate-y-[1px] ease-in-out transition-transform`}>
                        <span className="relative">
                            HOME
                            <span className="absolute bottom-[-3px] left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                        </span>
                    </Link>
                    <Link href="/tour" className={`relative text-xl py-2 px-8 block transition-colors duration-300 group hover:translate-y-[1px] ease-in-out transition-transform`}>
                        <span className="relative">
                            TOUR
                            <span className="absolute bottom-[-3px] left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                        </span>
                    </Link>
                    <Link href="/music" className={`relative text-xl py-2 px-8 block transition-colors duration-300 group hover:translate-y-[1px] ease-in-out transition-transform`}>
                        <span className="relative">
                            MUSIC
                            <span className="absolute bottom-[-3px] left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                        </span>
                    </Link>
                    <Link href="/shop" className={`relative text-xl py-2 px-8 block transition-colors duration-300 group hover:translate-y-[1px] ease-in-out transition-transform`}>
                        <span className="relative">
                            SHOP
                            <span className="absolute bottom-[-3px] left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                        </span>
                    </Link>
                    <Link href="/bio" className={`relative text-xl py-2 px-8 block transition-colors duration-300 group hover:translate-y-[1px] ease-in-out transition-transform`}>
                        <span className="relative">
                            BIO
                            <span className="absolute bottom-[-3px] left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                        </span>
                    </Link>

                    {/* Social media icons and links */}
                    <div className="flex justify-center space-x-6 mt-6">
                        <a href="" target="_blank" rel="noopener noreferrer">
                            <Image src="/icons/icons8-instagram.svg" alt="Instagram" width={24} height={24} className="transition-transform duration-200 hover:scale-110" />
                        </a>
                        <a href="" target="_blank" rel="noopener noreferrer">
                            <Image src="/icons/spotify-white-icon.svg" alt="Spotify" width={24} height={24} className="transition-transform duration-200 hover:scale-110" />
                        </a>
                        <a href="" target="_blank" rel="noopener noreferrer">
                            <Image src="/icons/icons8-apple-music.svg" alt="Apple Music" width={24} height={24} className="transition-transform duration-200 hover:scale-110" />
                        </a>
                        <a href="" target="_blank" rel="noopener noreferrer">
                            <Image src="/icons/facebook-app-round-white-icon.svg" alt="Facebook" width={24} height={24} className="transition-transform duration-200 hover:scale-110" />
                        </a>
                    </div>
                </nav>

            </div>

        </div>
    );
};
