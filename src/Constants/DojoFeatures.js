export const dashboards = [
    {
        title: "Exam Results & Skill Assessments",
        description:
            "Track L1-L4 training outcomes, pass/fail rates, and skill progression across your workforce",
        features: [
            "Individual exam scores",
            "Batch-wise performance",
            "Skill level progression",
            "Training effectiveness metrics",
        ],
    },
    {
        title: "Management Dashboard Overview",
        description:
            "Complete workforce visibility with attendance trends, attrition analysis, and manpower allocation",
        features: [
            "Real-time attendance tracking",
            "Absenteeism patterns",
            "Attrition forecasting",
            "New joiner onboarding status",
        ],
    },
    {
        title: "Skills Matrix & Workforce Composition",
        description:
            "Detailed skill-level distribution across production lines and shifts",
        features: [
            "L1-L4 operator distribution",
            "CQT & Buffer manpower levels",
            "Line-wise skill gaps",
            "Shift readiness status",
        ],
    },
];

export const PlatformFeature = [
    {
        title: "Integration Capabilities",
        items: [
            "Biometric attendance systems",
            "SAP/Oracle HRMS",
            "Learning Management Systems",
            "ERP production modules",
            "Email & SMS gateways",
            "REST APIs for custom integrations",
        ],
    },
    {
        title: "Security & Compliance",
        items: [
            "Role-based access control (RBAC)",
            "256-bit data encryption",
            "SOC 2 Type II certified",
            "GDPR compliant",
            "Audit trail logging",
            "Multi-factor authentication",
        ],
    },
    {
        title: "Performance & Scale",
        items: [
            "99.8% uptime SLA",
            "Real-time data sync (5-min refresh)",
            "Supports 100K+ operators",
            "Multi-plant deployment",
            "Mobile-responsive design",
            "Offline mode capability",
        ],
    },
    {
        title: "Deployment Options",
        items: [
            "Cloud-hosted (AWS/Azure)",
            "On-premise deployment",
            "Hybrid architecture",
            "Single-tenant or multi-tenant",
            "Disaster recovery setup",
            "Automated backups",
        ],
    },
    {
        title: "User Experience",
        items: [
            "Intuitive dashboard design",
            "Mobile app (iOS & Android)",
            "Customizable widgets",
            "Multi-language support",
            "Dark/light theme options",
            "Accessibility compliant",
        ],
    },
    {
        title: "Support & Training",
        items: [
            "24/7 technical support",
            "Dedicated account manager",
            "Onboarding training program",
            "Video tutorials library",
            "Monthly product updates",
            "User community forum",
        ],
    },
]



export const useCases = [
    {
        title: "High Absenteeism Crisis",
        scenario:
            "Assembly Line-51 sees 40% absenteeism due to seasonal illness. Supervisor learns about it 2 hours into the shift.",
        solution:
            "DOJO alerts the supervisor at 6 AM with real-time attendance data. HR can immediately deploy buffer operators and adjust targets.",
        impact:
            "Production delay reduced from 4 hours to 30 minutes. No overtime required.",
    },
    {
        title: "Skill Gap Planning",
        scenario:
            "New product launch requires 15 L3+ operators. Current roster shows only 8 available.",
        solution:
            "DOJO's skill matrix identifies 12 L2 operators eligible for L3 training. Training program launched 3 weeks ahead.",
        impact: "Launch deadline met. Zero dependency on contract labor.",
    },
    {
        title: "Attrition Prediction",
        scenario:
            "10 experienced operators exit in Q1. Replacement takes 6-8 weeks, impacting production.",
        solution:
            "DOJO tracks attrition trends and alerts HR when patterns spike. Proactive hiring initiated.",
        impact:
            "Replacement pipeline built. Production disruption reduced by 60%.",
    },
    {
        title: "Multi-Shift Balancing",
        scenario:
            "Day shift has 30% surplus manpower while night shift faces 15% shortage.",
        solution:
            "DOJO's shift-wise allocation view helps HR redistribute operators and optimize scheduling.",
        impact:
            "Manpower utilization improved by 22%. Overtime costs reduced by ₹8L/month.",
    },
];


export const features = [
    {
        icon: "📊",
        title: "Required vs Actual Manpower",
        description:
            "See real-time manpower gaps at line & shift level with instant visibility into shortages and overages.",
        details: [
            "Live tracking of required vs available operators per line",
            "Shift-wise variance analysis",
            "Automatic alerts when gaps exceed threshold",
            "Historical gap patterns for planning",
        ],
    },
    {
        icon: "🎯",
        title: "Skill-Level Intelligence",
        description:
            "Complete visibility across L1–L4 operators, CQT certified workers, and Buffer capacity.",
        details: [
            "Real-time skill level distribution",
            "Track L1 to L4 progression paths",
            "CQT certification status monitoring",
            "Buffer capacity utilization metrics",
            "Identify skill gaps per production line",
        ],
    },
    {
        icon: "📅",
        title: "Attendance & Absenteeism Analytics",
        description:
            "Track daily, weekly, and monthly attendance patterns with predictive absenteeism insights.",
        details: [
            "Daily attendance tracking per shift",
            "Absenteeism rate trends and patterns",
            "Leave balance visibility",
            "Punctuality metrics",
            "Seasonal pattern recognition",
        ],
    },
    {
        icon: "📈",
        title: "Attrition & Retention Tracking",
        description:
            "Monitor workforce stability with attrition trends, exit patterns, and retention analytics.",
        details: [
            "Monthly attrition rate calculation",
            "Department-wise exit analysis",
            "Tenure-based retention metrics",
            "Early warning indicators",
            "Replacement timeline visibility",
        ],
    },
    {
        icon: "🔍",
        title: "Advanced Drill-Down Filters",
        description:
            "Filter by date, shift, line, department, or custom parameters for granular insights.",
        details: [
            "Multi-dimensional filtering",
            "Saved filter presets",
            "Custom date range selection",
            "Cross-line comparisons",
            "Export filtered data to Excel",
        ],
    },
    {
        icon: "👥",
        title: "New Joiner Onboarding",
        description:
            "Track new employee integration, training progress, and productivity ramp-up timelines.",
        details: [
            "Onboarding checklist completion",
            "Training module progress",
            "Skill assessment scores",
            "Buddy program tracking",
            "Time-to-productivity metrics",
        ],
    },
    {
        icon: "⚡",
        title: "Real-Time Workforce Sync",
        description:
            "Live data synchronization with attendance systems, HRMS, and training databases.",
        details: [
            "Biometric system integration",
            "HRMS data synchronization",
            "Training LMS connectivity",
            "Auto-refresh every 5 minutes",
            "Offline mode with sync on reconnect",
        ],
    },
    {
        icon: "📋",
        title: "Training & Certification Management",
        description:
            "Monitor training schedules, certification expirations, and skill development programs.",
        details: [
            "Training calendar with upcoming sessions",
            "Certification expiry alerts",
            "Training effectiveness scoring",
            "Mandatory training compliance",
            "Cross-training opportunity identification",
        ],
    },
    {
        icon: "🎓",
        title: "Exam Results & Assessment Tracking",
        description:
            "Comprehensive view of skill assessments, exam performance, and L-level progression.",
        details: [
            "Individual exam score tracking",
            "Pass/fail rate analysis",
            "Batch-wise performance comparison",
            "Re-examination scheduling",
            "Skill level upgrade approvals",
        ],
    },
    {
        icon: "🔔",
        title: "Smart Alerts & Notifications",
        description:
            "Proactive alerts for critical events like severe understaffing, unusual absences, or skill gaps.",
        details: [
            "Configurable alert thresholds",
            "Email and SMS notifications",
            "Escalation workflows",
            "Daily digest summaries",
            "Mobile app push notifications",
        ],
    },
    {
        icon: "📊",
        title: "Productivity & Efficiency Metrics",
        description:
            "Connect workforce data with production output for comprehensive productivity analysis.",
        details: [
            "Output per operator calculations",
            "Efficiency variance by skill level",
            "Line productivity benchmarking",
            "Downtime attribution analysis",
            "Quality vs manpower correlation",
        ],
    },
    {
        icon: "🗂️",
        title: "Custom Reports & Dashboards",
        description:
            "Build custom reports and personalized dashboards for different stakeholder needs.",
        details: [
            "Drag-and-drop report builder",
            "Scheduled report generation",
            "Role-based dashboard views",
            "PDF and Excel export options",
            "White-label report templates",
        ],
    },
];