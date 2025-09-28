import { HeroSection } from '@/components/HeroSection'
import { WebHeader } from '@/components/WebHeader'
import { Locale } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'
import { use } from 'react'

export default function IndexPage({ params }: PageProps<'/[locale]'>) {
  const { locale } = use(params)

  // Enable static rendering
  setRequestLocale(locale as Locale)

  return (
    <div style={{ direction: locale === 'fa' ? 'rtl' : 'ltr' }}>
      <WebHeader />
      <HeroSection />
    </div>
  )
}
