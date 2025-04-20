import React, { useContext } from 'react';
import AuthContext from '../Context/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRoute = ({children}) => {
    const {user,loding} = useContext(AuthContext);
    
    const location = useLocation();
    console.log(location)

    if(loding){
       return <h1>Awite</h1>
    }

    if(user){
        return children;
    }

    return <Navigate to="/login" state={location?.pathname}></Navigate>
};

export default PrivetRoute;