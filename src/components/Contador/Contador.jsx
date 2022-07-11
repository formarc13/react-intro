import React, {Component} from "react";

class Contador extends Component {
    constructor () {
        super()
        this.state = {
            contador: 0,
        }
    };

    decrementar () {
        this.setState({
            contador: this.state.contador - 1
        })
    }

    incrementar () {
        this.setState({
            contador: this.state.contador + 1
        })
    }

    validarCampo(event) {
        if(event.target.value.length > 5){
            alert("Muy bien!!!")
        }else {
            alert("Ingresa mas de 5 caracteres")
        }
    }

    /* CICLO DE VIDA DEL COMPONENTE */
    /* Montaje */
    componentDidMount () {
        console.log("El componente contador está montado")
    }

    /* Actualización */
    componentDidUpdate() {
        console.log("El componente se actualizó")
        if(this.state.contador === 5) {
            alert("Llegaste a 5!!!")
        }
    }

    /* Desmontaje */
    componentWillUnmount() {
        console.log("El componente se desmontó")
    }
    
    render () {
        console.log(this.state)
        return (
            <div>
                <h1>Contador</h1>
                <input type="text" onBlur={(event) => this.validarCampo(event)} />
                <p>El valor del contador es: {this.state.contador}</p>
                <button onClick={() => this.decrementar()}>Decrementar</button>
                <button onClick={() => this.incrementar()}>Incrementar</button>
            </div>
        )
    }
}

export default Contador;