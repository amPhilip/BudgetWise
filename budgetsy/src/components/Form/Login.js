import React, { Component} from 'react';
import './RegLog.css';

class Login extends Component{

    state = {
        email:'',
        password:'',
        fireErrors:''
    }

    render(){
        return(
            <>
                <form>
                    <input type="text" className="regField" placeholder="Email" />
                    <input type="password" className="regField" placeholder="Password" />
                    <input type="submit" className="submitBtn" value="Log in" />
                </form>
            </>
        );
    }
}

export default Login;