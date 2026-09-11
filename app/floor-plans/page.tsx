import type { Metadata } from "next";
import { SpokePage } from "@/components/SpokePage";
import { ElevationGrid, InteriorGrid } from "@/components/Editorial";
import { buildPageMetadata } from "@/lib/metadata";
import { floorPlansPage } from "@/lib/pages";
import { copy, homeCollection } from "@/lib/project-data";

export const metadata: Metadata = buildPageMetadata(floorPlansPage);

export default function FloorPlansPage() {
  return (
    <SpokePage page={floorPlansPage}>
      <section className="space-y-6 text-base leading-7 text-ink">
        <h2 className="font-display text-3xl italic text-ink">
          Elevations are not layouts
        </h2>
        <p>
          Official Five Oaks floor plans have not been published in the
          reviewed project material as of August 24, 2026. If you are searching
          for Five Oaks floor plans, bedroom counts, or square footage, the
          accurate public answer is still to be announced. This independent
          site will not reconstruct unofficial plans from marketing elevations.
        </p>
        <p>
          Named collections from current materials include detached artist&apos;s
          concepts for The Starling, The Merlin and The Sandhill, and townhome
          artist&apos;s concepts for the 24′ Collection, Advantage Townhomes and
          B2B. Those images show exterior massing and architectural character.
          They do not show room dimensions, stair cores, basement layouts, or
          which interior belongs to which elevation.
        </p>
        <p>{copy.developerCaution}</p>
        <p>
          Features seen in other Caivan communities, including construction
          methods described on Caivan.com, should not be assumed for Five Oaks
          until they appear in this community’s official documents. The same
          caution applies to interior finishes in the kitchen and great-room
          concepts below.
        </p>
        <ul className="space-y-4">
          {homeCollection.map((home) => (
            <li key={home.id} className="border-l-2 border-gold pl-4">
              <p className="font-medium text-ink">{home.title}</p>
              <p className="mt-1 text-sm leading-6 text-ink-muted">
                Interior plans for this product type: to be announced. The
                elevation shown in campaign materials is an artist&apos;s
                concept, not a floor plan.
              </p>
            </li>
          ))}
        </ul>
        <p>
          Register to be notified when Caivan Communities releases official
          plans for this Oakville coming-soon community. Until then, treat any
          undated PDF circulating on social media as unverified.
        </p>
        <div className="pt-4">
          <h3 className="font-display text-2xl italic text-ink">
            Artist&apos;s concept gallery
          </h3>
          <p className="mt-3">
            Exterior elevations first, then interior concepts. Captions repeat
            the qualifier so the images cannot be mistaken for construction
            documents.
          </p>
          <div className="mt-8">
            <ElevationGrid />
          </div>
          <div className="mt-10">
            <InteriorGrid />
          </div>
        </div>
      </section>
    </SpokePage>
  );
}
