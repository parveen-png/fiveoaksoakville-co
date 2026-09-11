import type { Metadata } from "next";
import { SpokePage } from "@/components/SpokePage";
import { NeighbourhoodFigure } from "@/components/Editorial";
import { buildPageMetadata } from "@/lib/metadata";
import { pricingPage } from "@/lib/pages";
import {
  copy,
  displayFactValue,
  getFact,
  images,
  pricingStatusItems,
} from "@/lib/project-data";

export const metadata: Metadata = buildPageMetadata(pricingPage);

export default function PricingPage() {
  return (
    <SpokePage
      page={pricingPage}
      formSupportText={copy.pricingFormSupport}
    >
      <section className="space-y-6 text-base leading-7 text-ink">
        <h2 className="font-display text-3xl italic text-ink">
          Cost status, not a price list
        </h2>
        <p>{copy.pricingLead}</p>
        <p>
          Searchers looking for Five Oaks prices, Five Oaks cost, or a Five
          Oaks Oakville price list will not find an official starting price on
          this independent site, because the official sources reviewed on
          August 24, 2026 did not publish one. That is an honest TBA, not a
          missing spreadsheet cell. When Caivan Communities releases verified
          pricing, this page should be updated against those documents—not
          against undated third-party roundups.
        </p>
        <p>{copy.pricingCaution}</p>
        <p>
          Deposit structure is also unpublished. Pre-construction deposits in
          Ontario are set in the Agreement of Purchase and Sale and its
          schedules. Until Five Oaks papers exist, no percentage, no staged
          payment calendar, and no “typical Oakville deposit” belongs here as
          if it were this project’s rule.
        </p>
        <p>
          Incentives are in the same category. No Five Oaks-specific promotion
          should be advertised until it is verified against current official
          documentation. If another website lists a limited-time credit or a
          design-studio allowance, treat it as unconfirmed for this community
          unless you can match it to Caivan’s own release.
        </p>
        <p>
          Launch date and occupancy are not substitutes for a price. A coming
          soon community can open a registration list long before a public
          price list. Occupancy windows, if they appear later, can still move.
          Register for verified updates rather than planning a closing around
          an unpublished calendar.
        </p>
        <div className="divide-y border-y border-stone">
          {pricingStatusItems.map((item) => (
            <div
              key={item.label}
              className="grid gap-2 py-4 sm:grid-cols-[12rem_1fr]"
            >
              <div className="text-sm text-ink-muted">{item.label}</div>
              <div className="font-display text-xl text-ink">
                {displayFactValue(getFact(item.factId))}
              </div>
            </div>
          ))}
        </div>
        <p>
          This page does not assign a starting price to detached homes or to
          Five Oaks freehold townhomes. Product type is confirmed; cost is not.
          If you need a number for a mortgage pre-approval conversation, ask
          your lender to model ranges you choose independently. Do not treat
          those ranges as Five Oaks list prices.
        </p>
        <div className="pt-4">
          <NeighbourhoodFigure
            src={images.garden.src}
            alt={images.garden.alt}
            width={images.garden.width}
            height={images.garden.height}
          />
        </div>
      </section>
    </SpokePage>
  );
}
