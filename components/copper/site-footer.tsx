import Image from "next/image";

export function SiteFooter() {
  return (
    // Always Night Sky, so it always uses the light (Desert Sand) wordmark.
    <footer data-testid="site-footer" className="bg-night-sky text-desert-sand">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-4 py-10 md:flex-row md:items-center md:justify-between">
        <Image
          src="/brand/logo-dark.png"
          alt="Copper State Labs"
          width={1200}
          height={197}
          className="h-auto w-40"
        />
        <p className="text-sm opacity-80">Fictional — for educational use.</p>
      </div>
    </footer>
  );
}
