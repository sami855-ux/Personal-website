import "../index.css"
import styles from "./CardOne.module.css"
import PropTypes from "prop-types"

export default function CardOne({ heading, desc }) {
  return (
    <div className={styles.card}>
      <a className={styles.card1}>
        <p className={styles.heading}>{heading}</p>
        <p className={styles.small}>{desc}</p>
        <div className={styles["go-corner"]}></div>
      </a>
    </div>
  )
}

CardOne.propTypes = {
  heading: PropTypes.string,
  desc: PropTypes.string,
}
