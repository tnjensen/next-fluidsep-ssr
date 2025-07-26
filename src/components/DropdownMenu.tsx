"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DropdownMenu() {
    const path = usePathname();

    return (
        <nav className="dropdown absolute top-12 right-4 z-50 bg-[var(--white)] border border-[var(--light-grey)] rounded-md p-4">
            <ul className="flex-col">
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
    );
}