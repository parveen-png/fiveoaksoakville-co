import type { Metadata } from "next";
import { SpokePage } from "@/components/SpokePage";
import {
  ElevationGrid,
  InteriorGrid,
  RenderingFigure,
} from "@/components/Editorial";
import { buildPageMetadata } from "@/lib/metadata";
import { homesPage } from "@/lib/pages";
import { copy, homeCollection, images } from "@/lib/project-data";

export const metadata: Metadata = buildPageMetadata(homesPage);

export default function HomesPage() {
  return (
    <SpokePage page={homesPage}>
      <section className="space-y-6 text-base leading-7 text-ink">
        <h2 className="font-display text-3xl italic text-ink">
          Two product types, unpublished models
        </h2>
        <p>
          Five Oaks Oakville is planned with single-detached homes and
          townhomes. That product mix is verified against official Caivan
          materials reviewed on August 24, 2026. What has not been published is
          equally important: official floor plans, lot counts, lot widths,
          interior square footage, bedroom and bathroom configurations, and
          pricing.
        </p>
        <p>
          Current campaign materials name detached elevations The Starling, The
          Merlin and The Sandhill, and townhome elevations including the 24′
          Collection, Advantage Townhomes and B2B. Those names help you
          recognize a collection. They do not replace a lot list or a purchase
          agreement. The images on this page are artist&apos;s concepts. Homes
          as built may differ.
        </p>
        <p>
          Caivan&apos;s Oakville community overview indicates freehold
          townhomes for Five Oaks. Tenure still needs confirmation on the
          specific release and home you might buy. Freehold is not a promise
          that every townhome product, including back-to-back forms, will share
          the same legal structure. Ask for the official documents before you
          treat tenure as settled.
        </p>
        <p>{copy.developerCaution}</p>
      </section>
      <section className="space-y-8">
        {homeCollection.map((home) => {
          const image = images[home.imageId];
          return (
            <article
              key={home.id}
              className="overflow-hidden border border-stone bg-paper-elevated"
            >
              <RenderingFigure
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
              />
              <div className="p-6">
                <h2 className="font-display text-3xl italic text-ink">
                  {home.title}
                </h2>
                <p className="mt-2 text-xs tracking-[0.16em] text-bronze uppercase">
                  {home.status} · artist&apos;s concept
                </p>
                <p className="mt-4 text-base leading-7 text-ink">{home.copy}</p>
              </div>
            </article>
          );
        })}
      </section>
      <section className="space-y-4 text-base leading-7 text-ink">
        <h2 className="font-display text-3xl italic text-ink">
          Gallery of artist&apos;s concepts
        </h2>
        <p>
          Use this gallery to see named collections. Do not read elevations as
          floor plans, as-built photographs, or a guarantee of finishes.
          Interior renderings of kitchens, a great room and a breakfast area
          are also artist&apos;s concepts from current project materials.
        </p>
        <ElevationGrid />
      </section>
      <section className="space-y-4 text-base leading-7 text-ink">
        <h2 className="font-display text-3xl italic text-ink">
          Interiors — not layouts
        </h2>
        <p>
          Interior images can help you understand the marketing tone for Five
          Oaks Caivan homes. They cannot tell you room dimensions, stair
          placement, or which elevation belongs to which plan. Official floor
          plans remain to be announced. Register when you want that package
          rather than an unofficial reconstruction.
        </p>
        <InteriorGrid />
      </section>
    </SpokePage>
  );
}
