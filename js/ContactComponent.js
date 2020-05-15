import React from 'react';
import Footer from './Footer';

const ContactComponent = () => {
    return (
        <>
            <div className="col-4">
                <div className="box box-4">
                    <div className='slogan'>Bądźmy w kontakcie</div>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className='content-text-right'>Odpowiem na wszystkie Państwa pytania i wyjaśnię wątpliwości</div>
                    <div className='icon'><i className="fas fa-phone"></i>tel. 698 691 198</div>
                    <div className='icon'><i className="fas fa-at"></i>iwonakotwicka@wp.pl</div>
                    <div className='icon'><i className="fas fa-map-marked"></i>44-200 Rybnik, Wodna 65</div>
                    <div className="content-text-right">Adres do korespondencji. Chętnie się z Państwem spotkam po umówieniu terminu. Zapraszam.</div>
                </div>
            </div>
        </>

    )
}
export default ContactComponent