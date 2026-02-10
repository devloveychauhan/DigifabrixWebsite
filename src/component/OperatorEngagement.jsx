import { AlertCircle, ArrowRight, Check, TrendingUp, Zap } from "lucide-react";

const OperatorEngagement = () => {
  return (
    <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Mobile-first mockup */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-teal-400 rounded-3xl blur-3xl opacity-20 -z-10"></div>

            <div className="bg-slate-900 rounded-3xl shadow-2xl border border-slate-700 p-6 max-w-xs mx-auto lg:mx-0 relative z-10">
              {/* Phone notch */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-7 bg-slate-900 rounded-b-3xl border border-slate-700 border-t-0"></div>

              <div className="pt-6 space-y-4">
                {/* Header */}
                <div className="flex justify-between items-center pb-4 border-b border-slate-700">
                  <h3 className="text-white font-bold">Production Dashboard</h3>
                  <Zap className="w-5 h-5 text-teal-400" />
                </div>

                {/* Status cards */}
                <div className="space-y-3">
                  <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-slate-400 text-sm">
                        Line A Status
                      </span>
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    </div>
                    <p className="text-white font-bold text-lg">
                      Running • 87% OEE
                    </p>
                  </div>

                  <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-slate-400 text-sm">
                        Current Output
                      </span>
                      <TrendingUp className="w-4 h-4 text-teal-400" />
                    </div>
                    <p className="text-white font-bold text-lg">
                      1,247 units/hr
                    </p>
                  </div>

                  <div className="bg-amber-900/40 rounded-lg p-4 border border-amber-700/50">
                    <div className="flex items-center gap-2 mb-2">
                      <AlertCircle className="w-4 h-4 text-amber-400" />
                      <span className="text-amber-400 text-sm font-semibold">
                        Alert
                      </span>
                    </div>
                    <p className="text-white text-sm">
                      Maintenance window in 4h 23m
                    </p>
                  </div>
                </div>

                {/* Action buttons */}
                <div className="grid grid-cols-2 gap-3 pt-4">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold text-sm transition-colors">
                    Details
                  </button>
                  <button className="bg-slate-700 hover:bg-slate-600 text-white py-3 rounded-lg font-semibold text-sm transition-colors">
                    Report
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 leading-tight">
                Empower Your Operators with Real-Time Data
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Our intuitive mobile and desktop interfaces keep your team
                informed at every step. Operators make better decisions faster
                with instant access to production metrics, alerts, and
                historical trends.
              </p>
            </div>

            {/* Features list */}
            <div className="space-y-4">
              {[
                "Personalized dashboards for each operator role and responsibility",
                "Mobile app works offline with automatic sync when connection returns",
                "Instant push notifications for critical production events",
                "One-click access to SOPs and maintenance procedures",
                "Built-in quality checkpoints and production scheduling",
                "Detailed shift reports and performance analytics",
              ].map((feature, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-lg bg-blue-500 text-white flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4" />
                  </div>
                  <p className="text-slate-700">{feature}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <button className="group flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-teal-500/30 w-fit">
              Explore Operator Tools{" "}
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OperatorEngagement;
