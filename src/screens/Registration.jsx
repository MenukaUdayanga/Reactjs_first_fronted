import React, { useEffect, useState } from 'react'
import '../css/registration.css'
import { Link } from "react-router-dom";
import regPhoto from "../assets/cloth.jpg";




function Registration() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [repassword, setRepassword] = useState('');
    const [error, setError] = useState('');
    const [formReady, setFormReady] = useState(true);



    const handle = () => {

        // Check password equality
        if (repassword !== password) {
            setError('The password does not match with Re-enter password.!');
            setFormReady(false);
            return;
        }


        // Empty input handling
        if (!name || !email || !phone || !username || !password) {
            setError('All the fields are required.!');
            setFormReady(false);

            return;

        }


        // If There is previous error, clear it
        setError('');


        // Continue with the fetch request
        fetch('http://localhost:3000/api/user/register', {
            method: 'POST',
            body: JSON.stringify({
                name: name,
                email: email,
                phone: phone,
                username: username,
                password: password,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((json) => {
                console.log(json);
                // Data saved successfully
                setFormReady(false); // Set formReady to true after successful registration


            })
            .catch((error) => {
                console.error('Error:', error);
                // Handle errors and display an error message to the user
            });

    };


    return (
        <>


           

            <div className='maincon'>

          
                <h1 className='maintopic'>User Registration</h1>

               
                <input className='fileds' placeholder='First Name' type="text" value={name} onChange={(e) => setName(e.target.value)} />

                <br></br>
                
                <input className='fileds' placeholder='Email' type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

                <br></br>
              
                <input className='fileds' placeholder='Phone Number' type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />

                <br></br>
                
                <input className='fileds' placeholder='UserName' type="text" value={username} onChange={(e) => setUsername(e.target.value)} />

                <br></br>
                
                <input className='fileds' placeholder='password' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

                <br></br>
               
                <input className='fileds' placeholder='Re-Password' type="password" value={repassword} onChange={(e) => setRepassword(e.target.value)} />

                <p className='already'>Already if you have a account.?<Link to='/login'><span className='logintext'>Login Now</span></Link></p>

                <h4 className='error'>{error}</h4>

                <a href={formReady ? '/login' : '#'} onClick={handle}>
                    <button className="btn">Register</button>
                </a>


               


            </div>

           

           
            <img className='cimage' src={regPhoto} alt="React Logo" style={{ width: '60%', height: '100vh' }} />
            
         

        </>
    )
}

export default Registration