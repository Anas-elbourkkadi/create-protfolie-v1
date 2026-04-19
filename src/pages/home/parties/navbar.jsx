
import { useEffect, useState } from "react";
import { motion } from "framer-motion";


// ─── NAVBAR ───────────────────────────────────────────────────────────────────
export default function Navbar() {
    

    // ─── NAV LINKS ────────────────────────────────────────────────────────────────
    const NAV_LINKS = [
        { label: "Projects", href: "#projects" },
        { label: "About", href: "#about" },
        { label: "Contact", href: "#contact" },
        { label: "FAQ", href: "#faq" },
    ];

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4"
        >
            <nav
                className={`
          flex items-center gap-1 px-3 py-2.5 rounded-full
          border border-dashed border-neutral-200
          transition-all duration-500
          ${scrolled
                        ? "bg-white/90 backdrop-blur-xl shadow-[0_4px_32px_rgba(0,0,0,0.08)]"
                        : "bg-white/70 backdrop-blur-md"
                    }
        `}
            >
                {/* Logo */}
                <a
                    href="/"
                    className="flex items-center gap-2 mr-4 pl-2"
                >
                    
                    <span className="font-bold text-[15px] tracking-tight text-neutral-900">
                        Dev<span className="font-light">Folio</span>
                    </span>
                </a>

                {/* Links */}
                {NAV_LINKS.map((link) => (
                    <a
                        key={link.label}
                        href={link.href}
                        className="px-4 py-2 text-sm text-neutral-500 hover:text-neutral-900 rounded-full hover:bg-neutral-100 transition-all duration-200 whitespace-nowrap"
                    >
                        {link.label}
                    </a>
                ))}

                {/* CTA */}
                <motion.a
                    href="#contact"
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    className="ml-2 px-5 py-2.5 bg-neutral-900 text-white text-sm font-semibold rounded-full hover:bg-neutral-700 transition-colors duration-200 whitespace-nowrap shadow-sm"
                >
                    Contact
                </motion.a>
            </nav>
        </motion.header>
    );
}