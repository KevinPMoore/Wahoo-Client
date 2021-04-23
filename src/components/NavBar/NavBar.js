import React, { useState } from 'react';
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

    function renderNavModal() {
        return(
            <div
                className='NavModal'
            >
                <ul
                    className='NavCategoryList'
                >
                    <li
                        className='NavCategoryItem'
                    >
                        <a href='/Categories/Art'>
                            Art
                        </a>
                    </li>
                    <li
                        className='NavCategoryItem'
                    >
                        <a href='/Categories/Beauty+Style'>
                            Beauty and Style
                        </a>
                    </li>
                    <li
                        className='NavCategoryItem'
                    >
                        <a href='/Categories/Business+Finance'>
                            Business and Finance
                        </a>
                    </li>
                    <li
                        className='NavCategoryItem'
                    >
                        <a href='/Categories/Cars+Transportation'>
                            Cars and Transportation
                        </a>
                    </li>
                    <li
                        className='NavCategoryItem'
                    >
                        <a href='/Categories/Computers'>
                            Computers
                        </a>
                    </li>
                    <li
                        className='NavCategoryItem'
                    >
                        <a href='/Categories/CurrentEvents'>
                            Current Events
                        </a>
                    </li>
                    <li
                        className='NavCategoryItem'
                    >
                        <a href='/Categories/Education'>
                            Education
                        </a>
                    </li>
                    <li
                        className='NavCategoryItem'
                    >
                        <a href='/Categories/Electronics'>
                            Electronics
                        </a>
                    </li>
                    <li
                        className='NavCategoryItem'
                    >
                        <a href='/Categories/Environment'>
                            Environment
                        </a>
                    </li>
                    <li
                        className='NavCategoryItem'
                    >
                        <a href='/Categories/Family+Relationships'>
                            Family and Relationships
                        </a>
                    </li>
                    <li
                        className='NavCategoryItem'
                    >
                        <a href='/Categories/Food+Drink'>
                            Food and Drink
                        </a>
                    </li>
                    <li
                        className='NavCategoryItem'
                    >
                        <a href='/Categories/Games+Entertainment'>
                            Games and Entertainment
                        </a>
                    </li>
                    <li
                        className='NavCategoryItem'
                    >
                        <a href='/Categories/Health+Wellness'>
                            Health and Wellness
                        </a>
                    </li>
                    <li
                        className='NavCategoryItem'
                    >
                        <a href='/Categories/Home+Garden'>
                            Home and Garden
                        </a>
                    </li>
                    <li
                        className='NavCategoryItem'
                    >
                        <a href='/Categories/Math+Science'>
                            Math and Science
                        </a>
                    </li>
                    <li
                        className='NavCategoryItem'
                    >
                        <a href='/Categories/Pets'>
                            Pets
                        </a>
                    </li>
                    <li
                        className='NavCategoryItem'
                    >
                        <a href='/Categories/Politics'>
                            Politics
                        </a>
                    </li>
                    <li
                        className='NavCategoryItem'
                    >
                        <a href='/Categories/Parenting'>
                            Parenting
                        </a>
                    </li>
                    <li
                        className='NavCategoryItem'
                    >
                        <a href='/Categories/Restaurants'>
                            Restaurants
                        </a>
                    </li>
                    <li
                        className='NavCategoryItem'
                    >
                        <a href='/Categories/SocialScience'>

                        </a>
                    </li>
                    <li
                        className='NavCategoryItem'
                    >
                        <a href='/Categories/Society+Culture'>
                            Society and Culture
                        </a>
                    </li>
                    <li
                        className='NavCategoryItem'
                    >
                        <a href='/Categories/Sports'>
                            Sports
                        </a>
                    </li>
                    <li
                        className='NavCategoryItem'
                    >
                        <a href='/Categories/Travel'>
                            Travel
                        </a>
                    </li>
                </ul>
            </div>
        );
    };

    return(
        renderNav()
    );
};