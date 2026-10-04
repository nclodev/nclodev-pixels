import { useState } from "react";
import { ArrowDownRight, ArrowUpRight, ChevronDown, Plus } from "lucide-react";
import { Toaster } from "sonner";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BriefForm } from "@/components/studio/brief-form";
import { SiteNav } from "@/components/studio/nav";
import { QuoteBoard } from "@/components/studio/quote-board";
import { WorkGallery } from "@/components/studio/work-gallery";
import { FAQS, SERVICES, STATS, STEPS, TESTIMONIALS } from "@/lib/studio";
import { cn } from "@/lib/utils";

export function StudioPage() {
  const [selected, setSelected] = useState<string[]>(["brand"]);
  const [addOns, setAddOns] = useState<string[]>([]);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  function toggle(list: string[], id: string) {
    return list.includes(id) ? list.filter((item) => item !== id) : [...list, id];
  }

  function onPickPackage(id: "satuan" | "atelier" | "sistem") {
    if (id === "atelier") {
      setSelected(["brand", "sosmed", "cetak"]);
      setAddOns([]);
    } else if (id === "sistem") {
      setSelected(["brand", "kemasan", "sosmed"]);
      setAddOns(["guide"]);
    } else {
      setSelected(["brand"]);
      setAddOns([]);
    }
    document.getElementById("rakit")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div id="atas" className="min-h-dvh bg-background text-foreground">
      <SiteNav />
      <Hero />
      <Marquee />
      <Stats />
      <WorkGallery />
      <Services />
      <Process />
      <div id="rakit">
        <QuoteBoard
          selected={selected}
          addOns={addOns}
          onToggleService={(id) => setSelected((prev) => toggle(prev, id))}
          onToggleAddOn={(id) => setAddOns((prev) => toggle(prev, id))}
          onPickPackage={onPickPackage}
        />
      </div>
      <Voices />
      <BriefForm selected={selected} addOns={addOns} />
      <Faq openFaq={openFaq} setOpenFaq={setOpenFaq} />
      <SiteFooter />
      <Toaster
        theme="dark"
        position="bottom-center"
        toastOptions={{
          style: {
            background: "var(--color-card)",
            color: "var(--color-foreground)",
            border: "1px solid var(--color-border)",
          },
        }}
      />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 grain opacity-20 mix-blend-overlay" />
      <div className="mx-auto grid max-w-6xl gap-10 px-5 pt-12 pb-16 sm:px-8 lg:grid-cols-12 lg:pt-16 lg:pb-24">
        <div className="flex flex-col justify-end lg:col-span-7">
          <p className="stagger-in text-xs tracking-widest text-accent uppercase">
            Studio desain grafis · Jakarta
          </p>
          <h1
            className="stagger-in mt-5 font-display text-4xl font-semibold tracking-display text-foreground sm:text-5xl lg:text-7xl"
            style={{ animationDelay: "80ms" }}
          >
            Jasa desain grafis yang rapi sampai ke piksel terakhir.
          </h1>
          <p
            className="stagger-in mt-6 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg"
            style={{ animationDelay: "160ms" }}
          >
            NNX merancang identitas, kemasan, dan materi kampanye — dari arah visual sampai file
            siap cetak. Bukan template. Bukan desain instan.
          </p>
          <div
            className="stagger-in mt-8 flex flex-col gap-3 sm:flex-row"
            style={{ animationDelay: "240ms" }}
          >
            <Button asChild size="lg">
              <a href="#karya">
                Lihat karya
                <ArrowDownRight />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#brief">Kirim brief</a>
            </Button>
          </div>
        </div>
        <figure className="lg:col-span-5">
          <div className="overflow-hidden rounded-2xl bg-card">
            <img
              src="/work/atelier.jpg"
              alt="Meja kerja studio NNX: kertas, penggaris, dan tinta sian"
              className="aspect-4/3 h-full w-full object-cover outline outline-1 -outline-offset-1 outline-foreground/10"
            />
          </div>
          <figcaption className="mt-3 flex items-center justify-between text-xs tracking-wide text-muted-foreground">
            <span>Meja atelier, 2026</span>
            <span>Pixels & Visual Design</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

function Marquee() {
  const labels = [...SERVICES, ...SERVICES].map((s, i) => (
    <span key={`${s.id}-${i}`} className="flex items-center gap-6 px-6">
      <span className="font-display text-sm font-semibold tracking-widest uppercase">{s.name}</span>
      <span className="size-1.5 rounded-full bg-accent" />
    </span>
  ));

  return (
    <div className="border-y border-border py-4 overflow-hidden" aria-hidden="true">
      <div className="marquee-track flex w-max">{labels}</div>
    </div>
  );
}

function Stats() {
  return (
    <section className="mx-auto grid max-w-6xl grid-cols-2 gap-px overflow-hidden border-b border-border bg-border sm:grid-cols-4">
      {STATS.map((stat) => (
        <div key={stat.label} className="bg-background px-5 py-8 sm:px-8">
          <p className="font-display text-3xl font-semibold tracking-display tabular-nums text-foreground">
            {stat.value}
          </p>
          <p className="mt-1 text-xs tracking-wide text-muted-foreground">{stat.label}</p>
        </div>
      ))}
    </section>
  );
}

function Services() {
  return (
    <section id="layanan" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="max-w-xl">
          <p className="text-xs tracking-widest text-accent uppercase">Layanan</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-display sm:text-4xl">
            Enam jenis pekerjaan. Satu standar kerapian.
          </h2>
        </div>
        <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
          Setiap layanan bisa diambil satuan, atau dirangkai jadi sistem merek.
        </p>
      </div>
      <ul className="mt-10 divide-y divide-border border-y border-border">
        {SERVICES.map((service) => (
          <li key={service.id} className="group py-6 md:py-8">
            <div className="grid gap-4 md:grid-cols-12 md:items-start">
              <p className="font-display text-sm text-accent md:col-span-1">{service.index}</p>
              <div className="md:col-span-4">
                <h3 className="font-display text-2xl font-semibold">{service.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.blurb}</p>
              </div>
              <ul className="flex flex-wrap gap-2 md:col-span-5">
                {service.includes.map((item) => (
                  <li key={item}>
                    <Badge>{item}</Badge>
                  </li>
                ))}
              </ul>
              <p className="text-sm tabular-nums text-muted-foreground md:col-span-2 md:text-right">
                {service.days} hari
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Process() {
  return (
    <section id="proses" className="border-y border-border bg-card">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <p className="text-xs tracking-widest text-accent uppercase">Proses</p>
        <h2 className="mt-3 max-w-xl font-display text-3xl font-semibold tracking-display sm:text-4xl">
          Empat langkah. Keputusan di setiap pintu.
        </h2>
        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step) => (
            <li key={step.index} className="rounded-2xl bg-background p-6">
              <p className="font-display text-sm text-accent">{step.index}</p>
              <h3 className="mt-4 font-display text-xl font-semibold">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
              <p className="mt-6 text-xs tracking-wide text-subtle">{step.time}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Voices() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
      <p className="text-xs tracking-widest text-accent uppercase">Catatan klien</p>
      <h2 className="mt-3 font-display text-3xl font-semibold tracking-display sm:text-4xl">
        Yang mereka ingat setelah file diserahkan.
      </h2>
      <ul className="mt-10 grid gap-3 lg:grid-cols-3">
        {TESTIMONIALS.map((item) => (
          <li key={item.name} className="flex flex-col rounded-2xl bg-card p-6">
            <p className="flex-1 text-base leading-relaxed text-foreground">“{item.quote}”</p>
            <p className="mt-8 text-sm font-medium">{item.name}</p>
            <p className="text-xs text-muted-foreground">{item.role}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Faq({
  openFaq,
  setOpenFaq,
}: {
  openFaq: number | null;
  setOpenFaq: (value: number | null) => void;
}) {
  return (
    <section className="border-t border-border">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="text-xs tracking-widest text-accent uppercase">FAQ</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-display">
            Pertanyaan yang selalu muncul.
          </h2>
        </div>
        <ul className="lg:col-span-8">
          {FAQS.map((item, index) => {
            const open = openFaq === index;
            return (
              <li key={item.q} className="border-b border-border">
                <button
                  type="button"
                  aria-expanded={open}
                  onClick={() => setOpenFaq(open ? null : index)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="font-display text-lg font-semibold">{item.q}</span>
                  <ChevronDown
                    className={cn(
                      "size-4 shrink-0 text-muted-foreground transition-transform duration-200",
                      open && "rotate-180",
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "grid transition-[grid-template-rows,opacity] duration-200 ease-out",
                    open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="pb-5 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="font-display text-2xl font-semibold">NNX</p>
          <p className="mt-2 text-sm text-muted-foreground">Pixels & Visual Design</p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Studio jasa desain grafis di Jakarta. Identitas, kemasan, cetak, dan konten visual untuk
            merek yang ingin tampil jelas.
          </p>
        </div>
        <div className="lg:col-span-3">
          <p className="text-xs tracking-widest text-subtle uppercase">Studio</p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Jl. Cikini Raya No. 18
            <br />
            Menteng, Jakarta Pusat
            <br />
            Senin–Jumat, 09.00–18.00
          </p>
        </div>
        <div className="lg:col-span-4">
          <p className="text-xs tracking-widest text-subtle uppercase">Kontak</p>
          <a
            href="mailto:studio@nnx.design"
            className="mt-3 flex items-center gap-2 text-sm text-foreground hover:text-accent"
          >
            studio@nnx.design
            <ArrowUpRight className="size-3.5" />
          </a>
          <a
            href="https://wa.me/6281112345678"
            className="mt-2 flex items-center gap-2 text-sm text-foreground hover:text-accent"
          >
            +62 811 1234 5678
            <ArrowUpRight className="size-3.5" />
          </a>
          <Button asChild variant="outline" className="mt-6">
            <a href="#brief">
              <Plus className="size-4" />
              Mulai proyek
            </a>
          </Button>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-xs text-subtle sm:flex-row sm:justify-between sm:px-8">
          <p>© {new Date().getFullYear()} NNX Studio</p>
          <p>Desain grafis · Branding · Kemasan · Cetak</p>
        </div>
      </div>
    </footer>
  );
}
