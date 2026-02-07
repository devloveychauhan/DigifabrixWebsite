import { Shield, CheckCircle2, Lock } from "lucide-react";

const SocialProof = () => {
  const logos = [
    "Coca-Cola",
    "BMW",
    "Siemens",
    "ThyssenKrupp",
    "Bosch",
    "Daimler",
  ];

  return (
    <section className="py-16 lg:py-24 bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            { value: "500+", label: "Manufacturers Worldwide" },
            { value: "45+", label: "Countries Covered" },
            { value: "99.9%", label: "System Uptime" },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">
                {item.value}
              </div>
              <p className="text-lg text-muted-foreground">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* Logo Grid */}
        <div className="mb-16">
          <p className="text-center text-muted-foreground mb-8 font-medium">
            Trusted by leading manufacturers
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
            {logos.map((logo) => (
              <div
                key={logo}
                className="h-16 rounded-xl border border-border
                           flex items-center justify-center
                           font-semibold text-sm text-muted-foreground
                           bg-card hover:bg-muted/40
                           transition-colors"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="border-t border-border pt-12">
          <p className="text-center text-muted-foreground mb-8 font-medium">
            Industry Trust & Security
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                title: "ISO 27001",
                desc: "Information Security Management",
              },
              {
                icon: Lock,
                title: "GDPR Compliant",
                desc: "Data Protection & Privacy",
              },
              {
                icon: CheckCircle2,
                title: "Industry 4.0 Ready",
                desc: "Smart Factory Compatible",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="flex flex-col items-center text-center
                           p-6 rounded-xl border border-border
                           bg-card hover:shadow-md
                           transition-shadow"
              >
                <Icon className="w-10 h-10 text-primary mb-3" />
                <h3 className="font-semibold mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default SocialProof;
