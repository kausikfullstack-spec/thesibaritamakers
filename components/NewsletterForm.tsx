"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

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
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="newsletter reveal" aria-labelledby="newsletter-heading">
      <p id="newsletter-heading" className="newsletter-heading">Be the first to know</p>
      <p className="newsletter-copy">Join our list for early access and launch updates.</p>
      {status === "success" ? (
        <p className="newsletter-success">Thank you — you&rsquo;re on the list.</p>
      ) : (
        <form className="newsletter-form" onSubmit={handleSubmit} noValidate>
          <label htmlFor="newsletter-email" className="sr-only">Email address</label>
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
            disabled={status === "loading"}
          />
          <button className="newsletter-submit" type="submit" disabled={status === "loading"}>
            {status === "loading" ? "Submitting…" : "Subscribe"}
          </button>
        </form>
      )}
      {status === "error" && <p className="newsletter-error">Something went wrong. Please try again.</p>}
    </div>
  );
}
