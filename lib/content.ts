// Content source for Services & Works (typed port of the Astro theme's
// src/lib/strapi.js — same behaviour).
//
// The site works standalone: it renders the bundled CSV-derived data in
// `data/*.json` by default. If you run the optional Strapi CMS (see `strapi/`)
// and set STRAPI_URL, live CMS data is used instead and the bundled JSON
// becomes the fallback (so the build never breaks when the CMS is offline).
//
// Results are cached with the `max` profile: like the Astro static build, the
// content is read when the site is built (no per-request CMS calls).
import { cacheLife } from "next/cache";
import servicesJson from "@/data/services.json";
import worksJson from "@/data/works.json";
import type { Service } from "@/types/service";
import type { Work } from "@/types/work";

const servicesData = servicesJson as Service[];
const worksData = worksJson as Work[];

const STRAPI_URL = process.env.STRAPI_URL || "";

async function api<T>(pathname: string): Promise<{ data?: T[] }> {
  if (!STRAPI_URL) throw new Error("no STRAPI_URL");
  const res = await fetch(`${STRAPI_URL}${pathname}`);
  if (!res.ok) throw new Error(`Strapi ${pathname} -> ${res.status}`);
  return res.json();
}

export async function getServices(): Promise<Service[]> {
  "use cache";
  cacheLife("max");
  try {
    const { data } = await api<Service>("/api/services?pagination[pageSize]=100&sort=createdOn:asc");
    if (data && data.length) return data;
  } catch {
    /* fall back to bundled data */
  }
  return servicesData;
}

export async function getService(slug: string): Promise<Service | null> {
  "use cache";
  cacheLife("max");
  try {
    const { data } = await api<Service>(`/api/services?filters[slug][$eq]=${encodeURIComponent(slug)}`);
    if (data && data[0]) return data[0];
  } catch {
    /* fall back */
  }
  return servicesData.find((s) => s.slug === slug) || null;
}

// Display order for Works is defined by the row order of cms/"Our Works.csv"
// (mirrored into data/works.json). Live CMS results are re-sorted to match
// that canonical order, so reordering the CSV controls the site order without
// needing an order field in Strapi. Slugs not present in the CSV sort to the end.
function orderWorks(list: Work[]): Work[] {
  const order = worksData.map((w) => w.slug);
  const rank = (s: string) => {
    const i = order.indexOf(s);
    return i === -1 ? Number.MAX_SAFE_INTEGER : i;
  };
  return list.slice().sort((a, b) => rank(a.slug) - rank(b.slug));
}

export async function getWorks(): Promise<Work[]> {
  "use cache";
  cacheLife("max");
  try {
    const { data } = await api<Work>("/api/works?pagination[pageSize]=100");
    if (data && data.length) return orderWorks(data);
  } catch {
    /* fall back */
  }
  return worksData;
}

export async function getWork(slug: string): Promise<Work | null> {
  "use cache";
  cacheLife("max");
  try {
    const { data } = await api<Work>(`/api/works?filters[slug][$eq]=${encodeURIComponent(slug)}`);
    if (data && data[0]) return data[0];
  } catch {
    /* fall back */
  }
  return worksData.find((w) => w.slug === slug) || null;
}

type RecordLike = Record<string, string | undefined>;

// Collect the numbered/worded fields of a record into an ordered array,
// dropping blanks. e.g. points(s, "whatOfferPoint", 9) -> [p1..pN present].
export function points(obj: RecordLike, prefix: string, count: number, suffixes?: string[]): string[] {
  const keys = suffixes || Array.from({ length: count }, (_, i) => String(i + 1));
  return keys.map((k) => obj[`${prefix}${k}`]).map((v) => (v || "").trim());
}

// Pair points with their icons: [{ text, icon }] for present points only.
export function pointsWithIcons(obj: RecordLike, textPrefix: string, iconPrefix: string, count: number) {
  const out: { text: string; icon: string }[] = [];
  for (let i = 1; i <= count; i++) {
    const text = (obj[`${textPrefix}${i}`] || "").trim();
    if (!text) continue;
    out.push({ text, icon: (obj[`${iconPrefix}${i}`] || "").trim() });
  }
  return out;
}

export const WORD_NUMBERS = ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"];
