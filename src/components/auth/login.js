import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './auth.css';
import { LOGIN } from '../../store/actions/types';

export default function Login(props) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const state = useSelector(auth => auth.state)
  const dispatch = useDispatch()

  const handleSubmit = () => {
    dispatch({ type: LOGIN, payload: { loading: true, email, password } })
  }

  return (
    <>
      <div className="container-fluids">
        <div className="row">
          <div className="col-md-3 col-lg-3">
          </div>
          <div className="col-md-6 col-sm-12 col-lg-6">
            <form className="form-group">
              <h1 className="line">Login</h1>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                onChange={e => setEmail(e.target.value)}
                value={email}
                placeholder="Email"
                className="form-control"
                id="email" />

              <label htmlFor="password">Password</label>
              <input
                type="password"
                onChange={e => setPassword(e.target.value)}
                value={password}
                placeholder="password"
                className="form-control"
                id="password" />

              <button
                type="submit"
                onClick={() => handleSubmit}
                className="form-control btn btn-success mt-2">
                {state?.loading ? 'Loading...' : 'Login'}
              </button>
              {state?.error ? 'Login error occur' : ''}
              <a href="javascript:void(0)" onClick={() => props.history.push('/signup')} className={"btn btn-link"}>Create new account</a>
              <a href="javascript:void(0)" onClick={() => props.history.push('/forget-password')} className={"btn btn-link"}>forgot password</a>
            </form>
          </div>
          <div className="col-md-3 col-lg-3">
          </div>
        </div>
      </div>
    </>
  )
}