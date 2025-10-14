"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiMenu, HiX } from "react-icons/hi";
import styles from "./Header.module.css";
import Logo from "@/Logo/Logoded";
import { navLinks } from "@/constant/constant";
import ThemeSwitcher from "@/components/ThemeSwitcher/ThemeSwitcher";

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Logo width={140} height={50} />

        {/* Кнопка меню для мобільних */}
        <button
          className={styles.menuButton}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>

        {/* Навігація + перемикач теми */}
        <nav
          className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}
          onClick={() => setMenuOpen(false)}
        >
          <ul className={styles.navList}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`${styles.navLink} ${
                    pathname === link.href ? styles.active : ""
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Theme Switcher */}
          <div className={styles.themeWrapper}>
            <ThemeSwitcher />
          </div>
        </nav>
      </div>
    </header>
  );
}