export default function LaunchPlaque() {
  return (
    <div className="launch-plaque-row reveal">
      <span className="launch-plaque-rule" aria-hidden="true" />
      <div className="launch-plaque">
        <svg viewBox="0 0 420 76" preserveAspectRatio="none" aria-hidden="true">
          <defs>
            <linearGradient id="plaque-gold" x1="0" y1="1" x2="1" y2="0">
              <stop stopColor="#b8771b" />
              <stop offset=".28" stopColor="#e6b65e" />
              <stop offset=".55" stopColor="#ffe2a0" />
              <stop offset=".78" stopColor="#e2ad50" />
              <stop offset="1" stopColor="#bb7d24" />
            </linearGradient>
          </defs>
          <path d="M20 3H400Q402 15 417 21V55Q402 61 400 73H20Q18 61 3 55V21Q18 15 20 3Z" fill="url(#plaque-gold)" stroke="#b47a23" strokeWidth="1.6" />
          <path d="M24 7H396Q400 19 413 24V52Q400 57 396 69H24Q20 57 7 52V24Q20 19 24 7Z" fill="none" stroke="#fff0c2" strokeWidth="1.5" />
          <path d="M27 10H393M27 66H393" stroke="#9f691e" strokeOpacity=".55" />
          <path d="m18 38 5-4 5 4-5 4Zm374 0 5-4 5 4-5 4Z" fill="#c18b32" stroke="#f6d58b" strokeWidth=".7" />
        </svg>
        <span>Launching soon</span>
      </div>
      <span className="launch-plaque-rule" aria-hidden="true" />
    </div>
  );
}
