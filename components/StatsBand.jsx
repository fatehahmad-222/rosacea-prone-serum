import Image from "next/image";
import Reveal from "./Reveal";

const STATS = [
  { value: "89%", label: "Felt Visible Redness Looked Calmer" },
  { value: "93%", label: "Found Skin More Comfortable" },
  { value: "96%", label: "Reported Better Hydration" },
  { value: "91%", label: "Said Barrier Felt Stronger" },
];

export default function StatsBand() {
  return (
    <section className="bg-gradient-to-br from-primary via-primary-dark to-primary-deep">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <Reveal>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="text-3xl font-bold text-balance text-white sm:text-4xl lg:text-5xl">
              VISIBLE RESULTS
            </h2>
            <span className="inline-flex w-fit items-center rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent-light ring-1 ring-white/20">
              In As Little As 2 Weeks*
            </span>
          </div>
        </Reveal>

        <Reveal className="mt-10">
          <div className="overflow-hidden rounded-2xl ring-1 ring-white/15">
            <Image
              src="/images/Frame 251.png"
              alt="Rosacea-Prone Redness-Calming Serum — visible results"
              width={2928}
              height={1200}
              className="h-auto w-full"
            />
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 100}>
              <div className="border-l-2 border-accent pl-5">
                <p className="text-5xl font-bold text-white lg:text-6xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm leading-snug text-white/75">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-10 text-center text-xs text-white/55">
            *Consumer perception study. Individual results may vary.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
