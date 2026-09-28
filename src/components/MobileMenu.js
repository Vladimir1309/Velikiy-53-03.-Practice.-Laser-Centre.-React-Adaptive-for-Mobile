import { useEffect, useRef, useState } from "react";
import styles from "./MobileMenu.module.css";

const NAV_LINKS = [
  { label: "Услуги", href: "#services" },
  { label: "О нас", href: "#about" },
  { label: "Контакты", href: "#contacts" },
];

const PHONE = "(812) 240-5060";
const PHONE_HREF = "tel:+78122405060";

/**
 * Полноэкранное мобильное меню.
 * В макете Figma была только иконка "☰", поэтому поведение реализовано здесь:
 * открытие по клику, закрытие по клику вне, по Esc и после перехода по ссылке.
 */
const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef(null);
  const toggleRef = useRef(null);

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        toggleRef.current?.focus();
      }
    };

    // Блокируем прокрутку страницы под полноэкранным меню.
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div className={styles.root} ref={rootRef}>
      <button
        type="button"
        ref={toggleRef}
        className={styles.toggle}
        aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
        aria-expanded={isOpen}
        aria-controls="mobile-menu-panel"
        onClick={() => setIsOpen((open) => !open)}
      >
        {isOpen ? "✕" : "☰"}
      </button>

      {isOpen && (
        <div
          id="mobile-menu-panel"
          className={styles.panel}
          role="dialog"
          aria-modal="true"
          aria-label="Основная навигация"
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              setIsOpen(false);
            }
          }}
        >
          <button
            type="button"
            className={styles.close}
            aria-label="Закрыть меню"
            onClick={() => {
              setIsOpen(false);
              toggleRef.current?.focus();
            }}
          >
            ✕
          </button>
          <nav className={styles.nav}>
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                className={styles.navLink}
                href={link.href}
                onClick={handleLinkClick}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className={styles.contacts}>
            <a className={styles.phone} href={PHONE_HREF}>
              {PHONE}
            </a>
            <a
              className={styles.callback}
              href="#callback"
              onClick={handleLinkClick}
            >
              Заказать звонок
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;