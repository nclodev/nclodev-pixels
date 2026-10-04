import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ADD_ONS, PACKAGES, SERVICES, estimateQuote } from "@/lib/studio";
import { cn, formatRupiah } from "@/lib/utils";

type QuoteBoardProps = {
  selected: string[];
  addOns: string[];
  onToggleService: (id: string) => void;
  onToggleAddOn: (id: string) => void;
  onPickPackage: (id: "satuan" | "atelier" | "sistem") => void;
};

export function QuoteBoard({
  selected,
  addOns,
  onToggleService,
  onToggleAddOn,
  onPickPackage,
}: QuoteBoardProps) {
  const quote = estimateQuote(selected, addOns);

  return (
    <section id="paket" className="bg-paper text-ink">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="max-w-2xl">
          <p className="text-xs tracking-widest text-ink/50 uppercase">Paket & estimasi</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-display sm:text-4xl">
            Harga yang bisa dihitung sebelum Anda menulis brief.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-ink/70">
            Pilih layanan, tambah opsi, lihat estimasi. Angka ini acuan proyek standar — kompleksitas
            khusus kami konfirmasi setelah brief.
          </p>
        </div>

        <div className="mt-10 grid gap-3 md:grid-cols-3">
          {PACKAGES.map((pkg) => (
            <article
              key={pkg.id}
              className={cn(
                "flex flex-col rounded-2xl p-6",
                pkg.featured ? "bg-ink text-paper" : "bg-ink/5",
              )}
            >
              <p className="text-xs tracking-widest uppercase opacity-60">{pkg.name}</p>
              <p className="mt-3 font-display text-2xl font-semibold">{pkg.price}</p>
              <p className="mt-1 text-sm opacity-70">{pkg.note}</p>
              <ul className="mt-6 flex flex-1 flex-col gap-2 text-sm">
                {pkg.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Check className="mt-0.5 size-4 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button
                variant={pkg.featured ? "default" : "ink"}
                className="mt-8"
                onClick={() => onPickPackage(pkg.id as "satuan" | "atelier" | "sistem")}
              >
                Pakai sebagai dasar
              </Button>
            </article>
          ))}
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <h3 className="font-display text-xl font-semibold">Rakit sendiri</h3>
            <ul className="mt-4 flex flex-col gap-2">
              {SERVICES.map((service) => {
                const on = selected.includes(service.id);
                return (
                  <li key={service.id}>
                    <button
                      type="button"
                      aria-pressed={on}
                      onClick={() => onToggleService(service.id)}
                      className={cn(
                        "flex w-full items-start gap-4 rounded-xl px-4 py-4 text-left transition-[background-color,color] duration-150",
                        on ? "bg-ink text-paper" : "bg-ink/5 hover:bg-ink/10",
                      )}
                    >
                      <span
                        className={cn(
                          "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-xs border",
                          on ? "border-paper bg-paper text-ink" : "border-ink/25",
                        )}
                      >
                        {on ? <Check className="size-3" /> : null}
                      </span>
                      <span className="flex min-w-0 flex-1 flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                        <span>
                          <span className="block font-medium">{service.name}</span>
                          <span className={cn("block text-sm", on ? "text-paper/70" : "text-ink/60")}>
                            {service.blurb}
                          </span>
                        </span>
                        <span className="shrink-0 font-medium tabular-nums">
                          {formatRupiah(service.price)}
                        </span>
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>

            <div className="mt-6 grid gap-2 sm:grid-cols-3">
              {ADD_ONS.map((addOn) => {
                const on = addOns.includes(addOn.id);
                return (
                  <button
                    key={addOn.id}
                    type="button"
                    aria-pressed={on}
                    onClick={() => onToggleAddOn(addOn.id)}
                    className={cn(
                      "rounded-xl px-4 py-4 text-left transition-[background-color,color] duration-150",
                      on ? "bg-ink text-paper" : "bg-ink/5 hover:bg-ink/10",
                    )}
                  >
                    <span className="block text-sm font-medium">{addOn.name}</span>
                    <span className={cn("mt-1 block text-xs", on ? "text-paper/70" : "text-ink/60")}>
                      {addOn.blurb}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <aside className="h-fit rounded-2xl bg-ink p-6 text-paper lg:col-span-2 lg:sticky lg:top-24">
            <p className="text-xs tracking-widest uppercase opacity-60">Estimasi</p>
            <p className="mt-3 font-display text-4xl font-semibold tracking-display tabular-nums">
              {quote.count === 0 ? "—" : formatRupiah(quote.total)}
            </p>
            <p className="mt-2 text-sm text-paper/70">
              {quote.count === 0
                ? "Pilih minimal satu layanan."
                : `${quote.count} layanan · sekitar ${quote.days} hari kerja`}
            </p>
            <dl className="mt-6 space-y-2 border-t border-paper/15 pt-4 text-sm">
              <div className="flex justify-between gap-4">
                <dt className="text-paper/60">Subtotal</dt>
                <dd className="tabular-nums">{formatRupiah(quote.base)}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-paper/60">Opsi tambahan</dt>
                <dd className="tabular-nums">{formatRupiah(Math.max(0, quote.total - quote.base))}</dd>
              </div>
            </dl>
            <Button asChild className="mt-8 w-full">
              <a href="#brief">Lanjut ke brief</a>
            </Button>
            <p className="mt-3 text-xs leading-relaxed text-paper/50">
              50% di muka untuk mengunci slot. Sisa sebelum file master diserahkan.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
