import React, { useState, useEffect } from 'react';
import '../css/login.css'
import '../components/LoginButton'
import LoginButton from '../components/LoginButton'
import { Link } from "react-router-dom";


function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [ready, setReady] = useState(false);
  const [error, setError] = useState('');



  const handleLogin = () => {




    fetch('http://localhost:3000/api/login/userlogin', {
      method: 'POST',
      body: JSON.stringify({

        email: email,
        password: password

      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => {

        if (response.ok) {

          setReady(true);



          // Login was successful, you can handle the response here
          return response.json();
        }

        else {

          setReady(false);

          throw new Error('Login failed');


        }

      })

      .then((data) => {
        // Handle the data from the successful login response
        console.log('Login successful:', data);
      })
      .catch((error) => {
        // Handle errors, such as network issues or invalid credentials
        console.error('Login error:', error);
      });


  }



  return (
    <>

      <div className='box'>

        <h1 className='mtext'>User Login</h1>

        <h3 className='nameFi'>Enter Email Address</h3>
        <input className='inFileds' type="text" placeholder='Email Address' value={email} onChange={(e) => setEmail(e.target.value)} required />

        <h3 className='nameFi'>Password</h3>
        <input className='inFileds' type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required />

        <h4 className='error'>{error}</h4>
        {/* 
        <a href={ready ? '/dashboard' : '#'} onClick={handleLogin()}>
          <button>Login</button>
        </a> */}


        <a href={ready ? '/dashboard' : '#'} onClick={handleLogin()}>
          <LoginButton />
        </a>




      </div>
    </>
  )
}

export default Login