"use client";

import { useRef, useState } from "react";

export default function HeritageVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  async function toggleSound() {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    if (!video.muted) video.volume = 1;
    setMuted(video.muted);
    try {
      if (video.paused) await video.play();
    } catch {
      video.muted = true;
      setMuted(true);
    }
  }

  return (
    <>
      <video ref={videoRef} className="heritage-video" autoPlay muted loop playsInline preload="auto" disablePictureInPicture controls={false} aria-label="The Sibarita Makers heritage craftsmanship film">
        <source src="/image/Madame%20_SIBARITA_VIDEO.mp4" type="video/mp4" />
      </video>
      <div className="film-shade" />
      <button className="video-sound-toggle" type="button" onClick={toggleSound} title={muted ? "Sound on" : "Mute sound"} aria-label={muted ? "Turn video sound on" : "Mute video sound"}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path d="M11 5 6 9H3v6h3l5 4V5Z" />
          {muted ? <path d="m16 9 5 6m0-6-5 6" /> : <path d="M15 8a6 6 0 0 1 0 8m3-11a10 10 0 0 1 0 14" />}
        </svg>
      </button>
    </>
  );
}

