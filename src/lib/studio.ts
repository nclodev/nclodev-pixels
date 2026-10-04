export type WorkCategory = "branding" | "kemasan" | "cetak" | "sosmed" | "merch";

export type Work = {
  id: string;
  title: string;
  client: string;
  year: string;
  category: WorkCategory;
  image: string;
  orientation: "portrait" | "landscape";
  summary: string;
  deliverables: string[];
};

export type Service = {
  id: string;
  index: string;
  name: string;
  blurb: string;
  includes: string[];
  price: number;
  days: number;
};

export type Brief = {
  id: string;
  createdAt: string;
  name: string;
  business: string;
  contact: string;
  budget: string;
  deadline: string;
  notes: string;
  services: string[];
  estimate: number;
};

export const CATEGORIES: { id: WorkCategory | "semua"; label: string }[] = [
  { id: "semua", label: "Semua" },
  { id: "branding", label: "Branding" },
  { id: "kemasan", label: "Kemasan" },
  { id: "cetak", label: "Cetak" },
  { id: "sosmed", label: "Sosmed" },
  { id: "merch", label: "Merch" },
];

export const WORKS: Work[] = [
  {
    id: "aruna",
    title: "Sistem kemasan & mark",
    client: "Aruna Coffee",
    year: "2026",
    category: "kemasan",
    image: "/work/kopi.jpg",
    orientation: "landscape",
    summary:
      "Identitas dan kemasan untuk roastery kecil. Mark geometris diaplikasikan ke pouch matte, tin, dan cangkir — tanpa ornamen berlebih.",
    deliverables: ["Mark & lockup", "Pouch 250g", "Tin 100g", "Pedoman aplikasi"],
  },
  {
    id: "hale",
    title: "Line-up perawatan kulit",
    client: "Hale Skin",
    year: "2025",
    category: "kemasan",
    image: "/work/kulit.jpg",
    orientation: "portrait",
    summary:
      "Sistem kemasan tenang untuk tiga SKU. Material kaca buram dan karton tulang, hierarki hanya lewat proporsi dan tipografi.",
    deliverables: ["Struktural 3 SKU", "Karton lipat", "Label kaca", "Dieline CMYK"],
  },
  {
    id: "arka",
    title: "Poster kampanye festival",
    client: "Arka Festival",
    year: "2025",
    category: "cetak",
    image: "/work/festival.jpg",
    orientation: "portrait",
    summary:
      "Sistem poster yang dibangun dari busur dan batang. Satu komposisi induk, turun ke tiket, wayfinding, dan feed.",
    deliverables: ["Poster A1", "Tiket", "Wayfinding", "Aset digital"],
  },
  {
    id: "senja",
    title: "Identitas ruang makan",
    client: "Dapur Senja",
    year: "2026",
    category: "branding",
    image: "/work/resto.jpg",
    orientation: "landscape",
    summary:
      "Tanda, menu, dan percakapan meja untuk restoran 28 kursi. Nuansa linen, tinta, dan perhiasan kecil di matchbox.",
    deliverables: ["Mark", "Menu makan malam", "Matchbox", "Kartu reservasi"],
  },
  {
    id: "lumen",
    title: "Lookbook musim",
    client: "Atelier Lumen",
    year: "2025",
    category: "cetak",
    image: "/work/busana.jpg",
    orientation: "portrait",
    summary:
      "Lookbook 36 halaman. Kertas tulang, segel malam, dan studi bentuk pakaian sebagai gambar — bukan katalog e-commerce.",
    deliverables: ["Lookbook", "Amplop undangan", "Hangtag", "Kartu look"],
  },
  {
    id: "grid",
    title: "Alat tulis studio",
    client: "Studio Grid",
    year: "2026",
    category: "branding",
    image: "/work/arsitektur.jpg",
    orientation: "landscape",
    summary:
      "Sistem alat tulis untuk studio arsitektur. Kartu arang, amplop tulang, dan grid sian pada kertas kerja.",
    deliverables: ["Kartu nama", "Kop surat", "Amplop", "Template kertas kerja"],
  },
  {
    id: "nara",
    title: "Kit konten harian",
    client: "Nara Daily",
    year: "2026",
    category: "sosmed",
    image: "/work/sosmed.jpg",
    orientation: "landscape",
    summary:
      "Sistem 24 template feed dan story. Komposisi geometris yang tetap dikenali meski isinya berganti setiap hari.",
    deliverables: ["24 template feed", "12 story", "Highlight cover", "File Figma"],
  },
  {
    id: "markone",
    title: "Aplikasi merch",
    client: "Mark One",
    year: "2025",
    category: "merch",
    image: "/work/merch.jpg",
    orientation: "landscape",
    summary:
      "Kaos berat, tote, dan hangtag. Mark kecil di dada — cukup untuk dikenali, tidak berteriak.",
    deliverables: ["Kaos", "Tote", "Hangtag", "Guide sablon"],
  },
];

export const SERVICES: Service[] = [
  {
    id: "brand",
    index: "01",
    name: "Identitas merek",
    blurb: "Logo, sistem visual, dan pedoman singkat yang siap dipakai di semua kanal.",
    includes: ["2–3 arah konsep", "Mark & lockup", "Palet + tipografi", "Pedoman 8–12 hlm"],
    price: 4500000,
    days: 14,
  },
  {
    id: "kemasan",
    index: "02",
    name: "Kemasan produk",
    blurb: "Struktur, artwork, dan dieline siap cetak untuk 1–3 SKU.",
    includes: ["Riset rak", "Dieline", "Artwork CMYK", "Mockup foto"],
    price: 5200000,
    days: 18,
  },
  {
    id: "sosmed",
    index: "03",
    name: "Kit media sosial",
    blurb: "Template feed, story, dan highlight agar konten tetap rapi setiap minggu.",
    includes: ["24 feed", "12 story", "Highlight", "File master"],
    price: 2200000,
    days: 7,
  },
  {
    id: "cetak",
    index: "04",
    name: "Materi cetak",
    blurb: "Poster, brosur, banner, kartu nama — file CMYK plus bleed.",
    includes: ["Hingga 3 item", "File cetak", "Proof digital", "Revisi terukur"],
    price: 1800000,
    days: 5,
  },
  {
    id: "compro",
    index: "05",
    name: "Company profile",
    blurb: "Buku profil 8–16 halaman dengan tata letak editorial.",
    includes: ["Struktur naskah", "Layout", "Infografik", "PDF cetak + layar"],
    price: 6500000,
    days: 21,
  },
  {
    id: "merch",
    index: "06",
    name: "Merchandise",
    blurb: "Aplikasi mark pada kaos, tote, dan perlengkapan merek.",
    includes: ["3 item", "Guide sablon", "Mockup", "Spesifikasi bahan"],
    price: 2800000,
    days: 10,
  },
];

export const ADD_ONS = [
  {
    id: "express",
    name: "Jalur cepat",
    blurb: "Antrian prioritas, durasi dipotong hampir setengah.",
    amount: 0,
    multiplier: 1.35,
  },
  {
    id: "master",
    name: "File master lengkap",
    blurb: "AI / PSD / Figma diserahkan bersama ekspor.",
    amount: 750000,
    multiplier: 1,
  },
  {
    id: "guide",
    name: "Pedoman merek PDF",
    blurb: "Dokumen 12 halaman: logo, warna, tipe, jangan-jangan.",
    amount: 1200000,
    multiplier: 1,
  },
] as const;

export const PACKAGES = [
  {
    id: "satuan",
    name: "Satuan",
    price: "Sesuai layanan",
    note: "Satu kebutuhan, satu pengerjaan.",
    items: ["1 layanan", "2 putaran revisi", "File siap pakai", "Konsultasi brief"],
    featured: false,
  },
  {
    id: "atelier",
    name: "Atelier",
    price: "Rp 8.800.000",
    note: "Tiga layanan dalam satu sistem.",
    items: ["3 layanan pilihan", "3 putaran revisi", "Satu palet bersama", "3–4 minggu"],
    featured: true,
  },
  {
    id: "sistem",
    name: "Sistem",
    price: "Rp 16.500.000",
    note: "Identitas plus dua aplikasi utama.",
    items: ["Brand system", "2 aplikasi (kemasan / sosmed / cetak)", "4 putaran revisi", "5 minggu"],
    featured: false,
  },
];

export const STEPS = [
  {
    index: "01",
    title: "Brief",
    body: "Kami baca bisnis Anda, bukan hanya selera. Satu sesi, daftar keputusan, dan ruang lingkup yang disepakati.",
    time: "1 hari",
  },
  {
    index: "02",
    title: "Arah visual",
    body: "Dua atau tiga arah. Bukan 20 opsi yang membuat pusing — beberapa yang bisa dipilih dengan tenang.",
    time: "3–5 hari",
  },
  {
    index: "03",
    title: "Pengembangan",
    body: "Arah terpilih dijabarkan ke aplikasi nyata: kemasan, feed, kertas, atau merch.",
    time: "5–14 hari",
  },
  {
    index: "04",
    title: "File produksi",
    body: "CMYK, bleed, dieline, dan ekspor layar. Siap ke percetakan atau ke kanal digital.",
    time: "2–3 hari",
  },
];

export const FAQS = [
  {
    q: "Berapa lama pengerjaan?",
    a: "Satuan sederhana 5–7 hari kerja. Identitas atau kemasan 2–4 minggu. Estimator di halaman ini menghitung durasi dari layanan yang Anda pilih.",
  },
  {
    q: "Revisi termasuk?",
    a: "Setiap proyek mencakup 2–3 putaran revisi pada arah yang sudah dipilih. Perubahan konsep dari nol dihitung sebagai lingkup baru.",
  },
  {
    q: "File apa yang kami terima?",
    a: "PNG/JPG, PDF cetak (CMYK + bleed), dan SVG untuk mark. File master AI/PSD/Figma tersedia sebagai add-on.",
  },
  {
    q: "Menerima UMKM?",
    a: "Ya. Paket satuan dan Atelier disusun agar merek kecil tetap mendapat sistem, bukan template sekali pakai.",
  },
  {
    q: "Bagaimana pembayaran?",
    a: "50% di awal untuk mengunci slot, 50% sebelum file master diserahkan. Transfer bank atau e-wallet.",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "NNX merapikan seluruh wajah merek kami. Kemasan baru terasa mahal tanpa ribet, dan percetakan langsung bisa jalan.",
    name: "Mira S.",
    role: "Founder, Aruna Coffee",
  },
  {
    quote:
      "Poster festival kami paling diingat tahun itu. Satu sistem, turun ke tiket sampai wayfinding, semuanya nyambung.",
    name: "Dimas R.",
    role: "EO, Arka Festival",
  },
  {
    quote:
      "Dari brief yang masih kacau ke sistem kemasan yang konsisten. Prosesnya tenang, putusannya jelas.",
    name: "Laila P.",
    role: "Brand, Hale Skin",
  },
];

export const STATS = [
  { value: "86", label: "Proyek selesai" },
  { value: "4.9", label: "Rata-rata ulasan" },
  { value: "2019", label: "Mulai berkarya" },
  { value: "48j", label: "Balasan brief" },
];

const STORAGE_KEY = "nnx-briefs";

export function loadBriefs(): Brief[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as Brief[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function saveBriefs(briefs: Brief[]) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(briefs));
}

export function estimateQuote(serviceIds: string[], addOnIds: string[]) {
  const selected = SERVICES.filter((s) => serviceIds.includes(s.id));
  const base = selected.reduce((sum, s) => sum + s.price, 0);
  const days = selected.reduce((max, s) => Math.max(max, s.days), 0);
  let total = base;
  let duration = days;
  for (const addOn of ADD_ONS) {
    if (!addOnIds.includes(addOn.id)) continue;
    total = Math.round(total * addOn.multiplier + addOn.amount);
    if (addOn.id === "express") duration = Math.max(2, Math.ceil(duration * 0.55));
  }
  return { base, total, days: duration, count: selected.length };
}
