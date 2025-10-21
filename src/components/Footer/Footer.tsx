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
  const legalItems = [
    { href: "/terms-and-conditions", label: "Terms", icon: <FiFileText /> },
    { href: "/privacy-policy", label: "Privacy", icon: <GoShieldCheck /> },
    { href: "/cookies-policy", label: "Cookies", icon: <FaCookie /> },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.linksWrapper}>
          <p className={styles.text}>
            &copy; {new Date().getFullYear()} Personal Assistant |{" "}
            <Link href="./" className={styles.link}>
              Creativ Studio 𝔻𝔼𝔻 Production
            </Link>
          </p>

          <div className={styles.navigation}>
            <p className={styles.subtitle}>Legal</p>

            <nav className={styles.legalNav}>
              {legalItems.map(({ href, label, icon }) => {
                // make a unique id for path (to avoid collisions)
                const pathId = `circlePath-${label.replace(/\s+/g, "-").toLowerCase()}`;
                return (
                  <Link key={href} href={href} className={styles.navlink}>
                    {/* label — visible by default */}
                    <span className={styles.label}>{label}</span>

                    {/* icon — hidden by default */}
                    <span className={styles.icon} aria-hidden="true">
                      {icon}
                    </span>

                    {/* svg with path defined inside for textPath */}
                    <svg
                      className={styles.rotSvg}
                      viewBox="0 0 100 100"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <defs>
                        <path
                          id={pathId}
                          d="M50,50 m-32,0 a32,32 0 1,1 64,0 a32,32 0 1,1 -64,0"
                        />
                      </defs>

                      <g>
                        <text
                          className={styles.circleText}
                          textLength="200%"
                          lengthAdjust="spacingAndGlyphs"
                        >
                          <textPath href={`#${pathId}`} startOffset="0%">
                            {` ${label} • ${label} • ${label} • ${label} • `}
                          </textPath>
                        </text>
                      </g>
                    </svg>
                  </Link>
                );
              })}
            </nav>
          </div>

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
