import * as React from 'react'
import * as styles from '../components/index.module.css'
import Layout from '../components/layout'

class NotFoundPage extends React.Component {

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
            404
          </h2>
          <p className={styles.subHeader}>Страница не найдена</p>
        
        </div>
    </Layout>
    )
  }
}

export default NotFoundPage