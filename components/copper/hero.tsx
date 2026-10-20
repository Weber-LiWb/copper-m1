import Image from "next/image";
import { Button } from "@/components/ui/button";
import { getProducts } from "@/lib/copper/catalog";

// Cutouts are square PNGs (1254 × 1254).
const CUTOUT_SIZE = 1254;

export function Hero() {
  const products = getProducts();
  const home = products.find((p) => p.id === "copper-home")!;
  const notes = products.find((p) => p.id === "copper-notes")!;

  return (
    <section
      id="top"
      data-testid="hero"
      className="bg-secondary text-secondary-foreground w-full scroll-mt-16"
    >
      <div className="mx-auto grid max-w-5xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
        <div className="flex flex-col items-start gap-6">
          <h1 className="font-heading text-4xl leading-tight font-extrabold text-balance md:text-5xl">
            Your home and your notes, finally in sync.
          </h1>
          <p className="text-muted-foreground text-xl">
            From raw ideas to refined answers.
          </p>
          <Button asChild size="lg" className="h-11 px-6 text-base">
            <a href="#products">See products</a>
          </Button>
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-md">
          <Image
            src={home.cutout}
            alt={`${home.name} ${home.type}`}
            width={CUTOUT_SIZE}
            height={CUTOUT_SIZE}
            loading="eager"
            fetchPriority="high"
            sizes="(min-width: 768px) 360px, 80vw"
            className="absolute top-0 right-0 h-auto w-[80%]"
          />
          <Image
            src={notes.cutout}
            alt={`${notes.name} ${notes.type}`}
            width={CUTOUT_SIZE}
            height={CUTOUT_SIZE}
            loading="eager"
            sizes="(min-width: 768px) 225px, 50vw"
            className="absolute bottom-0 left-0 h-auto w-[50%]"
          />
        </div>
      </div>
    </section>
  );
}
