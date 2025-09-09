import '@/styles/home.scss'
import '@/styles/about.scss'
import '@/styles/contact.scss'
import '@/styles/blog.scss';
import '@/styles/header.scss'
import '@/styles/footer.scss'
import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Header />
      <div className='wrapper'>
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  );
}
