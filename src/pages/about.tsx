
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Fluidsep - About"
}
export default function About() {
  
  return (
    <div className="about">
        <div className="video-container">
          <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vT-CTsBBe0bGOfoEkp6er6X-cDTI5QlHlpPnZ_kQb-XaKFgE70-Os857xtk82fkvQTYUEfYkYJxCK_x/embed?start=false&loop=false&delayms=3000" allowFullScreen={true}></iframe>
        </div>
    </div>
  )
}
