import { motion } from "framer-motion";
import heroImg from "../assets/hero-image1.png";

const HeroSection = () => {
  return (
    <section className="relative w-full bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-10 pb-24 md:pt-16 md:pb-20 lg:pt-20 lg:pb-40">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* ================= IMAGE (TOP ON MOBILE) ================= */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="
              order-1
              lg:order-2
              lg:col-span-7
              flex justify-center lg:justify-end
            "
          >
            <img
              src={heroImg}
              alt="Brick2Tech digital marketing illustration"
              className="
                w-full
                max-w-md
                sm:max-w-xl
                lg:max-w-3xl
                object-contain
              "
            />
          </motion.div>

          {/* ================= TEXT (BELOW ON MOBILE) ================= */}
          <div
            className="
              order-2
              lg:order-1
              lg:col-span-5
              max-w-lg
              font-ui
            "
          >
            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="
                font-display
                text-[2rem] sm:text-[2.4rem] lg:text-[3rem]
                leading-[1.1]
                tracking-[-0.02em]
                text-blue-900
              "
            >
              Dominate Your Market
              <span className="block mt-2 text-blue-600">
                With End-to-End Digital Marketing
              </span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="
                mt-6
                text-sm sm:text-base
                leading-[1.7]
                text-slate-600
                font-light
              "
            >
              Brick2Tech plans, builds, and optimizes your digital ecosystem so
              every click, view, and visit drives measurable revenue — not
              surface-level vanity metrics.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.18 }}
              className="mt-9 flex flex-col sm:flex-row gap-5"
            >
              <button
  onClick={() => {
    document
      .getElementById("contact")
      ?.scrollIntoView({ behavior: "smooth" });
  }}
  className="
    inline-flex items-center justify-center
    rounded-md
    border-2 border-blue-600
    bg-blue-600
    px-6 py-3
    text-sm font-semibold
    text-white
    transition hover:bg-blue-700
  "
>
  Request a Custom Strategy Plan
</button>


              <a
                href="https://wa.me/919000035647"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-blue-700 hover:underline"
              >
                Have questions? Message us on WhatsApp
              </a>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
