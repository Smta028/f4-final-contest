import React from 'react';
import { useNavigate } from 'react-router-dom';

function NavBar(props) {
    const navigate=useNavigate(); 
    return (
        <nav>
            <button onClick={()=>{navigate('/')}} >Social Media App</button>
        </nav>
    );
}

export default NavBar;