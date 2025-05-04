"use client"

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";
import { rye } from "@/styles/fonts";
import SlidingMenu1 from "../hamburger-menus/SlidingMenu1";

export function Header1() {
    const pathname = usePathname();
    const [isScrolled, set_isScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            set_isScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header 
            className={`
                bg-[#1f1f1f] text-white py-6 fixed top-0 w-full z-50 transition-all duration-400
                ${isScrolled ? "lg:bg-[#1f1f1f] lg:shadown-lg" : "lg:bg-transparent"}
            `}
        >
            {/* Large screen header - Only visible on larger screens */}
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between lg:flex hidden">
                <div className={`text-2xl font-bold pl-15 z-50 ${rye.variable} font-rye`}>Artist Name</div>

                <nav className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 flex justify-center space-x-0 font-bold text-sm">
                    <Link href="/" className={`px-3 py-2 transition duration-200 ${pathname === "/" ? "underline underline-offset-4 hover:decoration-2" : "hover:underline decoration-1 underline-offset-4"}`}>HOME</Link>
                    <Link href="/tour" className={`px-3 py-2 transition duration-200 ${pathname === "/tour" ? "underline underline-offset-4 hover:decoration-2" : "hover:underline decoration-1 underline-offset-4"}`}>TOUR</Link>
                    <Link href="/music" className={`px-3 py-2 transition duration-200 ${pathname === "/music" ? "underline underline-offset-4 hover:decoration-2" : "hover:underline decoration-1 underline-offset-4"}`}>MUSIC</Link>
                    <Link href="/shop" className={`px-3 py-2 transition duration-200 ${pathname === "/shop" ? "underline underline-offset-4 hover:decoration-2" : "hover:underline decoration-1 underline-offset-4"}`}>SHOP</Link>
                    <Link href="/bio" className={`px-3 py-2 transition duration-200 ${pathname === "/bio" ? "underline underline-offset-4 hover:decoration-2" : "hover:underline decoration-1 underline-offset-4"}`}>BIO</Link>
                </nav>
            </div>

            <div className="max-w-7xl mx-auto px-6 flex items-center justify-center md:flex lg:hidden">
                <div className={`text-2xl font-bold mx-auto z-50 ${rye.variable} font-rye`}>Artist Name</div>
                <SlidingMenu1 pathname={pathname} />
            </div>
            
        </header>
    );
}
