import React, { Component} from 'react';
import './Main.css';
import Login from './Form/Login'; 
import Register from './Form/Register';

export default class Main extends Component{

    state = {
        user:1, //if it's one, the user has not loggged in yet
        loading: true, // not getting response from firebase
        formSwap:false 
    }

    //switch to register form after clicking create account
    formSwap = (action)=>{
        console.log(action);
        this.setState({
            formSwap: action ==='register' ? true: false
        }); 
    }

    render(){

        //switching the forms
        const form = !this.state.formSwap ? <Login/>: <Register/>;

        return(
            <login>
               <div className ="mainBlock">
                    {form}
                    {!this.state.formSwap ?
                        (<span className="reg">
                            Not Registered? <button 
                            onClick={() =>this.formSwap(!this.state.formSwap ? 'register': 'login')} 
                            className="regbtn">Create an Account</button>
                        </span>):(
                            <span className="reg">
                            Have an Account? <button 
                            onClick={() =>this.formSwap(!this.state.formSwap ? 'register': 'login')} 
                            className="regbtn">Log In</button>
                        </span>)

                    }
               </div>
            </login>
        );
    }

}