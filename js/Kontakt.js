import React from 'react';
import Footer from './Footer'

const Kontakt = () => {
    return (
        <>
        <div className="row">


            <div className="col-9">
                <div className="box box-2">
                    <div className="contact">

                        <h3>Email Us</h3>
                        <form className ='conact-form'>


                            <p>
                                <label>Name</label>
                                <input type="text" name="name" className='name'/>
                            </p>
                            <p>
                                <label>Surname</label>
                                <input type="text" name="surname" className='surname'/>
                            </p>
                            <p>
                                <label>Email Address</label>
                                <input type="text" name="email" className='email'/>
                            </p>
                            <p>
                                <label>Phone Number</label>
                                <input type="text" name="phone" className='phone'/>
                            </p>
                            <p className="full">
                                <label>Message</label>
                                <textarea name="message" rows="5" className='message'></textarea>
                            </p>
                            <p className="full">
                                <button type='submit'>Submit</button>
                            </p>


                        </form>


                </div>
            </div>
        </div>


        <div className="col-3">
            <div className="box box-2">
                <h1>K2K2K2K2K2K2K</h1>
            </div>
        </div>



        </div>




        </>
    )
}
export default Kontakt