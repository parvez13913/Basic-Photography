import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const CheckOut = () => {
    const [user] = useAuthState(auth);

    const handelCheckOutButton = () => {
        alert('We are not currently providing any services.')
    }
    return (
      <div className='check-out-page'>  
        <div className='container w-50 border border-light my-5 p-3 rounded bg-light.bg-gradient shadow-lg from-container'>
           <h1 className='mx-auto my-2 text-success text-center'>Please Check Out</h1>
           <form>
               <div className="my-3">
                    <input type="text" className="form-control" id="name" placeholder='Enter Your Name' required/>
               </div>
               <div className="my-3">
                    <input value={user?.email} type="email" className="form-control" id="email" readOnly/>
               </div>
                <div className="my-3">
                   <input type="password" className="form-control" id="password" placeholder='Enter Your Password' required/>
                </div>
                <div className="my-3">
                   <input type="password" className="form-control" id="confirmPassword" placeholder='Confirm Your Password' required/>
                </div>
                <div className="my-3">
                   <input type="number" className="form-control" id="number" placeholder='Enter Your Phon Number' required/>
                </div>
                <div className="my-3">
                   <input type="Address" className="form-control" id="Address" placeholder='Enter Your Present Address' required/>
                </div>
                <button onClick={handelCheckOutButton} type="submit" className="btn btn-primary w-100">Check Out</button>
            </form>
        </div>
        </div>
    );
};

export default CheckOut;