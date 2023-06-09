import React from 'react'
import logo from './Image/download.jpeg'
import './css/Login.css'
import { auth, provider } from './firebase'
import { useStateValue } from './StateProvider'



 function Login() {
  const [{}, dispatch] = useStateValue()
  
  const signIn = () =>{
    auth.signInWithPopup(provider).then(result=>{
    
      dispatch({
        type:"SET_USER",
        user: result.user,
        
      })
    }).catch(error=>alert(error))
    
  }
  
  return (
    <div className='login__wrapper'>
        <div className='login'>
        
        <img src={logo} alt="React" />
            <h2>Sign into watsapp</h2>
            <button onClick={signIn}>Login With Gmail</button>
        </div>
      
    </div>
  )
}
export default Login;
