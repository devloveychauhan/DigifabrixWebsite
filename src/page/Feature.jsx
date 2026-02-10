import { useState } from "react";
import realTimeMonitoring from "../assets/featuresAssets/realTimeMonitoring.png";
import analysis from "../assets/featuresAssets/analysis.png";
import productionReport from "../assets/featuresAssets/productionReport.png";
import {
  Monitor,
  FileText,
  TrendingUp,
  GitBranch,
  Plug,
  CheckCircle,
} from "lucide-react";

export default function Features() {
  const [activeTab, setActiveTab] = useState("tab1");

  const tabs = [
    { id: "tab1", label: "Real-time Monitoring", icon: Monitor },
    { id: "tab2", label: "Automated Reporting", icon: FileText },
    { id: "tab3", label: "Predictive Analytics", icon: TrendingUp },
    { id: "tab4", label: "Traceability", icon: GitBranch },
    { id: "tab5", label: "Integration Capabilities", icon: Plug },
  ];

  const tabContent = {
    tab1: {
      title: "Real-time Production Monitoring",
      description:
        "Our platform provides live visibility into every aspect of your manufacturing operations. Monitor production lines, machine status, output rates, and quality metrics in real-time from any device.",
      features: [
        "Live dashboards with customizable widgets",
        "Instant alerts for production issues",
        "Performance tracking by shift, line, or operator",
        "Historical data analysis for trend identification",
      ],
      image: realTimeMonitoring,
    },
    tab2: {
      title: "Automated Reporting",
      description:
        "Generate comprehensive reports automatically with our system. Schedule daily, weekly, or monthly reports sent directly to stakeholders.",
      features: [
        "Customizable report templates",
        "Automated distribution via email",
        "Export to PDF, Excel, or CSV formats",
        "KPI tracking and visualization",
      ],
      image:
        "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    tab3: {
      title: "Predictive Analytics",
      description:
        "Leverage AI and machine learning to predict equipment failures and quality issues before they occur.",
      features: [
        "Anomaly detection algorithms",
        "Predictive maintenance scheduling",
        "Quality forecasting models",
        "Production optimization recommendations",
      ],
      image: analysis,
    },
    tab4: {
      title: "Full Traceability",
      description:
        "Track every component through your manufacturing process with our comprehensive traceability solutions.",
      features: [
        "Material genealogy tracking",
        "Work-in-process visibility",
        "Quality incident root cause analysis",
        "Compliance reporting",
      ],
      image: productionReport,
    },
    tab5: {
      title: "Seamless Integration",
      description:
        "Connect with your existing systems for a unified manufacturing ecosystem.",
      features: [
        "ERP system integration",
        "PLC connectivity",
        "SCADA system interfaces",
        "Custom API development",
      ],
      image:
        "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
  };

  const currentContent = tabContent[activeTab];

  return (
    <section id="features" className="bg-white pt-16 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Powerful Features
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Designed to meet the complex needs of modern manufacturing
          </p>
        </div>

        {/* Tabs Navigation */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 md:gap-3 justify-center">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 md:px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm md:text-base">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content */}
        <div className="bg-gray-50 rounded-2xl p-6 md:p-10 shadow-sm">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            {currentContent.title}
          </h3>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
            {currentContent.description}
          </p>

          <ul className="space-y-3 mb-6">
            {currentContent.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-blue-600 shrink-0 mt-0.5" />
                <span className="text-gray-700 text-base md:text-lg">
                  {feature}
                </span>
              </li>
            ))}
          </ul>

          {currentContent.image && (
            <img
              src={currentContent.image}
              alt={currentContent.title}
              className="w-full  object-cover rounded-lg shadow-md"
            />
          )}
        </div>
      </div>
    </section>
  );
}
