import { Avatar } from '@mui/material'
import React from 'react'
import "./Story.css"

const Story = ({image, src ,titel}) => {
  return (
    <div className='story' style={{  backgroundImage:`url(${image})` }} >
    <Avatar src={src} className='story_avater' />
    <h4>{titel}</h4>
    </div>
  )
}

export default Story
