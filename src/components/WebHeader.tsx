'use client'

import { Menu, X } from 'lucide-react'; // lightweight icons
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useState } from 'react';

export function WebHeader() {
  const t = useTranslations('IndexPage')
  const [drawerOpen, setDrawerOpen] = useState(false)

  const links = [
    { href: '#home', label: t('home') },
    { href: '#about', label: t('about') },
    { href: '#services', label: t('conditions') },
    { href: '#contact', label: t('contact') },
  ]

  return (
    <header>
      <div style={{ height: '102px' }} className="flex items-center justify-between px-8 py-4 border-b border-blue-200">
        {/* Logo */}
        <div className="text-xl font-bold">logo</div>

        {/* Desktop Nav */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-8">
            {links.map((link) => (
              <Link key={link.href} className="header-link" href={link.href}>
                {link.label}
              </Link>
            ))}
            <Link href="#get-in-touch">
              <button className="bg-blue-600 hover:bg-blue-800 text-white px-4 py-2 rounded-full cursor-pointer">
                {t('getInTouch')}
              </button>
            </Link>
          </ul>
        </nav>

        {/* Mobile Hamburger */}
        <button className="md:hidden p-2" onClick={() => setDrawerOpen(true)} aria-label="Open menu">
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-50 bg-sky-950 transform transition-transform duration-300 ease-in-out ${
          drawerOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Close button */}
        <div className="flex justify-between items-center p-4">
          <div className="flex-1"></div>
          <button className="p-2 text-white" onClick={() => setDrawerOpen(false)} aria-label="Close menu">
            <X size={28} />
          </button>
        </div>

        {/* Drawer nav */}
        <nav className="p-8">
          <ul className="flex flex-col justify-center gap-6 text-lg">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className=" text-white" onClick={() => setDrawerOpen(false)}>
                {link.label}
              </Link>
            ))}
            <Link href="#get-in-touch" onClick={() => setDrawerOpen(false)}>
              <button className="bg-white text-sky-800 px-6 py-3 rounded-full cursor-pointer w-full">
                {t('getInTouch')}
              </button>
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  )
}
