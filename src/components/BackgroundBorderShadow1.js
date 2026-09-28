import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./BackgroundBorderShadow1.module.css";

const BackgroundBorderShadow1 = ({
  className = "",
  backgroundBorderShadowGridColumn,
  backgroundBorderShadowGridRow,
  backgroundBackgroundColor,
  prop,
  prop1,
  listPadding,
  listLabel,
  secondLabel,
  itemCard,
  itemCard1,
  itemPadding,
  buttonPadding,
  itemCard2,
  itemPadding1,
  buttonPadding1,
  itemCard3,
}) => {
  const backgroundBorderShadowStyle = useMemo(() => {
    return {
      gridColumn: backgroundBorderShadowGridColumn,
      gridRow: backgroundBorderShadowGridRow,
    };
  }, [backgroundBorderShadowGridColumn, backgroundBorderShadowGridRow]);

  const backgroundStyle = useMemo(() => {
    return {
      backgroundColor: backgroundBackgroundColor,
    };
  }, [backgroundBackgroundColor]);

  const listStyle = useMemo(() => {
    return {
      padding: listPadding,
    };
  }, [listPadding]);

  const itemStyle = useMemo(() => {
    return {
      padding: itemPadding,
    };
  }, [itemPadding]);

  const buttonStyle = useMemo(() => {
    return {
      padding: buttonPadding,
    };
  }, [buttonPadding]);

  const item1Style = useMemo(() => {
    return {
      padding: itemPadding1,
    };
  }, [itemPadding1]);

  const button1Style = useMemo(() => {
    return {
      padding: buttonPadding1,
    };
  }, [buttonPadding1]);

  return (
    <section
      className={[styles.backgroundbordershadow, className].join(" ")}
      style={backgroundBorderShadowStyle}
    >
      <div className={styles.background} style={backgroundStyle}>
        <img className={styles.icon} loading="lazy" alt="" src={prop} />
        <div className={styles.overlay} />
      </div>
      <div className={styles.container}>
        <div className={styles.heading3margin}>
          <div className={styles.heading3}>
            <b className={styles.b}>{prop1}</b>
          </div>
        </div>
        <div className={styles.listmargin}>
          <div className={styles.list} style={listStyle}>
            <div className={styles.item}>
              <a href="#callback" className={styles.button}>
                <div className={styles.listLabel}>{listLabel}</div>
              </a>
            </div>
            <div className={styles.item}>
              <a href="#callback" className={styles.button}>
                <div className={styles.listLabel}>{secondLabel}</div>
              </a>
            </div>
            <div className={styles.item}>
              <a href="#callback" className={styles.button}>
                <div className={styles.listLabel}>{itemCard}</div>
              </a>
            </div>
            <div className={styles.item}>
              <a href="#callback" className={styles.button}>
                <div className={styles.listLabel}>{itemCard1}</div>
              </a>
            </div>
            <div className={styles.item} style={itemStyle}>
              <a href="#callback" className={styles.button} style={buttonStyle}>
                <div className={styles.listLabel}>{itemCard2}</div>
              </a>
            </div>
            <div className={styles.item6} style={item1Style}>
              <a href="#callback" className={styles.button6} style={button1Style}>
                <div className={styles.listLabel}>{itemCard3}</div>
              </a>
            </div>
          </div>
        </div>
        <a href="#callback" className={styles.button7}>
          <b className={styles.itemCard5}>ЗАКАЗАТЬ УСЛУГУ</b>
        </a>
      </div>
    </section>
  );
};

BackgroundBorderShadow1.propTypes = {
  className: PropTypes.string,
  prop: PropTypes.string,
  prop1: PropTypes.string,
  listLabel: PropTypes.string,
  secondLabel: PropTypes.string,
  itemCard: PropTypes.string,
  itemCard1: PropTypes.string,
  itemCard2: PropTypes.string,
  itemCard3: PropTypes.string,

  /** Style props */
  backgroundBorderShadowGridColumn: PropTypes.string,
  backgroundBorderShadowGridRow: PropTypes.string,
  backgroundBackgroundColor: PropTypes.string,
  listPadding: PropTypes.string,
  itemPadding: PropTypes.string,
  buttonPadding: PropTypes.string,
  itemPadding1: PropTypes.string,
  buttonPadding1: PropTypes.string,
};

export default BackgroundBorderShadow1;
