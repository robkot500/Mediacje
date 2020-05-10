import React, { useEffect } from 'react';
import ReactDOM from "react-dom";
import { Link as RouterLink } from "react-router-dom";
import { Link } from 'react-scroll';








const Header = () => {
    useEffect(() => {
        const cont = document.querySelector(".ham-wrapper");
        // const mobile = document.querySelector('.mobile');
        console.log(cont);
        cont.addEventListener('click', function () {
            cont.classList.toggle('click')
            //mobile.classList.toggle('mobile-switch')
        })
    })
    return (
        <>
            <div className="row header-container">
                <div className="col-12 dwa">
                    <div className="box box-1 nav">
                        <ul>
                         <li className='start disable'><RouterLink to="/">Masz prawo do mediacji</RouterLink></li>
                            <li className='przebieg'><RouterLink to="/przebieg">Przebieg</RouterLink></li>
                            <li className='zasady'><RouterLink to="/zasady">Zasady</RouterLink></li>
                            <li className='oMnie'><RouterLink to="/oMnie">O mnie</RouterLink></li>
                            <li className='kontakt'><RouterLink to="/kontakt">Kontakt</RouterLink></li>
                        </ul>

                        <div className="ham-wrapper">
                            <div className="ham1"></div>
                            <div className="ham2"></div>
                            <div className="ham3"></div>
                            <ul className='mobile-wrapper'>
                                <li className='przebieg mobile'><RouterLink to="/przebieg">Przebieg</RouterLink></li>
                                <li className='zasady mobile'><RouterLink to="/zasady">Zasady</RouterLink></li>
                                <li className='oMnie mobile'><RouterLink to="/oMnie">O mnie</RouterLink></li>
                                <li className='kontakt mobile'><RouterLink to="/kontakt">Kontakt</RouterLink></li>
                            </ul>
                        </div>
                    </div>
                    <div className="header-image">

                    </div>
                </div>
            </div>
        </>
    )
}
export default Header