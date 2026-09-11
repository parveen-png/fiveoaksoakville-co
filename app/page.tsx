import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd, ExternalLink } from "@/components/ui";
import { MobileStickyCta } from "@/components/MobileStickyCta";
import {
  DatedFactExcerpt,
  ElevationGrid,
  FaqList,
  NeighbourhoodFigure,
  OfficialSources,
  SiblingLinks,
} from "@/components/Editorial";
import { LeadForm } from "@/components/LeadForm";
import { buildJsonLd } from "@/lib/json-ld";
import { buildPageMetadata } from "@/lib/metadata";
import { homePage } from "@/lib/pages";
import {
  copy,
  displayFactValue,
  facts,
  heroChips,
  homeCollection,
  images,
  INFORMATION_CHECKED_DISPLAY,
  project,
  tbaProjectItems,
} from "@/lib/project-data";

export const metadata: Metadata = buildPageMetadata(homePage);

export default function Home() {
  const ledgerFacts = facts.filter((fact) =>
    homePage.factIds.includes(fact.id),
  );

  return (
    <>
      <JsonLd data={buildJsonLd({ page: homePage })} />
      <Header />
      <main id="main" className="pb-24 lg:pb-0">
        <section className="relative min-h-[78svh] overflow-hidden">
          <Image
            src={images.hero.src}
            alt={images.hero.alt}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-navy/92 via-navy/55 to-navy/20" />
          <div className="relative mx-auto grid min-h-[78svh] max-w-6xl items-end gap-8 px-5 pb-12 pt-10 sm:px-6 lg:grid-cols-[minmax(0,1.15fr)_22.5rem] lg:items-center lg:px-8 lg:pb-20">
            <div className="max-w-2xl text-paper-elevated">
              <p className="text-[0.72rem] font-semibold tracking-[0.28em] text-gold uppercase">
                {project.status} · Lakeside Oakville brief
              </p>
              <h1
                id="page-title"
                className="mt-4 font-display text-5xl leading-[1.02] sm:text-7xl"
              >
                {homePage.h1}
              </h1>
              <p
                id="answer-block"
                className="mt-6 max-w-xl text-base leading-7 text-paper-elevated/92 sm:text-lg sm:leading-8"
              >
                {homePage.answer}
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {heroChips.map((chip) => (
                  <li
                    key={chip}
                    className="border border-gold/50 px-3 py-1 text-[0.68rem] tracking-[0.16em] text-gold uppercase"
                  >
                    {chip}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:-mb-24 lg:justify-self-end">
              <LeadForm idPrefix="hero" compact />
            </div>
          </div>
        </section>

        <section className="bg-paper-elevated py-10">
          <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
            <p className="max-w-4xl text-sm leading-6 text-ink-muted">
              {copy.independentDisclosure} Official sources remain Caivan.com,
              cited below, not impersonated.
            </p>
          </div>
        </section>

        <section
          id="overview"
          className="bg-paper py-16 md:py-24"
          aria-labelledby="ledger-heading"
        >
          <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-6 lg:grid-cols-[16rem_minmax(0,1fr)] lg:px-8">
            <div className="lg:sticky lg:top-10 lg:self-start">
              <p className="text-[0.7rem] font-semibold tracking-[0.22em] text-bronze uppercase">
                The record · {INFORMATION_CHECKED_DISPLAY}
              </p>
              <h2
                id="ledger-heading"
                className="mt-3 font-display text-4xl italic text-ink"
              >
                Verified versus TBA
              </h2>
              <p className="mt-4 text-sm leading-6 text-ink-muted">
                {copy.factsExplanation}
              </p>
            </div>
            <div className="border-y border-stone">
              {ledgerFacts.map((fact, index) => (
                <div
                  key={fact.id}
                  className={`grid gap-2 py-5 md:grid-cols-[11rem_minmax(0,1fr)_9rem] ${
                    index % 2 === 0 ? "" : "bg-paper-muted/50"
                  }`}
                >
                  <div className="px-3 text-sm tracking-wide text-ink-muted uppercase">
                    {fact.item}
                  </div>
                  <div className="px-3 font-display text-xl text-ink">
                    {displayFactValue(fact)}
                  </div>
                  <div className="px-3 md:text-right">
                    <span className="status-pill">{fact.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="homes" className="bg-navy py-16 text-paper-elevated md:py-24">
          <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-[0.7rem] font-semibold tracking-[0.22em] text-gold uppercase">
                Artist&apos;s concepts
              </p>
              <h2 className="mt-3 font-display text-4xl italic">
                Detached homes and townhomes
              </h2>
              <p className="mt-4 text-base leading-7 text-paper-elevated/85">
                Caivan has named the product mix for Five Oaks. Models, lots,
                sizes, bedrooms and pricing have not been published. Named
                elevations are artist&apos;s concepts, not floor plans.
                Confirm townhome tenure on the official release.
              </p>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {homeCollection.map((home) => {
                const image = images[home.imageId];
                return (
                  <article
                    key={home.id}
                    className="overflow-hidden border border-paper-elevated/15 bg-paper-elevated text-ink"
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={image.width}
                      height={image.height}
                      className="h-auto w-full object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="p-6">
                      <p className="text-xs tracking-[0.16em] text-bronze uppercase">
                        {home.status} · artist&apos;s concept
                      </p>
                      <h3 className="mt-2 font-display text-2xl">{home.title}</h3>
                      <p className="mt-4 text-base leading-7 text-ink">
                        {home.copy}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
            <div className="mt-12">
              <h3 className="font-display text-2xl">Named elevations</h3>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-paper-elevated/80">
                Gallery of artist&apos;s concepts from current project materials.
                These are not layouts and not as-built homes.
              </p>
              <div className="mt-6 bg-paper p-4 text-ink md:p-6">
                <ElevationGrid />
              </div>
            </div>
            <Link
              href="/homes"
              className="mt-8 inline-flex text-sm tracking-wide text-gold underline underline-offset-4"
            >
              Read the homes brief
            </Link>
          </div>
        </section>

        <section className="bg-paper py-16 md:py-24">
          <div className="mx-auto grid max-w-6xl items-start gap-10 px-5 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
            <div>
              <p className="text-[0.7rem] font-semibold tracking-[0.22em] text-bronze uppercase">
                Oakville context
              </p>
              <h2 className="mt-3 font-display text-4xl italic text-ink">
                A lakeside town, an unpublished pin
              </h2>
              <p className="mt-4 text-base leading-7 text-ink">
                {copy.oakvilleContext}
              </p>
              <ul className="mt-6 space-y-2 text-base text-ink">
                {copy.oakvilleSafeFacts.map((item) => (
                  <li key={item} className="border-l-2 border-gold pl-4">
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm leading-6 text-ink-muted">
                {copy.locationLead}
              </p>
              <Link
                href="/location"
                className="mt-6 inline-flex text-sm text-bronze underline underline-offset-4"
              >
                Where is Five Oaks?
              </Link>
            </div>
            <NeighbourhoodFigure
              src={images.lakeshore.src}
              alt={images.lakeshore.alt}
              width={images.lakeshore.width}
              height={images.lakeshore.height}
            />
          </div>
        </section>

        <section className="bg-paper-muted py-16 md:py-24">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-6 lg:grid-cols-[minmax(0,1fr)_20rem] lg:px-8">
            <DatedFactExcerpt
              excerpt="Prices, floor plans, deposits, incentives, launch date and occupancy were not in the official sources reviewed on August 24, 2026. Register rather than guess."
              factIds={["pricing", "floor-plans", "deposit", "incentives", "launch-date", "occupancy"]}
            />
            <div>
              <h2 className="font-display text-3xl italic text-ink">Still unpublished</h2>
              <ul className="mt-4 columns-1 gap-x-8 text-sm leading-7 text-ink sm:columns-2">
                {tbaProjectItems.map((item) => (
                  <li key={item} className="break-inside-avoid">
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/pricing" className="text-sm text-bronze underline underline-offset-4">
                  Five Oaks prices
                </Link>
                <Link href="/floor-plans" className="text-sm text-bronze underline underline-offset-4">
                  Floor plans
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-paper py-16 md:py-24" aria-labelledby="faqs-heading">
          <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
            <h2 id="faqs-heading" className="font-display text-4xl italic text-ink">
              First questions
            </h2>
            <div className="mt-8 max-w-3xl">
              <FaqList items={homePage.faqs ?? []} />
            </div>
            <Link
              href="/faqs"
              className="mt-6 inline-flex text-sm text-bronze underline underline-offset-4"
            >
              All Five Oaks Oakville FAQs
            </Link>
          </div>
        </section>

        <section className="bg-navy py-16 text-paper-elevated">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-6 lg:grid-cols-[minmax(0,1fr)_22rem] lg:px-8">
            <div>
              <h2 className="font-display text-4xl italic">{copy.finalCta}</h2>
              <div className="mt-6 text-paper-elevated/80">
                <OfficialSources />
              </div>
            </div>
            <LeadForm idPrefix="footer" compact />
          </div>
        </section>

        <div className="bg-paper py-8">
          <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
            <SiblingLinks links={homePage.siblings} />
            <p className="mt-6 text-sm text-ink-muted">
              Official sources:{" "}
              <ExternalLink href={project.officialProjectUrl}>
                Five Oaks on Caivan.com
              </ExternalLink>
            </p>
          </div>
        </div>
      </main>
      <Footer />
      <MobileStickyCta />
    </>
  );
}
