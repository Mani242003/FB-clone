import React from 'react'
import "./StoryReel.css"

import Story from './Story/Story'

const StoryReel = () => {
  return (
    <div className='story__reel'  >
    <Story 
    image="https://cdn.mwallpapers.com/photos/celebrities/sivakarthikeyan/sivakarthikeyanhd-wallpapers-desktop-background-android-iphone-1080p-4k-tqsjk.jpg"
    src="https://wallpapercave.com/wp/wp7368069.jpg"
    titel="Sivakarthikeyan"  />

    <Story 
    image=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVnXQ2lrQNS84eYL_ouYpEKfdb34jQ0bf8hg&usqp=CAU"
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh7RND7dlWFsHisGQB50sPAfr4WL3sUaiorQ&usqp=CAU"
    titel="Ajith"  />    
    
    <Story 
    image="https://cdn.mwallpapers.com/photos/celebrities/sivakarthikeyan/sivakarthikeyanhd-wallpapers-desktop-background-android-iphone-1080p-4k-tqsjk.jpg"
    src="https://wallpapercave.com/wp/wp7368069.jpg"
    titel="Sivakarthikeyan"  />

    <Story 
    image=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVnXQ2lrQNS84eYL_ouYpEKfdb34jQ0bf8hg&usqp=CAU"
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh7RND7dlWFsHisGQB50sPAfr4WL3sUaiorQ&usqp=CAU"
    titel="Sivakarthikeyan"  />    
    </div>
    
  )
}

export default StoryReel
