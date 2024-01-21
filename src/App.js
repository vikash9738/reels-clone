// App component
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './Context/AuthContext';
import Feed from './Components/Feed';
import Login from './Components/Login';
import Profile from './Components/Profile';
import Signup from './Components/Signup';
import ForgetPassword from './Components/ForgotPassword'

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/reset" element={<ForgetPassword/>} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
