'use client';

import Link from 'next/link';
import styles from './Footer.module.css';
import { subscribe } from '@/constant/constant';
import {
  RiLinkedinFill,
  RiTelegramFill,
  RiYoutubeFill,
  RiInstagramFill,
  RiFacebookFill,
} from 'react-icons/ri';
import Logo from '@/Logo/Logoded';

export default function Footer() {  

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>      

        {/* Logo and legal */}
        <div className={styles.linksWrapper}>

          {/* Logo */}
          <Logo width={64} height={32} />        

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

          {/* Social networks */}
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

      {/* footer */}
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