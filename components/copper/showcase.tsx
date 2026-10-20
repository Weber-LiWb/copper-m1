import Image from "next/image";
import { getProducts } from "@/lib/copper/catalog";

// The catalog lists photo paths only; alt text, captions and sizes live here.
const PHOTOS: Record<
  string,
  { alt: string; caption: string; width: number; height: number }
> = {
  "/assets/lifestyle/copper-home-desert-light.png": {
    alt: "Copper Home smart speaker in Polished Copper on a stone kitchen counter, with saguaros and mountains at sunset through the window",
    caption:
      "Copper Home on the kitchen counter, catching the last of the desert light.",
    width: 1672,
    height: 941,
  },
  "/assets/lifestyle/copper-notes-stone-desk.png": {
    alt: "Copper Notes clip-on recorder in Brushed Copper beside its round charger on a stone counter",
    caption: "Copper Notes resting on its charger between meetings.",
    width: 1672,
    height: 941,
  },
  "/assets/lifestyle/copper-notes-golden-hour.png": {
    alt: "A person writing in a notebook at a café table, with a Copper Notes recorder clipped to their shirt pocket",
    caption:
      "Clip it on at the coffee shop and let Meeting Mode keep the notes.",
    width: 1536,
    height: 1024,
  },
};

export function Showcase() {
  const photos = getProducts().flatMap((product) =>
    product.lifestyle.map((src) => ({
      src,
      ...(PHOTOS[src] ?? {
        alt: `${product.name} ${product.type} at home`,
        caption: `${product.name} ${product.type} at home`,
        width: 1672,
        height: 941,
      }),
    })),
  );
  const [feature, ...rest] = photos;

  return (
    <section
      id="showcase"
      data-testid="showcase"
      className="bg-secondary text-secondary-foreground w-full scroll-mt-16"
    >
      <div className="mx-auto max-w-5xl px-4 py-16 md:py-24">
        <div className="mb-10 max-w-2xl">
          <h2 className="text-3xl font-extrabold md:text-4xl">
            Made for Arizona living
          </h2>
          <p className="text-muted-foreground mt-3 text-lg">
            From sunset kitchens to morning coffee, Copper fits right in.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {feature && (
            <figure className="flex flex-col gap-3 md:col-span-2">
              <Image
                src={feature.src}
                alt={feature.alt}
                width={feature.width}
                height={feature.height}
                sizes="(min-width: 1024px) 992px, 100vw"
                className="h-auto w-full rounded-xl"
              />
              <figcaption className="text-muted-foreground">
                {feature.caption}
              </figcaption>
            </figure>
          )}
          {rest.map((photo) => (
            <figure key={photo.src} className="flex flex-col gap-3">
              <Image
                src={photo.src}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                sizes="(min-width: 1024px) 480px, (min-width: 768px) 50vw, 100vw"
                className="h-auto w-full rounded-xl md:aspect-[4/3] md:object-cover"
              />
              <figcaption className="text-muted-foreground">
                {photo.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
