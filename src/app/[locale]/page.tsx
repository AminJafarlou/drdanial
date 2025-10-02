import { AboutSection } from '@/components/AboutSection'
import { ConditionsSection } from '@/components/ConditionsSection'
import { CoverImageSection } from '@/components/CoverImageSection'
import { FormSection } from '@/components/FormSection'
import { HeroSection } from '@/components/HeroSection'
import { WebHeader } from '@/components/WebHeader'
import { WhyChooseSection } from '@/components/WhyChooseSection'
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
      <AboutSection />
      <CoverImageSection />
      <ConditionsSection />
      <WhyChooseSection />
      <FormSection />
    </div>
  )
}
