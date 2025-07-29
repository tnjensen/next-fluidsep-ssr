"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DropdownMenu() {
    const path = usePathname();

    return (
        <nav className="dropdown absolute top-12 right-4 z-50 bg-[var(--white)] border border-[var(--light-grey)] rounded-md p-4">
            <ul className="flex-col">
                <li className="py-1">
                    <a href="/" className={path === "/" ? "active" : ""}>
                        Home
                    </a>
                </li>
                <li className="py-1">
                    <a href="/about" className={path === "/about" ? "active" : ""}>
                        About
                    </a>
                </li>
                <li className="py-1">
                    <a href="/contact" className={path === "/contact" ? "active" : ""}>
                        Contact
                    </a>
                </li>
                <li className="py-1">
                    <a href="/blog" className={path === "/blog" ? "active" : ""}>
                        Blog
                    </a>
                </li>
            </ul>
        </nav>
    );
}