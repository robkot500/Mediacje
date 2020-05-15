import React from 'react';
import Footer from './Footer';
import ContactComponent from './ContactComponent';
import AboutComponent from './AboutComponent';

const Contact = () => {
    return (
        <>
            <div className="row contact">
                <AboutComponent />
                <ContactComponent />
            </div>
            <Footer />
        </>

    )
}
export default Contact