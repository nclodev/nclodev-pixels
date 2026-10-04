import { useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { CATEGORIES, WORKS, type Work, type WorkCategory } from "@/lib/studio";
import { cn } from "@/lib/utils";

const LABELS: Record<WorkCategory, string> = {
  branding: "Branding",
  kemasan: "Kemasan",
  cetak: "Cetak",
  sosmed: "Sosmed",
  merch: "Merch",
};

export function WorkGallery() {
  const [filter, setFilter] = useState<WorkCategory | "semua">("semua");
  const [active, setActive] = useState<Work | null>(null);

  const items = useMemo(
    () => (filter === "semua" ? WORKS : WORKS.filter((w) => w.category === filter)),
    [filter],
  );

  return (
    <section id="karya" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-xl">
          <p className="text-xs tracking-widest text-accent uppercase">Karya pilihan</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-display text-foreground sm:text-4xl">
            Desain yang sudah sampai ke tangan percetakan.
          </h2>
        </div>
        <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
          Delapan proyek terakhir. Bukan moodboard — file yang benar-benar diproduksi.
        </p>
      </div>

      <div className="mt-8 flex gap-2 overflow-x-auto pb-1">
        {CATEGORIES.map((cat) => {
          const on = filter === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => setFilter(cat.id)}
              className={cn(
                "h-11 shrink-0 rounded-full px-4 text-sm transition-[background-color,color] duration-150",
                on
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:text-foreground",
              )}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((work, i) => (
          <li
            key={work.id}
            className={cn(i === 0 && filter === "semua" && "sm:col-span-2 lg:col-span-2")}
          >
            <button
              type="button"
              onClick={() => setActive(work)}
              className="group relative block w-full overflow-hidden rounded-2xl bg-card text-left"
            >
              <img
                src={work.image}
                alt={`${work.title} — ${work.client}`}
                className={cn(
                  "w-full object-cover outline outline-1 -outline-offset-1 outline-foreground/10 transition-transform duration-500 ease-out group-hover:scale-105",
                  i === 0 && filter === "semua"
                    ? "aspect-4/3 sm:aspect-16/10"
                    : work.orientation === "portrait"
                      ? "aspect-3/4"
                      : "aspect-4/3",
                )}
              />
              <div className="absolute inset-x-0 bottom-0 bg-ink/80 p-5">
                <div className="flex items-end justify-between gap-3">
                  <div>
                    <p className="text-xs tracking-wide text-accent">{work.client}</p>
                    <p className="mt-1 font-display text-lg font-semibold text-foreground">
                      {work.title}
                    </p>
                  </div>
                  <span className="inline-flex size-10 items-center justify-center rounded-full bg-paper/10 text-paper">
                    <ArrowUpRight className="size-4" />
                  </span>
                </div>
              </div>
            </button>
          </li>
        ))}
      </ul>

      <Dialog open={!!active} onOpenChange={(open) => !open && setActive(null)}>
        <DialogContent>
          {active ? (
            <div className="grid gap-0 md:grid-cols-2">
              <img
                src={active.image}
                alt=""
                className="aspect-4/5 max-h-80 w-full rounded-xl object-cover md:max-h-none"
              />
              <DialogHeader className="flex flex-col justify-between">
                <div>
                  <p className="text-xs tracking-widest text-accent uppercase">
                    {active.year} · {LABELS[active.category]}
                  </p>
                  <DialogTitle className="mt-2">{active.title}</DialogTitle>
                  <p className="mt-1 text-sm text-muted-foreground">{active.client}</p>
                  <DialogDescription className="mt-4">{active.summary}</DialogDescription>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {active.deliverables.map((item) => (
                      <Badge key={item}>{item}</Badge>
                    ))}
                  </div>
                </div>
                <Button asChild className="mt-8 self-start">
                  <a href="#brief">Brief proyek serupa</a>
                </Button>
              </DialogHeader>
            </div>
          ) : null}
        </DialogContent>
      </Dialog>
    </section>
  );
}
