import Image from "next/image";
import HeritageVideo from "@/components/HeritageVideo";
import LaunchPlaque from "@/components/LaunchPlaque";
import NewsletterForm from "@/components/NewsletterForm";
import SocialLinks from "@/components/SocialLinks";
import { HeritageDivider, KalkaWatermark } from "@/components/HeritageOrnaments";

export default function Home() {
  return (
    <div className="launch-page">
      <main className="hero">
        <section className="film" aria-label="A glimpse into The Sibarita Makers">
          <HeritageVideo />
        </section>
        <section className="announcement" aria-label="The Sibarita Makers launch">
          <KalkaWatermark className="collections-mandala mandala-top" /><KalkaWatermark className="collections-mandala mandala-bottom" />
          <div className="announcement-inner">
            <div className="logo-wrap reveal"><Image src="/image/SIBARITA_LOGO.png" alt="The Sibarita Makers — curators of luxury heritage textiles and crafts" width={1280} height={1280} sizes="(max-width: 767px) 36dvh, (max-height: 500px) 29dvh, min(42dvh, 440px)" preload className="brand-logo" /></div>
            <p className="eyebrow reveal">A legacy in the making</p>
            <HeritageDivider />
            <p className="description reveal">Discover a world where heritage craftsmanship<br className="desktop-break"/> meets timeless luxury.</p>
            {/* <div className="brand-signature reveal">
              <Image src="/image/The Sibarita Makers_MS-02 (1).png" alt="The Sibarita Makers" width={4697} height={5904} sizes="140px" className="brand-signature-logo" />
              <Image src="/image/The Sibarita Makers_TEXT logo_raw file-02 (1).png" alt="Curators of luxury heritage textiles and crafts" width={4742} height={587} sizes="(max-width: 767px) 90vw, (max-width: 1280px) 47vw, 600px" className="brand-tagline-logo" />
            </div> */}
            <HeritageDivider compact />
            <LaunchPlaque />
            <NewsletterForm />
            <SocialLinks />
          </div>
        </section>
      </main>
    </div>
  );
}
