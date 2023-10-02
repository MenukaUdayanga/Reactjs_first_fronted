import React from 'react'
import '../css/login.css'

function Login() {
  return (
    <>

    <div className='box'>

      <h1 className='mtext'>User Login</h1>

     <h3 className='nameFi'>Enter Email Address</h3>
     <input className='inFileds' type="text" placeholder='Email Address'/>

     <h3 className='nameFi'>Password</h3>
     <input className='inFileds' type="password" placeholder='Password'/>

    

    </div>
    </>
  )
}

export default Login