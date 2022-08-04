import React from 'react'
// import Button from '../HomePage/Button'
import './login.css'

function Login() {
    return (
        <div className='login_page'>
            <div className='bg_white'>
                <div className='login_form'>
                    <form action=''>
                        <h1 className='h1'>Login</h1>
                        <input type="number" name="name" placeholder='Mobile Number' autoComplete='off'/>
                        <input type="password" name="name" placeholder='Password' />
                        <input type="submit" value="Login" className='login_button'/>
                    </form>
                </div>

                <div className='signup_form'>
                    <form className='sign_up'>
                        <h1 className='h1'>Sign In</h1>
                        {/* <input type="file" id="img" name="img" accept="image/*" /> */}

                        <input type="text" pattern="\d*" maxlength="10" placeholder='Mobile Number' autoComplete='off' />

                        <input type="text" pattern="\d*" maxlength="12" placeholder='Aadhar Number' />

                        <input type="email" placeholder="Email Address" />

                        <input type="password" name="name" placeholder='Password' />
                        <input type="submit" value="Sign in" className='login_button'/>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login

