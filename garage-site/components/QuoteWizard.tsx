"use client";
import { useEffect, useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ArrowLeft, Check, Upload, Phone } from "lucide-react";
import { site } from "@/lib/site";
import { services } from "@/lib/services";

const types = [...services.map((s) => s.name), "Not sure"];
const properties = ["Strata / multi-family", "Warehouse", "Industrial", "Other commercial"];
const roles = ["Strata council", "Property manager", "Facility / warehouse manager", "Other"];
const urgencies = ["Emergency (door or gate down)", "This week", "Planning ahead"];
const field = "w-full bg-graphite border border-white/15 px-4 py-3.5 text-base text-white placeholder:text-white/35 focus:border-accent focus:outline-none transition-colors";

export default function QuoteWizard() {
  const [step, setStep] = useState(0);
  const [sent, setSent] = useState<null | "api" | "mail">(null);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState("");
  const [d, setD] = useState({ property: "Strata / multi-family", role: "Property manager", urgency: "This week", company: "", service: "", name: "", email: "", phone: "", address: "", details: "" });
  const [file, setFile] = useState<File | null>(null);
  const set = (k: keyof typeof d, v: string) => setD((p) => ({ ...p, [k]: v }));

  useEffect(() => {
    const q = new URLSearchParams(window.location.search);
    const svc = q.get("service"); const door = q.get("door"); const area = q.get("area");
    setD((p) => ({ ...p, service: svc && types.includes(svc) ? svc : p.service, 
      details: [door && `Door selection: ${door}`, area && `Service area: ${area}`].filter(Boolean).join("\n") }));
  }, []);

  const valid = [d.service !== "", d.name.trim() !== "" && /\S+@\S+\.\S+/.test(d.email) && d.phone.replace(/\D/g, "").length >= 7, true];

  async function submit(e: FormEvent) {
    e.preventDefault(); setErr(""); setBusy(true);
    const body = `Role: ${d.role}\nProperty: ${d.property}\nUrgency: ${d.urgency}\nCompany/Strata plan: ${d.company}\nService: ${d.service}\nName: ${d.name}\nPhone: ${d.phone}\nEmail: ${d.email}\nAddress: ${d.address}\n\n${d.details}`;
    try {
      if (site.quoteEndpoint) {
        const fd = new FormData(); Object.entries(d).forEach(([k, v]) => fd.append(k, v)); if (file) fd.append("photo", file);
        const r = await fetch(site.quoteEndpoint, { method: "POST", body: fd, headers: { Accept: "application/json" } });
        if (!r.ok) throw new Error("Request failed");
        setSent("api");
      } else {
        window.location.href = `mailto:${site.email}?subject=${encodeURIComponent("Quote request: " + d.service)}&body=${encodeURIComponent(body + (file ? "\n\n(Photo: please attach " + file.name + " to this email)" : ""))}`;
        setSent("mail");
      }
    } catch { setErr(`Something went wrong. Please call ${site.phone.display} or try again.`); }
    setBusy(false);
  }

  if (sent) return (
    <div className="glass p-10 text-center">
      <div className="mx-auto w-16 h-16 rounded-full bg-accent text-black grid place-items-center"><Check size={30} /></div>
      <h2 className="font-display text-3xl font-bold mt-6">{sent === "api" ? "Request received" : "Your email is ready to send"}</h2>
      <p className="mt-3 text-silver">{sent === "api" ? "Thanks — we'll be in touch shortly." : "Your email app should have opened with your details. Press send to finish. Need it faster?"}</p>
      <a href={site.phone.href} className="btn btn-primary mt-8"><Phone size={16} /> Call {site.phone.display}</a>
    </div>
  );

  const labels = ["Service", "Your details", "Review"];
  return (
    <form onSubmit={submit} className="glass p-6 sm:p-10" noValidate>
      <ol className="flex gap-2 mb-8" aria-label="Progress">
        {labels.map((l, i) => (
          <li key={l} className="flex-1" aria-current={step === i ? "step" : undefined}>
            <div className={`h-1 transition-colors duration-500 ${i <= step ? "bg-accent" : "bg-white/15"}`} />
            <span className={`mt-2 block text-xs tracking-widest uppercase ${i <= step ? "text-white" : "text-silver-dim"}`}>{i + 1}. {l}</span>
          </li>
        ))}
      </ol>
      <AnimatePresence mode="wait">
        <motion.div key={step} initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }} transition={{ duration: 0.25 }} className="space-y-6">
          {step === 0 && <>
            <fieldset><legend className="font-display text-2xl font-bold mb-4">About the site</legend>
              <div className="grid grid-cols-2 gap-3">{properties.map((p) => (
                <button key={p} type="button" aria-pressed={d.property === p} onClick={() => set("property", p)} className={`py-4 px-3 border font-display font-semibold transition-colors ${d.property === p ? "border-accent bg-accent/10" : "border-white/15 hover:border-white/40"}`}>{p}</button>))}</div></fieldset>
            <div><label htmlFor="q-role" className="block mb-2 text-sm text-silver">I am a</label><select id="q-role" className={field} value={d.role} onChange={(e) => set("role", e.target.value)}>{roles.map((r) => <option key={r}>{r}</option>)}</select></div>
            <div><label htmlFor="q-service" className="block mb-2 text-sm text-silver">Type of service</label>
              <select id="q-service" required className={field} value={d.service} onChange={(e) => set("service", e.target.value)}>
                <option value="" disabled>Select a service…</option>{types.map((t) => <option key={t}>{t}</option>)}</select></div>
            <div><label htmlFor="q-details" className="block mb-2 text-sm text-silver">What’s going on? (optional)</label>
              <textarea id="q-details" rows={4} className={field} value={d.details} onChange={(e) => set("details", e.target.value)} placeholder="What is the door doing? Any noises, damage or error lights?" /></div>
          </>}
          {step === 1 && <>
            <div className="grid sm:grid-cols-2 gap-4">
              <div><label htmlFor="q-name" className="block mb-2 text-sm text-silver">Full name</label><input id="q-name" autoComplete="name" required className={field} value={d.name} onChange={(e) => set("name", e.target.value)} /></div>
              <div><label htmlFor="q-phone" className="block mb-2 text-sm text-silver">Phone</label><input id="q-phone" type="tel" inputMode="tel" autoComplete="tel" required className={field} value={d.phone} onChange={(e) => set("phone", e.target.value)} /></div>
            </div>
            <div><label htmlFor="q-email" className="block mb-2 text-sm text-silver">Email</label><input id="q-email" type="email" autoComplete="email" required className={field} value={d.email} onChange={(e) => set("email", e.target.value)} /></div>
            <div><label htmlFor="q-company" className="block mb-2 text-sm text-silver">Company / strata plan number (optional)</label><input id="q-company" autoComplete="organization" className={field} value={d.company} onChange={(e) => set("company", e.target.value)} /></div>
            <div><label htmlFor="q-urgency" className="block mb-2 text-sm text-silver">Urgency</label><select id="q-urgency" className={field} value={d.urgency} onChange={(e) => set("urgency", e.target.value)}>{urgencies.map((u) => <option key={u}>{u}</option>)}</select></div>
            <div><label htmlFor="q-address" className="block mb-2 text-sm text-silver">Service address</label><input id="q-address" autoComplete="street-address" className={field} value={d.address} onChange={(e) => set("address", e.target.value)} /></div>
            <div><label htmlFor="q-photo" className="flex items-center gap-3 border border-dashed border-white/25 px-4 py-4 cursor-pointer hover:border-accent transition-colors text-silver"><Upload size={18} className="text-accent" />{file ? file.name : "Add a photo of the problem (optional)"}</label>
              <input id="q-photo" type="file" accept="image/*" className="sr-only" onChange={(e) => setFile(e.target.files?.[0] ?? null)} /></div>
          </>}
          {step === 2 && <>
            <h2 className="font-display text-2xl font-bold">Review your request</h2>
            <dl className="grid sm:grid-cols-2 gap-x-8 gap-y-4 text-sm">
              {[["Role", d.role], ["Property", d.property], ["Urgency", d.urgency], ["Company / plan", d.company || "—"], ["Service", d.service], ["Name", d.name], ["Phone", d.phone], ["Email", d.email], ["Address", d.address || "—"], ["Photo", file?.name || "—"]].map(([k, v]) => (<div key={k}><dt className="text-silver-dim uppercase tracking-widest text-xs">{k}</dt><dd className="mt-1 text-white">{v}</dd></div>))}
            </dl>
            {d.details && <p className="whitespace-pre-line text-sm text-silver border-l-2 border-accent pl-4">{d.details}</p>}
            {err && <p role="alert" className="text-red-400 text-sm">{err}</p>}
          </>}
        </motion.div>
      </AnimatePresence>
      <div className="mt-8 flex items-center justify-between gap-4">
        {step > 0 ? <button type="button" onClick={() => setStep(step - 1)} className="btn btn-ghost"><ArrowLeft size={16} /> Back</button> : <span />}
        {step < 2 ? <button type="button" disabled={!valid[step]} onClick={() => setStep(step + 1)} className="btn btn-primary disabled:opacity-40 disabled:pointer-events-none">Continue <ArrowRight size={16} /></button>
          : <button type="submit" disabled={busy} className="btn btn-primary">{busy ? "Sending…" : "Request service"}</button>}
      </div>
      <p className="mt-6 text-xs text-silver-dim">We only use your details to respond to this request.</p>
    </form>
  );
}
