'use client'

import { Globe, Menu, X } from 'lucide-react'
import { useLocale, useTranslations } from 'next-intl'
import Link from 'next/link'
import { useState } from 'react'

export function Header() {
  const t = useTranslations('IndexPage')
  const locale = useLocale()
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [langDrawerOpen, setLangDrawerOpen] = useState(false)

  const links = [
    { href: '#home', label: t('home') },
    { href: '#about', label: t('about') },
    { href: '#services', label: t('conditions') },
    { href: '#contact', label: t('contact') },
  ]

  return (
    <header>
      <div style={{ height: '102px' }} className="py-4 border-b border-blue-200">
        <div className="main-container flex items-center justify-between m-auto h-full">
          <div className="text-xl font-bold">logo</div>

          {/* Desktop nav */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              {links.map((link) => (
                <Link key={link.href} className="header-link" href={link.href}>
                  {link.label}
                </Link>
              ))}

              {/* Language switcher (Globe icon) */}
              <button
                onClick={() => setLangDrawerOpen(true)}
                className="p-2 flex items-center gap-2 hover:text-blue-600"
                aria-label="Change language"
              >
                <Globe size={20} />
                <span>{locale === 'en' ? 'English' : 'فارسی'}</span>
              </button>

              <Link href="#get-in-touch">
                <button className="bg-blue-600 hover:bg-blue-800 text-white px-4 py-2 rounded-full cursor-pointer">
                  {t('getInTouch')}
                </button>
              </Link>
            </ul>
          </nav>

          <div className='flex items-center gap-2'>
            <button
              onClick={() => {
                setDrawerOpen(false)
                setLangDrawerOpen(true)
              }}
              className="flex items-center gap-2 "
            >
              <Globe size={20} />
              <span>{locale === 'en' ? 'English' : 'فارسی'}</span>
            </button>

            {/* Mobile menu button */}
            <button className="md:hidden p-2" onClick={() => setDrawerOpen(true)} aria-label="Open menu">
              <Menu size={28} />
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        <div
          className={`fixed inset-0 z-50 bg-sky-950 transform transition-transform duration-300 ease-in-out ${
            drawerOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex justify-between items-center p-4">
            <div className="flex-1"></div>
            <button className="p-2 text-white" onClick={() => setDrawerOpen(false)} aria-label="Close menu">
              <X size={28} />
            </button>
          </div>

          <nav className="p-8">
            <ul className="flex flex-col justify-center gap-6 text-lg">
              {links.map((link) => (
                <Link key={link.href} href={link.href} className="text-white" onClick={() => setDrawerOpen(false)}>
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

        {/* Language Drawer */}
        <div
          className={`fixed inset-0 z-50 bg-sky-950 transform transition-transform duration-300 ease-in-out ${
            langDrawerOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex justify-between items-center p-4 border-b border-b-white">
            <h2 className="text-lg font-bold text-white">{t('selectLanguage')}</h2>
            <button className="p-2" onClick={() => setLangDrawerOpen(false)} aria-label="Close language menu">
              <X color='white' size={24} />
            </button>
          </div>

          <nav className="p-8">
            <ul className="flex flex-col gap-6 text-lg">
              <Link
                href="/en"
                locale="en"
                onClick={() => setLangDrawerOpen(false)}
                className={`${locale === 'en' ? 'font-bold text-blue-400' : 'text-white'}`}
              >
                English
              </Link>
              <Link
                href="/fa"
                locale="fa"
                onClick={() => setLangDrawerOpen(false)}
                className={`${locale === 'fa' ? 'font-bold text-blue-400' : 'text-white'}`}
              >
                فارسی
              </Link>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
