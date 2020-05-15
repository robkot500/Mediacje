import React from 'react';
import Footer from './Footer'
import ContactComponent from './ContactComponent';

const Home = () => {
    return (
        <>
            <div className="row">
                <div className="col-8">
                    <div className="box box-3">
                        <div className='slogan'>Mediacje</div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>
                </div>
                <ContactComponent />
            </div>
            <Footer />
        </>

    )
}
export default Home