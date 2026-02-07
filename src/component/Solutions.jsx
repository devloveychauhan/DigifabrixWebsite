import { useState } from "react";
import { Zap, Activity, Shield, TrendingUp } from "lucide-react";
import SectionCircuitBackground from "./SectionCircuitBackground";
import cardBackground from "../assets/Background.jpg";

const features = [
  {
    icon: <Zap className="w-7 h-7 text-white" />,
    color: "bg-blue-600",
    title: "Real-Time Monitoring",
    desc: "Track production metrics and performance indicators in real-time across your entire facility.",
    image: cardBackground,
  },
  {
    icon: <Activity className="w-7 h-7 text-white" />,
    color: "bg-indigo-600",
    title: "Predictive Analytics",
    desc: "Leverage AI-powered insights to forecast maintenance needs and optimize production schedules.",
  },
  {
    icon: <Shield className="w-7 h-7 text-white" />,
    color: "bg-blue-700",
    title: "Secure Integration",
    desc: "Enterprise-grade security with seamless integration into your existing systems and protocols.",
  },
  {
    icon: <TrendingUp className="w-7 h-7 text-white" />,
    color: "bg-indigo-700",
    title: "Scalable Growth",
    desc: "Grow your operations without complexity. Built to scale from small facilities to global enterprises.",
  },
];

export default function SolutionsSection() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      className="relative py-24 bg-white overflow-hidden transition-all duration-500"
      id="solutions"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* BACKGROUND EFFECT - Subtle PCB Animation with Hover Glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <SectionCircuitBackground isHovered={isHovered} />
      </div>

      {/* CONTENT */}
      <div className=" z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center  mb-16">
          <h2 className="text-base font-bold text-blue-600 tracking-wide uppercase">
            Core Capabilities
          </h2>
          <p className="mt-2 text-4xl font-extrabold text-slate-900 text-balance">
            Everything you need to run a Smart Factory.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8  ">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="p-8 relative overflow-hidden rounded-2xl border-3 bg-white/25 transition-all border-slate-100  shadow-sm hover:border-blue-500/50  "
            >
              {/* <img
                src={cardBackground}
                className="absolute inset-0 h-full w-full object-cover transition-transform opacity-30 duration-500 hover:scale-110"
              /> */}
              <div
                className={`w-14 h-14 rounded-xl ${feature.color} flex items-center justify-center mb-6`}
              >
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-800 leading-relaxed">{feature.desc}</p>
            </div> 
          ))}
        </div>
      </div>
    </section>
  );
}
