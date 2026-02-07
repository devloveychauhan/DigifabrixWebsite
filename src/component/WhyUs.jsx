import { CheckCircle2 } from "lucide-react";

const WhyUs = () => {
  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              From Data to <span className="text-teal-400">Action.</span>
            </h2>
            <p className="text-slate-400 text-lg mb-8">
              Unlike traditional MES that just records data, Digifabrix empowers
              your operators. Our intuitive "Traffic Light" system makes it easy
              to identify bottlenecks instantly.
            </p>

            <div className="space-y-6">
              {[
                "Plug-and-Play IoT Sensors (No complex wiring)",
                "Shift View: Gantt charts for downtime analysis",
                "Automated Reporting (PDF/Excel) sent to email",
                "Cloud-based: Access from any tablet or mobile",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="mt-1 bg-teal-500/20 p-1 rounded-full">
                    <CheckCircle2 className="h-5 w-5 text-teal-400" />
                  </div>
                  <span className="text-lg font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            {/* Abstract representation of connectivity */}
            <div className="absolute inset-0 bg-blue-500 rounded-full blur-[100px] opacity-20"></div>
            <div className="relative bg-slate-800/50 backdrop-blur-xl border border-slate-700 p-8 rounded-3xl">
              <div className="flex items-center justify-between mb-8 border-b border-slate-700 pb-4">
                <span className="font-mono text-slate-400">Machine_01_CNC</span>
                <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-xs font-bold uppercase">
                  Stopped
                </span>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Reason</span>
                  <span className="text-white">Material Jam</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Duration</span>
                  <span className="text-white font-mono">00:14:23</span>
                </div>
                <button className="w-full mt-4 bg-blue-600 hover:bg-blue-500 text-white py-3 rounded-lg font-medium transition-colors">
                  Log Reason & Restart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs