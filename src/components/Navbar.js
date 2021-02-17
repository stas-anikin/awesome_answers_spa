import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = (props)=>{
    function handleSignOut(){
        props.destroySession()
    }
    return(
        <nav>
            <NavLink to='/questions'>Questions Index</NavLink>
            |
            <NavLink to='/questions/new'>New Question</NavLink>
            |
            {
                props.currentUser ? 
                (
                <div>
                    <span>{props.currentUser.first_name}</span> 
                    |
                    <button onClick={handleSignOut}>Sign Out</button>
                </div>
                )
                :
                <NavLink to='/sign_in'>Sign In</NavLink>
            }
                            |<NavLink to='/sign_up'>Sign Up</NavLink>

        </nav>
    )
}
export default Navbar;