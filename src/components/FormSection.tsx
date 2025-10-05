import { useTranslations } from 'next-intl'
import { MessageForm } from './MessageForm'

export const FormSection = () => {
  const t = useTranslations('IndexPage')

  return (
    <section className="main-container bg-white py-12 flex flex-col md:flex-row justify-between gap-16 mx-auto">
      <div className="flex-1">
        <div className="mb-4 section-subheader">{t('takeTheFirstStep')}</div>

        <div className="section-header mb-8">
          {t('formSectionHeader')}
          <span>{t('formSectionHeaderSpan')}</span>
        </div>

        <div className="description-text mb-4">{t('formSectionDesc1')}</div>
        <div className="description-text mb-4">{t('formSectionDesc2')}</div>
        <div className="description-text mb-4">{t('formSectionDesc3')}</div>
      </div>

      <div className="flex-1">
        <MessageForm />
      </div>
    </section>
  )
}
