import React, { useEffect, useState } from 'react'
import '../css/registration.css'
import { Link  } from "react-router-dom";
import bcrypt from 'bcryptjs';





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
        setError('The password does not match the Re-enter password.');
        setFormReady(false);
        return;
    }

    // Empty input handling
    if (!name || !email || !phone || !username || !password) {
        setError('All the fields are required.');
        setFormReady(false);
        return;
    }

    // Hash the user's password
    const saltRounds = 10;

    bcrypt.hash(password, saltRounds)
        .then((hashedPassword) => {
            // Continue with the fetch request
            fetch('http://localhost:3000/api/user/register', {
                method: 'POST',
                body: JSON.stringify({
                    name: name,
                    email: email,
                    phone: phone,
                    username: username,
                    password: hashedPassword, // Use the hashed password here
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
                setFormReady(true); // Set formReady to true after successful registration
            })
            .catch((error) => {
                console.error('Error:', error);
                // Handle errors and display an error message to the user
            });
        })
        .catch((error) => {
            console.error('Error hashing password:', error);
            // Handle errors related to password hashing
        });
};


    
    return (
        <>

            <div className='maincon'>

                <h1 className='maintopic'>User Registration</h1>

                <label style={{ padding: '14px' }} className='nameFileds'>First Name</label>
                <input className='fileds' placeholder='First Name' type="text" value={name} onChange={(e) => setName(e.target.value)} />

                <br></br>
                <label style={{ padding: '33px' }} className='nameFileds'>Email </label>
                <input className='fileds' placeholder='Email' type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

                <br></br>
                <label className='nameFileds'>Phone Number</label>
                <input className='fileds' placeholder='Phone Number' type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />

                <br></br>
                <label style={{ padding: '17px' }} className='nameFileds'>UserName</label>
                <input className='fileds' placeholder='UserName' type="text" value={username} onChange={(e) => setUsername(e.target.value)} />

                <br></br>
                <label style={{ padding: '22px' }} className='nameFileds'>Password</label>
                <input className='fileds' placeholder='password' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

                <br></br>
                <label style={{ padding: '8px' }} className='nameFileds'>Re-Password</label>
                <input className='fileds' placeholder='Re-Password' type="password" value={repassword} onChange={(e) => setRepassword(e.target.value)} />

                <p className='already'>Already if you have a account.?<Link to='/login'><span className='logintext'>Login Now</span></Link></p>

                 <h4 style={{color:'red'}}>{error}</h4>

                 <a href={formReady?'/login' : '#'} onClick={handle}>
                    <button className="btn">Register</button>
                </a>

                
              
             



            </div>

        </>
    )
}

export default Registration