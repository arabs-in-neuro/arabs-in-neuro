import { useState, useContext, useEffect } from "react";
import Link from "next/link";
import LanguageContext from "../../context/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";
import { useRouter } from 'next/router';

function Navbar({ setPreferredLanguage }) {
  const languageContext = useContext(LanguageContext);
  const { preferredLanguage, currentContent } = languageContext;

  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/about", label: currentContent.navbar.about },
    { href: "/school/isn", label: currentContent.navbar.isnSchool},
    { href: "/school", label: currentContent.navbar.courses },
    { href: "/faq", label: currentContent.navbar.faq },
    { href: "/join", label: currentContent.navbar.opportunities },
    { href: "/donate", label: currentContent.navbar.donate },
  ];

  const router = useRouter();

  const isActive = (href) => {
    if (href.includes('/details')) {
      return router.pathname.includes('/details');
    } else if (href.includes('/school/isn')) {
        return router.pathname.includes('/school/isn');
    }
    return router.pathname === href;
  };

  return (
    <nav className="fixed top-0 left-0 z-50 w-full p-5 bg-cWhite text-black shadow-md">
      <div className="flex items-center justify-between">
        <Link href="/">
          <img
            src="/logo/banner.png"
            alt="Logo"
            className="h-12 w-auto cursor-pointer"
          />
        </Link>

        <div className="flex items-center">
          <div className="hidden md:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`mx-2 px-4 py-2 rounded shadow hover:bg-cN200 hover:text-cRed hover:no-underline ${
                  isActive(link.href) ? 'text-cWhite' : 'text-cBlack'
                } ${
                  isActive(link.href) ? 'bg-cRed' : 'bg-cWhite'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <Link key="/contact" href="/contact">
            <div className="mx-1 cursor-pointer px-2 py-2 bg-cRed rounded-full shadow-sm hover:bg-cRedLight">
              <img src="/icons/phone.svg" alt="phone" />
            </div>
          </Link> 
          

          <LanguageSwitcher
            setPreferredLanguage={setPreferredLanguage}
            preferredLanguage={preferredLanguage}
          />

          {/* Mobile Menu Button */}
          <button className="md:hidden ml-2" onClick={() => setIsOpen(!isOpen)}>
            ☰
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden w-full bg-cN200 mt-2 rounded">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block px-4 py-2 hover:underline"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
