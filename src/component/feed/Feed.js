import React,{useState,useEffect}from 'react'
import "./Feed.css"
import PostUploded from './postUploder/PostUploded'
import Post from './post/Post'

import StoryReel from '../StoryReel/StoryReel'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import { db } from '../../firebase'



const Feed = ({user}) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const q=query(collection(db,"posts"),orderBy("timeStamp","desc"))
    onSnapshot(q,(snapShot)=>{
      setPosts(
        snapShot.docs.map((doc)=>{
          return{
            id:doc.id,
            data:doc.data()
          }
        })
      )
    })
   
  }, [])
  // console.log(posts);
  return (
    <div className='feed' >
    <StoryReel />
    <PostUploded user={user} />
    {
      posts.map((post)=>{
        return(
          <Post
          key={post.id}
          src={post.data.profilePic}
          message={post.data.message}
          timeStamp={post.data.timeStamp}
          userName={post.data.username}
          image={post.data.image}
           />
        )
     
         
      }
      )

    }
      </div>
  )
}

export default Feed
