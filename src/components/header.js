import * as React from 'react'
import { Link } from "gatsby"
import * as styles from './header.module.css'

const Header = ({ pageTitle }) => {
  return (
    <div className={styles.header}>
        <Link className={styles.logo} to="/">Записаться</Link>
        <span>г. Калининград</span>
    </div>
  )
}

export default Header