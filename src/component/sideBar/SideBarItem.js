import { Avatar } from '@mui/material'
import React from 'react'
import "./SidebarItem.css"

const SideBarItem = ({titel,Icon,src}) => {
  return (
    <div className='side__bar__row' >
    { src && <Avatar src={src}/>}
    { Icon && <Icon />}
    <h4> {titel}</h4>
    </div>
  )
}

export default SideBarItem
