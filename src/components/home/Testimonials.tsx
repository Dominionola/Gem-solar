"use client";

import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

const TESTIMONIALS = [
    {
        quote: "I was skeptical at first, but GemSolar delivered. My pharmacy at Dugbe now runs 24/7 without the noise of a generator. The savings on diesel are massive.",
        name: "Mr. Adebayo",
        location: "Dugbe, Ibadan",
        initials: "MA"
    },
    {
        quote: "The installation team was so neat and professional. They explained everything clearly. Now I can work from home in Akobo without worrying about 'light off'.",
        name: "Mrs. Folake",
        location: "Akobo, Ibadan",
        initials: "MF"
    },
    {
        quote: "Best investment I've made for my family. Even during the fuel scarcity, our freezer was cold and the kids could watch TV. Highly recommend!",
        name: "Engr. Tunde",
        location: "Bodija, Ibadan",
        initials: "ET"
    },
    {
        quote: "Their after-sales support is genuine. When I had a small issue with my inverter settings, they sent a technician within 24 hours.",
        name: "Dr. Mrs. Okonjo",
        location: "Jericho, Ibadan",
        initials: "DO"
    },
    {
        quote: "Finally, a solar company in Ibadan that is reliable. The system works exactly as they calculated.",
        name: "Chief Balogun",
        location: "Oluyole, Ibadan",
        initials: "CB"
    }
];

export function Testimonials() {
    return (
        <section className="py-20 bg-white" id="testimonials">
            <div className="container mx-auto px-4">
                <h2 className="text-center text-3xl md:text-4xl font-montserrat font-bold text-[#0057A0] mb-12">
                    What Our Clients Say
                </h2>

                <Carousel
                    className="w-full max-w-5xl mx-auto"
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                >
                    <CarouselContent className="-ml-2 md:-ml-4">
                        {TESTIMONIALS.map((t, index) => (
                            <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                                <div className="p-1 h-full">
                                    <Card className="h-full border-slate-100 hover:shadow-md transition-shadow">
                                        <CardContent className="flex flex-col gap-4 p-8 h-full">
                                            <div className="flex text-yellow-500 gap-0.5">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star key={i} size={16} fill="currentColor" />
                                                ))}
                                            </div>

                                            <p className="text-gray-600 italic leading-relaxed text-sm flex-grow">
                                                "{t.quote}"
                                            </p>

                                            <div className="flex items-center gap-3 mt-4 pt-4 border-t border-slate-50">
                                                <Avatar className="h-10 w-10 bg-blue-50 text-[#0057A0] border border-blue-100">
                                                    <AvatarFallback className="font-bold">{t.initials}</AvatarFallback>
                                                </Avatar>
                                                <div>
                                                    <p className="font-semibold text-sm text-gray-900">{t.name}</p>
                                                    <p className="text-xs text-gray-500">{t.location}</p>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="hidden md:flex -left-4 hover:bg-[#0057A0] hover:text-white border-[#0057A0]" />
                    <CarouselNext className="hidden md:flex -right-4 hover:bg-[#0057A0] hover:text-white border-[#0057A0]" />
                </Carousel>
            </div>
        </section>
    );
}
