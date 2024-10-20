import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {ToastContainer} from 'react-toastify';
// import {handleError,handleSuccess} from '../utils';

function Signup() {

     const [signupInfo, setSignupInfo] = useState({
      name: '',
      email: '',
      password: ''
     })


     const handleChange = (e)=>{
     const { name, value} = e.target;
      console.log(name, value);
      
     }
  return (
    <div className='container'>
      <h1>SIGNUP</h1>
      <form> 
        <div>
          <label htmlFor='name'>Name </label>
          <input 
         onChange={handleChange}
          type='text'
          name='name'
          autoFocus
          placeholder='Enter your name'
          />
        </div>
        <div>
          <label htmlFor='email'>Email</label>
          <input 
          onChange={handleChange}
          type='email'
          name='email'
          placeholder='Enter your email'
          />
        </div>
        <div>
          <label htmlFor='password'> Password </label>
          <input 
          onChange={handleChange}
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