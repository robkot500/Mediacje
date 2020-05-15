import React from 'react';
import Footer from './Footer'
import ContactComponent from './ContactComponent';

const Rules = () => {
    return (
        <>
            <div className="row">
                <div className="col-8">
                    <div className="box box-3">
                        <div className='slogan'>Zasady mediacji</div>
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
export default Rules