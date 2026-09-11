import type { Metadata } from "next";
import { SpokePage } from "@/components/SpokePage";
import {
  NeighbourhoodFigure,
  RenderingFigure,
} from "@/components/Editorial";
import { buildPageMetadata } from "@/lib/metadata";
import { locationPage } from "@/lib/pages";
import { copy, images, project } from "@/lib/project-data";

export const metadata: Metadata = buildPageMetadata(locationPage);

export default function LocationPage() {
  return (
    <SpokePage page={locationPage}>
      <section className="space-y-6 text-base leading-7 text-ink">
        <h2 className="font-display text-3xl italic text-ink">
          Oakville is confirmed. The street is not.
        </h2>
        <p>
          Buyers searching “where is Five Oaks” are looking for a pin. Official
          Five Oaks material reviewed on August 24, 2026 confirms only the
          municipality: Oakville, Ontario, Canada. Caivan Communities has not
          published an exact project address, intersection, or site plan on the
          official Five Oaks page cited here. Until that location is released,
          this independent brief will not invent one.
        </p>
        <p>{copy.locationLead}</p>
        <p>
          That restraint is the point of this page. Third-party directories
          sometimes attach a coming-soon community to a nearby sales centre or
          to a corridor that has not been named in project documents. Those
          guesses travel faster than corrections. Five Oaks Oakville queries
          deserve a dated answer: the town is verified; the site remains to be
          announced.
        </p>
        <h2 className="font-display text-3xl italic text-ink">
          Town-level facts, not project-specific travel times
        </h2>
        <p>{copy.oakvilleContext}</p>
        <ul className="space-y-2">
          {copy.oakvilleSafeFacts.map((item) => (
            <li key={item} className="border-l-2 border-gold pl-4">
              {item}
            </li>
          ))}
        </ul>
        <p>
          Those statements describe Oakville as a Greater Toronto Area town.
          They do not say Five Oaks is “minutes to” Lake Ontario, a GO station,
          a school, or a shopping node. Commute times, walk scores, and amenity
          proximity require a confirmed pin. This page will add those details
          only after Caivan publishes them in official Five Oaks documents.
        </p>
        <h2 className="font-display text-3xl italic text-ink">
          Do not treat 209 Oak Park Blvd. as the Five Oaks site
        </h2>
        <p>
          Caivan lists a general Oakville sales centre at{" "}
          {project.generalSalesCentre.address}. {project.generalSalesCentre.note}{" "}
          Public sales-centre contact is useful for talking to the builder. It
          is not a substitute for the Five Oaks site plan. If you visit that
          address, ask staff to confirm whether they can discuss this community
          and whether a project-specific location has been released.
        </p>
        <p>
          Launch date, occupancy, and lot release sequencing are also
          unpublished. A coming-soon community can move through planning,
          marketing, and sales stages without a public map. Register on this
          page if you want a verified location update rather than a guessed
          intersection.
        </p>
        <p>
          Photographs below are neighbourhood or aerial illustrations. They are
          not a confirmed Five Oaks site pin and should not be read as a
          promised backyard, trail, or water view for a specific lot.
        </p>
      </section>
      <section className="space-y-8">
        <h2 className="font-display text-3xl italic text-ink">
          Illustration only — not a map pin
        </h2>
        <RenderingFigure
          src={images.communityAerial.src}
          alt={images.communityAerial.alt}
          width={images.communityAerial.width}
          height={images.communityAerial.height}
          caption="Neighbourhood illustration only. Not a confirmed Five Oaks site pin."
        />
        <RenderingFigure
          src={images.pondPathway.src}
          alt={images.pondPathway.alt}
          width={images.pondPathway.width}
          height={images.pondPathway.height}
          caption="Neighbourhood illustration only. Not a confirmed Five Oaks site pin."
        />
        <RenderingFigure
          src={images.creekAerial.src}
          alt={images.creekAerial.alt}
          width={images.creekAerial.width}
          height={images.creekAerial.height}
          caption="Neighbourhood illustration only. Not a confirmed Five Oaks site pin."
        />
        <div className="grid gap-8 sm:grid-cols-2">
          <NeighbourhoodFigure
            src={images.park.src}
            alt={images.park.alt}
            width={images.park.width}
            height={images.park.height}
          />
          <NeighbourhoodFigure
            src={images.treeCanopy.src}
            alt={images.treeCanopy.alt}
            width={images.treeCanopy.width}
            height={images.treeCanopy.height}
          />
        </div>
      </section>
    </SpokePage>
  );
}
