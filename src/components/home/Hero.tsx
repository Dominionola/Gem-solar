"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Hero() {
    return (
        <section className="relative w-full min-h-[90vh] flex items-center">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero.png" // Ensure this matches the file copied
                    alt="Solar Panels on Roof in Nigeria"
                    fill
                    className="object-cover object-center"
                    priority // Critical for LCP as per SEO Strategy
                    quality={90}
                />
                {/* Gradient Overlay for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/70 to-transparent/20" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 container mx-auto px-4 md:px-6 pt-20">
                <motion.div
                    className="max-w-2xl space-y-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h1 className="font-montserrat font-bold text-4xl md:text-6xl leading-tight text-[#0057A0]">
                        Power Your Home. <br className="hidden md:block" />
                        <span className="text-[#FDCB2A]">Day and Night.</span>
                    </h1>

                    <p className="font-inter text-lg md:text-xl text-gray-700 leading-relaxed max-w-lg">
                        Stop relying on the unpredictable grid. Get affordable, 24/7 solar energy solutions tailored for Ibadan homes and businesses.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Button size="lg" className="bg-[#0057A0] hover:bg-[#004480] text-white text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all" asChild>
                            <a href="https://wa.me/2348051307748" target="_blank" rel="noopener noreferrer">
                                Get a Free Quote
                            </a>
                        </Button>
                        <Button variant="outline" size="lg" className="border-2 border-[#0057A0] text-[#0057A0] hover:bg-blue-50 text-lg px-8 py-6 font-semibold">
                            See Our Work
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
