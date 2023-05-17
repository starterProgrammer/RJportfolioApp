import './contact.css'
import emailjs from '@emailjs/browser';
import React, { useRef, useState } from 'react';

function Contact() {
    const form = useRef();

    const YOUR_SERVICE_ID = 'service_91n2ild';
    const YOUR_TEMPLATE_ID = 'template_9q9ia9d'
    const YOUR_PUBLIC_KEY = 'mCRYB_xB-0BgtnSm1'


    const [done, setDone] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, form.current, YOUR_PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                setDone(true)
            }, (error) => {
                console.log(error.text);
                setDone(false)
            });
    };
    return (
        <div className='contact'>
            <div className='c-left'>
                <span>Get in Touch</span>
                <span>Contact Me </span>
                <div className='blur c-bulr'></div>
            </div>
            <div className='c-right'>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='user_name' className='user' placeholder='Name' />
                    <input type="email" name='user_email' className='user' placeholder='Email' />
                    <textarea type="text" name='messege' className='user' placeholder='Messege' />
                    <input type='submit' value='Send' className='button' />
                    {done && <span>Thanks For Contact Me!</span>}
                    <div className='blur cf-blur'></div>
                </form>
            </div>
        </div>
    )
}

export default Contact