import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle } from "lucide-react";
import { useState } from "react";

interface GrowthStrategyModalProps {
  open: boolean;
  onClose: () => void;
}

export default function GrowthStrategyModal({
  open,
  onClose,
}: GrowthStrategyModalProps) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // later you can send data to backend / WhatsApp here

    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false); // reset for next open
    onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={handleClose}
          />

          {/* Modal Card */}
          <motion.div
            initial={{ scale: 0.95, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="
              relative
              w-full
              max-w-lg
              rounded-3xl
              bg-white
              border border-blue-200
              shadow-xl
              p-8
            "
            role="dialog"
            aria-modal="true"
          >
            {/* Close */}
            <button
              onClick={handleClose}
              className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
              aria-label="Close modal"
            >
              <X size={22} />
            </button>

            {/* CONDITIONAL CONTENT */}
            {!submitted ? (
              <>
                {/* Header */}
                <h3 className="text-2xl font-display font-bold text-blue-900">
                  Get a Free Growth Strategy
                </h3>
                <p className="mt-2 text-gray-600">
                  Share your details and we’ll contact you shortly.
                </p>

                {/* Form */}
                <form onSubmit={handleSubmit} className="mt-6 grid gap-5">
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-blue-500 focus:ring-blue-500"
                  />

                  <input
                    type="tel"
                    required
                    placeholder="Mobile Number"
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-blue-500 focus:ring-blue-500"
                  />

                  <input
                    type="text"
                    placeholder="Business Name"
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-blue-500 focus:ring-blue-500"
                  />

                  <select
                    required
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-blue-500 focus:ring-blue-500"
                  >
                    <option value="">Select Service</option>
                    <option>Ads (Google / Meta)</option>
                    <option>SEO</option>
                    <option>Social Media Marketing</option>
                  </select>

                  <button
                    type="submit"
                    className="mt-2 w-full rounded-full bg-blue-600 py-4 text-white text-lg font-medium hover:bg-blue-700 transition"
                  >
                    Submit
                  </button>

                  <p className="text-xs text-gray-500 text-center">
                    We’ll contact you within 24 hours. No spam.
                  </p>
                </form>
              </>
            ) : (
              /* SUCCESS STATE */
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <CheckCircle className="mx-auto h-14 w-14 text-green-600" />

                <h3 className="mt-4 text-2xl font-semibold text-blue-900">
                  Thank you!
                </h3>

                <p className="mt-2 text-gray-700">
                  Your request has been submitted successfully.
                </p>

                <p className="mt-1 text-sm text-gray-600">
                  Our team will contact you shortly with next steps.
                </p>

                <button
                  onClick={handleClose}
                  className="mt-8 inline-flex rounded-full bg-blue-600 px-8 py-3 text-white font-medium hover:bg-blue-700 transition"
                >
                  Close
                </button>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
