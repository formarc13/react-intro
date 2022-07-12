import React, {Component} from "react";
import styles from "./carrito.module.css";
import CarritoItem from "./components/CarritoItem";

class Carrito extends Component {
    constructor () {
        super()
        this.state = {
            productos: [],
            carrito: [],
        }
    }

    /* Al montar el componente hacemos pedido a la API */
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(users => {
            let usuariosModificados = users.map(user => {
                return {
                    id: user.id,
                    name: user.name,
                    cantidad: 0,
                    precio: 100
                }
            })
            this.setState({
                productos: usuariosModificados
            })
        })
        .catch(error => console.log(error))
    }
    
    
    incrementar (id) {
        let productosModificados = this.state.productos.map(prod => {
            if(prod.id === id){
                prod.cantidad = prod.cantidad + 1;
            }
            return prod;
        });
        this.setState({
            productos: productosModificados,
        })
    }

    decrementar (id) {
        let productosModificados = this.state.productos.map(prod => {
            if(prod.id === id){
                prod.cantidad = prod.cantidad > 0 ? prod.cantidad - 1 : 0;
            }
            return prod;
        });
        this.setState({
            productos: productosModificados,
        })
    }

    
    agregarAlCarrito (id) {
        let productoEnCarrito = this.state.carrito.find(prod => prod.id === id);
        let producto = this.state.productos.find(prod => prod.id === id);
        
        if(productoEnCarrito === undefined){
            producto = {
                ...producto,
                cantidadEnCarrito: producto.cantidad
            }
            this.setState({
                carrito: [...this.state.carrito, producto]
            })
        }else{
            productoEnCarrito.cantidadEnCarrito = productoEnCarrito.cantidadEnCarrito + producto.cantidad
            this.setState({
                carrito: [...this.state.carrito]
            })
        }

        let productosModificados = this.state.productos.map(prod => {
            if(prod.id === id){
                prod.cantidad = 0;
            }
            return prod;
        });
        this.setState({
            productos: productosModificados,
        })
    }

    quitarDelCarrito (id) {
        let carritoModificado = this.state.carrito.filter((prod) => prod.id !== id);
        this.setState({
            carrito: carritoModificado
        })
    }

    vaciarCarrito () {
        this.setState({
            carrito: []
        })
    }

    componentDidUpdate () {
        console.log("El estado cambio")
    }
    
    render () {
        return (
            <div className={styles.carritoContainer}>
                <h1>Carrito de compras</h1>
                <ul>
                    {
                        this.state.productos.map((item) => 
                        (
                            <CarritoItem 
                                key = {item.id}
                                id = {item.id}
                                item = {item.name}
                                precio = {item.precio}
                                cantidad = {item.cantidad}
                                clase = {this}
                            />
                        ))
                    }
                </ul>
                <section>
                    <h2>Agregados al carrito</h2>
                    <button onClick={() => this.vaciarCarrito()}>VACIAR CARRITO</button>
                    <ul>
                        {
                            this.state.carrito.map(prod => (
                                <li>{prod.name} x {prod.cantidadEnCarrito} <button onClick={() => this.quitarDelCarrito(prod.id)}>Quitar del carrito</button></li>
                            ))
                        }
                    </ul>
                </section>
            </div>
        )
    }
}


export default Carrito;