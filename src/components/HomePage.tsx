"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HomePage() {
  const path = usePathname();

  return (
    <div className='home'>
      <div className='home-content'>
        <h1>Downhole Processing <span>Plant</span></h1>
        <Link href={"/about"} className='read-more-btn'>Read more</Link>

        <div className="img-attr">
          {path === "/" &&
            <span>Image by <a href="https://www.freepik.com/free-photo/gradient-archipelago-bubble-drops-water_5523926.htm#page=3&query=oil%20water&position=23&from_view=keyword&track=ais_user&uuid=7b3880d9-0db4-4d80-ab50-274387082496">Freepik</a></span>
          }
        </div>
      </div>
    </div>
  )
}