import React from 'react'
import "./SideBar.css"
import SideBarItem from './SideBarItem'
import {
    Chat,
    EmojiFlags,
    ExpandMoreOutlined,
    LocalHospital,
    People,
    Storefront,
    VideoLibrary
} from "@mui/icons-material"

const SideBar = ({user}) => {
  return (
    <div>
    <SideBarItem src={user.photoURL} titel={user.displayName} />
    <SideBarItem  titel="COVID-19 INFORMATION CENTER " Icon={LocalHospital} />
    <SideBarItem  titel="Pages " Icon={EmojiFlags} />
    <SideBarItem  titel=" Friends" Icon={People} />
    <SideBarItem  titel="Messenger " Icon={Chat} />
    <SideBarItem  titel="Marketplace " Icon={Storefront} />
    <SideBarItem  titel=" Videos" Icon={VideoLibrary} />
    <SideBarItem  titel="More " Icon={ExpandMoreOutlined} />






    

      
    </div>
  )
}

export default SideBar
