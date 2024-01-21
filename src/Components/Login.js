import * as React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext,Image } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import { Button, CardActionArea, CardActions } from '@mui/material';
import './Login.css'
import { BrowserRouter, Routes, Route, Link, Outlet, useNavigate } from 'react-router-dom';
import insta from 'C:/Users/HP/vikash/p1/commands/materialui-demo/src/Assets/Black-Instagram-Logo.png'
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import bg from 'C:/Users/HP/vikash/p1/commands/materialui-demo/src/Assets/insta.png'
import img1 from 'C:/Users/HP/vikash/p1/commands/materialui-demo/src/Assets/img1.jpg'
import img2 from 'C:/Users/HP/vikash/p1/commands/materialui-demo/src/Assets/img2.jpg'
import img3 from 'C:/Users/HP/vikash/p1/commands/materialui-demo/src/Assets/img3.jpg'
import img4 from 'C:/Users/HP/vikash/p1/commands/materialui-demo/src/Assets/img4.jpg'
import img5 from 'C:/Users/HP/vikash/p1/commands/materialui-demo/src/Assets/img5.jpg'
// import { makeStyles } from '@mui/style';
import { AuthContext } from '../Context/AuthContext';
export default function Login() {
  const store=useContext(AuthContext) ;
  // console.log(store);
// const useStyles=makeStyles({
//     text1:{
//         color: 'grey',
//         textAlign: 'center'
//     }
// })
// const classes=useStyles();
const [email,setEmail]=useState('');
const [password,setPassword]=useState('');
const [error,setError]=useState('');
const [loading,setLoading]=useState(false);
const navigate=useNavigate();
const {login} =useContext(AuthContext);

const handleClick = async ()=>{
  try{
    setError('');
    setLoading(true)
    let response=await login(email,password);
    setLoading(false);
    navigate('/feed')
  }catch(err){
    setError(err);
    setTimeout(()=>{
      setError('')
    },2000)
    setLoading((false));
  }
}
const handleReset = ()=>{
  navigate('/reset');
}
  return (
    <div className='loginWrapper'>
      <div className='imgCar' style={{backgroundImage: 'url(' + bg + ')', backgroundSize: 'cover'}}>
               <div className='Car'>
                 <CarouselProvider
                    // naturalSlideWidth={100}
                    // naturalSlideHeight={125}
                    // totalSlides={5}
                    visibleSlides={1}
                    totalSlides={5}
                    // step={3}
                    naturalSlideWidth={238}
                    naturalSlideHeight={428}
                    hasMasterSpinner={true}
                    isPlaying={true}
                    infinite={true}
                    dragEnabled={false}
                    touchEnabled={false}
                    >
                 <Slider>
                    <Slide index={0}><Image src={img1}/></Slide>
                    <Slide index={1}><Image src={img2}/></Slide>
                    <Slide index={2}><Image src={img3}/></Slide>
                    <Slide index={3}><Image src={img4}/></Slide>
                    <Slide index={4}><Image src={img5}/></Slide>
                 </Slider>
                </CarouselProvider>
              </div>
       </div>

      <div className='loginCard'>
           <Card variant='outlined'>
           <div className='insta-logo'>
              <img src={insta} alt=""/>
           </div>
        {/* <CardContent>
          {error!=='' && <Alert severity="error">{error}</Alert>}
          <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth={true} margin='dense' size='small'value={email} onChange={(e)=>setEmail(e.target.value)}/>
          <TextField id="outlined-basic" label="Password" variant="outlined" fullWidth={true} margin='dense' size='small'value={password} onChange={(e)=>setPassword(e.target.value)} />
          <Typography className='text2'color='primary'variant="subtitle1">
                 Forget Password ?
            </Typography>
        </CardContent> */}
        <CardContent>
            {error !== '' && <Alert severity="error">{error.message || 'An error occurred.'}</Alert>}
            <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth={true} margin='dense' size='small' value={email} onChange={(e) => setEmail(e.target.value)} />
            <TextField id="outlined-basic" label="Password" variant="outlined" fullWidth={true} margin='dense' size='small' value={password} onChange={(e) => setPassword(e.target.value)} />
           <Typography className='text2' color='primary' variant="subtitle1" onClick={handleReset}>
           Forget Password ?
           </Typography>
          </CardContent>

      <CardActions>
        <Button color="primary" fullWidth={true} variant='contained' onClick={handleClick} disabled={loading}>
          Login
        </Button>
      </CardActions>
      
       </Card>
          <Card variant='outlined' className="card2">
          <Typography className='text1'variant="subtitle1">
                 Don't have an account ?  <Link to='/signup' style={{textDecoration:'none'}}>Signup</Link>
            </Typography>
          </Card>
      </div>
    </div>
    
   
  );
}
