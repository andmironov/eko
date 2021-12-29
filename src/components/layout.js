import * as React from 'react'
import * as styles from './layout.module.css'
import Header from '../components/header'
import Footer from '../components/footer'
import FloatingImages from '../components/floatingImages'

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={styles.layout}>
      <FloatingImages/>
      <div className={styles.layoutInner}>
        <Header/>
        {children}
        <Footer/>
      </div>
    </div>
  )
}

export default Layout