import { useTranslations } from 'next-intl'

export const ConditionsSection = () => {
  const t = useTranslations('IndexPage')

  interface Condition {
    icon: string
    title: string
    description: string
  }

  const conditions: Condition[] = [
    {
      icon: '🧠',
      title: t('conditionsTitle1'),
      description: t('conditionsDesc1'),
    },
    {
      icon: '🧠',
      title: t('conditionsTitle2'),
      description: t('conditionsDesc2'),
    },
    {
      icon: '🧠',
      title: t('conditionsTitle3'),
      description: t('conditionsDesc3'),
    },
    {
      icon: '🧠',
      title: t('conditionsTitle4'),
      description: t('conditionsDesc4'),
    },
    {
      icon: '🧠',
      title: t('conditionsTitle5'),
      description: t('conditionsDesc5'),
    },
    {
      icon: '🧠',
      title: t('conditionsTitle6'),
      description: t('conditionsDesc6'),
    },
  ]

  return (
    <section className="conditions-section py-12">
      <div className="text-center">
        <div style={{ fontSize: '14px' }} className="font-bold text-sky-800">
          {t('conditionsSubheader')}
        </div>
        <div style={{ fontSize: '44px' }} className="mb-4 font-bold text-sky-900">
          {t('conditionsMainHeader')}
        </div>
      </div>

      <div className="main-container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {conditions.map((condition, index) => (
            <div
              key={index}
              className="condition-card p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{condition.icon}</div>
              <h3 className="text-sky-800 text-l font-semibold mb-2">{condition.title}</h3>
              <p className="text-gray-400">{condition.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
