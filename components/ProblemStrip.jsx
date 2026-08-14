import Image from "next/image";

export default function ProblemStrip() {
  return (
    <section aria-label="Who this serum is for">
      <div className="hidden md:block">
        <Image
          src="/images/Frame 255.png"
          alt="Rosacea-Prone Redness-Calming Serum — redness calm and barrier comfort"
          width={2928}
          height={1200}
          className="h-auto w-full"
        />
      </div>
      <div className="relative aspect-[3/4] w-full overflow-hidden md:hidden">
        <Image
          src="/images/Frame 255.png"
          alt="Rosacea-Prone Redness-Calming Serum — redness calm and barrier comfort"
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
}
