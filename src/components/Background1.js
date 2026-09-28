import { useState } from "react";
import BackgroundVerticalBorder from "./BackgroundVerticalBorder";
import PropTypes from "prop-types";
import styles from "./Background1.module.css";

const Background1 = ({ className = "" }) => {
  const [backgroundVerticalBorderItems] = useState([
    {
      backgroundVerticalBorderBackgroundColor: "#fafafa",
      backgroundVerticalBorderBorderRight: "1px solid #e5e7eb",
      text: "20 лет",
      text1: "на рынке",
      text2: "с 2006 года, Санкт-Петербург",
    },
    {
      backgroundVerticalBorderBackgroundColor: "unset",
      backgroundVerticalBorderBorderRight: "1px solid #e5e7eb",
      text: "15 000+",
      text1: "выполненных заказов",
      text2: "частные и корпоративные",
    },
    {
      backgroundVerticalBorderBackgroundColor: "unset",
      backgroundVerticalBorderBorderRight: "1px solid #e5e7eb",
      text: "100%",
      text1: "кандидаты наук",
      text2: "и специалисты с многолетним стажем",
    },
    {
      backgroundVerticalBorderBackgroundColor: "#fafafa",
      backgroundVerticalBorderBorderRight: "unset",
      text: "±0,05 мм",
      text1: "точность станков",
      text2: "российское производство",
    },
  ]);
  return (
    <section className={[styles.background, className].join(" ")}>
      <div className={styles.container}>
        {backgroundVerticalBorderItems.map((item, index) => (
          <BackgroundVerticalBorder
            key={index}
            backgroundVerticalBorderBackgroundColor={
              item.backgroundVerticalBorderBackgroundColor
            }
            backgroundVerticalBorderBorderRight={
              item.backgroundVerticalBorderBorderRight
            }
            text={item.text}
            text1={item.text1}
            text2={item.text2}
          />
        ))}
      </div>
    </section>
  );
};

Background1.propTypes = {
  className: PropTypes.string,
};

export default Background1;
