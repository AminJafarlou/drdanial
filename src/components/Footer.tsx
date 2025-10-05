import { useTranslations } from 'next-intl'
import Link from 'next/link'

const EMAIL = 'd.jafarlou@gmail.com'
const PHONE = '+989147724836'

export const Footer = () => {
  const t = useTranslations('IndexPage')

  const links = [
    { href: '#home', label: t('home') },
    { href: '#about', label: t('about') },
    { href: '#services', label: t('conditions') },
    { href: '#contact', label: t('contact') },
  ]

  return (
    <footer className="footer-section py-8">
      <div className="main-container flex flex-col md:flex-row justify-between gap-16 mx-auto">
        <div className="flex-1">
          <div className="mb-8">LOGO</div>
          <div className="description-text mb-4" style={{ maxWidth: '400px' }}>
            {t('footerDesc')}
          </div>
          <div className="flex flex-col gap-2 text-white">
            <a href={`mailto:${EMAIL}`} className="hover:underline">
              {EMAIL}
            </a>
            <a href={`tel:${PHONE}`} className="hover:underline">
              {PHONE}
            </a>
          </div>
        </div>

        <div className="flex-1">
          <div className="mb-4 text-2xl">{t('links')}</div>

          <ul className="flex flex-col justify-center gap-2 text-lg">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className=" text-white">
                {link.label}
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
