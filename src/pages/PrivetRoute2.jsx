import React from 'react';
import useAuth from '../Provider/useAuth';
import { Navigate } from 'react-router-dom';

const PrivetRoute2 = ({children}) => {

    const {user,loding} = useAuth();

    if(loding){
        return <h1>loding</h1>
    }

if(!user){
    return children;
}else{
    return <Navigate to={"/"} ></Navigate>
}
  
};

export default PrivetRoute2;