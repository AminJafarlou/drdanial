import { useTranslations } from 'next-intl';
import Link from 'next/link';

export function WebHeader() {
const t = useTranslations('IndexPage');

  return (
    <header>
      <div style={{ height: '102px' }} className="flex items-center justify-between px-8 py-4 border-b border-blue-200">
        <div>logo</div>
        <div>
          <nav>
            <ul className="flex items-center gap-8">
              <Link className="header-link" href="#home">
                {t('home')}
              </Link>
              <Link className="header-link" href="#about">
                {t('about')}
              </Link>
              <Link className="header-link" href="#services">
                {t('conditions')}
              </Link>
              <Link className="header-link" href="#contact">
                {t('contact')}
              </Link>
              <Link href="#get-in-touch">
                <button className="bg-blue-600 hover:bg-blue-800 text-white px-4 py-2 rounded-full cursor-pointer">
                  {t('getInTouch')}
                </button>
              </Link>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
