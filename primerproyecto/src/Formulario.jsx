import React, {Component} from "react"; //siempre poner componet= componente
class Formulario extends Component { // extends es para heredar
    constructor(props){
        
        super(props);
        this.state={
            nombre:"Natalia" 
        };
        this.cambiarNombre=this.cambiarNombre.bind(this);//esta linea es importante y obligatoria
    }
    cambiarNombre(e){
        this.setState({
            nombre:e.target.value
        });

    }
    componentDidMount(){
        console.log(this.state.nombre)
    }
    componentDidUpdate(){
        console.log(this.state.nombre)
    }
    render(){
            return(
            <div>
                <h1>Formulario</h1>
                <form>
                    <label>nombre:</label>
                    <input type="text" onChange={this.cambiarNombre} /><br></br>
                    <input type="submit" value="Enviar"/>
                </form>
            <div>

            <h2>{this.state.nombre}</h2>

            </div>
            
            </div>
            )
    }
}

export default Formulario;