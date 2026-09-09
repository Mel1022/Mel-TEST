"use client";

import { useState, useEffect, type FormEvent, type ReactNode } from "react";

// Get your access key at https://web3forms.com — enter info@doorchamp.ca
const WEB3FORMS_KEY = "a726ac2b-777e-4080-9249-1d033c943e0f";

const helpOptions = [
  "Garage Door Repair",
  "Broken Spring",
  "Garage Door Opener",
  "Door Off Track",
  "Cable/Roller Problem",
  "New Garage Door",
  "Maintenance",
  "Other",
];

export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedHelp, setSelectedHelp] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const problem = params.get("problem");
    if (problem && helpOptions.includes(problem)) {
      setSelectedHelp(problem);
    }
  }, []);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const form = e.currentTarget;
    const data = new FormData(form);
    data.delete("photo"); // Web3Forms doesn't handle file uploads
    data.append("access_key", WEB3FORMS_KEY);
    data.append("subject", "New Quote Request — DoorChamp");
    data.append("from_name", "DoorChamp Website");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const json = await res.json();
      if (json.success) {
        setSubmitted(true);
      } else {
        setError("Something went wrong. Please call us directly at (778) 732-0588.");
      }
    } catch {
      setError("Something went wrong. Please call us directly at (778) 732-0588.");
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="rounded-card bg-white border border-steel/15 p-8 text-center shadow-card">
        <h3 className="font-heading font-bold text-xl text-navy">Request received.</h3>
        <p className="mt-2 text-steel">
          Thanks for reaching out. Someone from DoorChamp will follow up with you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-card bg-white border border-steel/15 p-6 sm:p-8 shadow-card space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Name" htmlFor="qf-name">
          <input id="qf-name" name="name" type="text" required autoComplete="name" className={inputClass} />
        </Field>
        <Field label="Phone" htmlFor="qf-phone">
          <input id="qf-phone" name="phone" type="tel" required autoComplete="tel" className={inputClass} />
        </Field>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Email" htmlFor="qf-email">
          <input id="qf-email" name="email" type="email" required autoComplete="email" className={inputClass} />
        </Field>
        <Field label="Service Address" htmlFor="qf-address">
          <input id="qf-address" name="address" type="text" autoComplete="street-address" className={inputClass} />
        </Field>
      </div>

      <Field label="What Can We Help With?" htmlFor="qf-help">
        <select id="qf-help" name="helpType" required value={selectedHelp} onChange={e => setSelectedHelp(e.target.value)} className={inputClass}>
          <option value="" disabled>
            Select an option
          </option>
          {helpOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </Field>

      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Preferred Appointment Date" htmlFor="qf-date">
          <input id="qf-date" name="preferredDate" type="date" className={inputClass} />
        </Field>
        <Field label="Preferred Time" htmlFor="qf-time">
          <select id="qf-time" name="preferredTime" defaultValue="" className={inputClass}>
            <option value="">No preference</option>
            <option value="morning">Morning</option>
            <option value="afternoon">Afternoon</option>
            <option value="evening">Evening</option>
          </select>
        </Field>
      </div>

      <Field label="Tell us what's going on" htmlFor="qf-details">
        <textarea id="qf-details" name="details" rows={4} className={inputClass} />
      </Field>

      <Field label="Upload Photo (optional)" htmlFor="qf-photo">
        <input
          id="qf-photo"
          name="photo"
          type="file"
          accept="image/*"
          className="block w-full text-sm text-steel file:mr-4 file:rounded-card file:border-0 file:bg-navy file:text-white file:px-4 file:py-2 file:font-semibold file:text-sm"
        />
      </Field>

      {error && <p className="text-sm text-red-600 text-center">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="w-full inline-flex items-center justify-center rounded-card bg-gold px-6 py-3.5 text-sm font-bold text-navy shadow-card hover:bg-gold-dark hover:text-white transition-colors disabled:opacity-60"
      >
        {loading ? "Sending…" : "Request My Quote"}
      </button>

      <p className="text-xs text-steel text-center">
        We&apos;ll use your information only to respond to your service request.
      </p>
    </form>
  );
}

const inputClass =
  "w-full rounded-lg border border-steel/25 bg-surface px-4 py-2.5 text-sm text-navy placeholder:text-steel/60 focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold";

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="block text-sm font-semibold text-navy mb-1.5">
        {label}
      </label>
      {children}
    </div>
  );
}
