import React from 'react'
import {Link} from 'react-router-dom'
import {ToastContainer} from 'react-toastify';

function Signup() {
  return (
    <div className='container'>
      <h1>SIGNUP</h1>
      <form>
        <div>
          <label htmlFor='name'>Name </label>
          <input 
          type='text'
          name='name'
          autoFocus
          placeholder='Enter your name'
          />
        </div>
        <div>
          <label htmlFor='email'>Email</label>
          <input 
          type='email'
          name='email'
          placeholder='Enter your email'
          />
        </div>
        <div>
          <label htmlFor='password'> Password </label>
          <input 
          type='password'
          name='password'
          placeholder='Enter your password'
          />
        </div>
        <button>Signup</button>
        <span> Already have an account ? 
         <a> <Link to="/login">Login</Link> </a>
        </span>
      </form>
<ToastContainer />
    </div>
  )
}

export default Signup