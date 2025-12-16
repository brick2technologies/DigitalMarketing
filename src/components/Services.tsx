import { motion } from "framer-motion";

const services = [
  {
    title: "Digital Marketing & Ads",
    image: "src/assets/digital-marketing.png", // illustration-style image
    points: [
      "Meta & Google performance campaigns",
      "High-intent traffic & leads",
      "ROI-focused optimization",
    ],
  },
  {
    title: "SEO & Content",
    image: "src/assets/seo.png",
    points: [
      "Keyword-driven SEO strategy",
      "Content that builds trust",
      "Local SEO for ready buyers",
    ],
  },
  {
    title: "Social Media & Creatives",
    image: "src/assets/social-media.png",
    points: [
      "End-to-end social management",
      "Scroll-stopping creatives & reels",
      "Consistent brand storytelling",
    ],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-4xl font-display font-bold text-blue-900 leading-tight">
            One Partner for Your  <span className="text-blue-600">Entire Digital Funnel</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Strategy, execution, and optimization — all under one roof.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {services.map((service, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="
                group
                rounded-3xl
                border-2 border-blue-200
                bg-white
                p-8
                shadow-sm
                hover:shadow-xl
                transition
              "
            >
              {/* Illustration */}
              <div className="mb-6">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-contain"
                />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-semibold text-blue-900 mb-4">
                {service.title}
              </h3>

              <ul className="space-y-3 text-gray-700">
                {service.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-blue-600" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 flex items-center justify-center">
  <a
    href="#contact"
    className="inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-4 text-white font-medium hover:bg-blue-700 transition"
  >
    See What We’d Do for Your Brand →
  </a>
</div>


      </div>
    </section>
  );
}
