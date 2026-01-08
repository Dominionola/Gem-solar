"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = [
    {
        question: "How long do the batteries last?",
        answer: "We use high-grade Tubular and Lithium batteries. Tubular batteries typically last 3-4 years, while our Lithium options come with a 5-year warranty and can last over 10 years with proper use."
    },
    {
        question: "Do you offer payment plans?",
        answer: "Yes, we prioritize making solar accessible. We offer 3-month and 6-month installment plans for our 'Family Hub' and 'Business Pro' packages."
    },
    {
        question: "What happens if my battery spoils after 1 year?",
        answer: "All our installations come with a minimum 1-year comprehensive warranty. If a battery fails due to manufacturing defects within this period, we replace it freely. Our Lithium batteries have extended 5-year warranties."
    },
    {
        question: "Do I need to clean the panels during Harmattan?",
        answer: "Dust can reduce efficiency by up to 15%. We provide a maintenance schedule and offer an annual cleaning service (first year free) to keep your panels operating at 100% capacity."
    },
    {
        question: "Do you have an office in Ibadan?",
        answer: "Yes, we are fully local. Our office is located at Block 5, Oluyole Estate, Ibadan. You can visit us for a consultation or to see our demo systems."
    }
];

export function FAQ() {
    // JSON-LD Schema for SEO
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": FAQS.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };

    return (
        <section className="py-20 bg-white" id="faq">
            <div className="container mx-auto px-4 max-w-3xl">
                <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-[#0057A0] mb-3 text-center">
                    Frequently Asked Questions
                </h2>
                <p className="text-center text-gray-500 mb-10 font-inter">
                    Everything you need to know about going solar in Ibadan.
                </p>

                {/* Structured Data for SEO */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />

                <Accordion type="single" collapsible className="w-full">
                    {FAQS.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger className="text-left font-semibold text-gray-800 hover:text-[#0057A0] transition-colors">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-600 leading-relaxed">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}
