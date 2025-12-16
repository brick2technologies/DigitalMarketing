import { motion } from "framer-motion";
import { useState } from "react";
import { CheckCircle } from "lucide-react";

export default function OfferLeadFormSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Later: send data to backend / WhatsApp here
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative bg-blue-50/40 py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="max-w-2xl mb-14">
          <h2 className="text-4xl font-display font-bold text-blue-900 leading-tight">
            Ready to See What’s Possible{" "}
            <span className="text-blue-600">for Your Brand?</span>
          </h2>
          <p className="mt-4 text-lg text-gray-700">
            Share a few details about your business, and we’ll map out a
            straightforward plan to improve your visibility, leads, and revenue
            across search, social, and paid campaigns.
          </p>
        </div>

        {/* FORM CARD */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="rounded-3xl bg-white border border-blue-200 shadow-lg p-8 md:p-10"
        >
          {!submitted ? (
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {/* Name – REQUIRED */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your full name"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              {/* Business Name – REQUIRED */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Business name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Company or brand name"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              {/* Website – OPTIONAL (no validation) */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Website URL (optional)
                </label>
                <input
                  type="text"
                  placeholder="example.com"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              {/* Budget – OPTIONAL */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Monthly marketing budget (optional)
                </label>
                <select className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-blue-500 focus:ring-blue-500">
                  <option value="">Select range</option>
                  <option>₹25k – ₹50k</option>
                  <option>₹50k – ₹1L</option>
                  <option>₹1L – ₹2L</option>
                  <option>₹2L+</option>
                </select>
              </div>

              {/* Primary Goal – REQUIRED */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Primary goal *
                </label>
                <select
                  required
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-blue-500 focus:ring-blue-500"
                >
                  <option value="">Select goal</option>
                  <option>Leads</option>
                  <option>Sales</option>
                  <option>Brand Awareness</option>
                </select>
              </div>

              {/* Email – OPTIONAL */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email (optional)
                </label>
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              {/* Phone – REQUIRED */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              {/* CTA */}
              <div className="md:col-span-2 mt-4">
                <button
                  type="submit"
                  className="w-full rounded-full bg-blue-600 px-8 py-4 text-white text-lg font-medium hover:bg-blue-700 transition"
                >
                  Request a Custom Strategy Plan
                </button>

                <p className="mt-4 text-sm text-gray-600 text-center">
                  You’ll get a clear, actionable plan with specific next steps for
                  your brand.
                </p>
              </div>
            </form>
          ) : (
            /* SUCCESS STATE */
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-16 text-center"
            >
              <CheckCircle className="mx-auto h-16 w-16 text-green-600" />

              <h3 className="mt-6 text-2xl font-semibold text-blue-900">
                Thank you for reaching out!
              </h3>

              <p className="mt-3 text-gray-700">
                Your details have been submitted successfully.
              </p>

              <p className="mt-1 text-sm text-gray-600">
                Our team will contact you shortly with the next steps.
              </p>
            </motion.div>
          )}
        </motion.div>

        {/* FINAL REASSURANCE STRIP */}
        <div className="mt-16 border-t border-blue-200 pt-8 text-center">
          <p className="text-sm text-gray-700 max-w-3xl mx-auto">
            Brick2Tech is a digital marketing and web development agency in
            Hyderabad helping brands grow with SEO, performance ads, content, and
            conversion-focused design.
          </p>

          <p className="mt-3 text-sm text-gray-600">
            Prefer to talk? Call{" "}
            <a href="tel:+919000035647" className="text-blue-600 font-medium">
              +91-90000-35647
            </a>{" "}
            or{" "}
            <a href="/contact" className="text-blue-600 font-medium underline">
              contact us here
            </a>.
          </p>
        </div>
      </div>
    </section>
  );
}
