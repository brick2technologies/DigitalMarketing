import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const quotes = [
    {
        text: "Brick2Tech took the time to understand our business, simplified our marketing, and gave us a clear, practical plan to move forward.",
        author: "Client feedback (early engagement)",
    },
    {
        text: "What stood out was the direct communication and clarity. No fluff — just clear actions and honest guidance.",
        author: "SME Business Owner",
    },
    {
        text: "They felt more like a partner than an agency. Everything was explained clearly and executed properly.",
        author: "Growing Brand Founder",
    },
];

export default function ProofCredibilitySection() {
    const [index, setIndex] = useState(0);

    const prev = () =>
        setIndex((i) => (i === 0 ? quotes.length - 1 : i - 1));
    const next = () =>
        setIndex((i) => (i === quotes.length - 1 ? 0 : i + 1));

    return (
        <section id="why" className="relative bg-white py-24 overflow-hidden">
            {/* background accent */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-blue-100/40 blur-3xl" />

            <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-14">

                {/* LEFT CONTENT */}
                <div className="lg:col-span-7">
                    <h2 className="text-4xl font-display font-bold text-blue-900 leading-tight">
                        Why Brands Choose <span className="text-blue-600">Brick2Tech?</span>
                    </h2>

                    <p className="mt-6 text-lg text-gray-700">
                        Brick2Tech is a specialist digital marketing and web agency built to
                        give businesses hands-on, senior-level attention — not just reports
                        and buzzwords.
                    </p>

                    <ul className="mt-10 space-y-5">
                        {[
                            "Specialised in performance-driven digital marketing and web design for SMEs and growing brands.",
                            "Lean team with direct access to strategists and clear communication at every stage.",
                            "Experience across local services, ecommerce, and B2B businesses.",
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-4">
                                <span className="mt-2 h-2 w-2 rounded-full bg-blue-600 flex-shrink-0" />
                                <p className="text-gray-800">{item}</p>
                            </li>
                        ))}
                    </ul>
                </div>


                {/* RIGHT – QUOTE CAROUSEL */}
                <div className="lg:col-span-5">
                    <div className="relative rounded-3xl border border-blue-200 bg-blue-50/50 p-8 shadow-sm overflow-hidden">

                        {/* Quote Icon */}
                        <svg
                            className="h-8 w-8 text-blue-600 mb-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M7.17 6A5.17 5.17 0 002 11.17V18h8v-6H6.83A3.17 3.17 0 0110 8.83V6H7.17zm9 0A5.17 5.17 0 0011 11.17V18h8v-6h-3.17A3.17 3.17 0 0116 8.83V6h-2.83z" />
                        </svg>

                        {/* Animated Quotes */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -30 }}
                                transition={{ duration: 0.35, ease: "easeOut" }}
                            >
                                <p className="text-lg text-gray-800 leading-relaxed">
                                    “{quotes[index].text}”
                                </p>

                                <div className="mt-6 text-sm text-gray-600">
                                    — {quotes[index].author}
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Arrows */}
                        <div className="mt-8 flex items-center gap-3">
                            <button
                                onClick={prev}
                                className="h-10 w-10 rounded-full border border-blue-200 flex items-center justify-center text-blue-600 hover:bg-blue-100 transition"
                                aria-label="Previous testimonial"
                            >
                                <ChevronLeft size={18} />
                            </button>

                            <button
                                onClick={next}
                                className="h-10 w-10 rounded-full border border-blue-200 flex items-center justify-center text-blue-600 hover:bg-blue-100 transition"
                                aria-label="Next testimonial"
                            >
                                <ChevronRight size={18} />
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
