import * as React from 'react'
import * as styles from '../components/signup.module.css'
import Layout from '../components/layout'

class Signup extends React.Component {
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
        alert(`Welcome ${this.state.name}!`)
    }
  
    render() {
        return (
            <Layout>
                <h2>Записаться</h2>
                <p>Занятия проходят 2 раза в неделю по 3 часа или 3 раза в неделю по 2 часа; первая или вторая половина дня. Первое занятие – бесплатно.</p>
                <form onSubmit={this.handleSubmit}>
                    
                    <label>Филиал Экошколы</label>
                    <input 
                        type="radio" 
                        name="filial" 
                        value="1"
                        onChange={this.handleInputChange}
                        id="tab1" 
                        checked 
                    />
	                <label for="tab1">Парк «Юность»</label>

	                <input 
                        type="radio" 
                        name="filial" 
                        value="2"
                        onChange={this.handleInputChange}
                        id="tab2"
                    />
	                <label for="tab2">г. Гурьевск</label>
                    
                    <label>
                    Возраст ребенка
                    <input
                        type="text"
                        name="age"
                        value={this.state.firstName}
                        onChange={this.handleInputChange}
                    />
                    </label>
                    
                    <label>
                    Ваше имя
                    <input
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleInputChange}
                    />
                    </label>

                    <label>
                    Ваш номер телефона
                    <input
                        type="phone"
                        name="phone"
                        value={this.state.phone}
                        onChange={this.handleInputChange}
                    />
                    </label>

                    <button type="submit">Submit</button>
                </form>
            </Layout>
        )
    }
}

export default Signup