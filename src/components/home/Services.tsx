"use client";

import Image from "next/image";
import { Zap, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const SERVICES = [
    {
        title: "The Starter",
        description: "Essentials Only. Never worry about 'NEPA' interrupting your work or sleep.",
        image: "/images/projects/project2.jpg",
        audience: "Students & Studios",
        features: ["Powers Laptops & Phones", "Fans & Lighting", "TV & Entertainment"],
        cta: "Basic Plan"
    },
    {
        title: "The Family Hub",
        description: "Comfort for the whole house. Keep the food fresh and the family happy.",
        image: "/images/projects/project5.jpg",
        audience: "Families & Homes",
        features: ["Refrigerator/Freezer", "All Lighting points", "TVs & Sound Systems", "Washing Machine (Daytime)"],
        cta: "Popular Choice",
        highlight: true
    },
    {
        title: "Business Pro",
        description: "Zero Downtime. Protect your revenue and equipment from power cuts.",
        image: "/images/projects/project13.jpg",
        audience: "SMEs & Offices",
        features: ["Air Conditioning (Inverter ACs)", "Office Equipment (Printers/PCs)", "24/7 Operations Support"],
        cta: "Business Plan"
    }
];

export function Services() {
    return (
        <section className="py-20 bg-white" id="services">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12 max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-[#0057A0] mb-4">
                        Power For Every Stage of Life
                    </h2>
                    <p className="text-lg text-gray-600 font-inter">
                        We don't just sell batteries; we sell peace of mind. Choose the plan that fits your lifestyle.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {SERVICES.map((service, index) => (
                        <Card
                            key={index}
                            className={`overflow-hidden group hover:shadow-xl transition-all duration-300 border-slate-200 flex flex-col ${service.highlight ? 'ring-2 ring-[#FDCB2A]' : ''}`}
                        >
                            {/* Image Area */}
                            <div className="relative h-56 w-full overflow-hidden">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                                <div className="absolute bottom-4 left-4 right-4">
                                    <div className="flex justify-between items-end">
                                        <h3 className="text-white font-bold text-2xl font-montserrat">
                                            {service.title}
                                        </h3>
                                        {service.highlight && (
                                            <Badge className="bg-[#FDCB2A] text-[#0057A0] hover:bg-[#FDCB2A]">
                                                Best Value
                                            </Badge>
                                        )}
                                    </div>
                                    <p className="text-gray-300 text-sm mt-1">{service.audience}</p>
                                </div>
                            </div>

                            {/* Content Area */}
                            <CardContent className="p-6 flex flex-col flex-grow">
                                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                                    {service.description}
                                </p>

                                <ul className="space-y-3 mb-8">
                                    {service.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                                            <div className="mt-0.5 min-w-5">
                                                <div className="h-5 w-5 rounded-full bg-blue-50 flex items-center justify-center">
                                                    <Check size={12} className="text-[#0057A0]" />
                                                </div>
                                            </div>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Button
                                    className={`w-full font-bold ${service.highlight ? 'bg-[#0057A0] hover:bg-[#004480] text-white' : 'bg-slate-100 hover:bg-slate-200 text-[#0057A0]'}`}
                                >
                                    Get {service.title} Quote
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
