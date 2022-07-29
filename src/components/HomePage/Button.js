import React from 'react'; 
import "./button.css"
function Button (){ 
  return (
    <div className='container'>
        <button className='homepage_btn'>Admin</button> 
        <button className='homepage_btn'>User</button> 
    </div>
  ); 
};

export default Button;