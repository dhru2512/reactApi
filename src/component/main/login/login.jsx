import React from "react";
import { Link } from "react-router-dom";
import './login.css';


function Login() {
    return(
        <main className="form-signin">
        <form className="form-box">
           
            <h1 className="h3 mb-3 fw-normal text-center">Please sign in</h1>

            <div className="form-floating">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
            <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
            <label htmlFor="floatingPassword">Password</label>
            </div>

            <div className="checkbox mb-3">
            <label>
                <input type="checkbox" value="remember-me" /> Remember me
            </label>
            </div>
            <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
            <Link className="mt-5 mb-3 text-primary text-center w-100 float-start" to="/">Back To Home</Link>
            <p className="mt-5 mb-3 text-muted text-center">&copy; 2017–2021</p>
        </form>
        </main>
    )
}

export default Login;