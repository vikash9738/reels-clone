import React,{useContext,useEffect,useState} from 'react'
import { AuthContext } from '../Context/AuthContext'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { database } from '../Firebase'
import { BrowserRouter, Routes, Route, Link, Outlet, useNavigate } from 'react-router-dom';
import UploadFile from './UploadFile';
import Post from './Post';
import Navbar from './Navbar';
import Login from './Login';

function Feed() {
    const {user,logout} = useContext(AuthContext);
    console.log(user);
    const [userData,setUserData] = useState('')
    const navigate=useNavigate();
   const handleLogOut = async () => {
    console.log('Logout button clicked');
    try {
        await logout();
        // console.log(user.fullname);
        console.log('Logout successful');
        navigate('/')
    } catch (err) {
        console.log(err.message);
    }
}
useEffect(()=>{
    const unsub = database.users.doc(user.uid).onSnapshot((snapshot)=>{
        setUserData(snapshot.data())
    })
    return ()=> {unsub()}
},[user])

 
    return (
        <>
          <Navbar user={userData}/>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
            {/* <div className="comp" style={{width:'50%'}}>
                <h1>Welcome to feed</h1>
                <button color="primary" onClick={handleLogOut}>Log out</button>
            </div> */}
              <UploadFile user={userData}/>
              <Post user={userData}/>
        </div>
{/*         
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            height="100vh" // Adjust the height as needed
        >
            <Box className="comp" style={{ width: '50%', textAlign: 'center', padding: '20px', border: '1px solid #ccc', borderRadius: '10px' }}>
                <h1>Welcome to Feed</h1>
                <p>Hello,</p>
                <Button variant="contained" color="primary" onClick={handleLogOut}>
                    Log out
                </Button>
                <UploadFile user={userData}/>
                <Post user={userData}/>
            </Box>
        </Box> */}
        </>
    )
}

export default Feed