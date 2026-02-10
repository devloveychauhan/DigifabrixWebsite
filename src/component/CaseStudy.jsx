import { ArrowRight } from "lucide-react";

const CaseStudy = () => {
  return (
    <section className="py-20 lg:py-32 bg-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="inline-block">
              <span className="text-sm font-semibold text-[#f08209] uppercase tracking-wider">
                Case Study
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight">
              32% OEE Improvement in 90 Days
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed">
              A leading automotive parts manufacturer deployed our platform
              across 8 production lines. Within 3 months, they achieved
              unprecedented visibility into their operations and eliminated
              critical bottlenecks.
            </p>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 gap-6 pt-8">
              <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
                <p className="text-4xl font-bold text-[#f08209] mb-2">32%</p>
                <p className="text-sm text-slate-400">OEE Increase</p>
              </div>
              <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
                <p className="text-4xl font-bold text-[#f08209] mb-2">$2.4M</p>
                <p className="text-sm text-slate-400">Annual Savings</p>
              </div>
              <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
                <p className="text-4xl font-bold text-[#f08209] mb-2">89h</p>
                <p className="text-sm text-slate-400">Downtime Eliminated</p>
              </div>
              <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
                <p className="text-4xl font-bold text-[#f08209] mb-2">3mo</p>
                <p className="text-sm text-slate-400">ROI Achieved</p>
              </div>
            </div>

            <button className="group flex items-center gap-2 bg-[#f08209] hover:bg-[#d67f22] text-white px-8 py-4 rounded-xl font-bold transition-all mt-8 shadow-lg shadow-teal-500/30">
              Read Full Case Study{" "}
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Visual - OEE Improvement Chart */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-teal-400 to-blue-400 rounded-2xl blur-3xl opacity-20 -z-10"></div>

            <div className="bg-slate-800 rounded-2xl border border-slate-700 p-8">
              <h3 className="text-white font-bold mb-6">OEE Progression</h3>

              {/* Chart bars */}
              <div className="space-y-4">
                {[
                  { month: "Baseline", value: 58, color: "bg-slate-600" },
                  { month: "Month 1", value: 65, color: "bg-blue-500" },
                  { month: "Month 2", value: 74, color: "bg-[#f08209]" },
                  { month: "Month 3", value: 90, color: "bg-[#f08209]" },
                ].map((item, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-semibold text-slate-300">
                        {item.month}
                      </span>
                      <span className="text-lg font-bold text-[#f08209]">
                        {item.value}%
                      </span>
                    </div>
                    <div className="w-full bg-slate-700 h-3 rounded-full overflow-hidden">
                      <div
                        className={`${item.color} h-full rounded-full transition-all duration-500`}
                        style={{ width: `${item.value}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom stats */}
              <div className="mt-8 pt-8 border-t border-slate-700 grid grid-cols-2 gap-4">
                <div>
                  <p className="text-slate-400 text-xs uppercase tracking-wider mb-2">
                    Operator Engagement
                  </p>
                  <p className="text-2xl font-bold text-[#f08209]">+87%</p>
                </div>
                <div>
                  <p className="text-slate-400 text-xs uppercase tracking-wider mb-2">
                    Maintenance Efficiency
                  </p>
                  <p className="text-2xl font-bold text-[#f08209]">+64%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
