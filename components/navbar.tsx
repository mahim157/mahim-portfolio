"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, Braces, Menu, X } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  return (
    <header className="site-header fixed inset-x-0 top-0 z-50 border-b border-white/[.07] backdrop-blur-xl">
      <nav className="container flex min-h-[72px] items-center justify-between gap-4 py-3" aria-label="Main navigation">
        <Link href="#home" onClick={closeMenu} className="flex shrink-0 items-center gap-2.5 font-semibold tracking-tight">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-[#0b1020]"><Braces size={20}/></span>
          <span>mahim<span className="text-[#8bb3ff]">.dev</span></span>
        </Link>
        <div className="hidden items-center gap-7 md:flex">
          {links.map(link => <a key={link.href} className="nav-link" href={link.href}>{link.label}</a>)}
        </div>
        <a className="btn btn-secondary ml-auto !px-4 !py-2.5 max-sm:hidden" href="#contact">Let’s talk <ArrowUpRight size={15}/></a>
        <button type="button" className="mobile-menu-button inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-slate-100 md:hidden" aria-label={open ? "Close navigation menu" : "Open navigation menu"} aria-expanded={open} onClick={() => setOpen(v => !v)}>
          {open ? <X size={21}/> : <Menu size={21}/>}
        </button>
      </nav>
      <div className={`mobile-menu md:hidden ${open ? "mobile-menu-open" : ""}`} aria-hidden={!open}>
        <div className="container flex flex-col gap-1 pb-4 pt-1">
          {links.map((link, index) => <a key={link.href} className="mobile-nav-link" href={link.href} tabIndex={open ? 0 : -1} onClick={closeMenu} style={{ transitionDelay: open ? `${index * 35}ms` : "0ms" }}>{link.label}</a>)}
          <a className="btn btn-primary mt-2 justify-center" href="#contact" tabIndex={open ? 0 : -1} onClick={closeMenu}>Let’s talk <ArrowUpRight size={15}/></a>
        </div>
      </div>
    </header>
  );
}
