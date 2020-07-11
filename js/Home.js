import React from 'react';
import Footer from './Footer'
import ContactComponent from './ContactComponent';

const Home = () => {
    return (
        <>
            <div className="row">
                <div className="col-8">
                    <div className="box box-5">
                        <div className='slogan'>Mediacje</div>
                        <div className="line"></div>
                        <div className="line"></div>
                        <div class="home-img-wrapper">
                            <div className="home-img">
                            </div>
                        </div>
                        <p className="text home-text1">Mediacja to dobrowolne, pozasądowe postępowanie z udziałem neutralnej osoby trzeciej - mediatora, która pomaga spierającym się stronom w wypracowaniu obustronnie akceptowalnego porozumienia. Jest to bardzo efektywne narzędzie zarządzania konfliktami, pomagające rozładować negatywne emocje i w efekcie powodujące zbliżenie stanowisk.</p>
                        <p className="text">Mediacja jest mniej formalna i bardziej elastyczna od postępowania sądowego, strony mają możliwość wyrażenia swoich uczuć a spotkania odbywają się w bardziej przyjaznej atmosferze, w obecności mediatora dbającego aby rozmowa przebiegała w sposób uporządkowany i spokojny. Dlatego też, jest to również szansa na usunięcie rzeczywistych źródeł konfliktu, co ma duże znaczenie w kontekście wzajemnych relacji stron w przyszłości.</p>
                        <p className="text text-slogan">Mediator nie staje po żadnej ze stron, tylko je wspiera w poszukiwaniu rozwiązania.</p>
                        <p className="text">Mediator nie staje po żadnej ze stron, tylko je wspiera w poszukiwaniu rozwiązania. Wyłącznie od stron zależy kształt porozumienia, a jeżeli strony nie porozumieją się, mediator musi to zaakceptować. Celem mediacji nie jest ustalenie kto ma rację, ale wypracowanie wspólnie akceptowalnego rozwiązania. Ugoda zawarta przed mediatorem, po zatwierdzeniu przez sąd ma moc wyroku sądowego.</p>
                        <p className="text">Szansa na szybkie rozwiązanie sporu, uproszczona procedura i dużo niższe koszty w porównaniu do postępowania sądowego powodują, że mediacje zdobywają coraz większą popularność. Samodzielne rozwiązanie konfliktu na drodze nieformalnej daje szansę na bezkonfliktową relację w przyszłości.</p>
                    </div>
                </div>
                <ContactComponent />
            </div>
            <Footer />
        </>

    )
}
export default Home