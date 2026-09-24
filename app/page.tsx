import Image from "next/image";
import Link from "next/link";
import GoldComingSoon from "@/components/GoldComingSoon";
import HeritageVideo from "@/components/HeritageVideo";
import LaunchPlaque from "@/components/LaunchPlaque";
import NewsletterForm from "@/components/NewsletterForm";
import { HeritageDivider, KalkaWatermark } from "@/components/HeritageOrnaments";

export default function Home() {
  return (
    <div className="launch-page">
      <header className="site-header">
        <Link className="wordmark" href="/" aria-label="The Sibarita Makers home">THE SIBARITA MAKERS<span>HERITAGE · CRAFT · LUXURY</span></Link>
        <a className="contact-link" href="mailto:thesibaritamakers@gmail.com"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="1"/><path d="m3 6 9 7 9-7"/></svg><span>thesibaritamakers@gmail.com</span></a>
      </header>
      <main className="hero">
        <section className="film" aria-label="A glimpse into The Sibarita Makers">
          <HeritageVideo />
        </section>
        <section className="announcement" aria-labelledby="coming-soon">
          <KalkaWatermark className="collections-mandala mandala-top" /><KalkaWatermark className="collections-mandala mandala-bottom" />
          <div className="announcement-inner">
            <div className="logo-wrap reveal"><Image src="/image/SIBARITA_LOGO.png" alt="The Sibarita Makers — curators of luxury heritage textiles and crafts" width={1280} height={1280} sizes="(max-width: 767px) 180px, 28vh" preload className="brand-logo" /></div>
            <p className="eyebrow reveal">A legacy in the making</p>
            <HeritageDivider />
            <GoldComingSoon>COMING SOON</GoldComingSoon>
            <p className="description reveal">Discover a world where heritage craftsmanship<br className="desktop-break"/> meets timeless luxury.</p>
            <div className="brand-signature reveal"><p>The Sibarita Makers</p><span>Curators of luxury heritage<br/> textiles and crafts</span></div>
            <HeritageDivider compact />
            <LaunchPlaque />
            <NewsletterForm />
          </div>
          <p className="footer-note">A celebration of artistry. An enduring legacy.</p>
        </section>
      </main>
    </div>
  );
}
