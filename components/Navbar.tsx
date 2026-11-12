'use client'
import { useState } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'

const links = [{ label: 'Home', href: '#home' }, { label: 'Services', href: '#services' }, { label: 'Portfolio', href: '#portfolio' }, { label: 'Contact', href: '#contact' }]
export default function Navbar() {
  const [open, setOpen] = useState(false)
  return <header className="navbar"><a className="brand" href="#home"><span className="brand-symbol"><img src="/ob-ocean-emblem.png" alt="" /></span><span className="brand-name">OceanBass<strong>Studios</strong></span></a><button className="mobile-toggle" onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? <X /> : <Menu />}</button><nav className={open ? 'nav-links open' : 'nav-links'}>{links.map(link => <a key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</a>)}<a className="nav-cta" href="mailto:hello@oceanbassstudios.com">Start a project <ArrowUpRight size={15} /></a></nav></header>
}
