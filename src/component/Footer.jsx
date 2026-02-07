import {
  Briefcase,
  Globe,
  Locate,
  LocateOffIcon,
  MapPin,
  Phone,
  Pin,
  PinIcon,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-50 pt-16 pb-8 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/digifabrixLogo.png"
                className="h-6 w-6 text-blue-600"
              />
              <span className="text-xl font-bold text-[rgb(0,86,169)]">
                Digifabrix
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Empowering manufacturers with next-gen Industry 4.0 tools.
              Real-time insights for a smarter factory.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>
                <a href="#" className="hover:text-blue-600">
                  OEE Monitoring
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  SMT Traceability
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Environmental Sensors
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Reporting
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>
                <a href="#" className="hover:text-blue-600">
                  About Us
                </a>
              </li>
              <li>
                <Link to="/career" className="hover:text-blue-600">
                  Careers
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 text-blue-600" />
                <span>
                  B 0190, 2nd Floor, Gurutek City, Rewari, Haryana, India
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Globe className="h-4 w-4 mt-1 text-blue-600" />
                <span> sales@digifabrix.com</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-1 text-blue-600" />
                <span>+91 1274-313400</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>© 2026 Digifabrix Technologies Pvt Ltd. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-slate-900">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-slate-900">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
