import * as React from 'react'
import * as styles from '../components/signup.module.css'
import Layout from '../components/layout'

class Signup extends React.Component {

    constructor(props) {
        super(props)
    }
    
    state = {
        name: "",
        age: "",
        filial: "",
        phone: "",
    }

    handleInputChange = event => {
        const target = event.target
        const value = target.value
        const name = target.name
        this.setState({
            [name]: value,
        })
        
    }

    handleSubmit = event => {
        event.preventDefault()
        //alert(`Welcome ${this.state.name}!`)
    }
  
    render() {
        return (
            <Layout>
                
                <div className={styles.formWrapper}>
                   
                    <div className={styles.formHeader}>
                        <h2>Записаться</h2>
                        <p>Пробное занятие – бесплатно. Мы свяжемся с Вами в&nbsp;ближайшее время</p>
                    </div>

                    <form onSubmit={this.handleSubmit}>
                        
                        <div className={styles.formRow}>
                            <div className={styles.formElement}>
                                <label className={styles.formLabel}>Филиал Экошколы</label>
                                
                                <div className={styles.formField}>
                                    <div className={styles.formSwitchWrap}>
                                        <input 
                                            type="radio" 
                                            name="filial" 
                                            value="locationPark"
                                            onChange={this.handleInputChange}
                                            id="locationPark"
                                            defaultChecked
                                        />
                                        <label for="locationPark">Парк «Юность»</label>

                                        <input 
                                            type="radio" 
                                            name="filial" 
                                            value="locationGuryevsk"
                                            onChange={this.handleInputChange}
                                            id="locationGuryevsk"
                                        />
                                        <label for="locationGuryevsk">г. Гурьевск</label>
                                    </div>
                                </div>
                            </div>
                            
                            <div className={`${styles.formElement} ${styles.shortFormElement}`}>
                                <label for="age" className={styles.formLabel}>Возраст ребенка</label>
                                <div className={styles.formField}>
                                    <input
                                        type="text"
                                        name="age"
                                        id="age"
                                        value={this.state.firstName}
                                        onChange={this.handleInputChange}
                                    />
                                </div>
                            </div>
                        </div>
                        
                        <div className={styles.formRow}>
                            <div className={`${styles.formElement} ${styles.shortFormElement}`}>
                                <label for="name" className={styles.formLabel}>Ваше имя</label>
                                <div className={styles.formField}>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        value={this.state.name}
                                        onChange={this.handleInputChange}
                                    />
                                </div>
                            </div>

                            <div className={styles.formElement}>
                                <label for="phone" className={styles.formLabel}>Ваш номер телефона</label>
                                <div className={styles.formField}>
                                    <input
                                        type="phone"
                                        name="phone"
                                        id="phone"
                                        value={this.state.phone}
                                        onChange={this.handleInputChange}
                                    />
                                </div>
                            </div>
                        </div>
                        
                        <div className={styles.formFooter}>
                            <a className={styles.formBack}href="/">Назад</a>
                            <button className={styles.formSubmit} type="submit">Отправить</button>
                        </div>
                    </form>
                </div>
            </Layout>
        )
    }
}

export default Signup