import React,{useState,useEffect} from 'react'
import { auth } from './firebase'  
import "./App.css"

import Login from './component/Login'
import { onAuthStateChanged} from 'firebase/auth'

import Header from './component/header/Header'
import SideBar from './component/sideBar/SideBar'
import Feed from './component/feed/Feed'
import Widget from './component/widget/Widget'

const App = () => {

  const [user, setUser] = useState(null);

  useEffect(() => {
   onAuthStateChanged(auth,(user)=>{
    setUser(user);

   })
  }, [])

  


  

  
  return (
   
      <div className='app'>
      {
        !user ?
        (
          <Login setUser={setUser} />

        )
        :
        (
          // <div>
          // <h1>loggedIn</h1>
          // <button  onClick={()=>{signOut(auth)}} >log</button></div>
        <div>
        <Header user={user} ></Header>
        <div className='app_body'>

        <SideBar user={user} />
        <Feed user={user} />
        <Widget />
        </div>
        </div>
        )
       

      }
      
      </div>
    
   
  )
}

export default App
