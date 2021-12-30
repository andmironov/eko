import * as React from 'react'
import { TransitionState } from "gatsby-plugin-transition-link"
import * as styles from './floating-images.module.css'

class FloatingImages extends React.Component {

  constructor(props) {
    super(props)
    this.state = { imagesState: props.imagesState }
  }

  componentDidMount () {
    const pathname = window.location.pathname
    
    if(pathname == "/signup") {
      this.setState({imagesState: "sign-up"})
    } else {
      this.timeoutId = setTimeout(function () {
        this.setState({imagesState: "shown"})
      }.bind(this), 1200)
    }
  }

  componentWillUnmount () {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId)
    }
  }
  
  render() {
    let shown = this.state.imagesState
    
    return (
      <div className={`${styles.floatingImages} ${shown}`}>
        <div className={`${styles.boy} ${shown}`}/>
        <div className={`${styles.star} ${shown}`} />
        <div className={`${styles.net} ${shown}`} />
        <div className={`${styles.d} ${shown}`} />
        <div className={`${styles.five} ${shown}`} />
        <div className={`${styles.punk} ${shown}`} />
        <div className={`${styles.scale} ${shown}`} />
       
        <div className={`${styles.girlWrap} ${shown}`}>
            <div className={styles.leftCurl} />
            <div className={styles.rightCurl} />
            <div className={styles.girl} />
        </div>
    </div>
    )
  }
}

export default FloatingImages