import React, { Component} from 'react';
import './RegLog.css';

class Register extends Component{

    state = {
        email:'',
        password:'',
        displayName:'',
        fireErrors:''
    }

    render(){
        return(
            <>
                <form>
                    <input type="text" className="regField" placeholder="Username" name="displayName"/>
                    <input type="text" className="regField" placeholder="Email" name="email" />
                    <input type="password" className="regField" placeholder="Password" name="password" />
                    <input type="submit" className="submitBtn" value="Sign Up" />
                </form>
            </>
        );
    }
}

export default Register;