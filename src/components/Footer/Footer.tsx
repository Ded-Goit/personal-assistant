"use client";

import Link from "next/link";
import styles from "./Footer.module.css";
import { subscribe } from "@/constant/constant";
import {
  RiLinkedinFill,
  RiTelegramFill,
  RiYoutubeFill,
  RiInstagramFill,
  RiFacebookFill,
} from "react-icons/ri";
import { FiFileText } from "react-icons/fi";
import { GoShieldCheck } from "react-icons/go";
import { FaCookie } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Logo and legal */}
        <div className={styles.linksWrapper}>
          <p className={styles.text}>
            &copy; {new Date().getFullYear()} Personal Assistant |{" "}
            <Link
              href="https://github.com/Ded-Goit"
              className={styles.link}
              target="_blank"
            >
              Creativ Studio 𝔻𝔼𝔻 Production
            </Link>
          </p>

          {/* Legal */}
          <div className={styles.navigation}>
            <p className={styles.subtitle}>Legal</p>
            <nav className={styles.legalNav}>
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 300 300"
                width="0"
                height="0"
              >
                <defs>
                  <path
                    id="circlePath"
                    d="M 150, 150 m -50, 0 a 50,50 0 0,1 100,0 a 50,50 0 0,1 -100,0"
                  />
                </defs>
              </svg>

              {[
                {
                  href: "/terms-and-conditions",
                  label: "Terms",
                  icon: <FiFileText />,
                },
                {
                  href: "/privacy-policy",
                  label: "Privacy",
                  icon: <GoShieldCheck />,
                },
                {
                  href: "/cookies-policy",
                  label: "Cookies",
                  icon: <FaCookie />,
                },
              ].map(({ href, label, icon }) => (
                <Link key={href} href={href} className={styles.navlink}>
                  <span>{label}</span>
                  <span className={styles.icon}>{icon}</span>
                  <svg viewBox="0 0 300 300" aria-hidden="true">
                    <g>
                      <text fill="currentColor">
                        <textPath xlinkHref="#circlePath">{label}</textPath>
                      </text>
                      <text fill="currentColor">
                        <textPath xlinkHref="#circlePath" startOffset="50%">
                          {label}
                        </textPath>
                      </text>
                    </g>
                  </svg>
                </Link>
              ))}
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
    </footer>
  );
}
