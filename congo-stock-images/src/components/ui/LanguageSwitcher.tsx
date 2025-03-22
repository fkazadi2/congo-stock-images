'use client';

import { useLocale, useTranslations } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { useState } from 'react';
import { FiGlobe } from 'react-icons/fi';

export default function LanguageSwitcher() {
  const t = useTranslations('language');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const switchToLocale = (newLocale: string) => {
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPath);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        className="flex items-center justify-center text-[#003559] hover:text-white transition-colors p-2 rounded-full hover:bg-[#E6C700]"
        onClick={toggleDropdown}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label={t('switch')}
      >
        <FiGlobe size={20} />
      </button>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
          <div className="py-1" role="menu" aria-orientation="vertical">
            <button
              className={`block w-full text-left px-4 py-2 text-sm ${
                locale === 'fr' ? 'bg-gray-100 text-[#003559] font-medium' : 'text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => switchToLocale('fr')}
              role="menuitem"
            >
              {t('fr')}
            </button>
            <button
              className={`block w-full text-left px-4 py-2 text-sm ${
                locale === 'en' ? 'bg-gray-100 text-[#003559] font-medium' : 'text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => switchToLocale('en')}
              role="menuitem"
            >
              {t('en')}
            </button>
          </div>
        </div>
      )}
    </div>
  );
} 