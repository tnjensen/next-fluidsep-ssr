"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars } from "react-icons/fa";

export default function Header() {
  const path = usePathname();
  const showMenu = () => {
    const menu = document.querySelector("ul");
    if (menu?.classList.contains("hidden")) {
      menu?.classList.remove("hidden");
    }
    else {
      menu?.classList.add('hidden');
    }
    window.addEventListener('mouseup', function (element) {
      if (!(element.target as HTMLElement).closest('#menu-button')) {
        menu?.classList.add('hidden');
      }
    })
  }
  return (
    <header className="px-4">
      <div className="flex justify-between align-center max-w-7xl mx-auto">
        <Link href={"/"}>
          <img src={"/images/Fluidsep_logo_1.png"} alt='Logo' width={400} height={200} className='p-4' />
        </Link>
        <FaBars id="menu-button" className="sm:hidden cursor-pointer fixed right-6 top-4" onClick={showMenu} />
        <nav className="flex justify-center place-items-center">
          <ul className="sm:flex hidden gap-2 justify-center mt-12 mb-4 mr-2 sm:mt-1 align-center">
            <li className="py-1">
              <Link href="/" className={path === "/" ? "active" : ""}>
                Home
              </Link>
            </li>
            <li className="py-1">
              <Link href="/about" className={path === "/about/" ? "active" : ""}>
                About
              </Link>
            </li>
            <li className="py-1">
              <Link href="/contact" className={path === "/contact/" ? "active" : ""}>
                Contact
              </Link>
            </li>
            <li className="py-1">
              <Link href="/blog" className={path === "/blog/" ? "active" : ""}>
                Blog
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}