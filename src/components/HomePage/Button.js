import React from 'react';
import { Link } from 'react-router-dom';
import "./button.css"
function Button() {
  return (
    <div className='container'>
      <Link to='/login'><button className='homepage_btn'>Admin</button> </Link>
      <Link to='/services'><button className='homepage_btn'>User</button> </Link>
    </div>
  );
};

export default Button;