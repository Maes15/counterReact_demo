import React, {Component} from "react";
import './numero.css';

//function Numero(props){
//    <div>{props.num}</div>;
//};
class Numero extends Component{

    render(){
        return <div className="digito">{this.props.num}</div>;
    }
}

export default Numero;