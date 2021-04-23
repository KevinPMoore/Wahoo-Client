import React, { useState } from 'react';
import NavModal from '../NavModal/NavModal';
import './NavBar.css';

export default function Navbar(props) {

    const [ expandNav, setExpandNav ] = useState(false)

    function renderNav() {
        if(expandNav) {
            return(
                <nav>
                    <button
                        className='NavToggle'
                        onClick={() => setExpandNav(!expandNav)}
                    >
                        X
                    </button>
                    <NavModal />
                </nav>
            );
        } else {
            return(
                <nav>
                    <button
                        className='NavToggle'
                        onClick={() => setExpandNav(!expandNav)}
                    >
                        O
                    </button>
                </nav>
            );
        };
    };

    return(
        renderNav()
    );
};