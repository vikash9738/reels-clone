import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { database } from '../Firebase';

function AddComment({postData,userData}) {
    const[text,setText]=useState('');
    // console.log(userData)
    const handleClick = () => {
        let obj = {
            text:text,
            uProfileImage:userData.profileUrl,
            uName : userData.fullname
        }
        database.comments.add(obj).then((doc)=>{
            database.posts.doc(postData.postId).update({
                comments:[...postData.comments,doc.id]
            })
        })
        setText('')
    }
  return (
    <div style={{width:'100%'}}>
          <TextField id="filled-basic" label="Comment" variant="outlined"  size='small' sx={{width:'70%'}} value={text}
           onChange={(e)=> setText(e.target.value)} />
           <Button variant="contained" onClick={handleClick} >Post</Button>
    </div>
  )
}

export default AddComment
