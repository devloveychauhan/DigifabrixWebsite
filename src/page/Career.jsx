"use client";
import {
  ArrowRight,
  Sparkles,
  Users,
  Lightbulb,
  Target,
  Zap,
} from "lucide-react";
import carrerHeroImage from "../assets/featuresAssets/carrerHeroImage.jpeg";
import digifabrixTeam from "../assets/digifabrixTeam.jpg";

const jobOpenings = [
  {
    title: "Frontend Developer (React)",
    location: "NCR / On-site",
    type: "Full Time",
    desc: "Build scalable UI using React, Tailwind, and modern frontend tools.",
    icon: Sparkles,
  },
  {
    title: "Backend Developer (Node.js)",
    location: "NCR / On-site",
    type: "Full Time",
    desc: "Design APIs, databases, and scalable backend systems.",
    icon: Zap,
  },
];

const whyWorkWithUs = [
  {
    title: "Real-World Impact",
    desc: "Your work directly improves how factories run — increasing efficiency, reducing waste, and enabling smarter decisions in real time.",
    icon: Target,
  },
  {
    title: "Modern Tech Stack",
    desc: "Work on modern tech stacks involving IoT, data analytics, cloud platforms, automation, and MES systems.",
    icon: Zap,
  },
  {
    title: "Collaborative Culture",
    desc: "We believe great products are built by strong teams. You'll collaborate with engineers, product thinkers, and domain experts who value openness and learning.",
    icon: Users,
  },
  {
    title: "Growth & Learning",
    desc: "We encourage ownership, continuous learning, and experimentation. Your ideas matter, and your growth matters even more.",
    icon: Lightbulb,
  },
  {
    title: "Real-World Exposure",
    desc: "Get hands-on experience with real manufacturing environments, real machines, and real challenges — not just theory.",
    icon: Target,
  },
];

// Reusable Components
const h2 = ({ children, className = "" }) => (
  <h2
    className={`text-balance text-3xl font-bold leading-tight md:text-5xl lg:text-6xl ${className}`}
  >
    {children}
  </h2>
);

const p = ({ children, className = "" }) => (
  <p className={`text-balance text-lg text-slate-600 md:text-xl ${className}`}>
    {children}
  </p>
);

const BenefitCard = ({ title, desc, icon: Icon }) => (
  <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:border-blue-400 hover:shadow-xl">
    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
    <div className="relative">
      <div className="mb-4 inline-flex rounded-lg bg-blue-100 p-3 text-blue-600">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
      <p className="mt-3 text-slate-600 leading-relaxed">{desc}</p>
    </div>
  </div>
);

const JobCard = ({ job }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:border-blue-400 hover:shadow-2xl">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      <div className="relative flex flex-col gap-4 p-6 sm:p-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-slate-900">{job.title}</h3>
          <p className="mt-2 text-slate-600">{job.desc}</p>
          <div className="mt-4 flex gap-3 text-sm text-slate-500">
            <span className="inline-block px-3 py-1 rounded-full bg-slate-100">
              {job.location}
            </span>
            <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 font-medium">
              {job.type}
            </span>
          </div>
        </div>
        <a
          href="#apply"
          className="group/btn mt-4 sm:mt-0 sm:shrink-0 inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-lg sm:px-8"
        >
          Apply Now
          <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
        </a>
      </div>
    </div>
  );
};

export default function CareerPage() {
  return (
    <main className="bg-white text-slate-900">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-black text-white">
        <div className="mx-auto flex max-w-7xl flex-col-reverse items-center gap-8 px-6 py-16 md:flex-row md:gap-12 md:py-28 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">
              Build the Future With Us
            </h1>
            <p className="mt-4 text-slate-300 md:mt-6 md:text-lg">
              We're a team of engineers, designers, and innovators solving real
              industrial problems with modern technology.
            </p>
          </div>

          <img
            className="w-full rounded-xl object-cover md:w-[480px]"
            src={carrerHeroImage || "/placeholder.svg"}
            alt="DigiFabrix team"
          />
        </div>

        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
            className="w-full h-[80px]"
          >
            <path d="M0,120 L1440,30 L1440,180 L0,120 Z" fill="#f8fafc" />
          </svg>
        </div>
      </section>

      {/* ================= MISSION ================= */}
      <section className="mx-auto  max-w-7xl px-6 py-16 md:py-20 lg:px-8">
        <h2 className="font-bold text-2xl md:text-5xl mb-6 md:mb-8 leading-tight max-w-[920px] md:text-center md:mx-auto">
          A Passionate Team Behind a Trusted Product
        </h2>
        <p className="mx-auto text-center text-xl max-w-[720px] ">
          At DigiFabrix, we're transforming the way factories operate by
          bringing intelligence, visibility, and automation to the shop floor.
          We work at the intersection of manufacturing, data, and technology,
          helping industries move toward Industry 4.0.
        </p>
      </section>

      {/* ================= WHY US ================= */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:py-20 lg:px-8">
        <h2 className="font-bold text-2xl md:text-5xl mb-6 md:mb-8 leading-tight max-w-[920px] md:text-center md:mx-auto">
          Why Work With Us?
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyWorkWithUs.map((item) => (
            <BenefitCard key={item.title} {...item} />
          ))}
        </div>
      </section>

      {/* ================= LIFE AT DIGIFABRIX ================= */}
      <section className="relative overflow-hidden bg-black px-6 py-16 text-white md:py-28">
        <div className="mx-auto max-w-[1300px] lg:px-8">
          <h2 className="font-bold text-2xl md:text-5xl mb-6 md:mb-8 leading-tight max-w-[920px] md:text-center md:mx-auto">
            Life at DigiFabrix
          </h2>

          <div className="flex flex-col w-full gap-8 lg:flex-row lg:items-center lg:gap-12">
            <img
              className="w-full rounded-xl object-cover lg:w-1/2"
              src={digifabrixTeam || "/placeholder.svg"}
              alt="Company culture"
            />

            <div className="space-y-4 lg:w-1/2">
              <p className="text-slate-300 md:text-lg">
                At DigiFabrix, we value:
              </p>
              <ul className="space-y-2 text-slate-300">
                <li>• Ownership over hierarchy</li>
                <li>• Curiosity over comfort zones</li>
                <li>• Outcomes over hours</li>
                <li>• Team success over individual wins</li>
              </ul>
              <p className="text-slate-300 md:text-lg">
                We foster a culture where innovation is encouraged, questions
                are welcomed, and effort is recognized.
              </p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
            className="w-full h-[80px]"
          >
            <path d="M0,120 L1440,30 L1440,180 L0,120 Z" fill="#f8fafc" />
          </svg>
        </div>
      </section>

      {/* ================= OPEN POSITIONS ================= */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:py-20 lg:px-8">
        <h2 className="font-bold text-2xl md:text-5xl mb-6 md:mb-8 leading-tight max-w-[920px] md:text-center md:mx-auto">
          Open Positions
        </h2>
        <div className="space-y-4">
          {jobOpenings.map((job) => (
            <JobCard key={job.title} job={job} />
          ))}
        </div>
      </section>

      {/* ================= APPLY FORM ================= */}
      <section
        id="apply"
        className="mx-auto max-w-3xl scroll-mt-24 px-6 pb-16 md:pb-28 lg:px-8"
      >
        <h2 className="font-bold text-2xl md:text-5xl mb-6 md:mb-8 leading-tight max-w-[920px] md:text-center md:mx-auto">
          How to Apply
        </h2>
        <p className="text-center my-4">
          If you feel like you’re a good fit, we’d love to hear from you! You
          can view all our open positions on our{" "}
          <a
            className="text-blue-500"
            href="https://www.linkedin.com/company/digifabrix-technologies-private-limited/"
          >
            LinkedIn
          </a>{" "}
          page. However, if none of these roles seem right for you but you’re
          passionate about what we do and want to be part of our team, please
          send us your resume and let us know why you want to join us.
        </p>
        <p className="text-[14px] italic text-center">
          send us your resume at{" "}
          <span className="font-semibold">sales@digifabrix.com</span>
        </p>
      </section>
    </main>
  );
}
