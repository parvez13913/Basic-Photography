import React from 'react';
import googleLogo from '../../../images/social/google-logo.png'
import facebookLogo from '../../../images/social/facebook-logo.png'
import { Button } from 'react-bootstrap';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';

const Social = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    let errorElement;
    let loadingElement;
    if(loading){
        loadingElement = <p className='text-center'>
            <Loading></Loading>
        </p>
    }
    if(user){
        navigate('/home')
    }
    if(error){
        errorElement = <p className='text-danger text-center mt-3'>{error?.message}</p>
    }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{height:'1px'}} className='bg-dark w-50'></div>
                <p className='mt-3 mx-3'>OR</p>
                <div style={{height:'1px'}} className='bg-dark w-50'></div>   
            </div>
            {errorElement}
            {loadingElement}
            <div>
                <Button 
                onClick={() => signInWithGoogle()}
                className='w-100 my-3'>
                    <img src= {googleLogo} alt="Google-logo" />
                    <span>Google Login</span>
                </Button>
                <Button className='w-100 my-3'>
                    <img src= {facebookLogo} alt="facebook-logo" />
                    <span>Facebook Login</span>
                </Button>
            </div>
        </div>
    );
};

export default Social;