import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { makeStyles } from '@mui/system'; // Corrected import for makeStyles
import Alert from '@mui/material/Alert';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import FavoriteIcon from '@mui/icons-material/Favorite';  // Use @mui instead of @material-ui
import { database } from '../Firebase';



function Like({ userData, postData }) {
    const [like, setLike] = useState(null);

    useEffect(() => {
      let check = postData.likes.includes(userData.userId) ? true : false;
      setLike(check);
    }, [postData,userData.userId]);

    const handleLike = () => {
        setLike((prevLike) => {
          if (prevLike) {
            let narr = postData.likes.filter((el) => el !== userData.userId);
            database.posts.doc(postData.postId).update({
              likes: narr,
            });
            return false;
          } else {
            let narr = [...postData.likes, userData.userId];
            database.posts.doc(postData.postId).update({
              likes: narr,
            });
            return true;
          }
        });
      };
  
    return (
      <div>
        {like !== null ? 
          <>
            {like === true ? 
              <FavoriteIcon className={'icon-styling like'} onClick={handleLike}/>
             : 
              <FavoriteIcon className={'icon-styling unlike'} onClick={handleLike}/>
            }
          </>
        : 
          <>
            {/* Placeholder for other content when like is null */}
          </>
        }
      </div>
    );
  }
  
  export default Like;
  
