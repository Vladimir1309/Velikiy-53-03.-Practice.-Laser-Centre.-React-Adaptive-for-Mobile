import { useState } from "react";
import BackgroundBorderShadow from "./BackgroundBorderShadow";
import PropTypes from "prop-types";
import styles from "./FrameComponent.module.css";

const FrameComponent = ({ className = "" }) => {
  const [backgroundBorderShadowItems] = useState([
    {
      backgroundBorderShadowGridColumn: "1",
      backgroundBorderShadowGridRow: "1",
      prop: "./Примеры работ. Гравировка на металле.png",
      prop1: "Гравировка",
      prop2: "Гравировка на металле",
    },
    {
      backgroundBorderShadowGridColumn: "2",
      backgroundBorderShadowGridRow: "1",
      prop: "./Примеры работ. Гравировка деревянных табличек.png",
      prop1: "Гравировка",
      prop2: "Гравировка деревянных табличек",
    },
    {
      backgroundBorderShadowGridColumn: "3",
      backgroundBorderShadowGridRow: "1",
      prop: "./Примеры работ. Резка акрила.png",
      prop1: "Резка",
      prop2: "Резка акрила",
    },
    {
      backgroundBorderShadowGridColumn: "1",
      backgroundBorderShadowGridRow: "2",
      prop: "./Примеры работ. Гравировка корпоративных бейджей.png",
      prop1: "Гравировка",
      prop2: "Гравировка корпоративных бейджей",
    },
    {
      backgroundBorderShadowGridColumn: "2",
      backgroundBorderShadowGridRow: "2",
      prop: "./Примеры работ. Лазерная резка металла.png",
      prop1: "Резка",
      prop2: "Лазерная резка металла",
    },
    {
      backgroundBorderShadowGridColumn: "3",
      backgroundBorderShadowGridRow: "2",
      prop: "./Примеры работ. Гравировка ювелирных изделий.png",
      prop1: "Гравировка",
      prop2: "Гравировка ювелирных изделий",
    },
  ]);
  return (
    <section className={[styles.containerWrapper, className].join(" ")}>
      <div className={styles.container}>
        <div className={styles.container2}>
          <div className={styles.container3}>
            <h2 className={styles.heading2}>Примеры работ</h2>
            <div className={styles.background} />
          </div>
          <a href="#callback" className={styles.button}>
            <div className={styles.text}>Заказать похожую работу</div>
          </a>
        </div>
        <div className={styles.container4}>
          {backgroundBorderShadowItems.map((item, index) => (
            <BackgroundBorderShadow
              key={index}
              backgroundBorderShadowGridColumn={
                item.backgroundBorderShadowGridColumn
              }
              backgroundBorderShadowGridRow={item.backgroundBorderShadowGridRow}
              prop={item.prop}
              prop1={item.prop1}
              prop2={item.prop2}
            />
          ))}
        </div>
        <div className={styles.container5}>
          <a href="#callback" className={styles.button2}>
            <div className={styles.text}>Хочу такое же — заказать</div>
          </a>
        </div>
      </div>
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
