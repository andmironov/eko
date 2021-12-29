import * as React from 'react'
import * as styles from '../components/index.module.css'
import Layout from '../components/layout'

class IndexPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {show: false};
  }

  componentDidMount () {
    this.timeoutId = setTimeout(function () {
        this.setState({show: true});
    }.bind(this), 200);
  }

  componentWillUnmount () {
    if (this.timeoutId) {
        clearTimeout(this.timeoutId);
    }
  }
  render() {
    let shown = this.state.show ? "shown" : "";
    return (
      <Layout>
      <div className={`${styles.introWrap} ${shown}`}>
        <h2 className={styles.pageTitle}>
          Развивающий центр для детей&nbsp;3-7 лет. <br/>Подготовка к&nbsp;школе, творческие занятия и&nbsp;забота об&nbsp;окружающей среде
        </h2>
        <div className={styles.address}>Парк «Юность» <span className={styles.greyText}>Азовская, 4</span></div>
        <div className={styles.address}>г. Гурьевск <span className={styles.greyText}>Чайковского, 18</span></div>
        <a className={styles.button} href="#">Записаться</a>
      </div>
    </Layout>
    )
  }
}

export default IndexPage