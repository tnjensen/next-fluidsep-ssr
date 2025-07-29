"use client"

import { usePathname } from "next/navigation";
import { useState, useRef } from "react";
import { FaBars } from "react-icons/fa";
import DropdownMenu from "./DropdownMenu";
import { useOutsideClick } from "../hooks/useOutsideClick";
import Link from "next/link";

export default function Header1() {
    const path = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);

    const showMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    useOutsideClick(menuRef, () => {
        if (isMenuOpen) {
            setIsMenuOpen(false);
        }
    });

    return (
        <header className="px-4">
            <div className="header-content flex justify-between align-center max-w-7xl mx-auto">
                <Link href={"/"}>
                    <img src={"/images/Fluidsep_logo_1.png"} alt='Logo' className='p-4' />
                </Link>
                <FaBars id="menu-button" className="sm:hidden cursor-pointer fixed right-6 top-4" onClick={showMenu} />
                {isMenuOpen ? (
                    <div ref={menuRef}>
                        <DropdownMenu />
                    </div>
                ) : (
                <nav className="visible flex justify-center place-items-center">
                    <ul className="sm:flex hidden gap-2 justify-center mt-12 mb-4 mr-2 sm:mt-1 align-center">
                        <li className="py-1">
                            <Link href="/" className={path === "/" ? "active" : ""}>
                                Home
                            </Link>
                        </li>
                        <li className="py-1">
                            <Link href="/about" className={path === "/about" ? "active" : ""}>
                                About
                            </Link>
                        </li>
                        <li className="py-1">
                            <Link href="/contact" className={path === "/contact" ? "active" : ""}>
                                Contact
                            </Link>
                        </li>
                        <li className="py-1">
                            <Link href="/blog" className={path === "/blog" ? "active" : ""}>
                                Blog
                            </Link>
                        </li>
                    </ul>
                </nav>
            )}
            </div>
        </header>
    );
}