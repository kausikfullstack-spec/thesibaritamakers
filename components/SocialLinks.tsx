import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa6";

const socialLinks = [
  { name: "Facebook", href: "https://www.facebook.com/thesibaritamarkers", Icon: FaFacebookF },
  { name: "Instagram", href: "https://www.instagram.com/thesibaritamakers?stkn=bDJvbXdpZWtnNTUw", Icon: FaInstagram },
  { name: "YouTube", href: "https://youtube.com/@thesibaritamakers?si=HlRRju78-7Fw3Ler", Icon: FaYoutube },
];

export default function SocialLinks() {
  return (
    <div className="social-links" role="group" aria-label="Follow The Sibarita Makers">
      {socialLinks.map(({ name, href, Icon }) =>
        href ? (
          <a key={name} className="social-link" href={href} target="_blank" rel="noopener noreferrer" aria-label={`${name} (opens in a new tab)`} title={name}>
            <Icon aria-hidden="true" />
          </a>
        ) : (
          <span key={name} className="social-link" role="link" aria-disabled="true" aria-label={`${name} — coming soon`} title={`${name} — coming soon`}>
            <Icon aria-hidden="true" />
          </span>
        ),
      )}
    </div>
  );
}
