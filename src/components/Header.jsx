import React from 'react';
import './Header.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className='header'>
            <NavLink to='/models'>
                <span>All Super Heroes</span>
            </NavLink>
        </header>
    );
}

export default Header;