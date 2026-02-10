import { TrendingUp, Clock, BarChart3, ArrowRight } from "lucide-react";

export default function OEE() {
  const stats = [
    {
      value: "30%",
      label: "Average OEE improvement",
      icon: TrendingUp,
    },
    {
      value: "45%",
      label: "Reduction in downtime",
      icon: Clock,
    },
    {
      value: "20%",
      label: "Increase in production capacity",
      icon: BarChart3,
    },
  ];

  return (
    <div
      id="oee"
      className="min-h-screen pt-24 bg-linear-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center p-4"
    >
      <div className="max-w-6xl w-full">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Advanced OEE Solutions
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Our OEE (Overall Equipment Effectiveness) system provides
            comprehensive insights into your manufacturing performance by
            measuring availability, performance, and quality.
          </p>
          <p className="text-lg md:text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed mt-4">
            With real-time data collection and intuitive dashboards, you can
            identify bottlenecks, reduce downtime, and improve overall equipment
            efficiency.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 hover:scale-105"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-blue-500/20 p-4 rounded-full">
                    <Icon className="w-6 h-6 text-blue-400" />
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-slate-300 text-lg">{stat.label}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button className="group bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 inline-flex items-center gap-2 shadow-lg hover:shadow-blue-500/50 cursor-pointer">
            Learn More About OEE
            <ArrowRight className="w-5 h-5 group-hover:translate-x-[0.4] transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}
