import { motion } from "motion/react";
import { useRef, useState } from "react";
import React from "react";
import { PlatformFeature, useCases } from "../Constants/DojoFeatures";
import DashboardCarousel from "../component/DashboardCarousel";
import CountUp from "react-countup";

// ==================== ANIMATED COUNTER ====================
const AnimatedCounter = ({
  target,
  duration = 2,
  suffix = "",
  prefix = "",
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const increment = target / (duration * 60);
          const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 1000 / 60);
          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration, hasAnimated]);

  return (
    <span ref={ref}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
};

// ==================== METRIC CARD ====================
const MetricCard = ({ value, label, sublabel, trend, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      className="border border-slate-800 p-8 rounded-lg bg-slate-900/50 hover:bg-slate-900/70 hover:border-slate-700 transition-all duration-300 group"
    >
      <div className="flex items-baseline gap-3 mb-3">
        <span className="text-4xl font-bold text-orange-500 group-hover:text-orange-400 transition-colors">
          {trend}
        </span>
        <span className="text-4xl font-bold text-slate-100">{value}</span>
      </div>
      <p className="text-slate-300 font-medium mb-1">{label}</p>
      {sublabel && <p className="text-xs text-slate-500">{sublabel}</p>}
    </motion.div>
  );
};

// ==================== USE CASE CARD ====================
const UseCaseCard = ({ title, scenario, solution, impact, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="border border-slate-800 rounded-lg p-8 bg-slate-900/30 hover:bg-slate-900/50 hover:border-slate-700 transition-all duration-300"
    >
      <h3 className="text-xl font-semibold text-slate-100 mb-4">{title}</h3>

      <div className="space-y-4">
        <div>
          <p className="text-xs uppercase tracking-wider text-orange-500 mb-2">
            Scenario
          </p>
          <p className="text-slate-400 text-sm leading-relaxed">{scenario}</p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-wider text-blue-400 mb-2">
            DOJO Solution
          </p>
          <p className="text-slate-400 text-sm leading-relaxed">{solution}</p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-wider text-green-400 mb-2">
            Impact
          </p>
          <p className="text-slate-300 text-sm font-medium">{impact}</p>
        </div>
      </div>
    </motion.div>
  );
};

// ==================== MAIN COMPONENT ====================
const DojoPage = () => {
  return (
    <div className="bg-slate-950 text-slate-200">
      {/* Subtle texture overlay */}
      <div
        className="fixed inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/20 via-slate-950 to-slate-950" />

        <div className="relative max-w-6xl mx-auto  py-32">
          <div className="text-center space-y-8">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl px-2 font-bold leading-tight text-white"
            >
              Manpower Intelligence
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-300 to-slate-500">
                for Modern Manufacturing
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-sm lg:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed"
            >
              Real-time visibility across attendance, skill levels, attrition,
              and shift-level manpower allocation — transforming reactive
              workforce management into proactive workforce intelligence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mx-2 justify-center pt-4"
            >
              <button className="px-8 py-4 bg-orange-600 text-white rounded-lg hover:bg-orange-500 transition-all duration-300 font-medium shadow-lg shadow-orange-600/20 hover:shadow-orange-500/30">
                Request Live Demo
              </button>
              <button className="px-8 py-4 border border-slate-700 rounded-lg hover:bg-slate-900 hover:border-slate-600 transition-all duration-300 font-medium">
                Download Product Brief
              </button>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="pt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            >
              {[
                { value: 50, unit: "+", label: "Manufacturing Units" },
                { value: 10, unit: "K+", label: "Operators Tracked" },
                { value: 40, unit: "%", label: "Faster Planning" },
                { value: 95.8, unit: "%", label: "Uptime" },
              ].map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-3xl font-bold text-orange-500 mb-2">
                    <CountUp
                      end={stat.value}
                      duration={2}
                      enableScrollSpy
                      scrollSpyOnce
                    />
                    <span className="text-3xl font-bold text-orange-500 mb-2">
                      {stat.unit}
                    </span>
                  </div>

                  <div className="text-sm text-slate-500">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= PROBLEM / SOLUTION ================= */}
      <section className="py-28 border-t border-slate-800 bg-gradient-to-b from-slate-950 to-slate-900/30">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              From Spreadsheet Chaos to Intelligence
            </h2>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto">
              Traditional workforce management is broken. DOJO 2.0 fixes it.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="border border-red-900/30 bg-red-950/20 rounded-xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">⚠️</span>
                  <h3 className="text-2xl font-semibold text-white">
                    The Problem
                  </h3>
                </div>

                <ul className="space-y-4">
                  {[
                    "Manpower planning driven by outdated Excel sheets and gut feel",
                    "Supervisors learn about staffing issues 2-4 hours into shift",
                    "HR has no real-time visibility into shopfloor operations",
                    "Skill gaps discovered only when production fails",
                    "Attrition data analyzed monthly, not real-time",
                    "Training and certification records scattered across systems",
                    "No single source of truth for workforce decisions",
                    "Reactive fire-fighting instead of proactive planning",
                  ].map((problem, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-start gap-3 text-slate-400"
                    >
                      <span className="text-red-500 mt-1">✗</span>
                      <span>{problem}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="border border-green-900/30 bg-green-950/20 rounded-xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">✅</span>
                  <h3 className="text-2xl font-semibold text-white">
                    The DOJO Solution
                  </h3>
                </div>

                <ul className="space-y-4">
                  {[
                    "Single unified platform for all workforce intelligence",
                    "Real-time alerts at shift start for staffing issues",
                    "Live dashboard visibility for HR, supervisors, and leadership",
                    "Proactive skill gap identification with training recommendations",
                    "Daily attrition tracking with predictive analytics",
                    "Integrated training, certification, and assessment management",
                    "One source of truth synchronized across all systems",
                    "Proactive workforce control with predictive insights",
                  ].map((solution, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-start gap-3 text-slate-400"
                    >
                      <span className="text-green-500 mt-1">✓</span>
                      <span>{solution}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= STACKED DASHBOARD SCROLL ================= */}
      <DashboardCarousel />

      {/* ================= REAL-WORLD USE CASES ================= */}
      <section className="py-28 border-t border-slate-800 bg-gradient-to-b from-slate-950 to-slate-900/30">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Real-World Impact
            </h2>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto">
              See how DOJO 2.0 solves actual shopfloor challenges faced by
              manufacturing leaders.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <UseCaseCard
                key={index}
                title={useCase.title}
                scenario={useCase.scenario}
                solution={useCase.solution}
                impact={useCase.impact}
                delay={index * 0.15}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ================= BUSINESS IMPACT WITH DETAILED METRICS ================= */}
      <section className="py-28 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Measurable Business Impact
            </h2>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto">
              Quantified improvements across operations, HR, and leadership
              functions.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <MetricCard
              value={<AnimatedCounter target={40} suffix="%" />}
              label="Reduction in Manual Reporting"
              sublabel="Hours saved per week per supervisor"
              trend="↓"
              delay={0}
            />
            <MetricCard
              value={<AnimatedCounter target={25} suffix="%" />}
              label="Faster Workforce Planning"
              sublabel="Decision-making cycle time"
              trend="↑"
              delay={0.1}
            />
            <MetricCard
              value={<AnimatedCounter target={18} suffix="%" />}
              label="Improved Productivity Visibility"
              sublabel="Better output-to-manpower correlation"
              trend="↑"
              delay={0.2}
            />
            <MetricCard
              value={<AnimatedCounter target={30} suffix="%" />}
              label="Faster Response to Gaps"
              sublabel="From hours to minutes"
              trend="↓"
              delay={0.3}
            />
          </div>

          {/* Additional Impact Metrics */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <MetricCard
              value={<AnimatedCounter target={60} suffix="%" />}
              label="Attrition Prediction Accuracy"
              sublabel="Early intervention opportunities"
              trend="↑"
              delay={0.4}
            />
            <MetricCard
              value={<AnimatedCounter target={35} suffix="%" />}
              label="Training Program Efficiency"
              sublabel="Better targeted skill development"
              trend="↑"
              delay={0.5}
            />
            <MetricCard
              value={<AnimatedCounter target={50} suffix="%" />}
              label="Overtime Cost Reduction"
              sublabel="Through better allocation"
              trend="↓"
              delay={0.6}
            />
            <MetricCard
              value={<AnimatedCounter target={3} suffix="x" />}
              label="Faster Onboarding"
              sublabel="New joiner productivity ramp-up"
              trend="↑"
              delay={0.7}
            />
            <MetricCard
              value={<AnimatedCounter target={90} suffix="%" />}
              label="Data Accuracy Improvement"
              sublabel="vs manual tracking"
              trend="↑"
              delay={0.8}
            />
            <MetricCard
              value={<AnimatedCounter target={45} suffix="%" />}
              label="Reduction in Production Delays"
              sublabel="Due to manpower issues"
              trend="↓"
              delay={0.9}
            />
          </div>
        </div>
      </section>

      {/* ================= TECHNICAL SPECIFICATIONS ================= */}
      <section className="py-28 border-t border-slate-800 bg-gradient-to-b from-slate-950 to-slate-900/30">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Enterprise-Grade Platform
            </h2>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto">
              Built for scale, security, and seamless integration.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PlatformFeature.map((spec, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="border border-slate-800 rounded-lg p-8 bg-slate-900/40 hover:bg-slate-900/60 hover:border-slate-700 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-slate-100 mb-6">
                  {spec.title}
                </h3>
                <ul className="space-y-3">
                  {spec.items.map((item, itemIdx) => (
                    <li
                      key={itemIdx}
                      className="flex items-start gap-3 text-slate-400 text-sm"
                    >
                      <span className="text-orange-500 mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-32 border-t border-slate-800 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
              Transform Your Workforce Management Today
            </h2>

            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Join 50+ manufacturing plants already using DOJO 2.0 to make
              proactive workforce decisions. Schedule a demo or start a pilot
              deployment with your plant data.
            </p>

            <button className="group relative px-10 py-5 bg-orange-600 text-white rounded-lg font-semibold transition-all duration-300 overflow-hidden hover:shadow-2xl hover:shadow-orange-500/30">
              <span className="relative z-10">Request Live Demonstration</span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>

            <div className="pt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Free pilot program</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Dedicated support team</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DojoPage;
