import { cn } from "@/lib/utils";

const LOGOS = [
    { name: "Auxano Solar" },
    { name: "Simba Group" },
    { name: "Cloud Energy" },
    { name: "Rubitec Solar" },
    { name: "Asteven Energy" },
    { name: "Zola Electric" },
];

export function TrustedLogos() {
    return (
        <section className="py-16 bg-[#F9FAFB] border-y border-slate-100 overflow-hidden">
            <div className="container mx-auto px-4 mb-10 text-center">
                <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">
                    Trusted by Nigeria's Energy Leaders
                </p>
            </div>

            <div className="relative flex overflow-x-hidden group">
                {/* First Marquee Ribbon */}
                <div className="animate-marquee whitespace-nowrap flex items-center gap-16 px-16">
                    {LOGOS.map((logo, index) => (
                        <div
                            key={`l1-${index}`}
                            className="text-2xl md:text-3xl font-montserrat font-bold text-slate-300 hover:text-[#0057A0] transition-colors duration-300 cursor-default uppercase"
                        >
                            {logo.name}
                        </div>
                    ))}
                </div>

                {/* Second Marquee Ribbon (Absolute to create seamless loop) */}
                <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center gap-16 px-16">
                    {LOGOS.map((logo, index) => (
                        <div
                            key={`l2-${index}`}
                            className="text-2xl md:text-3xl font-montserrat font-bold text-slate-300 hover:text-[#0057A0] transition-colors duration-300 cursor-default uppercase"
                        >
                            {logo.name}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
