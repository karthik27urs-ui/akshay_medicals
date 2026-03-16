import ScrollReveal from "./ScrollReveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "Do I need a doctor's prescription to buy medicine from Akshaya Medical?",
    a: "Most chemists require a doctor's prescription to provide you with certain medications. Thus, it is always advised to consult a doctor and then visit Akshaya Medical to check for the availability of that medicine.",
  },
  {
    q: "What products besides medicine does a chemist sell?",
    a: "Most chemists sell various products besides medicine such as deodorants, face wash, face cream, lip balm, soaps, etc. It is advisable to visit Akshaya Medical to look for the product you need.",
  },
  {
    q: "Where is Akshaya Medical located in Sirsi?",
    a: "Akshaya Medical in Sirsi Market is located Opposite Government Hospital, Church Road, Sirsi, Karnataka 581401.",
  },
  {
    q: "Do chemists have a return policy?",
    a: "Yes, most chemists have a return policy. This may vary based on each chemist store. Thus, it is advised to call or visit them in advance.",
  },
  {
    q: "Does Akshaya Medical provide a home delivery service?",
    a: "Most chemists provide a home delivery service. However, it is best to call a representative at Akshaya Medical to check for the availability of this service.",
  },
  {
    q: "What are the business hours of Akshaya Medical?",
    a: "Monday to Saturday: 8:30 AM – 9:30 PM. Sunday: 8:30 AM – 1:00 PM.",
  },
];

const FAQSection = () => {
  return (
    <section className="section-surface py-24 md:py-32">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5">
              <HelpCircle className="h-4 w-4 text-primary" />
              <span className="font-display text-xs font-semibold uppercase tracking-widest text-primary">FAQ</span>
            </div>
            <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
              Frequently Asked Questions
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="mx-auto mt-12 max-w-3xl">
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="rounded-xl border border-border bg-background px-6 shadow-sm transition-shadow hover:shadow-md"
                >
                  <AccordionTrigger className="py-5 font-display text-sm font-semibold text-foreground hover:no-underline sm:text-base [&[data-state=open]]:text-primary">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 font-body text-sm leading-relaxed text-muted-foreground">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FAQSection;
