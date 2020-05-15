import React from 'react';
import Footer from './Footer'

const AboutComponent = () => {
    return (
        <>
            <div className="col-8">
                <div className="box box-3">
                    <div className='slogan'>Kilka słów o mnie</div>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className='mediator-wrapper'>
                        <div className='mediator'></div>
                    </div>
                    <p className='content-text-left'>Jestem mediatorem od 2009 roku. Specjalizuję się w mediacji rodzinnej, do tej roli przygotowywałam się pod okiem specjalistów z Polskiego Centrum Mediacji w Warszawie. Moja zawodowa ścieżka od ponad 20 lat związana jest z problematyką dziecka i rodziny. co jest tego konsekwencją.</p>
                    <p className='content-text-left'>Wykształcenie zdobyłam na Uniwersytecie Śląskim w Katowicach, Uniwersytecie Pedagogicznym w Krakowie, Akademii Jana Długosza w Częstochowie, Wyższej Szkole Biznesu i Nauk o Zdrowiu, Instytucie Amity w Warszawie i Centrum EEG BFB we Wrocławiu.</p>
                    <p className='content-text-left'>Pracowałam jako nauczyciel, wychowawca, pedagog i terapeuta z zakresu pomocy psychologiczno-pedagogicznej, autyzmu, neuroterapeuta i trener Treningu Zastępowania Agresji.</p>
                    <p className='content-text-left'>Jestem wpisana na listę Mediatorów Stałych prowadzoną przez Sąd Okręgowy w Gliwicach co jest gwarancją rzetelności i kompetencji.</p>
                    <p className='content-text-left'>Jestem przekonana ze potrafię Państwu pomóc w skutecznie rozwiązać konflikty wierzę w dialog, zdrowy rozsądek.</p>
                </div>
            </div>
        </>
    )
}
export default AboutComponent