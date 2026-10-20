import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { formatUsd, getProducts } from "@/lib/copper/catalog";
import { cn } from "@/lib/utils";

// Cutouts are square PNGs (1254 × 1254).
const CUTOUT_SIZE = 1254;

// Product finishes from the catalog, mapped to the fixed brand swatch colors.
const SWATCHES: Record<string, string> = {
  "Polished Copper": "bg-copper",
  "Brushed Copper": "bg-copper",
  "Patina Teal": "bg-patina",
  "Desert Sand": "bg-desert-sand",
  "Night Sky": "bg-night-sky",
};

export function Products() {
  const products = getProducts();

  return (
    <section
      id="products"
      data-testid="products"
      className="w-full scroll-mt-16"
    >
      <div className="mx-auto max-w-5xl px-4 py-16 md:py-24">
        <div className="mb-10 max-w-2xl">
          <h2 className="text-3xl font-extrabold md:text-4xl">
            Meet the Copper family
          </h2>
          <p className="text-muted-foreground mt-3 text-lg">
            One for the house, one for your pocket. Both get smarter with Copper
            Plus.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {products.map((product) => (
            <Card
              key={product.id}
              data-testid="product-card"
              data-product={product.id}
              className="gap-6 pt-0"
            >
              <div className="bg-secondary flex justify-center px-8 py-6">
                <Image
                  src={product.cutout}
                  alt={`${product.name} ${product.type} in ${product.colors[0]}`}
                  width={CUTOUT_SIZE}
                  height={CUTOUT_SIZE}
                  sizes="(min-width: 768px) 280px, 70vw"
                  className="h-auto w-full max-w-72"
                />
              </div>

              <CardHeader>
                <CardDescription>{product.type}</CardDescription>
                <CardTitle className="text-2xl font-bold">
                  <h3>{product.name}</h3>
                </CardTitle>
                <p className="text-primary text-3xl font-extrabold">
                  {formatUsd(product.priceUsd)}
                </p>
              </CardHeader>

              <CardContent className="flex flex-col gap-6">
                <ul
                  aria-label={`${product.name} colors`}
                  className="flex flex-wrap gap-x-4 gap-y-2"
                >
                  {product.colors.map((color) => (
                    <li key={color} className="flex items-center gap-2 text-sm">
                      <span
                        aria-hidden
                        className={cn(
                          "ring-foreground/20 size-4 rounded-full ring-1",
                          SWATCHES[color] ?? "bg-muted",
                        )}
                      />
                      {color}
                    </li>
                  ))}
                </ul>

                <ul className="flex flex-col gap-3 text-base">
                  {product.features.map((feature) => (
                    <li key={feature.name}>
                      <span className="font-semibold">{feature.name}.</span>{" "}
                      <span className="text-muted-foreground">
                        {feature.description}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
