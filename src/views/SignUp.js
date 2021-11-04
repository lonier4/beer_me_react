import React from 'react';
import axios from 'axios';
import "../SignUp.css"

const SignUp = () => {

    const signUpOnSubmit = async (event) => {
        event.preventDefault();
            let response = await fetch('http://127.0.0.1:5000/signup', {
                method: 'POST',
                headers: {'Content-Type': "application/json"},
                body: JSON.stringify({
                    username: event.target.username.value,
                    email: event.target.email.value,
                    password: event.target.password.value,
                    confirmPassword: event.target.confirmPassword.value
                })
            })
            let data = await response.json();
            console.log(data)
          }
        //   axios.post('/user', {
        //     firstName: 'Fred',
        //     lastName: 'Flintstone'
        //   })
        //   .then(function (response) {
        //     console.log(response);
        //   })
        //   .catch(function (error) {
        //     console.log(error);
        //   });

    return (
        <div className="login">
            <form className="form" onSubmit={ (event) => signUpOnSubmit(event) }>
                <h2>Register</h2>
                <div className="input-group">
                    <input name="username"  type="text" id="loginUser"/>
                    <label for="loginUser">Username</label>
                </div>
                <div className="input-group">
                    <input name="email"  type="text" id="loginUser"/>
                    <label for="loginUser">Email</label>
                </div>
                <div className="input-group">
                    <input name="password"  type="password"/>
                    <label for="loginPassword">Password</label>
                </div>
                <div className="input-group">
                    <input name="confirmPassword"  type="password" id="loginUser"/>
                    <label for="loginUser">Confirm Password</label>
                </div>
                <input type="submit" value="Register" className="submit-btn"/>
            </form>
        </div>





        
    )
};
export default SignUp;

