"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetTitle,
    SheetClose,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
    { href: "/", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#projects", label: "Projects" },
    { href: "#calculator", label: "Load Calculator", highlight: true },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
                isScrolled
                    ? "bg-white/70 backdrop-blur-md border-b border-blue-900/10 shadow-sm py-2"
                    : "bg-transparent border-transparent py-4"
            )}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="relative h-12 w-40">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="/images/logo.png"
                            alt="GemSolar Logo"
                            className="h-full w-full object-contain object-left"
                        />
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-[#FDCB2A]",
                                link.highlight ? "text-[#0057A0] font-semibold" : "text-[#0057A0]/80"
                            )}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Button
                        className="bg-[#0057A0] hover:bg-[#004480] text-white font-medium px-6 shadow-md hover:shadow-lg transition-all"
                        asChild
                    >
                        <a href="https://wa.me/2348051307748" target="_blank" rel="noopener noreferrer">
                            Contact
                        </a>
                    </Button>
                </nav>

                {/* Mobile Nav */}
                <div className="md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="text-[#0057A0]">
                                <Menu className="h-6 w-6" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="bg-white/95 backdrop-blur-xl border-l border-[#0057A0]/10 w-[300px]">
                            <SheetTitle className="text-left font-montserrat font-bold text-2xl text-[#0057A0] mb-8">
                                GemSolar
                            </SheetTitle>
                            <nav className="flex flex-col gap-6">
                                {NAV_LINKS.map((link) => (
                                    <SheetClose asChild key={link.label}>
                                        <Link
                                            href={link.href}
                                            className={cn(
                                                "text-lg font-medium transition-colors hover:text-[#FDCB2A]",
                                                link.highlight ? "text-[#0057A0] font-semibold" : "text-slate-600"
                                            )}
                                        >
                                            {link.label}
                                        </Link>
                                    </SheetClose>
                                ))}
                                <div className="pt-4 border-t border-slate-100">
                                    <SheetClose asChild>
                                        <Button className="w-full bg-[#0057A0] hover:bg-[#004480] text-white" asChild>
                                            <a href="https://wa.me/2348051307748" target="_blank" rel="noopener noreferrer">
                                                Contact Us
                                            </a>
                                        </Button>
                                    </SheetClose>
                                </div>
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}
