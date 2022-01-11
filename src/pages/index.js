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

  handleClick = event => {
    this.setState({show: true});
    event.preventDefault()
  }

  render() {
    let shown = this.state.show ? "shown" : "";
    return (
      <Layout>
        <div className={`${styles.introWrap} ${shown}`}>
          <h2 className={styles.pageTitle}>
            Развивающий центр для детей&nbsp;<nobr>3-7 лет.</nobr> Подготовка к&nbsp;школе, творческие занятия и&nbsp;забота об&nbsp;окружающей среде
          </h2>
          <p  className={styles.subHeader}>У нас гибкий график занятий, отличные локации, и&nbsp;компетентные преподаватели. Пробное занятие – бесплатно.</p>
          <a onClick={this.handleClick} className={styles.button} href="#">Записаться</a>
        </div>
      </Layout>
    )
  }
}

export default IndexPage