import React, { useEffect, useState } from 'react'
import { database } from '../Firebase';
import CircularProgress from '@mui/material/CircularProgress'
import Avatar from '@mui/material/Avatar';

function Comments({postData}) {
    const [comments,setComments] = useState(null)
    
    useEffect(() => {
        let arr = [];
        const fetchData = async () => {
            for (let i = 0; i < postData.comments.length; i++) {
                database.comments.doc(postData.comments[i]).get().then((data) => {
                    arr.push(data.data());
                    if (arr.length === postData.comments.length) {
                        setComments(arr);
                    }
                });
            }
        };
        fetchData();
    }, [postData]);

  return (
    <div>
         {
            comments===null ?
            <CircularProgress />:
            <>
            {
                    comments.map((comment,index)=>(
                        <div style={{display:'flex'}}>
                            <Avatar  src={comment.uProfileImage}/>
                            <p>&nbsp;&nbsp;<span style={{fontWeight:'bold'}}>{comment.uName}</span>&nbsp;&nbsp; {comment.text}</p>
                        </div>
                    ))
            }
            </>
         }
    </div>
  )
}

export default Comments
