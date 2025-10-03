import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { VerticalStepper } from './VerticalStepper'

export const WhyChooseSection = () => {
  const t = useTranslations('IndexPage')

  const steps = [
    { title: t('whyChoosePoint1Title'), description: t('whyChoosePoint1Desc') },
    { title: t('whyChoosePoint2Title'), description: t('whyChoosePoint2Desc') },
    { title: t('whyChoosePoint3Title'), description: t('whyChoosePoint3Desc') },
    { title: t('whyChoosePoint4Title'), description: t('whyChoosePoint4Desc') },
  ]

  return (
    <section className="why-choose-section relative px-4 pb-12">
      <div
        className="absolute left-[30px] right-[30px] top-[-80px] md:top-[-160px] h-[280px] md:h-[420px] rounded-xl bg-cover bg-center shadow-lg"
        style={{ backgroundImage: "url('/Care Hero.jpg')" }}
      />

      <div className="h-[280px] md:h-[300px]" />

      <div className="main-container mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
        <div className="flex-2">
          <div className='text-white mb-2 font-semibold text-lg'>
            {t('whyChooseDrJafarlou')}
          </div>
          <div className="section-header mb-8" style={{ color: '#fff' }}>
            {t('whyChooseMainHeader')}
            <span>{t('whyChooseMainHeaderSpan')}</span>
          </div>

          <VerticalStepper items={steps} />
        </div>

        <div className="flex-1 flex relative h-[300px] md:h-[400px]">
          <Image src="/Care Hero 2.jpg" alt="office" className="rounded-xl object-cover" fill />
        </div>
      </div>
    </section>
  )
}
