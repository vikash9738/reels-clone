import React,{useContext} from 'react';
import { Navigate } from 'react-router';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';

function PrivateRoute({component}) {
    const {user} = useContext(AuthContext) 
    if(!user){
        return <Navigate to="/"/>
    }
    return component;
}

export default PrivateRoute