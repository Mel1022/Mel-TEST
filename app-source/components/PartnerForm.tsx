"use client";

import { useState, type FormEvent, type ReactNode } from "react";

const doorServices = [
  "Spring repair & replacement",
  "Opener installation & repair",
  "New residential garage doors",
  "Commercial / sectional doors",
  "Loading docks & levelers",
  "Sliding gates & operators",
  "Man doors / fire-rated doors",
  "Preventive maintenance / strata contracts",
];

const otherTrades = [
  "Hydraulics",
  "Electrical",
  "Welding",
  "Metal fabrication",
  "Carpentry / millwork",
  "HVAC / refrigeration",
  "Concrete / pit work",
  "Access control / low-voltage",
];

export default function PartnerForm() {
  const [submitted, setSubmitted] = useState(false);
  const [services, setServices] = useState<string[]>([]);
  const [trades, setTrades] = useState<string[]>([]);
  const [agreed, setAgreed] = useState(false);

  function toggleCheck(list: string[], setList: (v: string[]) => void, val: string) {
    setList(list.includes(val) ? list.filter((x) => x !== val) : [...list, val]);
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-card bg-white border border-steel/15 p-8 text-center shadow-card">
        <h3 className="font-heading font-bold text-xl text-navy">Application received.</h3>
        <p className="mt-2 text-steel">
          We&apos;ll email you a confirmation right away and follow up personally within 2–3 business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-card bg-white border border-steel/15 p-6 sm:p-8 shadow-card space-y-8">

      {/* Your business */}
      <Section title="Your business">
        <div className="grid sm:grid-cols-2 gap-5">
          <Field label="Business / company name" htmlFor="pf-biz" required>
            <input id="pf-biz" name="businessName" type="text" required className={inputClass} />
          </Field>
          <Field label="Your name" htmlFor="pf-name" required>
            <input id="pf-name" name="name" type="text" required autoComplete="name" className={inputClass} />
          </Field>
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          <Field label="Email" htmlFor="pf-email" required>
            <input id="pf-email" name="email" type="email" required autoComplete="email" className={inputClass} />
          </Field>
          <Field label="Phone" htmlFor="pf-phone" required>
            <input id="pf-phone" name="phone" type="tel" required autoComplete="tel" placeholder="(778) 555-0123" className={inputClass} />
          </Field>
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          <Field label="City / based in" htmlFor="pf-city" required>
            <input id="pf-city" name="city" type="text" required placeholder="e.g. Richmond, Surrey, Burnaby" className={inputClass} />
          </Field>
          <Field label="Website or social" htmlFor="pf-web">
            <input id="pf-web" name="website" type="text" placeholder="yourbusiness.ca or @handle" className={inputClass} />
          </Field>
        </div>
        <Field label="Areas you can cover" htmlFor="pf-areas" required>
          <input id="pf-areas" name="areas" type="text" required placeholder="e.g. Richmond, Vancouver, Tri-Cities, Fraser Valley" className={inputClass} />
        </Field>
      </Section>

      {/* Experience */}
      <Section title="Experience">
        <div className="grid sm:grid-cols-3 gap-5">
          <Field label="Years in the garage door industry" htmlFor="pf-years" required>
            <select id="pf-years" name="yearsExperience" required defaultValue="" className={inputClass}>
              <option value="" disabled>Select…</option>
              <option>Less than 1 year</option>
              <option>1–3 years</option>
              <option>3–5 years</option>
              <option>5–10 years</option>
              <option>10+ years</option>
            </select>
          </Field>
          <Field label="Team size" htmlFor="pf-team" required>
            <select id="pf-team" name="teamSize" required defaultValue="" className={inputClass}>
              <option value="" disabled>Select…</option>
              <option>Just me (sole operator)</option>
              <option>2–5 people</option>
              <option>6–15 people</option>
              <option>16+ people</option>
            </select>
          </Field>
          <Field label="Business structure" htmlFor="pf-structure" required>
            <select id="pf-structure" name="businessStructure" required defaultValue="" className={inputClass}>
              <option value="" disabled>Select…</option>
              <option>Sole proprietor</option>
              <option>Partnership</option>
              <option>Corporation (Inc.)</option>
              <option>Other</option>
            </select>
          </Field>
        </div>
      </Section>

      {/* Garage door services */}
      <Section title="Garage door services you can provide" subtitle="Check everything you're comfortable taking on.">
        <div className="grid sm:grid-cols-2 gap-3">
          {doorServices.map((s) => (
            <CheckItem key={s} label={s} checked={services.includes(s)} onChange={() => toggleCheck(services, setServices, s)} />
          ))}
        </div>
      </Section>

      {/* Other trades */}
      <Section title="Other trades & capabilities" subtitle="Extra skills help us route the right jobs to you.">
        <div className="grid sm:grid-cols-2 gap-3">
          {otherTrades.map((t) => (
            <CheckItem key={t} label={t} checked={trades.includes(t)} onChange={() => toggleCheck(trades, setTrades, t)} />
          ))}
        </div>
        <Field label="Anything else? (other trades or specialties)" htmlFor="pf-other-trades">
          <input id="pf-other-trades" name="otherTrades" type="text" placeholder="e.g. locksmithing, automation, structural steel" className={inputClass} />
        </Field>
      </Section>

      {/* Credentials */}
      <Section title="Credentials">
        <div className="grid sm:grid-cols-2 gap-5">
          <Field label="WorkSafeBC (WCB) coverage" htmlFor="pf-wcb" required>
            <select id="pf-wcb" name="wcb" required defaultValue="" className={inputClass}>
              <option value="" disabled>Select…</option>
              <option>Yes</option>
              <option>No</option>
              <option>Not required (sole proprietor exempt)</option>
            </select>
          </Field>
          <Field label="Liability insurance" htmlFor="pf-insurance" required>
            <select id="pf-insurance" name="insurance" required defaultValue="" className={inputClass}>
              <option value="" disabled>Select…</option>
              <option>Yes</option>
              <option>No</option>
              <option>In progress</option>
            </select>
          </Field>
          <Field label="Business licence / GST registered" htmlFor="pf-licence" required>
            <select id="pf-licence" name="licence" required defaultValue="" className={inputClass}>
              <option value="" disabled>Select…</option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </Field>
          <Field label="Own service vehicle & tools" htmlFor="pf-vehicle" required>
            <select id="pf-vehicle" name="vehicle" required defaultValue="" className={inputClass}>
              <option value="" disabled>Select…</option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </Field>
        </div>
      </Section>

      {/* About you */}
      <Section title="About you">
        <Field label="Tell us about your business and why you want to partner" htmlFor="pf-about" required>
          <textarea
            id="pf-about"
            name="about"
            required
            rows={5}
            placeholder="A few sentences about your experience, the kind of work you do best, and what you're looking for."
            className={inputClass}
          />
        </Field>
        <Field label="How did you hear about us?" htmlFor="pf-referral" required>
          <select id="pf-referral" name="referral" required defaultValue="" className={inputClass}>
            <option value="" disabled>Select…</option>
            <option>Google search</option>
            <option>Referral from a colleague</option>
            <option>Social media</option>
            <option>Drove by / signage</option>
            <option>Other</option>
          </select>
        </Field>
      </Section>

      {/* Consent */}
      <label className="flex items-start gap-3 cursor-pointer">
        <input
          type="checkbox"
          required
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
          className="mt-0.5 h-4 w-4 rounded border-steel/40 text-gold accent-gold flex-shrink-0"
        />
        <span className="text-sm text-navy leading-relaxed">
          I confirm the information above is accurate and I agree to be contacted by DoorChamp about partnering.{" "}
          <span className="text-steel">*</span>
        </span>
      </label>

      <button
        type="submit"
        className="w-full inline-flex items-center justify-center rounded-card bg-gold px-6 py-3.5 text-sm font-bold text-navy shadow-card hover:bg-gold-dark hover:text-white transition-colors"
      >
        Submit application
      </button>

      <p className="text-xs text-steel text-center">
        We&apos;ll email you a confirmation right away and follow up personally. We never share your info.
      </p>
    </form>
  );
}

const inputClass =
  "w-full rounded-lg border border-steel/25 bg-surface px-4 py-2.5 text-sm text-navy placeholder:text-steel/60 focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold";

function Section({ title, subtitle, children }: { title: string; subtitle?: string; children: ReactNode }) {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="font-heading font-bold text-navy text-base">{title}</h3>
        {subtitle && <p className="text-xs text-steel mt-0.5">{subtitle}</p>}
      </div>
      {children}
    </div>
  );
}

function Field({ label, htmlFor, required, children }: { label: string; htmlFor: string; required?: boolean; children: ReactNode }) {
  return (
    <div>
      <label htmlFor={htmlFor} className="block text-sm font-semibold text-navy mb-1.5">
        {label}{required && <span className="text-steel ml-0.5">*</span>}
      </label>
      {children}
    </div>
  );
}

function CheckItem({ label, checked, onChange }: { label: string; checked: boolean; onChange: () => void }) {
  return (
    <label className="flex items-center gap-2.5 cursor-pointer group">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="h-4 w-4 rounded border-steel/40 accent-gold flex-shrink-0"
      />
      <span className="text-sm text-navy group-hover:text-navy-dark">{label}</span>
    </label>
  );
}
