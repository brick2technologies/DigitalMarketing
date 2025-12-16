import logo from "../assets/B2T_logo.png";
import { Globe, Instagram, Linkedin, Facebook } from "lucide-react";

export default function FooterBar() {
  return (
    <footer className="border-t border-blue-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-2">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

          {/* LEFT – LOGO */}
          <div className="flex justify-center sm:justify-start">
            <img
              src={logo}
              alt="Brick2Tech"
              className="h-10 w-auto cursor-pointer md:h-16"
              onClick={() =>
                window.scrollTo({ top: 0, behavior: "smooth" })
              }
            />
          </div>

          {/* CENTER – SOCIAL ICONS */}
          <div className="flex justify-center gap-5">
            <a
              href="https://www.instagram.com/brick2technologies"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-blue-600 hover:text-blue-800 transition"
            >
              <Instagram size={20} />
            </a>

            <a
              href="https://www.linkedin.com/company/brick2technologies"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-blue-600 hover:text-blue-800 transition"
            >
              <Linkedin size={20} />
            </a>

            <a
              href="https://www.facebook.com/brick2technologies"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-blue-600 hover:text-blue-800 transition"
            >
              <Facebook size={20} />
            </a>
          </div>

          {/* RIGHT – MAIN WEBSITE */}
          <div className="flex justify-center sm:justify-end">
            <a
              href="https://www.brick2tech.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-800 transition"
            >
              <Globe size={16} />
              View Main Website
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}
