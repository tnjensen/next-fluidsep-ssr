"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
export default function DropdownMenu() {
    const path = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const closeMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <nav className="dropdown absolute top-12 right-4 z-50 bg-[var(--white)] border border-[var(--light-grey)] rounded-md p-4">
            {!isMenuOpen ? (
            <ul className="flex-col">
                <li className="py-1">
                    <Link href="/" className={path === "/" ? "active" : ""} onClick={closeMenu}>
                        Home
                    </Link>
                </li>
                <li className="py-1">
                    <Link href="/about" className={path === "/about" ? "active" : ""} onClick={closeMenu}>
                        About
                    </Link>
                </li>
                <li className="py-1">
                    <Link href="/contact" className={path === "/contact" ? "active" : ""} onClick={closeMenu}>
                        Contact
                    </Link>
                </li>
                <li className="py-1">
                    <Link href="/blog" className={path === "/blog" ? "active" : ""} onClick={closeMenu}>
                        Blog
                    </Link>
                </li>
            </ul>
            ) : ('')
        }
        </nav> 
    );
}