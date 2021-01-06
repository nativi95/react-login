import React, {Component} from 'react';


class Formulario extends Component{
    constructor(props){
        super(props);
        this.stat = {
            email: '',
            password:''
        }
    }

    render(){
        return(
<form>
    <input type="email" placeholder="Email"></input>
    <input type="password" placeholder="password"></input>
    <div>
        <input type="submit" value="Iniciar sesion"/>
    </div>
</form>
        );
    }
}

class Login extends Component{
    render(){
        return(
           <div>
               <Formulario></Formulario>
           </div> 
        );
    }
}

export default Login;