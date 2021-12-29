import * as React from 'react'
import * as styles from './footer.module.css'

const Footer = ({ pageTitle }) => {
  return (
    <div className={styles.footer}>
        <div className={styles.footerCol}>
            <span className={styles.greyText}>Новости – в Инстаграме</span>
            <span>@ekoshkola.ru</span>
        </div>
        <div className={styles.footerCol}>
            <span className={styles.greyText}>Телефон</span>
            <span>+7 (963) 738-19-10</span>
        </div>
    </div>
  )
}

export default Footer