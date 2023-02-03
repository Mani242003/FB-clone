import React from 'react'
import "./Login.css"
import {signInWithPopup} from "firebase/auth"
import {auth,provider} from "../firebase"

const Login = ({setUser}) => {

  const sigIn=()=>{
    signInWithPopup(auth,provider).then
    ((result)=>{
      setUser(result.user)
    })
      .catch((err)=>{console.log(err);})

  }
  return (
    <div className='login'>
    <div className='login_logo'>
   
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtBILdC5ouxGYjeaYJPmVqMsSpsItocXSI5A&usqp=CAU"  alt=''/>
    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2lliUF0pqNFyL0BM5bQ7bL3hbEiwKtox8kw&usqp=CAU' alt='' />
    </div>
    <h1 style={{color:"gray"}} >Facebook helps you connect and share with the people in your life.</h1>
   
    <div className='login__button__Container'>
    <button className='login__button' onClick={sigIn} >
    Sign in with Google
    </button>
    </div>
   


    
      
    </div>
  )
}

export default Login
