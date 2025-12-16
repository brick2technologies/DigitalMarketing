import logo from "../assets/B2T_logo.png";
import { type FC, useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import GrowthStrategyModal from "./LeadForm";

/* ---------------- WhatsApp SVG ---------------- */
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className={className}
  >
    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
  </svg>
);

/* ---------------- Nav Sections ---------------- */
const sections = [
  { id: "process", label: "How It Works" },
  { id: "services", label: "Services" },
  { id: "why", label: "Why Brick2Tech" },
  { id: "contact", label: "Contact" },
];

const Navbar: FC = () => {
  const [strategyOpen, setStrategyOpen] = useState(false);


  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      const pos = window.scrollY + 120;
      sections.forEach((sec) => {
        const el = document.getElementById(sec.id);
        if (el && pos >= el.offsetTop && pos < el.offsetTop + el.offsetHeight) {
          setActive(sec.id);
        }
      });
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-blue-600/20 backdrop-blur-lg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex h-20 items-center justify-between">

            {/* LOGO */}

            <img
              src={logo}
              alt="Brick2Tech logo"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="h-12 sm:h-14 lg:h-16 w-auto cursor-pointer"
            />


            {/* DESKTOP NAV */}
            <nav className="hidden lg:flex items-center gap-8 rounded-full border border-blue-600 px-10 py-3">
              {sections.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="relative text-sm font-medium text-blue-700 group"
                >
                  <span className={active === item.id ? "text-blue-900" : ""}>
                    {item.label}
                  </span>
                  <span className={`absolute left-0 -bottom-1 h-[2px] w-full bg-blue-600 transition-transform origin-left
                  ${active === item.id ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`} />
                </button>
              ))}
            </nav>

            {/* RIGHT ACTIONS */}
            <div className="flex items-center gap-3">

              {/* WhatsApp Icon */}
              <a
                href="https://wa.me/919000035647"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:flex h-10 w-10 items-center justify-center rounded-full
                         border border-blue-600 text-blue-700
                         transition hover:bg-[#25D366] hover:text-white"
                aria-label="Chat on WhatsApp"
              >
                <WhatsAppIcon className="h-5 w-5" />
              </a>

              {/* CTA */}
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => setStrategyOpen(true)}
                className="rounded-md border-2 border-blue-600 px-4 py-2 text-sm font-semibold text-blue-700 hover:bg-blue-600 hover:text-white"
              >
                Growth Strategy
              </motion.button>


              {/* Burger */}
              <motion.button
                onClick={() => setOpen(!open)}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="lg:hidden rounded-lg border border-blue-600 p-2 text-blue-700"
              >
                {open ? <X size={22} /> : <Menu size={22} />}
              </motion.button>
            </div>
          </div>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              className="lg:hidden border-t border-blue-600/20 backdrop-blur-lg"
            >
              <div className="space-y-6 px-6 py-6">

                {sections.map((item, i) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: i * 0.05 }}
                    className="block w-full text-left text-base font-medium text-blue-800"
                  >
                    {item.label}
                  </motion.button>
                ))}

                <a
                  href="https://wa.me/919000035647"
                  className="flex items-center gap-3 text-blue-700 font-medium"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  Chat on WhatsApp
                </a>

                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => setStrategyOpen(true)}
                  className="rounded-md border-2 border-blue-600 px-4 py-2 text-sm font-semibold text-blue-700 hover:bg-blue-600 hover:text-white"
                >
                  Growth Strategy
                </motion.button>



              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <GrowthStrategyModal
        open={strategyOpen}
        onClose={() => setStrategyOpen(false)}
      /></>
  );
};

export default Navbar;
