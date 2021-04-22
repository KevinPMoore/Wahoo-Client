import React, { useState } from 'react';
import FeaturedQuestions from '../FeaturedQuestions/FeaturedQuestions';
import FeaturedUsers from '../FeaturedUsers/FeaturedUsers';
import './Home.css';

export default function Home(props) {

    const [ tab, setTab ] = useState('questions')

    function renderHome() {
        if(props.hasUser !== true) {
            return(
                <div
                    className='Home'
                >
                    <div
                        className='HomeTabs'
                    >
                        <a href='#FeaturedQuestions' role='menuitem' onClick={() => setTab('questions')}>
                            Hot Topics
                        </a>
                        <a href='#FeaturedUsers' role='menuitem' onClick={() => setTab('users')}>
                            Power Users
                        </a>
                        {renderTabs()}
                    </div>
                </div>
            );
        } else {

        };
    };

    function renderTabs() {
        if(tab === 'questions') {
            return(
                <FeaturedQuestions />
            );
        } else if(tab === 'users') {
            return(
                <FeaturedUsers />
            );
        };
    };

    return(renderHome());
};