import React, { useEffect } from 'react';
import ReactDOM from "react-dom";
import { Link as RouterLink } from "react-router-dom";
import { Link } from 'react-scroll';







const Header = () => {
    
    useEffect(()=>{
        const hamburger = document.querySelector(".ham-wrapper");
        hamburger.addEventListener('click', function () {
            hamburger.classList.toggle('click')
        })
    })
        

    return (
        <>
            <div className='nav'>
                <ul className='desktop-wrapper'>
                    <li><RouterLink to="/">Masz prawo do mediacji</RouterLink></li>
                    <li><RouterLink to="/przebieg">Przebieg</RouterLink></li>
                    <li><RouterLink to="/zasady">Zasady</RouterLink></li>
                    <li><RouterLink to="/oMnie">O mnie</RouterLink></li>
                    <li><RouterLink to="/kontakt">Kontakt</RouterLink></li>
                </ul>
                <div className="ham-wrapper">
                    <div className="ham1"></div>
                    <div className="ham2"></div>
                    <div className="ham3"></div>
                    <ul className='mobile-wrapper'>
                        <li className='mobile'><RouterLink to="/przebieg">Przebieg</RouterLink></li>
                        <li className='mobile'><RouterLink to="/zasady">Zasady</RouterLink></li>
                        <li className='mobile'><RouterLink to="/oMnie">O mnie</RouterLink></li>
                        <li className='mobile'><RouterLink to="/kontakt">Kontakt</RouterLink></li>
                    </ul>
                </div>
            </div>
            <div className="row header-container">
                <div className="col-12">
                    <div className="box box-1 header-image">
                    </div>
                </div>
            </div>
        </>
    )
}
export default Header