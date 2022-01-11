import * as React from 'react'
import * as styles from './footer.module.css'

const Footer = ({ pageTitle }) => {
  return (
    <div className={styles.footer}>
        <div className={styles.footerRow}>
          <div className={styles.footerCol}>
              <span className={styles.greyText}>Инстаграм</span>
              <a href="https://www.instagram.com/ekoshkola.ru/">@ekoshkola.ru</a>
          </div>
          <div className={styles.footerCol}>
              <span className={styles.greyText}>Телефон</span>
              <a href="tel:+7 (963) 738-19-10">+7 (963) 738-19-10</a>
          </div>
        </div>
        
        <div className={styles.footerRow}>
          <div className={styles.footerCol}>
              <span className={styles.greyText}>Азовская, 4</span>
              <span>Парк «Юность»</span>
          </div>
          <div className={styles.footerCol}>
              <span className={styles.greyText}>Советская, 3</span>
              <span>г. Гурьевск</span>
          </div>
        </div>
    </div>
  )
}

export default Footer