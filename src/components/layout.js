import * as React from 'react'
import { Helmet } from "react-helmet"
import * as styles from './layout.module.css'
import Header from '../components/header'
import Footer from '../components/footer'
import FloatingImages from '../components/floatingImages'

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={styles.layout}>
  
      <Helmet>
        <meta charSet="utf-8" />
        <title>Экошкола</title>
        <meta name="description" content="Развивающий центр для детей 3-7 лет. Калининград." />
        <meta name="google-site-verification" content="vmQvNcLppGzFBzEFnG6IGtHhSm5Y34zQYuc7bLVksPI" />
      </Helmet>

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