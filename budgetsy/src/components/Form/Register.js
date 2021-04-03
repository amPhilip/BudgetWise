import React, { Component} from 'react';
import fire from '../../config/Fire';
import './RegLog.css';

class Register extends Component{

    state = {
        email: '',
        password: '',
        displayName: '',
        fireErrors:''
    }

    //form submission
    register = e => {
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((user) => {
            var currentUser = fire.auth().currentUser;
            currentUser.updateProfile({
                displayName: this.state.displayName
            })
        })
        .catch((error) => {
            this.setState({fireErrors: error.message})
        });
    }

    makeChange= e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    

    render() {

        let errorNotification = this.state.fireErrors ? 
            ( <div className="Error"> {this.state.fireErrors} </div> ) : null;

        return(
            <>

                {errorNotification}

                <form>
                    <input type="text"
                     className="regField"
                     placeholder="Username" 
                    onChange={this.makeChange}
                    value={this.state.displayName}
                    name="displayName"
                    />

                    <input type="text"
                     className="regField"
                    placeholder="Email" 
                    onChange={this.makeChange}
                    value={this.state.email}
                    name="email"
                     />

                    <input type="password"
                    className="regField"
                    placeholder="Password"
                    onChange={this.makeChange}
                    value={this.state.password}
                    name="password" 
                    />

                    <input onClick={this.register} type="submit" className="submitBtn" value="Sign Up" />
                </form>
            </>
        );
    }
}

export default Register;