"use client";

import { useState } from "react";
import { Plus, Minus, Zap, Fan, Tv, Refrigerator, Smartphone, Monitor, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";

const APPLIANCES = [
    { id: 'bulb', name: 'LED Bulbs', watts: 10, icon: <Zap size={18} /> },
    { id: 'phone', name: 'Phone/Ind. Charger', watts: 15, icon: <Smartphone size={18} /> },
    { id: 'fan', name: 'Ceiling/Standing Fan', watts: 75, icon: <Fan size={18} /> },
    { id: 'tv', name: 'LED TV (43-55")', watts: 120, icon: <Tv size={18} /> },
    { id: 'laptop', name: 'Laptop', watts: 65, icon: <Monitor size={18} /> },
    { id: 'fridge', name: 'Refrigerator/Freezer', watts: 200, icon: <Refrigerator size={18} /> },
    { id: 'kettle', name: 'Electric Kettle', watts: 1500, icon: <Coffee size={18} /> },
];

const PACKAGES = [
    { maxWatts: 1200, name: "The Starter", size: "1-2kVA", desc: "Basic Power" },
    { maxWatts: 3500, name: "The Family Hub", size: "3.5-5kVA", desc: "Full Home Comfort" },
    { maxWatts: 10000, name: "Business Pro", size: "7.5-10kVA", desc: "Heavy Duty" },
];

export function LoadCalculator() {
    const [counts, setCounts] = useState<Record<string, number>>({});

    const updateCount = (id: string, delta: number) => {
        setCounts(prev => {
            const current = prev[id] || 0;
            const next = Math.max(0, current + delta);
            return { ...prev, [id]: next };
        });
    };

    const totalWatts = APPLIANCES.reduce((sum, app) => {
        return sum + (app.watts * (counts[app.id] || 0));
    }, 0);

    // Safety Margin: Add 25% overhead
    const requiredLoad = Math.ceil(totalWatts * 1.25);

    const recommendedPackage = PACKAGES.find(p => requiredLoad <= p.maxWatts) ||
        (requiredLoad > 0 ? { name: "Custom Project", size: "10kVA+", desc: "Contact for Audit" } : null);

    return (
        <section className="py-20 bg-slate-50" id="calculator">
            <div className="container mx-auto px-4">
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-[#0057A0] mb-3">
                        Not sure what you need?
                    </h2>
                    <p className="text-gray-500 font-inter">
                        Use our interactive calculator to find your perfect solar match.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden flex flex-col lg:flex-row">
                    {/* Left: Appliance List */}
                    <div className="lg:w-2/3 p-6 md:p-8 space-y-6">
                        <div className="border-b border-slate-100 pb-4 mb-4">
                            <h3 className="font-bold text-gray-800">Add Appliances</h3>
                            <p className="text-sm text-gray-400">Adjust quantities based on what you want to power simultaneously.</p>
                        </div>

                        <div className="space-y-4">
                            {APPLIANCES.map(app => (
                                <div key={app.id} className="flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className="h-10 w-10 bg-blue-50 rounded-full flex items-center justify-center text-[#0057A0]">
                                            {app.icon}
                                        </div>
                                        <div>
                                            <span className="font-medium text-gray-700 block">{app.name}</span>
                                            <span className="text-xs text-gray-400 font-mono">{app.watts}W</span>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <Button
                                            variant="outline" size="icon" className="h-8 w-8 rounded-full"
                                            onClick={() => updateCount(app.id, -1)}
                                            disabled={!counts[app.id]}
                                        >
                                            <Minus size={14} />
                                        </Button>
                                        <span className="font-jetbrains text-lg w-6 text-center font-bold text-slate-700">{counts[app.id] || 0}</span>
                                        <Button
                                            size="icon" className="h-8 w-8 rounded-full bg-[#0057A0] hover:bg-[#004480]"
                                            onClick={() => updateCount(app.id, 1)}
                                        >
                                            <Plus size={14} />
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Results Panel */}
                    <div className="lg:w-1/3 bg-[#0057A0] text-white p-8 flex flex-col justify-center gap-8 relative overflow-hidden">
                        {/* Background decorative blob */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl pointer-events-none" />

                        <div>
                            <p className="text-blue-200 text-xs uppercase tracking-wider mb-1 font-semibold">Estimated Load (+25% Safe Margin)</p>
                            <h3 className="font-jetbrains text-4xl font-bold flex items-baseline gap-1">
                                {requiredLoad} <span className="text-lg text-blue-200">Watts</span>
                            </h3>
                        </div>

                        <div className="space-y-2">
                            <p className="text-blue-200 text-xs uppercase tracking-wider font-semibold">Recommended Package</p>
                            <div className="bg-white/10 rounded-xl p-5 backdrop-blur-sm border border-white/10 shadow-inner">
                                {recommendedPackage ? (
                                    <>
                                        <p className="font-montserrat font-bold text-xl text-[#FDCB2A] mb-1">{recommendedPackage.name}</p>
                                        <p className="text-sm text-white font-medium">{recommendedPackage.size}</p>
                                        <p className="text-xs text-blue-200 mt-1">{recommendedPackage.desc}</p>
                                    </>
                                ) : (
                                    <p className="text-sm text-blue-100 italic">Add items to see recommendation</p>
                                )}
                            </div>
                        </div>

                        <div className="mt-auto pt-4">
                            <Button className="w-full bg-[#FDCB2A] text-[#0057A0] hover:bg-[#eebb00] font-bold h-12 text-base shadow-lg hover:shadow-xl transition-all">
                                Get Full Quote
                            </Button>
                            <p className="text-[10px] text-center text-blue-300 mt-2 opacity-70">
                                Estimate only. Final audit required.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
