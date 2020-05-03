import React from 'react';
import ReactDOM from "react-dom";
import {Link as RouterLink} from "react-router-dom";
import {Link} from 'react-scroll';

const Header = () => {
    return (
        <>
            <div className="header-container">
                <div className="nav">
                    <ul>
                        <li className='start'><RouterLink to="/">Start</RouterLink></li>
                        <li className='przebieg'><RouterLink to="/przebieg">Przebieg</RouterLink></li>
                        <li className='zasady'><RouterLink to="/zasady">Zasady</RouterLink></li>
                        <li className='oMnie'><RouterLink to="/oMnie">O mnie</RouterLink></li>
                        <li className='kontakt'><RouterLink to="/kontakt">Kontakt</RouterLink></li>
                    </ul>
                </div>
                <div className='header-image'></div>
            </div>
        </>
    )
}
export default Header