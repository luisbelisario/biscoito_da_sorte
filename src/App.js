import React, { Component } from 'react'
import biscoito from './assets/luck.png'
import './styles.css'

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            frase_escolhida: ''
        }

        this.quebrarBiscoito = this.quebrarBiscoito.bind(this)

        this.frases = ['A vida trará coisas boas se tiveres paciência.',
                       'Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.',
                       'O bom-senso vai mais longe do que muito conhecimento.',
                       'Lamentar aquilo que não temos é desperdiçar aquilo que já possuímos.',
                       'Amizade e Amor são coisas que podem virar uma só num piscar de olhos.',
                       'Faça pequenas coisas agora e maiores coisas lhe serão confiadas cada dia.',
                       'A paciência na adversidade é o sinal de um coração sensível.',
                       'O futuro pertence àqueles que acreditam na beleza de seus sonhos.',
                       'O verdadeiro homem mede a sua força, quando se defronta com o obstáculo.',
                       'A adversidade desperta em nós capacidades que, em circunstâncias favoráveis, teriam ficado adormecidas.',
                       'Inspiração vem dos outros. Motivação vem de dentro de nós.']
    }

    quebrarBiscoito() {
        let state = this.state
        let num = Math.floor(Math.random() * this.frases.length)
        state.frase_escolhida = '"' + this.frases[num] + '"'
        this.setState(state)
    }

    render() {
      return(
        <div className="container">
            <img src={biscoito} alt="" className="img"/>
            <Botao acaoBtn={this.quebrarBiscoito}/>
            <h3 className="textoFrase">{this.state.frase_escolhida}</h3>
        </div>
      )
    }
}

class Botao extends Component {

    constructor(props) {
        super(props)
        this.state = {
            acao: 'Abrir biscoito'
        }
    }

    render() {
      return(
        <div>
            <button className="Btn" onClick={this.props.acaoBtn}>{this.state.acao}</button>
        </div>
      )
    }
}


export default App;
