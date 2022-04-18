import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useState } from 'react';
import Social from '../Social/Social';
import Loading from '../Loading/Loading';

const Register = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');
    const [passwordError,setPasswordError] = useState('');
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        error,
        loading
      ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});

      const handleEmailField = event => {
            setEmail(event.target.value);
      }
      const handlePasswordField = event => {
            setPassword(event.target.value);
      }
      const handleConfirmPasswordField = event => {
        setConfirmPassword(event.target.value);
      }

      if(user){
          navigate('/checkout')
      }
      let loadingElement;
      if(loading){
        loadingElement = <p className='text-center mt-2'>
                <Loading></Loading>
        </p>
      }

      let errorElement;
      if(error){
        errorElement = <p className='text-center text-danger mt-3'>{error.massage}</p>
      }

    const handelRegister = async event => {
        event.preventDefault();
        if(password !== confirmPassword) {
            setPasswordError('Password Did Not Match');
                return;
        }
        createUserWithEmailAndPassword(email,password);
    }
    return (
        <div className='container w-50 border border-light mt-5 p-3 rounded bg-light.bg-gradient shadow-lg'>
           <h1 className='mx-auto mt-5'>Please Register</h1>
           <form onSubmit={handelRegister}>
               <div className="my-3">
                    <input type="text" className="form-control" id="name" placeholder='Enter Your Name' required/>
               </div>
               <div className="my-3">
                    <input onBlur={handleEmailField} type="email" className="form-control" id="email" placeholder='Enter Your Email' required/>
               </div>
                <div className="my-3">
                   <input onBlur={handlePasswordField} type="password" className="form-control" id="password" placeholder='Enter Your Password' required/>
                </div>
                <div className="my-3">
                   <input onBlur={handleConfirmPasswordField} type="password" className="form-control" id="confirmPassword" placeholder='Confirm Your Password' required/>
                </div>
                <button type="submit" className="btn btn-primary w-100">Register</button>
            </form>
            {loadingElement}
            <Social></Social>
            <p className='mt-5 text-danger h6 text-center'>{passwordError}</p>
            {errorElement}
            <p className='my-3 text-center'> Already Have an Account?? <Link to='/login' className='text-danger text-decoration-none h6'>Please Login</Link></p>
        </div>
    );
};

export default Register;