import Container from "@/components/common/Container";
import PageHero from "@/components/pages/shared/PageHero";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";

const faqs = [
  {
    question: "How do I track an order after checkout?",
    answer:
      "Visit the account order page to review the latest status. That route now includes a proper order summary instead of a placeholder screen.",
  },
  {
    question: "Where can I save products for later?",
    answer:
      "Use the wishlist button on product pages. Saved products now feed into a dedicated wishlist page you can return to anytime.",
  },
  {
    question: "Can I request pricing for bulk orders?",
    answer:
      "Yes. The quote page is available from the account area and is ready for custom order requests and sourcing conversations.",
  },
  {
    question: "How do I update my delivery address?",
    answer:
      "Open the account addresses page to review your saved locations and choose a default delivery point for checkout.",
  },
];

const FaqPage = () => {
  return (
    <div className="bg-tech_bg_color py-10">
      <Container className="space-y-6">
        <PageHero
          eyebrow="FAQS"
          title="Answers to the questions shoppers ask most"
          description="A simple knowledge base makes it easier for customers to self-serve before they need to contact support."
        />

        <div className="rounded-3xl border bg-tech_bg_white px-6 py-4 shadow-sm">
          <Accordion type="single" collapsible>
            {faqs.map((faq) => (
              <AccordionItem key={faq.question} value={faq.question}>
                <AccordionTrigger className="text-base font-semibold text-tech_bg_dark hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-6 text-tech_bg_light_color">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </div>
  );
};

export default FaqPage;
