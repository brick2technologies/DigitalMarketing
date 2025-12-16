import { motion, type Variants } from "framer-motion";
import strategyImg from "../assets/starategy.png";
import GrowthStrategyModal from "./LeadForm";
import { useState } from "react";

/* Animations (local only – Fast Refresh safe) */
const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function ProblemPromiseSection() {
  const [strategyOpen, setStrategyOpen] = useState(false);
  return (
    <>
      <section id="process" className="relative w-full bg-white overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-28">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

            {/* ================= LEFT IMAGE ================= */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="lg:col-span-5"
            >
              <div className="relative">
                {/* Soft background accent */}
                <div className="absolute -inset-6 rounded-3xl bg-blue-100/40 blur-2xl" />

                {/* Aspect ratio wrapper */}
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-xl">
                  <img
                    src={strategyImg}
                    alt="Marketing strategy illustration"
                    className="
          absolute inset-0
          h-full w-full
          object-cover
        "
                  />
                </div>
              </div>
            </motion.div>


            {/* ================= RIGHT CONTENT ================= */}
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              className="lg:col-span-7 space-y-10"
            >
              {/* Title */}
              <motion.h2
                variants={item}
                className="
                font-display
                text-3xl sm:text-4xl lg:text-5xl
                leading-tight
                tracking-tight
                text-blue-900
              "
              >
                Your Marketing Is Working Hard.
                <br />
                <span className="text-blue-600">Is Your Strategy?</span>
              </motion.h2>

              {/* Copy */}
              <motion.p
                variants={item}
                className="text-base sm:text-lg leading-relaxed text-gray-700 max-w-2xl"
              >
                If your SEO, ads, or social media are handled in isolation,
                you’re leaving money on the table.
                <span className="font-medium text-gray-900">
                  {" "}Brick2Tech connects search, social, content, and landing pages
                  into one performance-driven system
                </span>{" "}
                built to generate leads and sales.
              </motion.p>

              {/* Promises */}
              <motion.div
                variants={container}
                className="space-y-4 text-gray-800 text-base sm:text-lg"
              >
                <motion.p variants={item}>
                  Stop guessing which channel works.
                  <span className="font-medium">
                    {" "}Start tracking what truly converts.
                  </span>
                </motion.p>

                <motion.p variants={item}>
                  Replace random posting with
                  <span className="font-medium">
                    {" "}strategic campaigns and clear offers.
                  </span>
                </motion.p>

                <motion.p variants={item}>
                  Turn traffic from
                  <span className="italic"> “just visitors”</span> into
                  <span className="font-medium"> paying customers.</span>
                </motion.p>
              </motion.div>

              {/* CTA */}
              <motion.div variants={item}>
                <button
                  onClick={() => setStrategyOpen(true)}
                  className="
                  inline-flex items-center
                  px-5 py-2.5
                  text-sm font-medium
                  rounded-full
                  bg-blue-600 text-white
                  hover:bg-blue-700
                  transition-colors
                  shadow-sm
                "
                >
                  Talk to Our Marketing Team
                </button>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>
      <GrowthStrategyModal
        open={strategyOpen}
        onClose={() => setStrategyOpen(false)}
      />
    </>
  );
}
