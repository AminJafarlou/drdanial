import { useTranslations } from 'next-intl'
import Image from 'next/image'

export function HeroSection() {
  const t = useTranslations('IndexPage')

  return (
    <section className="hero-section py-12">
      <div className="main-container mx-auto flex flex-col md:flex-row items-center md:items-start justify-between px-4 gap-8">
        <div className="flex-1">
          <Image src="/hero1.jpg" alt="Hero section 1" className="rounded-xl" width={600} height={400} />
        </div>
        <div className="flex-1">
          <div className="text-start">
            <div style={{ fontSize: '14px' }} className="mb-4 font-bold text-sky-800">
              {t('heroSubHeader')}
            </div>
            <div style={{ fontSize: '44px' }} className="mb-4 font-bold text-sky-900">
              {t('heroMainHeader')}
            </div>
            <div style={{ fontSize: '16px' }} className="mb-4 text-neutral-400">
              {t('heroDesc1')}
            </div>
            <div style={{ fontSize: '16px' }} className="mb-8 text-neutral-400">
              {t('heroDesc2')}
            </div>
          </div>

          <div>
            <Image src="/hero2.jpg" alt="Hero section 2" className="rounded-xl" width={600} height={400} />
          </div>
        </div>
      </div>
    </section>
  )
}
