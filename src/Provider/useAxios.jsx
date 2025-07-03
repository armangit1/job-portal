import axios from 'axios';
import React, { useEffect } from 'react';
import auth from '../firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';


const axsiosInstance = axios.create({
    baseURL: 'https://job-portal-nu-seven-88.vercel.app',
    withCredentials: true
})

const useAxios = () => {
    const navigate = useNavigate();

    useEffect(() => {
      const interceptor  =  axsiosInstance.interceptors.response.use(response => {
         
            return response;

        }, error => {
            console.log('error is:',error)
            if (error?.response?.status === 401 || error?.response?.status === 403){

                signOut(auth).then(res =>{ 
                    console.log(res)
                navigate('/')
                })
                    .catch(er => console.log(er))
            }
                return Promise.reject(error)

        })
    }, [])

    return axsiosInstance;
};

export default useAxios;