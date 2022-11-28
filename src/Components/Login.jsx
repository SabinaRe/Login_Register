import React from 'react'
import {Link} from 'react-router-dom'
import './login.css'
export const Login = () => {
  return (
    <>
        <div className="container w-50 d-inline-block ">
            <h1>Log In</h1>
            <form className='form'>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password"/>
                </div>
                
                <button type="submit" className="btn btn-primary">Submit</button><br />
                <span>Don't have and an account?
                    <Link to="/register">Register</Link>
                </span>
            </form>

            
        </div>
    </>
  )
}
