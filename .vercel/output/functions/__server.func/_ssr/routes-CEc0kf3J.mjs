import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { a as Menu, c as ArrowUpRight, i as Plus, l as ArrowDownRight, o as ChevronDown, r as Trash2, s as Check, t as X } from "../_libs/lucide-react.mjs";
import { a as DialogOverlay$1, c as DialogTrigger, i as DialogDescription$1, n as DialogClose, o as DialogPortal$1, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1, u as Slot } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { n as toast, t as Toaster } from "../_libs/sonner.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as Root } from "../_libs/radix-ui__react-label.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CEc0kf3J.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function formatRupiah(value) {
	return new Intl.NumberFormat("id-ID", {
		style: "currency",
		currency: "IDR",
		maximumFractionDigits: 0
	}).format(value).replace("Rp", "Rp ");
}
var badgeVariants = cva("inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium tracking-wide", {
	variants: { variant: {
		default: "bg-muted text-muted-foreground",
		accent: "bg-accent/15 text-accent",
		paper: "bg-ink/8 text-ink",
		outline: "border border-border text-muted-foreground"
	} },
	defaultVariants: { variant: "default" }
});
function Badge({ className, variant, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn(badgeVariants({ variant }), className),
		...props
	});
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-40 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 transition-[color,background-color,box-shadow,transform,opacity] duration-150 ease-out active:not-disabled:scale-[0.96]", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground hover:bg-primary/90",
			ink: "bg-ink text-paper hover:bg-ink/90",
			outline: "border border-border bg-transparent text-foreground hover:bg-muted",
			paper: "border border-ink/15 bg-transparent text-ink hover:bg-ink/5",
			ghost: "text-foreground hover:bg-muted",
			accent: "bg-accent text-accent-foreground hover:bg-accent/90"
		},
		size: {
			default: "h-11 px-5",
			sm: "h-9 rounded-sm px-3 text-xs",
			lg: "h-12 px-6 text-sm",
			icon: "size-11"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var Input = import_react.forwardRef(({ className, type, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn("flex h-11 w-full rounded-md border border-border bg-muted px-3 text-sm text-foreground shadow-none placeholder:text-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50", className),
		ref,
		...props
	});
});
Input.displayName = "Input";
var Label = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
	ref,
	className: cn("text-xs font-medium tracking-wide text-muted-foreground", className),
	...props
}));
Label.displayName = Root.displayName;
var Textarea = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("flex min-h-32 w-full rounded-lg border border-border bg-muted px-3 py-3 text-sm text-foreground placeholder:text-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50", className),
		ref,
		...props
	});
});
Textarea.displayName = "Textarea";
var CATEGORIES = [
	{
		id: "semua",
		label: "Semua"
	},
	{
		id: "branding",
		label: "Branding"
	},
	{
		id: "kemasan",
		label: "Kemasan"
	},
	{
		id: "cetak",
		label: "Cetak"
	},
	{
		id: "sosmed",
		label: "Sosmed"
	},
	{
		id: "merch",
		label: "Merch"
	}
];
var WORKS = [
	{
		id: "aruna",
		title: "Sistem kemasan & mark",
		client: "Aruna Coffee",
		year: "2026",
		category: "kemasan",
		image: "/work/kopi.jpg",
		orientation: "landscape",
		summary: "Identitas dan kemasan untuk roastery kecil. Mark geometris diaplikasikan ke pouch matte, tin, dan cangkir — tanpa ornamen berlebih.",
		deliverables: [
			"Mark & lockup",
			"Pouch 250g",
			"Tin 100g",
			"Pedoman aplikasi"
		]
	},
	{
		id: "hale",
		title: "Line-up perawatan kulit",
		client: "Hale Skin",
		year: "2025",
		category: "kemasan",
		image: "/work/kulit.jpg",
		orientation: "portrait",
		summary: "Sistem kemasan tenang untuk tiga SKU. Material kaca buram dan karton tulang, hierarki hanya lewat proporsi dan tipografi.",
		deliverables: [
			"Struktural 3 SKU",
			"Karton lipat",
			"Label kaca",
			"Dieline CMYK"
		]
	},
	{
		id: "arka",
		title: "Poster kampanye festival",
		client: "Arka Festival",
		year: "2025",
		category: "cetak",
		image: "/work/festival.jpg",
		orientation: "portrait",
		summary: "Sistem poster yang dibangun dari busur dan batang. Satu komposisi induk, turun ke tiket, wayfinding, dan feed.",
		deliverables: [
			"Poster A1",
			"Tiket",
			"Wayfinding",
			"Aset digital"
		]
	},
	{
		id: "senja",
		title: "Identitas ruang makan",
		client: "Dapur Senja",
		year: "2026",
		category: "branding",
		image: "/work/resto.jpg",
		orientation: "landscape",
		summary: "Tanda, menu, dan percakapan meja untuk restoran 28 kursi. Nuansa linen, tinta, dan perhiasan kecil di matchbox.",
		deliverables: [
			"Mark",
			"Menu makan malam",
			"Matchbox",
			"Kartu reservasi"
		]
	},
	{
		id: "lumen",
		title: "Lookbook musim",
		client: "Atelier Lumen",
		year: "2025",
		category: "cetak",
		image: "/work/busana.jpg",
		orientation: "portrait",
		summary: "Lookbook 36 halaman. Kertas tulang, segel malam, dan studi bentuk pakaian sebagai gambar — bukan katalog e-commerce.",
		deliverables: [
			"Lookbook",
			"Amplop undangan",
			"Hangtag",
			"Kartu look"
		]
	},
	{
		id: "grid",
		title: "Alat tulis studio",
		client: "Studio Grid",
		year: "2026",
		category: "branding",
		image: "/work/arsitektur.jpg",
		orientation: "landscape",
		summary: "Sistem alat tulis untuk studio arsitektur. Kartu arang, amplop tulang, dan grid sian pada kertas kerja.",
		deliverables: [
			"Kartu nama",
			"Kop surat",
			"Amplop",
			"Template kertas kerja"
		]
	},
	{
		id: "nara",
		title: "Kit konten harian",
		client: "Nara Daily",
		year: "2026",
		category: "sosmed",
		image: "/work/sosmed.jpg",
		orientation: "landscape",
		summary: "Sistem 24 template feed dan story. Komposisi geometris yang tetap dikenali meski isinya berganti setiap hari.",
		deliverables: [
			"24 template feed",
			"12 story",
			"Highlight cover",
			"File Figma"
		]
	},
	{
		id: "markone",
		title: "Aplikasi merch",
		client: "Mark One",
		year: "2025",
		category: "merch",
		image: "/work/merch.jpg",
		orientation: "landscape",
		summary: "Kaos berat, tote, dan hangtag. Mark kecil di dada — cukup untuk dikenali, tidak berteriak.",
		deliverables: [
			"Kaos",
			"Tote",
			"Hangtag",
			"Guide sablon"
		]
	}
];
var SERVICES = [
	{
		id: "brand",
		index: "01",
		name: "Identitas merek",
		blurb: "Logo, sistem visual, dan pedoman singkat yang siap dipakai di semua kanal.",
		includes: [
			"2–3 arah konsep",
			"Mark & lockup",
			"Palet + tipografi",
			"Pedoman 8–12 hlm"
		],
		price: 45e5,
		days: 14
	},
	{
		id: "kemasan",
		index: "02",
		name: "Kemasan produk",
		blurb: "Struktur, artwork, dan dieline siap cetak untuk 1–3 SKU.",
		includes: [
			"Riset rak",
			"Dieline",
			"Artwork CMYK",
			"Mockup foto"
		],
		price: 52e5,
		days: 18
	},
	{
		id: "sosmed",
		index: "03",
		name: "Kit media sosial",
		blurb: "Template feed, story, dan highlight agar konten tetap rapi setiap minggu.",
		includes: [
			"24 feed",
			"12 story",
			"Highlight",
			"File master"
		],
		price: 22e5,
		days: 7
	},
	{
		id: "cetak",
		index: "04",
		name: "Materi cetak",
		blurb: "Poster, brosur, banner, kartu nama — file CMYK plus bleed.",
		includes: [
			"Hingga 3 item",
			"File cetak",
			"Proof digital",
			"Revisi terukur"
		],
		price: 18e5,
		days: 5
	},
	{
		id: "compro",
		index: "05",
		name: "Company profile",
		blurb: "Buku profil 8–16 halaman dengan tata letak editorial.",
		includes: [
			"Struktur naskah",
			"Layout",
			"Infografik",
			"PDF cetak + layar"
		],
		price: 65e5,
		days: 21
	},
	{
		id: "merch",
		index: "06",
		name: "Merchandise",
		blurb: "Aplikasi mark pada kaos, tote, dan perlengkapan merek.",
		includes: [
			"3 item",
			"Guide sablon",
			"Mockup",
			"Spesifikasi bahan"
		],
		price: 28e5,
		days: 10
	}
];
var ADD_ONS = [
	{
		id: "express",
		name: "Jalur cepat",
		blurb: "Antrian prioritas, durasi dipotong hampir setengah.",
		amount: 0,
		multiplier: 1.35
	},
	{
		id: "master",
		name: "File master lengkap",
		blurb: "AI / PSD / Figma diserahkan bersama ekspor.",
		amount: 75e4,
		multiplier: 1
	},
	{
		id: "guide",
		name: "Pedoman merek PDF",
		blurb: "Dokumen 12 halaman: logo, warna, tipe, jangan-jangan.",
		amount: 12e5,
		multiplier: 1
	}
];
var PACKAGES = [
	{
		id: "satuan",
		name: "Satuan",
		price: "Sesuai layanan",
		note: "Satu kebutuhan, satu pengerjaan.",
		items: [
			"1 layanan",
			"2 putaran revisi",
			"File siap pakai",
			"Konsultasi brief"
		],
		featured: false
	},
	{
		id: "atelier",
		name: "Atelier",
		price: "Rp 8.800.000",
		note: "Tiga layanan dalam satu sistem.",
		items: [
			"3 layanan pilihan",
			"3 putaran revisi",
			"Satu palet bersama",
			"3–4 minggu"
		],
		featured: true
	},
	{
		id: "sistem",
		name: "Sistem",
		price: "Rp 16.500.000",
		note: "Identitas plus dua aplikasi utama.",
		items: [
			"Brand system",
			"2 aplikasi (kemasan / sosmed / cetak)",
			"4 putaran revisi",
			"5 minggu"
		],
		featured: false
	}
];
var STEPS = [
	{
		index: "01",
		title: "Brief",
		body: "Kami baca bisnis Anda, bukan hanya selera. Satu sesi, daftar keputusan, dan ruang lingkup yang disepakati.",
		time: "1 hari"
	},
	{
		index: "02",
		title: "Arah visual",
		body: "Dua atau tiga arah. Bukan 20 opsi yang membuat pusing — beberapa yang bisa dipilih dengan tenang.",
		time: "3–5 hari"
	},
	{
		index: "03",
		title: "Pengembangan",
		body: "Arah terpilih dijabarkan ke aplikasi nyata: kemasan, feed, kertas, atau merch.",
		time: "5–14 hari"
	},
	{
		index: "04",
		title: "File produksi",
		body: "CMYK, bleed, dieline, dan ekspor layar. Siap ke percetakan atau ke kanal digital.",
		time: "2–3 hari"
	}
];
var FAQS = [
	{
		q: "Berapa lama pengerjaan?",
		a: "Satuan sederhana 5–7 hari kerja. Identitas atau kemasan 2–4 minggu. Estimator di halaman ini menghitung durasi dari layanan yang Anda pilih."
	},
	{
		q: "Revisi termasuk?",
		a: "Setiap proyek mencakup 2–3 putaran revisi pada arah yang sudah dipilih. Perubahan konsep dari nol dihitung sebagai lingkup baru."
	},
	{
		q: "File apa yang kami terima?",
		a: "PNG/JPG, PDF cetak (CMYK + bleed), dan SVG untuk mark. File master AI/PSD/Figma tersedia sebagai add-on."
	},
	{
		q: "Menerima UMKM?",
		a: "Ya. Paket satuan dan Atelier disusun agar merek kecil tetap mendapat sistem, bukan template sekali pakai."
	},
	{
		q: "Bagaimana pembayaran?",
		a: "50% di awal untuk mengunci slot, 50% sebelum file master diserahkan. Transfer bank atau e-wallet."
	}
];
var TESTIMONIALS = [
	{
		quote: "NNX merapikan seluruh wajah merek kami. Kemasan baru terasa mahal tanpa ribet, dan percetakan langsung bisa jalan.",
		name: "Mira S.",
		role: "Founder, Aruna Coffee"
	},
	{
		quote: "Poster festival kami paling diingat tahun itu. Satu sistem, turun ke tiket sampai wayfinding, semuanya nyambung.",
		name: "Dimas R.",
		role: "EO, Arka Festival"
	},
	{
		quote: "Dari brief yang masih kacau ke sistem kemasan yang konsisten. Prosesnya tenang, putusannya jelas.",
		name: "Laila P.",
		role: "Brand, Hale Skin"
	}
];
var STATS = [
	{
		value: "86",
		label: "Proyek selesai"
	},
	{
		value: "4.9",
		label: "Rata-rata ulasan"
	},
	{
		value: "2019",
		label: "Mulai berkarya"
	},
	{
		value: "48j",
		label: "Balasan brief"
	}
];
var STORAGE_KEY = "nnx-briefs";
function loadBriefs() {
	if (typeof window === "undefined") return [];
	try {
		const raw = window.localStorage.getItem(STORAGE_KEY);
		if (!raw) return [];
		const parsed = JSON.parse(raw);
		return Array.isArray(parsed) ? parsed : [];
	} catch {
		return [];
	}
}
function saveBriefs(briefs) {
	window.localStorage.setItem(STORAGE_KEY, JSON.stringify(briefs));
}
function estimateQuote(serviceIds, addOnIds) {
	const selected = SERVICES.filter((s) => serviceIds.includes(s.id));
	const base = selected.reduce((sum, s) => sum + s.price, 0);
	const days = selected.reduce((max, s) => Math.max(max, s.days), 0);
	let total = base;
	let duration = days;
	for (const addOn of ADD_ONS) {
		if (!addOnIds.includes(addOn.id)) continue;
		total = Math.round(total * addOn.multiplier + addOn.amount);
		if (addOn.id === "express") duration = Math.max(2, Math.ceil(duration * .55));
	}
	return {
		base,
		total,
		days: duration,
		count: selected.length
	};
}
var BUDGETS = [
	"< Rp 3 jt",
	"Rp 3–8 jt",
	"Rp 8–15 jt",
	"Rp 15 jt+"
];
function BriefForm({ selected, addOns }) {
	const [briefs, setBriefs] = (0, import_react.useState)([]);
	const [hydrated, setHydrated] = (0, import_react.useState)(false);
	const [name, setName] = (0, import_react.useState)("");
	const [business, setBusiness] = (0, import_react.useState)("");
	const [contact, setContact] = (0, import_react.useState)("");
	const [budget, setBudget] = (0, import_react.useState)(BUDGETS[1]);
	const [deadline, setDeadline] = (0, import_react.useState)("");
	const [notes, setNotes] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		setBriefs(loadBriefs());
		setHydrated(true);
	}, []);
	const quote = estimateQuote(selected, addOns);
	const serviceNames = SERVICES.filter((s) => selected.includes(s.id)).map((s) => s.name);
	function persist(next) {
		setBriefs(next);
		saveBriefs(next);
	}
	function onSubmit(event) {
		event.preventDefault();
		if (!name.trim() || !contact.trim()) {
			toast.error("Nama dan kontak wajib diisi.");
			return;
		}
		if (selected.length === 0) {
			toast.error("Pilih minimal satu layanan di estimasi.");
			return;
		}
		persist([{
			id: crypto.randomUUID(),
			createdAt: (/* @__PURE__ */ new Date()).toISOString(),
			name: name.trim(),
			business: business.trim(),
			contact: contact.trim(),
			budget,
			deadline,
			notes: notes.trim(),
			services: serviceNames,
			estimate: quote.total
		}, ...briefs].slice(0, 12));
		setNotes("");
		toast.success("Brief tersimpan. Kami merespons dalam 48 jam.");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "brief",
		className: "mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-12 lg:grid-cols-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-widest text-accent uppercase",
						children: "Kirim brief"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-3xl font-semibold tracking-display sm:text-4xl",
						children: "Ceritakan mereknya. Kami usulkan sistemnya."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm leading-relaxed text-muted-foreground",
						children: "Tidak perlu deck 20 halaman. Nama, kanal kontak, dan apa yang harus diselesaikan sudah cukup untuk putaran pertama."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "mt-8 space-y-3 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between border-b border-border py-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-muted-foreground",
									children: "Layanan terpilih"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "max-w-48 text-right",
									children: serviceNames.length ? serviceNames.join(", ") : "Belum ada"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between border-b border-border py-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-muted-foreground",
									children: "Estimasi"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "tabular-nums",
									children: quote.count ? formatRupiah(quote.total) : "—"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between py-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-muted-foreground",
									children: "Durasi acuan"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: quote.count ? `${quote.days} hari kerja` : "—" })]
							})
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit,
				className: "flex flex-col gap-4 lg:col-span-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-4 sm:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Nama Anda",
							htmlFor: "nama",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "nama",
								value: name,
								onChange: (e) => setName(e.target.value),
								placeholder: "Sinta Pramesti",
								autoComplete: "name",
								required: true
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Bisnis / merek",
							htmlFor: "bisnis",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "bisnis",
								value: business,
								onChange: (e) => setBusiness(e.target.value),
								placeholder: "Aruna Coffee"
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "WhatsApp atau email",
						htmlFor: "kontak",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "kontak",
							value: contact,
							onChange: (e) => setContact(e.target.value),
							placeholder: "0812… atau nama@merek.id",
							required: true
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-4 sm:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Anggaran",
							htmlFor: "anggaran",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
								id: "anggaran",
								value: budget,
								onChange: (e) => setBudget(e.target.value),
								className: "flex h-11 w-full rounded-md border border-border bg-muted px-3 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
								children: BUDGETS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: item,
									children: item
								}, item))
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Target selesai",
							htmlFor: "deadline",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "deadline",
								type: "date",
								value: deadline,
								onChange: (e) => setDeadline(e.target.value)
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Apa yang perlu didesain?",
						htmlFor: "catatan",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
							id: "catatan",
							value: notes,
							onChange: (e) => setNotes(e.target.value),
							placeholder: "Contoh: logo baru + kemasan 250g, harus siap cetak sebelum 17 Agustus. Warna sekarang terlalu ramai."
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						size: "lg",
						className: "self-start",
						children: "Kirim brief"
					})
				]
			})]
		}), hydrated && briefs.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-display text-xl font-semibold",
				children: "Permintaan tersimpan"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-4 divide-y divide-border rounded-2xl border border-border",
				children: briefs.map((brief) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center sm:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-medium",
						children: [brief.business || brief.name, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "ml-2 text-xs font-normal text-muted-foreground",
							children: new Date(brief.createdAt).toLocaleDateString("id-ID")
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 text-sm text-muted-foreground",
						children: [
							brief.services.join(", "),
							" · ",
							formatRupiah(brief.estimate)
						]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						variant: "outline",
						size: "icon",
						"aria-label": "Hapus brief",
						onClick: () => persist(briefs.filter((item) => item.id !== brief.id)),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, {})
					})]
				}, brief.id))
			})]
		}) : null]
	});
}
function Field({ label, htmlFor, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
			htmlFor,
			children: label
		}), children]
	});
}
var Sheet = Dialog$1;
var SheetTrigger = DialogTrigger;
var SheetClose = DialogClose;
var SheetPortal = DialogPortal$1;
var SheetOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
	ref,
	className: cn("fixed inset-0 z-50 bg-ink/70", className),
	...props
}));
SheetOverlay.displayName = DialogOverlay$1.displayName;
var SheetContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
	ref,
	className: cn("fixed inset-y-0 right-0 z-50 flex h-full w-[min(20rem,100%)] flex-col border-l border-border bg-background p-6 text-foreground", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute top-4 right-4 inline-flex size-11 items-center justify-center rounded-md hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Tutup menu"
		})]
	})]
})] }));
SheetContent.displayName = DialogContent$1.displayName;
function SheetTitle({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
		className: cn("font-display text-lg font-semibold", className),
		...props
	});
}
var LINKS = [
	{
		href: "#karya",
		label: "Karya"
	},
	{
		href: "#layanan",
		label: "Layanan"
	},
	{
		href: "#proses",
		label: "Proses"
	},
	{
		href: "#paket",
		label: "Paket"
	}
];
function Mark({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 32 32",
		className,
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "2",
				y: "2",
				width: "12",
				height: "12",
				fill: "currentColor"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "18",
				y: "2",
				width: "12",
				height: "12",
				fill: "currentColor"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "2",
				y: "18",
				width: "12",
				height: "12",
				fill: "currentColor"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "20",
				y: "20",
				width: "8",
				height: "8",
				fill: "currentColor",
				opacity: "0.45"
			})
		]
	});
}
function SiteNav() {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "sticky top-0 z-40 border-b border-border bg-background/95",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#atas",
					className: "flex items-center gap-2.5 text-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mark, { className: "size-7" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-lg font-semibold tracking-tight",
							children: "NNX"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "hidden text-xs tracking-wide text-muted-foreground sm:inline",
							children: "Pixels & Visual Design"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "hidden items-center gap-8 md:flex",
					"aria-label": "Utama",
					children: [LINKS.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: link.href,
						className: "text-sm text-muted-foreground transition-colors duration-150 hover:text-foreground",
						children: link.label
					}, link.href)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "sm",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#brief",
							children: "Kirim brief"
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Sheet, {
					open,
					onOpenChange: setOpen,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTrigger, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							size: "icon",
							className: "md:hidden",
							"aria-label": "Buka menu",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {})
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTitle, {
						className: "pr-10",
						children: "Menu"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						className: "mt-8 flex flex-col gap-1",
						"aria-label": "Seluler",
						children: [LINKS.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetClose, {
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: link.href,
								className: cn("flex h-12 items-center rounded-md px-3 text-base text-foreground hover:bg-muted"),
								children: link.label
							})
						}, link.href)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetClose, {
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								className: "mt-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#brief",
									children: "Kirim brief"
								})
							})
						})]
					})] })]
				})
			]
		})
	});
}
function QuoteBoard({ selected, addOns, onToggleService, onToggleAddOn, onPickPackage }) {
	const quote = estimateQuote(selected, addOns);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "paket",
		className: "bg-paper text-ink",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-2xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs tracking-widest text-ink/50 uppercase",
							children: "Paket & estimasi"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 font-display text-3xl font-semibold tracking-display sm:text-4xl",
							children: "Harga yang bisa dihitung sebelum Anda menulis brief."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm leading-relaxed text-ink/70",
							children: "Pilih layanan, tambah opsi, lihat estimasi. Angka ini acuan proyek standar — kompleksitas khusus kami konfirmasi setelah brief."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-3 md:grid-cols-3",
					children: PACKAGES.map((pkg) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: cn("flex flex-col rounded-2xl p-6", pkg.featured ? "bg-ink text-paper" : "bg-ink/5"),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs tracking-widest uppercase opacity-60",
								children: pkg.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 font-display text-2xl font-semibold",
								children: pkg.price
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm opacity-70",
								children: pkg.note
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-6 flex flex-1 flex-col gap-2 text-sm",
								children: pkg.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mt-0.5 size-4 shrink-0" }), item]
								}, item))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: pkg.featured ? "default" : "ink",
								className: "mt-8",
								onClick: () => onPickPackage(pkg.id),
								children: "Pakai sebagai dasar"
							})
						]
					}, pkg.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-12 grid gap-8 lg:grid-cols-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-xl font-semibold",
								children: "Rakit sendiri"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-4 flex flex-col gap-2",
								children: SERVICES.map((service) => {
									const on = selected.includes(service.id);
									return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										"aria-pressed": on,
										onClick: () => onToggleService(service.id),
										className: cn("flex w-full items-start gap-4 rounded-xl px-4 py-4 text-left transition-[background-color,color] duration-150", on ? "bg-ink text-paper" : "bg-ink/5 hover:bg-ink/10"),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: cn("mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-xs border", on ? "border-paper bg-paper text-ink" : "border-ink/25"),
											children: on ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3" }) : null
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "flex min-w-0 flex-1 flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "block font-medium",
												children: service.name
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: cn("block text-sm", on ? "text-paper/70" : "text-ink/60"),
												children: service.blurb
											})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "shrink-0 font-medium tabular-nums",
												children: formatRupiah(service.price)
											})]
										})]
									}) }, service.id);
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6 grid gap-2 sm:grid-cols-3",
								children: ADD_ONS.map((addOn) => {
									const on = addOns.includes(addOn.id);
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										"aria-pressed": on,
										onClick: () => onToggleAddOn(addOn.id),
										className: cn("rounded-xl px-4 py-4 text-left transition-[background-color,color] duration-150", on ? "bg-ink text-paper" : "bg-ink/5 hover:bg-ink/10"),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block text-sm font-medium",
											children: addOn.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: cn("mt-1 block text-xs", on ? "text-paper/70" : "text-ink/60"),
											children: addOn.blurb
										})]
									}, addOn.id);
								})
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
						className: "h-fit rounded-2xl bg-ink p-6 text-paper lg:col-span-2 lg:sticky lg:top-24",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs tracking-widest uppercase opacity-60",
								children: "Estimasi"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 font-display text-4xl font-semibold tracking-display tabular-nums",
								children: quote.count === 0 ? "—" : formatRupiah(quote.total)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-paper/70",
								children: quote.count === 0 ? "Pilih minimal satu layanan." : `${quote.count} layanan · sekitar ${quote.days} hari kerja`
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
								className: "mt-6 space-y-2 border-t border-paper/15 pt-4 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "text-paper/60",
										children: "Subtotal"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
										className: "tabular-nums",
										children: formatRupiah(quote.base)
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "text-paper/60",
										children: "Opsi tambahan"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
										className: "tabular-nums",
										children: formatRupiah(Math.max(0, quote.total - quote.base))
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								className: "mt-8 w-full",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#brief",
									children: "Lanjut ke brief"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-xs leading-relaxed text-paper/50",
								children: "50% di muka untuk mengunci slot. Sisa sebelum file master diserahkan."
							})
						]
					})]
				})
			]
		})
	});
}
var Dialog = Dialog$1;
var DialogPortal = DialogPortal$1;
var DialogOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
	ref,
	className: cn("fixed inset-0 z-50 bg-ink/75 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props
}));
DialogOverlay.displayName = DialogOverlay$1.displayName;
var DialogContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
	ref,
	className: cn("fixed top-1/2 left-1/2 z-50 grid w-[calc(100%-2rem)] max-w-3xl max-h-[min(90dvh,52rem)] -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-2xl border border-border bg-card p-2 text-card-foreground shadow-[var(--shadow-border)] focus:outline-none", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute top-3 right-3 z-20 inline-flex size-11 items-center justify-center rounded-md bg-card text-foreground hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Tutup"
		})]
	})]
})] }));
DialogContent.displayName = DialogContent$1.displayName;
function DialogHeader({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("flex flex-col gap-1.5 p-4", className),
		...props
	});
}
function DialogTitle({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
		className: cn("font-display text-2xl font-semibold tracking-tight", className),
		...props
	});
}
function DialogDescription({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
		className: cn("text-sm leading-relaxed text-muted-foreground", className),
		...props
	});
}
var LABELS = {
	branding: "Branding",
	kemasan: "Kemasan",
	cetak: "Cetak",
	sosmed: "Sosmed",
	merch: "Merch"
};
function WorkGallery() {
	const [filter, setFilter] = (0, import_react.useState)("semua");
	const [active, setActive] = (0, import_react.useState)(null);
	const items = (0, import_react.useMemo)(() => filter === "semua" ? WORKS : WORKS.filter((w) => w.category === filter), [filter]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "karya",
		className: "mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-6 md:flex-row md:items-end md:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-widest text-accent uppercase",
						children: "Karya pilihan"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-3xl font-semibold tracking-display text-foreground sm:text-4xl",
						children: "Desain yang sudah sampai ke tangan percetakan."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "max-w-sm text-sm leading-relaxed text-muted-foreground",
					children: "Delapan proyek terakhir. Bukan moodboard — file yang benar-benar diproduksi."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 flex gap-2 overflow-x-auto pb-1",
				children: CATEGORIES.map((cat) => {
					const on = filter === cat.id;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setFilter(cat.id),
						className: cn("h-11 shrink-0 rounded-full px-4 text-sm transition-[background-color,color] duration-150", on ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:text-foreground"),
						children: cat.label
					}, cat.id);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3",
				children: items.map((work, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: cn(i === 0 && filter === "semua" && "sm:col-span-2 lg:col-span-2"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setActive(work),
						className: "group relative block w-full overflow-hidden rounded-2xl bg-card text-left",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: work.image,
							alt: `${work.title} — ${work.client}`,
							className: cn("w-full object-cover outline outline-1 -outline-offset-1 outline-foreground/10 transition-transform duration-500 ease-out group-hover:scale-105", i === 0 && filter === "semua" ? "aspect-4/3 sm:aspect-16/10" : work.orientation === "portrait" ? "aspect-3/4" : "aspect-4/3")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute inset-x-0 bottom-0 bg-ink/80 p-5",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-end justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs tracking-wide text-accent",
									children: work.client
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 font-display text-lg font-semibold text-foreground",
									children: work.title
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "inline-flex size-10 items-center justify-center rounded-full bg-paper/10 text-paper",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4" })
								})]
							})
						})]
					})
				}, work.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: !!active,
				onOpenChange: (open) => !open && setActive(null),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContent, { children: active ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-0 md:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: active.image,
						alt: "",
						className: "aspect-4/5 max-h-80 w-full rounded-xl object-cover md:max-h-none"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, {
						className: "flex flex-col justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs tracking-widest text-accent uppercase",
								children: [
									active.year,
									" · ",
									LABELS[active.category]
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
								className: "mt-2",
								children: active.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: active.client
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
								className: "mt-4",
								children: active.summary
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6 flex flex-wrap gap-2",
								children: active.deliverables.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: item }, item))
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							className: "mt-8 self-start",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#brief",
								children: "Brief proyek serupa"
							})
						})]
					})]
				}) : null })
			})
		]
	});
}
function StudioPage() {
	const [selected, setSelected] = (0, import_react.useState)(["brand"]);
	const [addOns, setAddOns] = (0, import_react.useState)([]);
	const [openFaq, setOpenFaq] = (0, import_react.useState)(0);
	function toggle(list, id) {
		return list.includes(id) ? list.filter((item) => item !== id) : [...list, id];
	}
	function onPickPackage(id) {
		if (id === "atelier") {
			setSelected([
				"brand",
				"sosmed",
				"cetak"
			]);
			setAddOns([]);
		} else if (id === "sistem") {
			setSelected([
				"brand",
				"kemasan",
				"sosmed"
			]);
			setAddOns(["guide"]);
		} else {
			setSelected(["brand"]);
			setAddOns([]);
		}
		document.getElementById("rakit")?.scrollIntoView({
			behavior: "smooth",
			block: "start"
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		id: "atas",
		className: "min-h-dvh bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteNav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Marquee, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stats, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorkGallery, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Services, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Process, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				id: "rakit",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuoteBoard, {
					selected,
					addOns,
					onToggleService: (id) => setSelected((prev) => toggle(prev, id)),
					onToggleAddOn: (id) => setAddOns((prev) => toggle(prev, id)),
					onPickPackage
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Voices, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BriefForm, {
				selected,
				addOns
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Faq, {
				openFaq,
				setOpenFaq
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
				theme: "dark",
				position: "bottom-center",
				toastOptions: { style: {
					background: "var(--color-card)",
					color: "var(--color-foreground)",
					border: "1px solid var(--color-border)"
				} }
			})
		]
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 grain opacity-20 mix-blend-overlay" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-10 px-5 pt-12 pb-16 sm:px-8 lg:grid-cols-12 lg:pt-16 lg:pb-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col justify-end lg:col-span-7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "stagger-in text-xs tracking-widest text-accent uppercase",
						children: "Studio desain grafis · Jakarta"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "stagger-in mt-5 font-display text-4xl font-semibold tracking-display text-foreground sm:text-5xl lg:text-7xl",
						style: { animationDelay: "80ms" },
						children: "Jasa desain grafis yang rapi sampai ke piksel terakhir."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "stagger-in mt-6 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg",
						style: { animationDelay: "160ms" },
						children: "NNX merancang identitas, kemasan, dan materi kampanye — dari arah visual sampai file siap cetak. Bukan template. Bukan desain instan."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "stagger-in mt-8 flex flex-col gap-3 sm:flex-row",
						style: { animationDelay: "240ms" },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "lg",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#karya",
								children: ["Lihat karya", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDownRight, {})]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "lg",
							variant: "outline",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#brief",
								children: "Kirim brief"
							})
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
				className: "lg:col-span-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-hidden rounded-2xl bg-card",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/work/atelier.jpg",
						alt: "Meja kerja studio NNX: kertas, penggaris, dan tinta sian",
						className: "aspect-4/3 h-full w-full object-cover outline outline-1 -outline-offset-1 outline-foreground/10"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
					className: "mt-3 flex items-center justify-between text-xs tracking-wide text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Meja atelier, 2026" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Pixels & Visual Design" })]
				})]
			})]
		})]
	});
}
function Marquee() {
	const labels = [...SERVICES, ...SERVICES].map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "flex items-center gap-6 px-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-display text-sm font-semibold tracking-widest uppercase",
			children: s.name
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-accent" })]
	}, `${s.id}-${i}`));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "border-y border-border py-4 overflow-hidden",
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "marquee-track flex w-max",
			children: labels
		})
	});
}
function Stats() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "mx-auto grid max-w-6xl grid-cols-2 gap-px overflow-hidden border-b border-border bg-border sm:grid-cols-4",
		children: STATS.map((stat) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "bg-background px-5 py-8 sm:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-3xl font-semibold tracking-display tabular-nums text-foreground",
				children: stat.value
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-xs tracking-wide text-muted-foreground",
				children: stat.label
			})]
		}, stat.label))
	});
}
function Services() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "layanan",
		className: "mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-4 md:flex-row md:items-end md:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs tracking-widest text-accent uppercase",
					children: "Layanan"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-3xl font-semibold tracking-display sm:text-4xl",
					children: "Enam jenis pekerjaan. Satu standar kerapian."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-sm text-sm leading-relaxed text-muted-foreground",
				children: "Setiap layanan bisa diambil satuan, atau dirangkai jadi sistem merek."
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-10 divide-y divide-border border-y border-border",
			children: SERVICES.map((service) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
				className: "group py-6 md:py-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-4 md:grid-cols-12 md:items-start",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-sm text-accent md:col-span-1",
							children: service.index
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "md:col-span-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-2xl font-semibold",
								children: service.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-muted-foreground",
								children: service.blurb
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "flex flex-wrap gap-2 md:col-span-5",
							children: service.includes.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: item }) }, item))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm tabular-nums text-muted-foreground md:col-span-2 md:text-right",
							children: [service.days, " hari"]
						})
					]
				})
			}, service.id))
		})]
	});
}
function Process() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "proses",
		className: "border-y border-border bg-card",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs tracking-widest text-accent uppercase",
					children: "Proses"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 max-w-xl font-display text-3xl font-semibold tracking-display sm:text-4xl",
					children: "Empat langkah. Keputusan di setiap pintu."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
					children: STEPS.map((step) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-2xl bg-background p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-sm text-accent",
								children: step.index
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-4 font-display text-xl font-semibold",
								children: step.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm leading-relaxed text-muted-foreground",
								children: step.body
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 text-xs tracking-wide text-subtle",
								children: step.time
							})
						]
					}, step.index))
				})
			]
		})
	});
}
function Voices() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs tracking-widest text-accent uppercase",
				children: "Catatan klien"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-3 font-display text-3xl font-semibold tracking-display sm:text-4xl",
				children: "Yang mereka ingat setelah file diserahkan."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-10 grid gap-3 lg:grid-cols-3",
				children: TESTIMONIALS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex flex-col rounded-2xl bg-card p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "flex-1 text-base leading-relaxed text-foreground",
							children: [
								"“",
								item.quote,
								"”"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-8 text-sm font-medium",
							children: item.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: item.role
						})
					]
				}, item.name))
			})
		]
	});
}
function Faq({ openFaq, setOpenFaq }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-t border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-10 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs tracking-widest text-accent uppercase",
					children: "FAQ"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-3xl font-semibold tracking-display",
					children: "Pertanyaan yang selalu muncul."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "lg:col-span-8",
				children: FAQS.map((item, index) => {
					const open = openFaq === index;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "border-b border-border",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							"aria-expanded": open,
							onClick: () => setOpenFaq(open ? null : index),
							className: "flex w-full items-center justify-between gap-4 py-5 text-left",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-lg font-semibold",
								children: item.q
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: cn("size-4 shrink-0 text-muted-foreground transition-transform duration-200", open && "rotate-180") })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: cn("grid transition-[grid-template-rows,opacity] duration-200 ease-out", open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "overflow-hidden",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "pb-5 text-sm leading-relaxed text-muted-foreground",
									children: item.a
								})
							})
						})]
					}, item.q);
				})
			})]
		})
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "border-t border-border",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 lg:grid-cols-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-2xl font-semibold",
							children: "NNX"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: "Pixels & Visual Design"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground",
							children: "Studio jasa desain grafis di Jakarta. Identitas, kemasan, cetak, dan konten visual untuk merek yang ingin tampil jelas."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-widest text-subtle uppercase",
						children: "Studio"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 text-sm leading-relaxed text-muted-foreground",
						children: [
							"Jl. Cikini Raya No. 18",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Menteng, Jakarta Pusat",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Senin–Jumat, 09.00–18.00"
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs tracking-widest text-subtle uppercase",
							children: "Kontak"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "mailto:studio@nnx.design",
							className: "mt-3 flex items-center gap-2 text-sm text-foreground hover:text-accent",
							children: ["studio@nnx.design", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-3.5" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "https://wa.me/6281112345678",
							className: "mt-2 flex items-center gap-2 text-sm text-foreground hover:text-accent",
							children: ["+62 811 1234 5678", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-3.5" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "outline",
							className: "mt-6",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#brief",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" }), "Mulai proyek"]
							})
						})
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-xs text-subtle sm:flex-row sm:justify-between sm:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" NNX Studio"
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Desain grafis · Branding · Kemasan · Cetak" })]
			})
		})]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StudioPage, {});
}
//#endregion
export { Home as component };
