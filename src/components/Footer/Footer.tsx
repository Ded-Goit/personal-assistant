'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Footer.module.css';
import { navLinks, subscribe } from '@/constant/constant';
import {
  RiLinkedinFill,
  RiTelegramFill,
  RiYoutubeFill,
  RiInstagramFill,
  RiFacebookFill,
} from 'react-icons/ri';
import Logo from '@/Logo/Logoded';

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Логотип */}
        <div className={styles.logoWrapper}>
          <Logo width={160} height={56} />
        </div>

        {/* Навігація та легал */}
        <div className={styles.linksWrapper}>
          {/* Навігація */}
          <div className={styles.navigation}>
            <p className={styles.subtitle}>Navigation</p>
            <nav>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={pathname === link.href ? 'page' : undefined}
                  className={styles.navlink}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Legal */}
          <div className={styles.navigation}>
            <p className={styles.subtitle}>Legal</p>
            <nav className={styles.legalNav}>
              <Link href="/terms-and-conditions" className={styles.navlink}>
                Terms
              </Link>
              <Link href="/privacy-policy" className={styles.navlink}>
                Privacy Policy
              </Link>
              <Link href="/cookies-policy" className={styles.navlink}>
                Cookies
              </Link>
            </nav>
          </div>

          {/* Соцмережі */}
          <div className={styles.navigation}>
            <p className={styles.subtitle}>Subscribe</p>
            <div className={styles.socials}>
              {subscribe.linkedin && (
                <a
                  href={subscribe.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialButton}
                >
                  <RiLinkedinFill />
                </a>
              )}
              {subscribe.telegram && (
                <a
                  href={subscribe.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialButton}
                >
                  <RiTelegramFill />
                </a>
              )}
              {subscribe.instagram && (
                <a
                  href={subscribe.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialButton}
                >
                  <RiInstagramFill />
                </a>
              )}
              {subscribe.facebook && (
                <a
                  href={subscribe.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialButton}
                >
                  <RiFacebookFill />
                </a>
              )}
              {subscribe.youtube && (
                <a
                  href={subscribe.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialButton}
                >
                  <RiYoutubeFill />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Підвал */}
      <p className={styles.text}>
        &copy; {new Date().getFullYear()} Personal Assistant |{' '}
        <Link
          href="https://github.com/Ded-Goit"
          className={styles.link}
          target="_blank"
        >
          Creativ Studio DED Production
        </Link>
      </p>
    </footer>
  );
}