"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const PROJECTS = [
    {
        id: 1,
        title: "Bodija Estate Residence",
        size: "10kVA Hybrid System",
        img: "/images/projects/project1.jpeg",
        span: "md:col-span-2 md:row-span-2",
        location: "Bodija, Ibadan"
    },
    {
        id: 2,
        title: "Dugbe Business Hub",
        size: "20kVA Commercial",
        img: "/images/projects/project3.jpg",
        span: "md:col-span-1 md:row-span-1",
        location: "Dugbe, Ibadan"
    },
    {
        id: 3,
        title: "Oluyole Villa",
        size: "5kVA Backup",
        img: "/images/projects/project4.jpg",
        span: "md:col-span-1 md:row-span-2",
        location: "Oluyole, Ibadan"
    },
    {
        id: 4,
        title: "Akobo Duplex",
        size: "7.5kVA System",
        img: "/images/projects/project6.jpg",
        span: "md:col-span-1 md:row-span-1",
        location: "Akobo, Ibadan"
    },
    {
        id: 5,
        title: "Iyanganku GRA",
        size: "15kVA Solar",
        img: "/images/projects/project9.jpg",
        span: "md:col-span-1 md:row-span-1",
        location: "Iyaganku, Ibadan"
    }
];

export function Portfolio() {
    return (
        <section className="py-20 bg-slate-50" id="projects">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="max-w-xl">
                        <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-[#0057A0] mb-4">
                            Real Power. Real Results.
                        </h2>
                        <p className="text-lg text-gray-600 font-inter">
                            See how we're transforming homes and businesses across Ibadan.
                            Clean installations, happy clients.
                        </p>
                    </div>
                    <Button variant="outline" className="border-[#0057A0] text-[#0057A0] hover:bg-blue-50">
                        View All Projects
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
                    {PROJECTS.map((project, i) => (
                        <motion.div
                            key={project.id}
                            className={`relative overflow-hidden rounded-2xl group cursor-pointer ${project.span} shadow-md hover:shadow-xl transition-shadow`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            viewport={{ once: true, margin: "-100px" }}
                        >
                            <Image
                                src={project.img}
                                alt={`${project.title} - ${project.size} in ${project.location}`}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                <span className="text-[#FDCB2A] font-medium text-xs uppercase tracking-wider mb-1">
                                    {project.location}
                                </span>
                                <h3 className="text-white font-bold text-xl leading-tight mb-1">{project.title}</h3>
                                <p className="text-slate-300 text-sm">{project.size}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
