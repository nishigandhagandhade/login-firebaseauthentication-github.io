import React from 'react'
import { useState } from 'react'

import { logout, loginuser, signupuser, useAuth } from '../fireConfig';

const Signup = () => {


    const [loading, setLoading] = useState('');

    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('');

    const currentUser = useAuth();


    // sing in user 
    const handleSubmit = async (e) => {

        e.preventDefault();
        console.log(email, password)
        setLoading(true)

        try {

            await signupuser(email, password)
            window.alert('User Created')
        }
        catch (e) {

            console.log(e)
            window.alert(e)
        }

        setLoading(false)
    }




    // login user 
    const handlelogin = async () => {

        try {

            await loginuser(email, password);
            window.alert('login successful')

        }
        catch (e) {

            window.alert('Login Faild')
            console.log(e)
        }
    }


    // logout user 
    const handlelogout = async () => {

        try {

            logout();
            window.alert('Logout successfully')

        }
        catch (e) {

            console.log(e)
            window.alert(e)
        }
    }


    return (
        <>
            <div className='main'>
                <div className='wrapper'>
                    <form onSubmit={(e) => handleSubmit(e)}>

                        <input type='email' name='email' id='email' placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)} required className='inputs'/><br></br><br></br>

                        <input type='password' name='password' id='password' placeholder='Enter password' onChange={(e) => setPassword(e.target.value)} required className='inputs'/><br></br><br></br><br></br>

                        <input disabled={loading || currentUser} type='submit' value='Sign Up' className='button1'/><br></br><br></br>

                    </form>



                    <button disabled={loading || !currentUser} onClick={handlelogout} className='button2'>Log Out</button>

                    <button disabled={loading || currentUser} onClick={handlelogin} className='button2'>Log In</button><br></br><br></br><br></br><br></br>

                    <div className='text'>CURRENTY LOGIN AS: {currentUser?.email}</div>
                </div>
            </div>
        </>
    )
}

export default Signup
