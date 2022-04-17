import { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const Login = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const navigate = useNavigate();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

    const handleEmailField = event => {
        setEmail(event.target.value);
    }
    const handlePasswordField = event => {
        setPassword(event.target.value);
    }

    const handelSubmit = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email,password);
    }
    if(user){
        navigate('/');
    }

    return (
        <div className='container w-50 border border-light mt-5 p-3 rounded bg-light.bg-gradient shadow-lg'>
           <h1 className='mx-auto mt-5'>Please Login</h1>
           <form onSubmit={handelSubmit}>
               <div className="my-3">
                    <input onBlur={handleEmailField} type="email" className="form-control" id="Email1" placeholder='Enter Your Email' required/>
               </div>
                <div className="my-3">
                   <input onBlur={handlePasswordField} type="password" className="form-control" id="exampleInputPassword1" placeholder='Enter Your Password' required/>
                </div>
                <button type="submit" className="btn btn-primary w-100">Login</button>
                <p className='text-danger text-center h6 mt-3'>{error?.message}</p>
                <p className='my-3'>New to Basic Photography?? <Link to='/register' className='text-danger text-decoration-none h6'>Please Register</Link></p>
            </form>
        </div>
    );
};

export default Login;