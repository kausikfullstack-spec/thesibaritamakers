"use client";

import { useEffect, useRef, useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previousOverflow; };
  }, [isOpen]);

  function openDialog() {
    dialogRef.current?.showModal();
    setIsOpen(true);
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("https://formsubmit.co/ajax/kausikfullstack@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          email,
          _subject: "New newsletter signup — The Sibarita Makers",
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      const result = await res.json();
      if (result.success === false || result.success === "false") throw new Error("Request failed");
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="newsletter reveal">
      <button className="private-access-button" type="button" onClick={openDialog} aria-haspopup="dialog" aria-controls="private-access-dialog">
        Request Private Access
      </button>
      <dialog
        id="private-access-dialog"
        ref={dialogRef}
        className="private-access-dialog"
        aria-labelledby="private-access-heading"
        onClose={() => setIsOpen(false)}
        onClick={(event) => {
          if (event.target !== event.currentTarget) return;
          const bounds = event.currentTarget.getBoundingClientRect();
          if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) {
            dialogRef.current?.close();
          }
        }}
      >
      <button className="private-access-close" type="button" onClick={() => dialogRef.current?.close()} aria-label="Close popup">×</button>
      <h2 id="private-access-heading" className="private-access-heading">Request Private Access</h2>
      {status === "success" ? (
        <p className="newsletter-success" role="status">Thank you — you&rsquo;re on the list.</p>
      ) : (
        <form className="newsletter-form" onSubmit={handleSubmit} aria-busy={status === "loading"}>
          <label htmlFor="newsletter-email" className="private-access-label">Email address</label>
          <input
            id="newsletter-email"
            className="newsletter-input"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            required
            autoComplete="email"
            autoFocus
            aria-describedby={status === "error" ? "newsletter-error" : undefined}
            disabled={status === "loading"}
          />
          <button className="newsletter-submit" type="submit" disabled={status === "loading"}>
            {status === "loading" ? "Submitting…" : "Submit"}
          </button>
        </form>
      )}
      {status === "error" && <p id="newsletter-error" className="newsletter-error" role="alert">Something went wrong. Please try again.</p>}
      </dialog>
    </div>
  );
}
