import { useTranslations } from 'next-intl'
import Image from 'next/image'

export function AboutSection() {
  const t = useTranslations('IndexPage')

  return (
    <section className="py-12">
      <div className="main-container mx-auto flex flex-col md:flex-row items-center md:items-start justify-between px-4 gap-8">
        <div className="flex-1 flex gap-4">
          <div className="flex-1 relative">
            <Image src="/about-office.jpg" alt="office" className="rounded-xl object-cover" fill />
          </div>
          <div className="flex-1 flex flex-col gap-4 justify-between">
            <div>
              <Image
                src="/dr danial jafarlou.jpg"
                alt="Dr. Danial Jafarlou"
                className="rounded-xl"
                width={140}
                height={180}
              />
            </div>
            <div>
              <Image src="/about-office-2.jpg" alt="office-2" className="rounded-xl" width={140} height={180} />
            </div>
          </div>
        </div>
        <div className="flex-2">
          <div className="text-start">
            <div style={{ fontSize: '14px' }} className="mb-4 font-bold text-sky-800">
              {t('aboutSubheader')}
            </div>
            <div style={{ fontSize: '44px' }} className="mb-4 font-bold text-sky-900">
              {t('aboutMainHeader')}
            </div>
            <div style={{ fontSize: '16px' }} className="mb-4 text-neutral-400">
              {t('aboutDesc1')}
            </div>
            <div style={{ fontSize: '16px' }} className="mb-8 text-neutral-400">
              {t('aboutDesc2')}
            </div>
            <div style={{ fontSize: '16px' }} className="mb-8 text-neutral-400">
              {t('aboutDesc3')}
            </div>
            <div style={{ fontSize: '16px' }} className="mb-8 text-neutral-400">
              {t('aboutDesc4')}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
