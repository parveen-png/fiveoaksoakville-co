import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/ui";
import { MobileStickyCta } from "@/components/MobileStickyCta";
import {
  AnswerBlock,
  Breadcrumbs,
  DatedFactExcerpt,
  FaqList,
  OfficialSources,
  PageForm,
  SiblingLinks,
} from "@/components/Editorial";
import { LeadForm } from "@/components/LeadForm";
import { buildJsonLd } from "@/lib/json-ld";
import type { PageContent } from "@/lib/pages";
import { copy, project } from "@/lib/project-data";
import type { ReactNode } from "react";

export function SpokePage({
  page,
  children,
  formSupportText,
}: {
  page: PageContent;
  children?: ReactNode;
  formSupportText?: string;
}) {
  return (
    <>
      <JsonLd data={buildJsonLd({ page })} />
      <Header registerHref="#register" />
      <main id="main" className="bg-paper pb-24 lg:pb-16">
        <div className="border-b border-stone bg-paper-elevated">
          <div className="mx-auto max-w-6xl px-5 py-12 sm:px-6 lg:px-8">
            <Breadcrumbs page={page} />
            <p className="mt-6 text-[0.7rem] font-semibold tracking-[0.22em] text-bronze uppercase">
              {project.name} · {project.municipality}
            </p>
            <div className="mt-4">
              <AnswerBlock h1={page.h1} answer={page.answer} />
            </div>
            <p className="mt-6 max-w-3xl text-sm leading-6 text-ink-muted">
              {copy.independentDisclosure}
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 sm:px-6 lg:grid-cols-[minmax(0,1fr)_22rem] lg:px-8">
          <div className="space-y-10">
            <DatedFactExcerpt excerpt={page.factExcerpt} factIds={page.factIds} />
            {children}
            {page.faqs && page.faqs.length > 0 ? (
              <section aria-labelledby="faqs-heading">
                <h2
                  id="faqs-heading"
                  className="font-display text-3xl text-ink"
                >
                  Questions on this page
                </h2>
                <div className="mt-6">
                  <FaqList items={page.faqs} />
                </div>
              </section>
            ) : null}
            <SiblingLinks links={page.siblings} />
            <OfficialSources />
          </div>
          <div className="lg:sticky lg:top-8 lg:self-start">
            <PageForm supportText={formSupportText} />
          </div>
        </div>

        <section className="border-t border-stone bg-navy py-16 text-paper-elevated">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-6 lg:grid-cols-[minmax(0,1fr)_22rem] lg:px-8">
            <div>
              <p className="text-[0.7rem] font-semibold tracking-[0.22em] text-gold uppercase">
                Footer register
              </p>
              <h2 className="mt-3 font-display text-3xl">
                Keep this brief. Skip invented prices.
              </h2>
              <p className="mt-4 max-w-xl text-base leading-7 text-paper-elevated/85">
                {copy.formSupport}
              </p>
            </div>
            <LeadForm idPrefix="footer" compact supportText={formSupportText} />
          </div>
        </section>
      </main>
      <Footer />
      <MobileStickyCta />
    </>
  );
}
