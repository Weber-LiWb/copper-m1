import { ShieldCheckIcon } from "lucide-react";
import Image from "next/image";
import { getPrivacySummary } from "@/lib/copper/catalog";

// The mascot is a square PNG (1254 × 1254).
const MASCOT_SIZE = 1254;

export function Privacy() {
  const privacy = getPrivacySummary();

  return (
    <section
      id="privacy"
      data-testid="privacy-summary"
      className="bg-accent/10 w-full scroll-mt-16"
    >
      <div className="mx-auto grid max-w-5xl items-center gap-10 px-4 py-16 md:grid-cols-[1fr_auto] md:py-24">
        <div>
          <h2 className="text-3xl font-extrabold md:text-4xl">
            Your privacy, in plain words
          </h2>
          <p className="text-muted-foreground mt-3 text-lg">
            How Copper handles recordings under our {privacy.policy} privacy
            policy.
          </p>
          <ul className="mt-8 flex flex-col gap-4 text-base">
            {privacy.points.map((point) => (
              <li key={point} className="flex gap-3">
                <ShieldCheckIcon
                  aria-hidden
                  className="text-accent mt-0.5 size-5 shrink-0"
                />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
        <Image
          src="/assets/brand/copper-mascot.png"
          alt="Copper the robot mascot in a yellow hard hat, waving and holding a checklist"
          width={MASCOT_SIZE}
          height={MASCOT_SIZE}
          sizes="(min-width: 768px) 256px, 160px"
          className="-order-1 mx-auto h-auto w-40 md:order-none md:w-64"
        />
      </div>
    </section>
  );
}
