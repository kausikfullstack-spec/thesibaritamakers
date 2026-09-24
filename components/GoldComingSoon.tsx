import { Bodoni_Moda } from "next/font/google";

const bodoni = Bodoni_Moda({ subsets: ["latin"], weight: "500", display: "swap" });

export default function GoldComingSoon({ children }: { children: string }) {
  return (
    <h1 id="coming-soon" className={`${bodoni.className} royal-gold-text reveal`}>
      <span className="royal-gold-metal" data-text={children}>
        <span className="royal-gold-face">{children}</span>
        <span className="royal-gold-reflection" aria-hidden="true">{children}</span>
        <span className="royal-gold-shine" aria-hidden="true">{children}</span>
        <i className="royal-gold-glint royal-gold-glint-first" aria-hidden="true" />
        <i className="royal-gold-glint royal-gold-glint-last" aria-hidden="true" />
      </span>
    </h1>
  );
}
