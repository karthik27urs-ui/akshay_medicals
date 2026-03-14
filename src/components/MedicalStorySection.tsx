import ScrollReveal from "./ScrollReveal";
import medicalImg from "@/assets/medical-supplies.jpg";
import { Shield, Clock, Stethoscope } from "lucide-react";

const features = [
  { icon: Shield, title: "Trusted Medicines", desc: "Genuine pharmaceutical products from certified distributors." },
  { icon: Clock, title: "Always Available", desc: "Open when you need us — right across from the hospital." },
  { icon: Stethoscope, title: "Wellness First", desc: "From prescriptions to wellness supplements, we care for your health." },
];

const MedicalStorySection = () => {
  return (
    <section className="section-surface py-24 md:py-32">
      <div className="container mx-auto px-6">
        {/* Section label */}
        <ScrollReveal>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5">
            <div className="h-2 w-2 rounded-full bg-primary" />
            <span className="font-display text-xs font-semibold uppercase tracking-widest text-primary">Healthcare</span>
          </div>
        </ScrollReveal>

        <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
          {/* Text */}
          <div>
            <ScrollReveal>
              <h2 className="font-display text-3xl font-bold leading-tight text-foreground sm:text-4xl md:text-5xl">
                Your Health,
                <span className="block text-primary">Our Priority</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p className="mt-6 font-body text-lg leading-relaxed text-muted-foreground">
                Located just steps from Sirsi Government Hospital, Akshaya Medicals has been the first stop for patients 
                and families seeking reliable medicines and healthcare products. Every prescription is handled with care, 
                every customer treated like family.
              </p>
            </ScrollReveal>

            <div className="mt-10 space-y-6">
              {features.map((f, i) => (
                <ScrollReveal key={f.title} delay={0.2 + i * 0.1}>
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                      <f.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display text-base font-semibold text-foreground">{f.title}</h3>
                      <p className="mt-1 font-body text-sm text-muted-foreground">{f.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Image */}
          <ScrollReveal direction="right" delay={0.2}>
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={medicalImg}
                alt="Medicine shelves at Akshaya Medicals"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-foreground/5" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default MedicalStorySection;
