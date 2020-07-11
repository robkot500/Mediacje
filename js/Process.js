import React from 'react';
import Footer from './Footer';
import ContactComponent from './ContactComponent';

const Process = () => {
    return (
        <>
            <div className="row">
                <div className="col-8">
                    <div className="box box-5">
                        <div className='slogan'>Przebieg mediacji</div>
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="process-img-wrapper">
                            <div className="process-img">
                            </div>
                        </div>
                        <p className="text home-text1">Mediacja może się rozpocząć z inicjatywy:</p>
                        <ul>
                            <li><i class="fas fa-play"></i>jednej ze stron konfliktu (mediator nawiązuje kontakt z drugą stroną)</li>
                            <li><i class="fas fa-play"></i>obydwu stron konfliktu</li>
                            <li><i class="fas fa-play"></i>sąd może skierować strony do mediacji</li>
                        </ul>
                        <p className="text">Przystąpienie do mediacji jest dobrowolne, a każda ze stron może zrezygnować z mediacji na każdym etapie postępowania.
                        Mediator zapoznaje się ze sprawą i jeżeli ta kwalifikuje się do mediacji a obie strony wyrażają zgodę na rozpoczęcie procesu, następuje ustalenie terminu pierwszego spotkania.
                        Na spotkaniu informacyjnym, mediator informuje strony na czym polega mediacja a strony potwierdzają zgodę.</p>
                        <p className="text text-slogan">Uwieńczeniem mediacji jest podpisanie ugody która po zatwierdzeniu przez sąd ma moc ugody zawartej przed sądem.</p>
                        <p className="text">Na posiedzeniu mediacyjnym strony prezentują swoje stanowiska oraz szukają możliwości rozwiązania sporu i wypracowania porozumienia satysfakcjonującego obie strony . Mediator natomiast pomaga w sposób bezstronny , nie rozstrzygając sporu pomiędzy stronami oraz dba o to aby atmosfera była właściwa. Istnieje możliwość przeprowadzenia mediacji pośredniej jeżeli z różnych względów nie ma możliwości aby strony się spotkały.</p>

                    </div>
                </div>
                <ContactComponent />
            </div>
            <Footer />
        </>

    )
}
export default Process