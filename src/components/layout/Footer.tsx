"use client";

import Link from "next/link";
import { Instagram, Twitter, Phone, MapPin, Mail, Facebook, Video } from "lucide-react";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#0f172a] text-white pt-16 pb-8 border-t border-[#0057A0]/20">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
                {/* Column 1: Brand */}
                <div className="space-y-4">
                    <div className="flex items-center gap-2">
                        <span className="font-montserrat font-bold text-2xl text-white">GemSolar</span>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
                        Premium solar energy solutions engineered for Nigerian homes and businesses.
                        Stop relying on the grid today.
                    </p>
                    <div className="flex gap-4 pt-2">
                        <Link href="https://www.instagram.com/gemsolarenergy" target="_blank" className="hover:text-[#FDCB2A] transition-colors bg-white/5 p-2 rounded-full hover:bg-white/10" aria-label="Instagram">
                            <Instagram size={18} />
                        </Link>
                        <Link href="https://x.com/jacobeunice1?s=21" target="_blank" className="hover:text-[#FDCB2A] transition-colors bg-white/5 p-2 rounded-full hover:bg-white/10" aria-label="Twitter">
                            <Twitter size={18} />
                        </Link>
                        <Link href="https://www.facebook.com/share/1GhYh3fyg3/?mibextid=wwXIfr" target="_blank" className="hover:text-[#FDCB2A] transition-colors bg-white/5 p-2 rounded-full hover:bg-white/10" aria-label="Facebook">
                            <Facebook size={18} />
                        </Link>
                        <Link href="https://www.tiktok.com/@gem.solar?_t=ZS-8zASEWPHbSm&_r=1" target="_blank" className="hover:text-[#FDCB2A] transition-colors bg-white/5 p-2 rounded-full hover:bg-white/10" aria-label="TikTok">
                            <Video size={18} /> {/* Using Video icon as placeholder for TikTok if specific icon unavailable */}
                        </Link>
                    </div>
                </div>

                {/* Column 2: Quick Links */}
                <div>
                    <h3 className="font-bold text-lg mb-6 uppercase tracking-wider text-[#FDCB2A] text-xs">Company</h3>
                    <ul className="space-y-3 text-slate-300 text-sm">
                        <li><Link href="#about" className="hover:text-white transition-colors">About Us</Link></li>
                        <li><Link href="#projects" className="hover:text-white transition-colors">Our Projects</Link></li>
                        <li><Link href="#calculator" className="hover:text-white transition-colors">Load Calculator</Link></li>
                        <li><Link href="#contact" className="hover:text-white transition-colors">Contact</Link></li>
                    </ul>
                </div>

                {/* Column 3: Services */}
                <div>
                    <h3 className="font-bold text-lg mb-6 uppercase tracking-wider text-[#FDCB2A] text-xs">Services</h3>
                    <ul className="space-y-3 text-slate-300 text-sm">
                        <li className="hover:text-white cursor-default">Residential Installation</li>
                        <li className="hover:text-white cursor-default">Commercial Solar</li>
                        <li className="hover:text-white cursor-default">Inverter Batteries</li>
                        <li className="hover:text-white cursor-default">Maintenance Plans</li>
                    </ul>
                </div>

                {/* Column 4: Contact */}
                <div>
                    <h3 className="font-bold text-lg mb-6 uppercase tracking-wider text-[#FDCB2A] text-xs">Reach Us</h3>
                    <ul className="space-y-4 text-slate-300 text-sm">
                        <li className="flex gap-3 items-start group">
                            <MapPin size={18} className="text-[#FDCB2A] shrink-0 mt-0.5 group-hover:text-white transition-colors" />
                            <Link href="https://maps.app.goo.gl/pJM4n7UVWjVeHGKDA?g_st=ipc" target="_blank" className="group-hover:text-white transition-colors hover:underline">
                                Ibadan, Oyo State, Nigeria
                            </Link>
                        </li>
                        <li className="flex gap-3 items-center group">
                            <Phone size={18} className="text-[#FDCB2A] group-hover:text-white transition-colors" />
                            <Link href="https://wa.me/2348051307748" target="_blank" className="group-hover:text-white transition-colors hover:underline">
                                08051307748
                            </Link>
                        </li>
                        <li className="flex gap-3 items-center group">
                            <Mail size={18} className="text-[#FDCB2A] group-hover:text-white transition-colors" />
                            <Link href="mailto:GemSolar2020@gmail.com" className="group-hover:text-white transition-colors hover:underline">
                                GemSolar2020@gmail.com
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Copyright */}
            <div className="container mx-auto px-4 mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-xs text-center md:text-left">
                <p>© {currentYear} GemSolar Energy. All rights reserved.</p>
                <div className="flex gap-6">
                    <Link href="#" className="hover:text-white">Privacy Policy</Link>
                    <Link href="#" className="hover:text-white">Terms of Service</Link>
                </div>
            </div>
        </footer>
    );
}
