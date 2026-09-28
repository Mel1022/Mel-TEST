#!/usr/bin/env node
// Generate or edit images with Google's Gemini 2.5 Flash Image ("Nano Banana").
// Usage:
//   node scripts/nano-banana.mjs "<prompt>" out.png
//   node scripts/nano-banana.mjs "<edit instruction>" out.png --ref existing.png
//   ASPECT=21:9 node scripts/nano-banana.mjs "<prompt>" banner.png
// Requires GEMINI_API_KEY in the environment. Never commit the key.
import { readFileSync, writeFileSync } from "node:fs";

const MODEL = process.env.GEMINI_IMAGE_MODEL || "gemini-2.5-flash-image";
const API_KEY = process.env.GEMINI_API_KEY;
const ASPECT = process.env.ASPECT; // e.g. "16:9", "21:9", "1:1", "9:16"
const fail = (m) => { console.error("✗ " + m); process.exit(1); };

const args = process.argv.slice(2);
const [prompt, outPath] = args;
const refIdx = args.indexOf("--ref");
const refPath = refIdx !== -1 ? args[refIdx + 1] : null;
if (!API_KEY) fail("GEMINI_API_KEY is not set.");
if (!prompt || !outPath) fail('Usage: node nano-banana.mjs "<prompt>" <out.png> [--ref <img>]');

const parts = [{ text: prompt }];
if (refPath) {
  const mime = refPath.endsWith(".webp") ? "image/webp"
    : /\.jpe?g$/i.test(refPath) ? "image/jpeg" : "image/png";
  parts.push({ inlineData: { mimeType: mime, data: readFileSync(refPath).toString("base64") } });
}
const body = { contents: [{ parts }] };
if (ASPECT) body.generationConfig = { imageConfig: { aspectRatio: ASPECT } };

const res = await fetch(
  `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`,
  { method: "POST",
    headers: { "Content-Type": "application/json", "x-goog-api-key": API_KEY },
    body: JSON.stringify(body) });
if (!res.ok) {
  const text = await res.text();
  if (res.status === 429) fail(`Quota/credits exhausted (429). Ask Yari to top up or reissue the key.\n${text}`);
  fail(`API error ${res.status}: ${text}`);
}
const data = await res.json();
const out = data?.candidates?.[0]?.content?.parts || [];
const img = out.find((p) => p.inlineData?.data);
if (!img) fail("No image returned. " + (out.find((p) => p.text)?.text || JSON.stringify(data).slice(0, 400)));
writeFileSync(outPath, Buffer.from(img.inlineData.data, "base64"));
console.log(`✓ wrote ${outPath}`);
