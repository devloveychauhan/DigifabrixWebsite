const HowItWorks = ({ activeStep, setActiveStep }) => {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-white via-blue-50/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            From setup to full deployment in 48 hours. Our proven methodology
            ensures seamless integration with your existing systems.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-300 via-teal-400 to-blue-300 hidden lg:block"></div>

          <div className="space-y-12 lg:space-y-16">
            {[
              {
                number: "01",
                title: "Assessment & Planning",
                description:
                  "Our team analyzes your production lines and creates a customized digitization roadmap tailored to your needs.",
              },
              {
                number: "02",
                title: "Hardware Installation",
                description:
                  "Deploy IoT sensors and gateways on your production floor. No production downtime required.",
              },
              {
                number: "03",
                title: "Data Integration",
                description:
                  "Connect legacy systems, PLCs, and modern sensors. Our platform bridges all technologies.",
              },
              {
                number: "04",
                title: "Go Live & Monitoring",
                description:
                  "Start tracking OEE, throughput, and downtime in real-time. Full 24/7 support included.",
              },
            ].map((step, idx) => (
              <div
                key={idx}
                className="relative cursor-pointer"
                onClick={() => setActiveStep(idx)}
              >
                <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
                  {/* Content */}
                  <div
                    className={`${idx % 2 === 0 ? "lg:order-1" : "lg:order-2"}`}
                  >
                    <div
                      className={`bg-white rounded-xl p-8 border-2 transition-all duration-300 ${
                        activeStep === idx
                          ? "border-blue-500 shadow-lg shadow-blue-200"
                          : "border-slate-200 hover:border-blue-300"
                      }`}
                    >
                      <div className="flex items-center gap-4 mb-4">
                        {" "}
                        <span className="text-4xl">{step.icon}</span>
                        <span className="text-5xl font-bold text-blue-600">
                          {step.number}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Circle indicator */}
                  <div className="hidden lg:flex lg:order-2 justify-center">
                    <div className="relative w-16 h-16">
                      <div className="absolute inset-0 bg-blue-100 rounded-full"></div>
                      <div
                        className={`absolute inset-2 rounded-full transition-all duration-300 ${activeStep === idx ? "bg-blue-600 shadow-lg shadow-blue-500/50" : "bg-white border-4 border-blue-300"}`}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
