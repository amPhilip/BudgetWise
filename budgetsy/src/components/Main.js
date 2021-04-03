import React, { Component} from 'react';
import './Main.css';
import fire from '../config/Fire';
import Login from './Form/Login'; 
import Register from './Form/Register';
import Tracker from './Budget/Tracker';

export default class Main extends Component{

    state = {
        user: 1, //if it's one, the user has not loggged in yet
        loading: true, // not getting response from firebase
        formSwap:false 
    }

    componentDidMount(){
        this.authListener();
      }
  
      authListener(){
        fire.auth().onAuthStateChanged((user) => {
          if(user){
            this.setState({user});
          }else{
            this.setState({user:null});
          }
        });
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
            <>
                {!this.state.user ? (

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
                                </span>
                                )

                            }
                    </div>) : (<Tracker/>)
                }
            </>

        );
    }

}