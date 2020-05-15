import React from 'react';
import Footer from './Footer'
import AboutComponent from './AboutComponent';
import ContactComponent from './ContactComponent';

const About = () => {
    return (
        <>
            <div className="row">
                <AboutComponent />
                <ContactComponent />
            </div>
            <Footer />
        </>
    )
}
export default About