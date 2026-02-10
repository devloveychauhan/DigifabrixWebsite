import { ArrowRight } from "lucide-react";
import { useState } from "react";
import CaseStudy from "./CaseStudy";
import HowItWorks from "./HowItWorks";
import CTASection from "./CTASection";
import DataVisulization from "../component/DataVisulization";
import OperatorEngagement from "../component/OperatorEngagement";

const LandingPage = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="bg-white">
      {/* ==================== HERO SECTION ==================== */}
      <section
        id="home"
        className="relative pt-24 pb-20 lg:pt-32 lg:pb-32 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-600 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
                </span>
                Industry 4.0 Ready
              </div>

              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-tight tracking-tight">
                  Digitize Your <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">
                    Factory Floor
                  </span>
                </h1>
                <p className="text-lg lg:text-xl text-slate-600 max-w-lg leading-relaxed">
                  Real-time monitoring, OEE tracking, and smart factory
                  automation that drive measurable efficiency gains and
                  productivity improvements.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="group flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 hover:shadow-xl hover:shadow-blue-300">
                  Start Free Trial
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="flex items-center justify-center gap-2 bg-white text-slate-700 border-2 border-slate-200 px-8 py-4 rounded-xl font-bold hover:bg-slate-50 hover:border-blue-300 transition-all">
                  View Live Demo
                </button>
              </div>

              {/* Trust indicators */}
              <div className="pt-8 border-t border-slate-200 flex gap-8">
                <div>
                  <p className="text-2xl font-bold text-slate-900">500+</p>
                  <p className="text-sm text-slate-600">Factories Digitized</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-900">25%</p>
                  <p className="text-sm text-slate-600">Avg. OEE Improvement</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-900">48h</p>
                  <p className="text-sm text-slate-600">Time to Deploy</p>
                </div>
              </div>
            </div>

            {/* Dashboard Mockup */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-teal-400 rounded-2xl blur-3xl opacity-25 -z-10"></div>

              <div className="relative bg-slate-900 rounded-2xl shadow-2xl border border-slate-700 p-6 overflow-hidden">
                <div className="flex items-center gap-3 mb-6 border-b border-slate-700 pb-4">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500 shadow-sm"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-sm"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500 shadow-sm"></div>
                  </div>
                  <div>
                    {" "}
                    <a
                      href="/app.digifabrix.com"
                      target="blank"
                      className="ml-4 cursor-pointer  text-xs text-slate-400 bg-slate-800 px-3 py-1.5 rounded font-mono border border-slate-700"
                    >
                      app.digifabrix.com
                    </a>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2 sm:col-span-1 bg-gradient-to-br from-slate-800 to-slate-900 p-4 rounded-lg border border-slate-700 hover:border-teal-500/30 transition-colors">
                    <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-3">
                      Shift OEE
                    </p>
                    <div className="flex items-baseline gap-2 mb-3">
                      <span className="text-5xl font-bold text-teal-400">
                        87%
                      </span>
                      <span className="text-teal-500/70 text-sm font-semibold">
                        ↑ 4.2%
                      </span>
                    </div>
                    <div className="w-full bg-slate-700/50 h-2 rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-teal-500 to-teal-400 h-full w-[87%] rounded-full shadow-lg shadow-teal-500/30"></div>
                    </div>
                  </div>

                  <div className="col-span-2 sm:col-span-1 bg-gradient-to-br from-slate-800 to-slate-900 p-4 rounded-lg border border-slate-700 hover:border-green-500/30 transition-colors flex flex-col justify-between">
                    <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-4">
                      Production Line
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <div className="h-3 w-3 bg-green-500 rounded-full shadow-lg shadow-green-500/50"></div>
                        <div className="absolute inset-0 h-3 w-3 bg-green-400 rounded-full animate-ping opacity-50"></div>
                      </div>
                      <span className="text-lg font-bold text-green-400">
                        Operating
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 mt-3">
                      Uptime: 4h 47m
                    </p>
                  </div>

                  <div className="col-span-2 bg-gradient-to-br from-slate-800 to-slate-900 p-4 rounded-lg border border-slate-700">
                    <div className="flex justify-between items-center mb-4">
                      <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider">
                        Hourly Output
                      </p>
                      <span className="text-xs bg-teal-500/20 text-teal-300 px-2.5 py-1 rounded-full font-semibold">
                        Live
                      </span>
                    </div>
                    <div className="flex items-end justify-between gap-1.5 h-20">
                      {[40, 65, 45, 80, 55, 70, 85, 90, 60, 75, 50, 95].map(
                        (h, i) => (
                          <div
                            key={i}
                            className="flex-1 rounded-t transition-all duration-300 hover:opacity-80 cursor-pointer"
                            style={{
                              height: `${h}%`,
                              backgroundColor:
                                h > 80
                                  ? "rgb(20, 184, 166)"
                                  : h < 50
                                    ? "rgb(245, 158, 11)"
                                    : "rgb(59, 130, 246)",
                            }}
                          />
                        ),
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== HOW IT WORKS TIMELINE ==================== */}
      <HowItWorks activeStep={activeStep} setActiveStep={setActiveStep} />

      {/* ==================== CASE STUDY HIGHLIGHT ==================== */}
      <CaseStudy />

      {/* ==================== DATA VISUALIZATION SECTION ==================== */}
      <DataVisulization />

      {/* ==================== OPERATOR ENGAGEMENT SECTION ==================== */}
      <OperatorEngagement />

      {/* ==================== CTA SECTION ==================== */}
      <CTASection />
    </div>
  );
};

export default LandingPage;
