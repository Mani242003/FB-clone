import React from 'react'
import "./Header.css"
import {
    Search,
    Add,
    Logout,
    Flag,
    Forum,
    Home,
    NotificationsActive,
    StorefrontOutlined,
    SubscriptionsOutlined,
    SupervisedUserCircle
} from '@mui/icons-material';
import { Avatar, IconButton } from '@mui/material';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';

const Header = ({user}) => {

  return (
  <div className='header'>

    <div className='header__left' >
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtBILdC5ouxGYjeaYJPmVqMsSpsItocXSI5A&usqp=CAU"  alt=''/>
      <div className='header__input' >
        <Search />
        <input placeholder='Search ' />
      </div>
    </div>

    <div className='header__center '>
      <div className='header__option header__option--active '> <Home fontSize='large' /> </div>
      <div className='header__option'> <Flag fontSize='large' /> </div>
      <div className='header__option '> <SubscriptionsOutlined fontSize='large' /> </div>
      <div className='header__option '> <StorefrontOutlined fontSize='large' /> </div>
      <div className='header__option  '> <SupervisedUserCircle fontSize='large' /> </div>
    </div>
      
   <div className='header__right' >
   <div className='header_info' > 
   <Avatar src={user.photoURL}  />
   <h4>{user.displayName}</h4>
   </div>
   <div className='header__right-icons'>
   <IconButton>
   <Add />
   </IconButton>
   <IconButton>
   <Forum />
   </IconButton>
   <IconButton>
   <NotificationsActive />
   </IconButton>
   <IconButton onClick={()=>{signOut(auth)}} >
   <Logout />
   </IconButton></div>
   
   </div>
      
  </div>
  )
}

export default Header
