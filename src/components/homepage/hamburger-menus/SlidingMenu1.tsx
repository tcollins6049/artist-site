"use client"

import { useState } from "react";

export default function SlidingMenu({ pathname }: { pathname: string }) {
    const [isOpen, set_isOpen] = useState(false);   // Tracks if menu is open

    const toggleMenu = () => set_isOpen(!isOpen);   // Toggle menu on or off

    return (
        <div>
            {/* Hamburger button in header (Appears when menu is closed) */}
            <button
                className="
                    absolute top-8 left-8 text-white
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
                    strokeWidth="1"
                    strokeLinecap="round"
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
                        absolute top-8 left-8 text-white z-50
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
                    fixed top-0 left-0 h-full bg-[#1f1f1f] z-40
                    transition-all duration-300 ease-in-out overflow-hidden flex flex-col
                    ${isOpen ? "max-w-screen-md md:w-[50%] translate-x-0" : "max-w-screen -translate-x-full"}
                `}
            >
                <nav className="flex flex-col space-y-1 text-white font-bold mt-24 w-screen">
                    <a href="/" className={`text-lg py-2 px-8 block transition-colors duration-200 ${ pathname === "/" ? "bg-[#2a2a2a] hover:bg-[#333]" : "hover:bg-[#2a2a2a]"}`}>HOME</a>
                    <a href="/tour" className={`text-lg py-2 px-8 block transition-colors duration-200 ${ pathname === "/tour" ? "bg-[#2a2a2a] hover:bg-[#333]" : "hover:bg-[#2a2a2a]"}`}>TOUR</a>
                    <a href="/music" className={`text-lg py-2 px-8 block transition-colors duration-200 ${ pathname === "/music" ? "bg-[#2a2a2a] hover:bg-[#333]" : "hover:bg-[#2a2a2a]"}`}>MUSIC</a>
                    <a href="/shop" className={`text-lg py-2 px-8 block transition-colors duration-200 ${ pathname === "/shop" ? "bg-[#2a2a2a] hover:bg-[#333]" : "hover:bg-[#2a2a2a]"}`}>SHOP</a>
                    <a href="/bio" className={`text-lg py-2 px-8 block transition-colors duration-200 ${ pathname === "/bio" ? "bg-[#2a2a2a] hover:bg-[#333]" : "hover:bg-[#2a2a2a]"}`}>BIO</a>
                </nav>

                <div className="mt-auto bg-[#222] py-12 px-8 text-center text-white">
                    <div className="flex justify-center space-x-6">
                        <a href="" target="_blank" rel="noopener noreferrer">
                            <img src="/icons/icons8-instagram.svg" alt="Instagram" className="w-6 h-6 transition-transform duration-200 hover:scale-110" />
                        </a>
                        <a href="" target="_blank" rel="noopener noreferrer">
                            <img src="/icons/spotify-white-icon.svg" alt="Spotify" className="w-6 h-6 transition-transform duration-200 hover:scale-110" />
                        </a>
                        <a href="" target="_blank" rel="noopener noreferrer">
                            <img src="/icons/icons8-apple-music.svg" alt="Apple Music" className="w-6 h-6 transition-transform duration-200 hover:scale-110" />
                        </a>
                        <a href="" target="_blank" rel="noopener noreferrer">
                            <img src="/icons/facebook-app-round-white-icon.svg" alt="Facebook" className="w-6 h-6 transition-transform duration-200 hover:scale-110" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
