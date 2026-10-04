import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import { toast } from "sonner";
import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  SERVICES,
  estimateQuote,
  loadBriefs,
  saveBriefs,
  type Brief,
} from "@/lib/studio";
import { formatRupiah } from "@/lib/utils";

type BriefFormProps = {
  selected: string[];
  addOns: string[];
};

const BUDGETS = ["< Rp 3 jt", "Rp 3–8 jt", "Rp 8–15 jt", "Rp 15 jt+"];

export function BriefForm({ selected, addOns }: BriefFormProps) {
  const [briefs, setBriefs] = useState<Brief[]>([]);
  const [hydrated, setHydrated] = useState(false);
  const [name, setName] = useState("");
  const [business, setBusiness] = useState("");
  const [contact, setContact] = useState("");
  const [budget, setBudget] = useState(BUDGETS[1]);
  const [deadline, setDeadline] = useState("");
  const [notes, setNotes] = useState("");

  useEffect(() => {
    setBriefs(loadBriefs());
    setHydrated(true);
  }, []);

  const quote = estimateQuote(selected, addOns);
  const serviceNames = SERVICES.filter((s) => selected.includes(s.id)).map((s) => s.name);

  function persist(next: Brief[]) {
    setBriefs(next);
    saveBriefs(next);
  }

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    if (!name.trim() || !contact.trim()) {
      toast.error("Nama dan kontak wajib diisi.");
      return;
    }
    if (selected.length === 0) {
      toast.error("Pilih minimal satu layanan di estimasi.");
      return;
    }

    const brief: Brief = {
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      name: name.trim(),
      business: business.trim(),
      contact: contact.trim(),
      budget,
      deadline,
      notes: notes.trim(),
      services: serviceNames,
      estimate: quote.total,
    };
    persist([brief, ...briefs].slice(0, 12));
    setNotes("");
    toast.success("Brief tersimpan. Kami merespons dalam 48 jam.");
  }

  return (
    <section id="brief" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
      <div className="grid gap-12 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <p className="text-xs tracking-widest text-accent uppercase">Kirim brief</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-display sm:text-4xl">
            Ceritakan mereknya. Kami usulkan sistemnya.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Tidak perlu deck 20 halaman. Nama, kanal kontak, dan apa yang harus diselesaikan sudah
            cukup untuk putaran pertama.
          </p>
          <dl className="mt-8 space-y-3 text-sm">
            <div className="flex justify-between border-b border-border py-2">
              <dt className="text-muted-foreground">Layanan terpilih</dt>
              <dd className="max-w-48 text-right">
                {serviceNames.length ? serviceNames.join(", ") : "Belum ada"}
              </dd>
            </div>
            <div className="flex justify-between border-b border-border py-2">
              <dt className="text-muted-foreground">Estimasi</dt>
              <dd className="tabular-nums">
                {quote.count ? formatRupiah(quote.total) : "—"}
              </dd>
            </div>
            <div className="flex justify-between py-2">
              <dt className="text-muted-foreground">Durasi acuan</dt>
              <dd>{quote.count ? `${quote.days} hari kerja` : "—"}</dd>
            </div>
          </dl>
        </div>

        <form onSubmit={onSubmit} className="flex flex-col gap-4 lg:col-span-3">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Nama Anda" htmlFor="nama">
              <Input
                id="nama"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Sinta Pramesti"
                autoComplete="name"
                required
              />
            </Field>
            <Field label="Bisnis / merek" htmlFor="bisnis">
              <Input
                id="bisnis"
                value={business}
                onChange={(e) => setBusiness(e.target.value)}
                placeholder="Aruna Coffee"
              />
            </Field>
          </div>
          <Field label="WhatsApp atau email" htmlFor="kontak">
            <Input
              id="kontak"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              placeholder="0812… atau nama@merek.id"
              required
            />
          </Field>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Anggaran" htmlFor="anggaran">
              <select
                id="anggaran"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="flex h-11 w-full rounded-md border border-border bg-muted px-3 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {BUDGETS.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </Field>
            <Field label="Target selesai" htmlFor="deadline">
              <Input
                id="deadline"
                type="date"
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
              />
            </Field>
          </div>
          <Field label="Apa yang perlu didesain?" htmlFor="catatan">
            <Textarea
              id="catatan"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Contoh: logo baru + kemasan 250g, harus siap cetak sebelum 17 Agustus. Warna sekarang terlalu ramai."
            />
          </Field>
          <Button type="submit" size="lg" className="self-start">
            Kirim brief
          </Button>
        </form>
      </div>

      {hydrated && briefs.length > 0 ? (
        <div className="mt-16">
          <h3 className="font-display text-xl font-semibold">Permintaan tersimpan</h3>
          <ul className="mt-4 divide-y divide-border rounded-2xl border border-border">
            {briefs.map((brief) => (
              <li
                key={brief.id}
                className="flex flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <p className="font-medium">
                    {brief.business || brief.name}
                    <span className="ml-2 text-xs font-normal text-muted-foreground">
                      {new Date(brief.createdAt).toLocaleDateString("id-ID")}
                    </span>
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {brief.services.join(", ")} · {formatRupiah(brief.estimate)}
                  </p>
                </div>
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  aria-label="Hapus brief"
                  onClick={() => persist(briefs.filter((item) => item.id !== brief.id))}
                >
                  <Trash2 />
                </Button>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </section>
  );
}

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
    <div className="flex flex-col gap-2">
      <Label htmlFor={htmlFor}>{label}</Label>
      {children}
    </div>
  );
}
