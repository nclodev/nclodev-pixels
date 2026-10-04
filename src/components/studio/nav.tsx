import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const LINKS = [
  { href: "#karya", label: "Karya" },
  { href: "#layanan", label: "Layanan" },
  { href: "#proses", label: "Proses" },
  { href: "#paket", label: "Paket" },
];

export function Mark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <rect x="2" y="2" width="12" height="12" fill="currentColor" />
      <rect x="18" y="2" width="12" height="12" fill="currentColor" />
      <rect x="2" y="18" width="12" height="12" fill="currentColor" />
      <rect x="20" y="20" width="8" height="8" fill="currentColor" opacity="0.45" />
    </svg>
  );
}

export function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#atas" className="flex items-center gap-2.5 text-foreground">
          <Mark className="size-7" />
          <span className="font-display text-lg font-semibold tracking-tight">NNX</span>
          <span className="hidden text-xs tracking-wide text-muted-foreground sm:inline">
            Pixels & Visual Design
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Utama">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors duration-150 hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <Button asChild size="sm">
            <a href="#brief">Kirim brief</a>
          </Button>
        </nav>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden" aria-label="Buka menu">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetTitle className="pr-10">Menu</SheetTitle>
            <nav className="mt-8 flex flex-col gap-1" aria-label="Seluler">
              {LINKS.map((link) => (
                <SheetClose asChild key={link.href}>
                  <a
                    href={link.href}
                    className={cn(
                      "flex h-12 items-center rounded-md px-3 text-base text-foreground hover:bg-muted",
                    )}
                  >
                    {link.label}
                  </a>
                </SheetClose>
              ))}
              <SheetClose asChild>
                <Button asChild className="mt-4">
                  <a href="#brief">Kirim brief</a>
                </Button>
              </SheetClose>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
