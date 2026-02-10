import { Link } from "react-router-dom";

const SolutionsList = () => {
  const solutionLists = [
    { label: "Dojo 2.0", to: "/solutions/dojo" },
    { label: "Environment Monitoring & Controlling", to: "/solutions/EMC" },
    {
      label: "OEE (Realtime Overall Equipment Efficiency)",
      to: "/solutions/OEE",
    },
    { label: "MES (Manufacturing Execution System)", to: "/solutions/MES" },
    {
      label: "End-to-End Traceability for EMS & Automation",
      to: "/solutions/EMS",
    },
    {
      label: "Shopfloor Digitization",
      to: "/solutions/shopfloor-digitization",
    },
  ];

  return (
    <section
      className="
        absolute top-full left-1/2 -translate-x-1/2 mt-3
        w-[720px] rounded-xl bg-white
        border border-slate-200
        shadow-[0_10px_30px_rgba(0,0,0,0.08)]
        p-6
      "
    >
      <ul className="grid grid-cols-2 gap-x-6 gap-y-2">
        {solutionLists.map((item) => (
          <li key={item.label}>
            <Link
              to={item.to}
              className="
                block rounded-lg px-4 py-3
                text-sm font-medium text-slate-700
                hover:bg-blue-50 hover:text-blue-600
                transition-colors duration-150
              "
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SolutionsList;
