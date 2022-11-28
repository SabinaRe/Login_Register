import React from 'react'
import {Link} from 'react-router-dom'
const register = () => {
  return (
    <div>
      <div className="container w-50 d-inline-block ">
            <h1>Register</h1>
            <form className='form'>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password"/>
                </div>
                
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" id="password"/>
                    <span>Already have and an account?
                    <Link to="/">Log In</Link>
                </span>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

            
        </div>
    </div>
  )
}

export default register
