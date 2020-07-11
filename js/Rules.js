import React from 'react';
import Footer from './Footer'
import ContactComponent from './ContactComponent';

const Rules = () => {
    return (
        <>
            <div className="row">
                <div className="col-8">
                    <div className="box box-5">
                        <div className='slogan'>Zasady mediacji</div>
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="home-rules"></div>
                        <p className='text-rule'><i class="fas fa-play"></i>Dobrowolność</p>
                        <p className='text'>Strony powinny wyrazić zgodę na mediacje i mogą na każdym etapie postępowania zrezygnować. Mediator nie może stosować wobec uczestników postępowania żadnej presji lub zmusić do zawarcia porozumienia.</p>
                        <p className='text-rule'><i class="fas fa-play"></i>Bezstronność</p>
                        <p className='text'>Mediator powinien być bezstronny oraz neutralny. Jeżeli Mediator z jakichkolwiek przyczyn nie jest w stanie prowadzić bezstronnie mediacji powinien wycofać się z postępowania, również powinien zrezygnować, jeżeli zaistnieje jakikolwiek konflikt interesów ze stronami.</p>
                        <p className='text-rule'><i class="fas fa-play"></i>Poufność</p>
                        <p className='text'>Przebieg mediacji jest objęty tajemnicą. Mediator nie ma prawa ujawnić żadnych informacji uzyskanych w trakcie tego procesu, nie jest powoływany również na świadka w postępowaniu sądowym.</p>
                        <p className='text-rule'><i class="fas fa-play"></i>Neutralność</p>
                        <p className='text'>Mediator nie narzuca sposobu rozwiązania sporu. Porozumienie jest wypracowywane przez strony postępowania przy wspomagającej roli mediatora.</p>
                        <p className='text-rule'><i class="fas fa-play"></i>Akceptowalność</p>
                        <p className='text'>Mediator oraz sposób prowadzenia przez niego mediacji powinny być przez strony zaakceptowane</p>
                    </div>
                </div>
                <ContactComponent />
            </div>
            <Footer />
        </>
    )
}
export default Rules