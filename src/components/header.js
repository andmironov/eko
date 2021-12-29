import * as React from 'react'
import * as styles from './header.module.css'

const Header = ({ pageTitle }) => {
  return (
    <div className={styles.header}>
        <a className={styles.logo} href="/">Экошкола</a>
        <span>г. Калининград</span>
    </div>
  )
}

export default Header