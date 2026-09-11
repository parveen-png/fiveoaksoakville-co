import type { Metadata } from "next";
import { SpokePage } from "@/components/SpokePage";
import { buildPageMetadata } from "@/lib/metadata";
import { faqsPage } from "@/lib/pages";

export const metadata: Metadata = buildPageMetadata(faqsPage);

export default function FaqsRoute() {
  return (
    <SpokePage page={faqsPage}>
      <section className="space-y-6 text-base leading-7 text-ink">
        <h2 className="font-display text-3xl italic text-ink">
          How to read these answers
        </h2>
        <p>
          Each Five Oaks Oakville FAQ below is the same wording used in
          structured data for this page. Unpublished items stay marked to be
          announced as of August 24, 2026. The questions cover what Five Oaks
          by Caivan is, where it is, home types, freehold townhome tenure,
          prices, floor plans, deposits, incentives, launch timing, and how to
          register for updates.
        </p>
        <p>
          People Also Ask results often collapse a coming-soon community into a
          single invented number. This independent brief does the opposite:
          Caivan Five Oaks is coming soon to Oakville with detached homes and
          townhomes, and the rest of the commercial detail remains TBA until
          official documents exist. Occupancy, launch date, and deposit
          structure are not estimated here.
        </p>
        <p>
          Promotional email is sent only if you opt in on the form. You can
          unsubscribe from commercial electronic messages at any time. Submitting
          the form is the path for verified updates; this FAQ page is not a
          substitute for the developer’s own disclosures.
        </p>
      </section>
    </SpokePage>
  );
}
