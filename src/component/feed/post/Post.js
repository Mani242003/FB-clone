import { ChatBubbleOutline, NearMe, ThumbUp } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import React,{useState} from 'react'
import "./Post.css"

const Post = ({src,image,userName,timeStamp,message}) => {

  return (
    <div className='post'>

    <div className='post__top' >
    <Avatar className='post__avatar' src={src} />
    <div className='Post__top__Info' >
    <h3>{userName}</h3>
    <p> {new Date(timeStamp?.toDate()).toString().slice(0,25)}</p>
    </div>
    </div>
    
    <div
    className="post__bottom__message" ><p>{message}</p></div>
    <div className="postIamge" >
    <img  src={image} />
    </div>
    
    <div className="post__options" >
    <div className="post__option" >
    <ThumbUp />
    <p>like</p>
    </div>
    <div className="post__option" >
    <ChatBubbleOutline />
    <p>Comment</p>
    </div>
    <div className="post__option" >
    <NearMe />
    <p>Share</p>
    </div>


    </div>
    </div>
  )
}

export default Post
