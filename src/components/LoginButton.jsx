import React from 'react'
import '../css/loginbutton.css'

function LoginButton(props) {
  return (
    <>


      <button className="pbtn" onChange={props.onChange} onClick={props.onClick}>{props.linkname}</button>



    </>
  )
}

export default LoginButton