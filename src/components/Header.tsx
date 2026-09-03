"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";

const navigation = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Products", href: "/products" },
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Insights", href: "/insights" },
];

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 40);

      if (currentScrollY <= 40) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header
        className={`${styles.header} ${
          isVisible ? styles.visible : styles.hidden
        } ${isScrolled ? styles.scrolled : ""} ${
          menuOpen ? styles.menuHeader : ""
        }`}
      >
        <div className={styles.inner}>
          <Link
            href="/"
            className={styles.brand}
            aria-label="King Code Studio home"
            onClick={closeMenu}
          >
            <Image
              src="/brand/Logo_Round.png"
              alt="King Code Studio"
              width={42}
              height={42}
              priority
              className={styles.logo}
            />

            <span className={styles.brandName}>
              KING CODE STUDIO
            </span>
          </Link>

          <nav
            className={styles.navigation}
            aria-label="Main navigation"
          >
            {navigation.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/contact"
            className={styles.cta}
            onClick={closeMenu}
          >
            <span>Start a project</span>
            <span aria-hidden="true">↗</span>
          </Link>

          <button
            type="button"
            className={`${styles.menuButton} ${
              menuOpen ? styles.menuButtonOpen : ""
            }`}
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      <div
        className={`${styles.mobileMenu} ${
          menuOpen ? styles.mobileMenuOpen : ""
        }`}
      >
        <div className={styles.mobileMenuInner}>
          <div>
            <p className={styles.mobileEyebrow}>
              KING CODE STUDIO
            </p>

            <nav
              className={styles.mobileNavigation}
              aria-label="Mobile navigation"
            >
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                >
                  <span>{item.label}</span>
                  <span aria-hidden="true">↗</span>
                </Link>
              ))}
            </nav>
          </div>

          <div className={styles.mobileBottom}>
            <p>
              Technology with purpose.
            </p>

            <Link
              href="/contact"
              className={styles.mobileCta}
              onClick={closeMenu}
            >
              <span>Start a project</span>
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}