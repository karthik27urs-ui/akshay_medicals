import ScrollReveal from "./ScrollReveal";
import communityImg from "@/assets/community-sirsi.jpg";

const CommunitySection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Full-width background */}
      <div className="absolute inset-0">
        <img
          src={communityImg}
          alt="Sirsi community near Government Hospital"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/60" />
      </div>

      <div className="relative z-10 py-28 md:py-40">
        <div className="container mx-auto px-6 text-center">
          <ScrollReveal>
            <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 backdrop-blur-sm">
              <div className="h-2 w-2 rounded-full bg-secondary" />
              <span className="font-display text-xs font-semibold uppercase tracking-widest text-primary-foreground/90">
                Our Community
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="mx-auto max-w-3xl font-display text-3xl font-bold leading-tight text-primary-foreground sm:text-4xl md:text-5xl">
              A Pillar of Sirsi's
              <span className="block text-secondary">Healthcare Community</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-2xl font-body text-lg leading-relaxed text-primary-foreground/80">
              Standing right opposite the Government Hospital on Church Road, Akshaya Medicals 
              serves as a lifeline for patients, families, and the everyday people of Sirsi. 
              Whether it's an urgent prescription at midnight or weekly household shopping — 
              we're here, always.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.35}>
            <div className="mx-auto mt-12 grid max-w-xl grid-cols-3 gap-6">
              {[
                { value: "1000+", label: "Families Served" },
                { value: "24/7", label: "Availability" },
                { value: "Sirsi", label: "Proudly Local" },
              ].map((stat) => (
                <div key={stat.label} className="rounded-xl bg-primary-foreground/10 px-4 py-5 backdrop-blur-sm">
                  <div className="font-display text-2xl font-bold text-secondary">{stat.value}</div>
                  <div className="mt-1 font-body text-xs text-primary-foreground/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
