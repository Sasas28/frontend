import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import "./login.css";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext"
import { CircularProgress } from '@mui/material'


export default function Login() {
  const email = useRef()
  const password = useRef()
  const { user, isFetching, error, dispatch } = useContext(AuthContext)

  const handleClick = (e)=>{
    e.preventDefault()
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    )
  }

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Socialfeeds</h3>
          <span className="loginDesc">
            Connect with friends around you on Socialfeeds.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input placeholder="Email" type="email" required className="loginInput" ref={email} />
            <input placeholder="Password" type="password" required minLength="6" className="loginInput" ref={password} />
            <button className="loginButton" type="submit">{isFetching ? 
                (<CircularProgress color="inherit" size={40}/>)
               : 
                ("Log In")
              }</button>
            <span className="loginForgot">Forgot Password?</span>
            <Link to="/register" style={{ textDecoration: "none" }}>
              <button className="loginRegisterButton">
                {isFetching ? 
                  (<CircularProgress color="inherit" size={40}/>)
                : 
                  ("Create a New Account")
                }
              </button>
            </Link>
            
          </form>
        </div>
      </div>
    </div>
  );
}