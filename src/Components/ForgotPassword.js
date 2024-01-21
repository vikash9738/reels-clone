import React from 'react';
import { sendPasswordResetEmail } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../Firebase';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Container, Typography, TextField, Button, Paper } from '@mui/material';
import Alert from '@mui/material/Alert';


function ForgotPassword() {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailVal = e.target.email.value;

    sendPasswordResetEmail(auth, emailVal).then(data=>{
        alert('Check your email for the password reset link.');
        navigate('/');
      }).catch (error=> {
      alert(error.code || 'An error occurred'); // Display error message if available, or a generic message
    })
  }

  return (
    // <div style={{ margin: '300px', height: '300px', width: '400px' }}>
    //   <h1>Forgot Password</h1>
    //   <form onSubmit={(e) => handleSubmit(e)}>
    //     <input name="email" /><br /><br />
    //     <button type="submit">Reset</button>
    //   </form>
    // </div>
//     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
//     <div style={{ width: '400px', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
//       <h1 style={{ textAlign: 'center' }}>Forgot Password</h1>
//       <form onSubmit={(e) => handleSubmit(e)}>
//         <label style={{ display: 'block', marginBottom: '10px' }}>
//           Email:
//           <input type="email" name="email" style={{ width: '100%', padding: '8px', marginTop: '5px' }} required />
//         </label>
//         <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#4caf50', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
//           Reset Password
//         </button>
//       </form>
//     </div>
//   </div>
<Container component="main" maxWidth="xs" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
<Paper elevation={3} style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  <Typography variant="h5" component="h1" style={{ marginBottom: '20px' }}>
    Forgot Password
  </Typography>
  <form onSubmit={(e) => handleSubmit(e)} style={{ width: '100%' }}>
    <TextField
      type="email"
      variant="outlined"
      margin="normal"
      fullWidth
      label="Email"
      name="email"
      required
    />
    <Button type="submit" variant="contained" color="primary" style={{ marginTop: '20px' }}>
      Reset Password
    </Button>
  </form>
</Paper>
</Container>
  );
}

export default ForgotPassword;
