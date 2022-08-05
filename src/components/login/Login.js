import React from 'react';
import { Link } from 'react-router-dom';
import './login.css'

const Login = () => {
    return (
        <div className='login'>
            <form>
                <span>
                    <label htmlFor='userid'>Username / Phone Number</label>
                    <input type={'text'} name='userid'></input>
                </span>
                <br />
                <span>
                    <label htmlFor='password'>Password</label>
                    <input type={'password'} name='password'></input>
                </span>
                <br />
                <br />
                <div>
                    <Link to='/admin'><button type={'submit'}>LOGIN</button></Link>
                </div>

            </form>
        </div>
    )
}

export default Login