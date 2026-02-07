import { useState } from "react";
import carrerHeroImage from "../assets/featuresAssets/carrerHeroImage.jpeg";

const jobOpenings = [
  {
    title: "Frontend Developer (React)",
    location: "NCR / On-site",
    type: "Full Time",
    desc: "Build scalable UI using React, Tailwind, and modern frontend tools.",
  },
  {
    title: "Backend Developer (Node.js)",
    location: "NCR / On-site",
    type: "Full Time",
    desc: "Design APIs, databases, and scalable backend systems.",
  },
  {
    title: "Computer Vision Engineer",
    location: "NCR / On-site",
    type: "Full Time",
    desc: "Work on industrial vision systems, OpenCV, and ML pipelines.",
  },
];

export default function CareerPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    resume: null,
  });

  const [isLoading, setIsLoading] = useState(false);
  const [fileName, setFileName] = useState("");

  const formHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const fileHandler = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData({ ...formData, resume: file });
      setFileName(file.name);
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      console.log("Form submitted:", {
        ...formData,
        resume: formData.resume?.name,
      });
    } finally {
      setIsLoading(false);
      setFormData({ name: "", email: "", message: "", resume: null });
      setFileName("");
    }
  };

  return (
    <main className="bg-slate-50 text-slate-900">
      {/* ================= HERO ================= */}
      <section className="relative flex items-center justify-center px-6 py-28  overflow-hidden bg-linear-to-br from-slate-900 via-indigo-900 to-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-28">
          <h1 className="text-4xl md:text-5xl font-bold max-w-3xl">
            Build the Future With Us
          </h1>
          <p className="mt-6 max-w-2xl text-slate-300">
            We’re a team of engineers, designers, and innovators solving real
            industrial problems with modern technology.
          </p>
        </div>

        <img
          className="aspect-[5:1] rounded-[12px] object-contain"
          src={carrerHeroImage}
          alt="companyImage"
        />
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
            className="w-full h-[80px]"
          >
            <path
              d="M0,40 C120,80 360,0 720,40 1080,80 1320,20 1440,0 L1440,120 L0,120 Z"
              fill="#f8fafc"
            />
          </svg>
        </div>
      </section>

      {/* ================= WHY US ================= */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            [
              "Real-World Impact",
              "Your work directly affects real industries.",
            ],
            ["Modern Tech Stack", "React, AI, Computer Vision, Cloud."],
            ["Growth-First Culture", "Learning, ownership, and freedom."],
          ].map(([title, desc]) => (
            <div
              key={title}
              className="rounded-2xl bg-white p-8 shadow-sm border"
            >
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= OPEN POSITIONS ================= */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <h2 className="text-2xl font-semibold mb-8">Open Positions</h2>

        <div className="space-y-4">
          {jobOpenings.map((job) => (
            <div
              key={job.title}
              className="flex flex-col md:flex-row md:items-center justify-between gap-4 rounded-xl border bg-white p-6"
            >
              <div>
                <h3 className="font-medium">{job.title}</h3>
                <p className="text-sm text-slate-600">{job.desc}</p>
                <div className="mt-2 text-xs text-slate-500">
                  {job.location} · {job.type}
                </div>
              </div>

              <a
                href="#apply"
                className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-4 py-2 text-sm text-white hover:bg-indigo-700 transition"
              >
                Apply
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ================= APPLY FORM ================= */}
      <section id="apply" className="mx-auto max-w-3xl px-6 pb-28 scroll-mt-24">
        <div className="mb-10">
          <h2 className="text-2xl font-semibold">Apply Now</h2>
          <p className="text-sm text-slate-600 mt-2">
            Tell us about yourself and we’ll get back to you.
          </p>
        </div>

        {/* ===== YOUR FORM (UNCHANGED LOGIC) ===== */}
        <form
          onSubmit={submitHandler}
          className="rounded-2xl bg-white p-8 shadow-lg border space-y-6"
        >
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={formHandler}
            required
            className="w-full rounded-lg border px-4 py-3"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={formHandler}
            required
            className="w-full rounded-lg border px-4 py-3"
          />

          <textarea
            name="message"
            rows={4}
            placeholder="Why do you want to join us?"
            value={formData.message}
            onChange={formHandler}
            className="w-full rounded-lg border px-4 py-3"
          />

          {/* File Upload */}
          <label className="block">
            <span className="text-sm font-medium">Upload Resume</span>
            <input
              type="file"
              onChange={fileHandler}
              accept=".pdf,.doc,.docx"
              className="mt-2 block w-full text-sm"
            />
            {fileName && (
              <p className="mt-1 text-xs text-slate-500">{fileName}</p>
            )}
          </label>

          <button
            disabled={isLoading}
            className="w-full rounded-lg bg-indigo-600 py-3 text-white font-medium hover:bg-indigo-700 transition disabled:opacity-60"
          >
            {isLoading ? "Sending..." : "Submit Application"}
          </button>
        </form>
      </section>
    </main>
  );
}
