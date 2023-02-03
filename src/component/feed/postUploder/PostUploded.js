import { Avatar, LinearProgress } from '@mui/material';
import {Videocam,PhotoLibrary,InsertEmoticon} from "@mui/icons-material"
import UploadRoundedIcon from '@mui/icons-material/UploadRounded';
import React,{useState} from 'react'
import "./PostUploded.css"
import { storage,db, timeStamp } from '../../../firebase'

import {getDownloadURL, ref, uploadBytesResumable} from "firebase/storage"
import { addDoc, collection } from 'firebase/firestore'

const PostUploded = ({user}) => {
    const [input, setInput] = useState("")
    const [image, setImage] = useState("")
   const [progress, setprogress] = useState(0)

    const handelSubmit=(event)=>{
        event.preventDefault();
        // console.log("submited",input,image);

        const storageRef=ref(storage,`images/${image.name}`)
        const uploadTask=uploadBytesResumable( storageRef,image)

        uploadTask.on("state_changed",(snapShot)=>{
            const progress=Math.round(snapShot.bytesTransferred / snapShot.totalBytes) * 100;
            setprogress(progress)

        },(err)=>{console.log(err);
        },()=>{
            getDownloadURL( uploadTask.snapshot.ref).then(async(downloadURL)=>{
                // console.log(downloadURL);
                await addDoc(collection(db,"posts"),{
                    message:input,
                    timeStamp:timeStamp,
                    profiePic:user.photoURL,
                    username:user.displayName,
                    image:downloadURL
                }) ;  
                setprogress("");
                setInput("") ;
                setImage("") ;       
            })
     }

        )

    }
    
  return (
    <div className='postUploder' >
    <div className=' postUploder__top' >
    <Avatar src={user.photoURL} />
    <form>
    <input 
    type="text"
    placeholder={`What's you mind ?${user.displayName}`}
    value={input}
    onChange={(e)=>{setInput(e.target.value)}}
    />
    <input 
    type="file"
   
    onChange={(event)=>{setImage(event.target.files[0]);}}
     />
     <button onClick={handelSubmit} className="UploadButton"  >
     <UploadRoundedIcon fontSize='large' />
     </button>
     
    </form>
   
    </div>
    {
        progress>0 &&   <LinearProgress variant='determinate' value={progress}/>

    }
    <div className='postUploder__bottom'>
    <div className='postUploder__option'>
    <Videocam style={{color:"red"}}/>
    <h3>live Video</h3>
    </div>
    <div className='postUploder__option'>
    <PhotoLibrary style={{color:"green"}}/>
    <h3>Photo/Video</h3>
    </div>
     <div className='postUploder__option'>
    <InsertEmoticon style={{color:"orange"}}/>
    <h3>Feeling/Activity</h3>
    </div>
    </div>
    </div>
  )
}

export default PostUploded
