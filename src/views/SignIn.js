import React from 'react';
import "../SignIn.css"

const SignIn = (props) => {


    const signInOnSubmit = async (event) => {
        event.preventDefault();
            let response = await fetch('http://127.0.0.1:5000/signin', {
                method: 'POST',
                headers: {'Content-Type': "application/json"},
                body: JSON.stringify({
                    email: event.target.email.value,
                    password: event.target.password.value,
                })
            })
            let data = await response.json();
            console.log(data);
            props.setUser(data.user);
          }

    return (
        <div className="login">
            <form className="form" onSubmit={ (event) => signInOnSubmit(event) }>
                <h2>Login</h2>
                <div className="input-group">
                    <input name="email"  type="text" id="loginUser"/>
                    <label for="loginUser">Email</label>
                </div>
                <div className="input-group">
                    <input name="password"  type="password"/>
                    <label for="loginPassword">Password</label>
                </div>
                <input type="submit" value="Login" className="submit-btn"/>
            </form>
        </div>
    )
};
export default SignIn;