import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Fluidsep - Contact"
}
export default function Contact() {
 
  return (
    <div className='contact'>
      <div className='wrap'>
        <div className='hero'>
          <h1>Contact us</h1>
        </div>
      </div>
      <main className="contact-content" >
          <p className=''>Email: <Link href="mailto:info@fluidsep.com">info@fluidsep.com</Link><br/>
              Mobile: +47 930 28 690</p>
          <div className='location'>
            <p>Find our office:</p>
            <div>
              <a href ="https://goo.gl/maps/RthYAzmyX252">Kronprins Olavs Alle 22, 7030 Trondheim</a>
            </div>
            <div className="map1">
              <img src='/images/fluidsep_map.png' width={350} height={350} alt='map' />
            </div>
          </div>
      </main>
    </div>
  )
}
