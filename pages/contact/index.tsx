import Footer from '@/components/footer'
import Header from '@/components/header'
import React, { useState } from 'react'
import emailjs from '@emailjs/browser';
import { BiSmile } from 'react-icons/bi';
import { CgSpinner } from 'react-icons/cg';
import Hero2 from '@/components/secondary-headers/hero2'
import { Bounce, toast, ToastContainer } from 'react-toastify';
import { MINISTRY_CONTACTS, MINISTRY_MAIL } from '@/stores/personal/contacts'
import Image from 'next/image';
export default function ContactUsPage() {
    const makeToast = (message: string, error = false) => {
        if (error) {
            toast.error(message, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
            });
        } else {
            toast.success(message, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
            });
        }
    }
    emailjs.init({
        publicKey: process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY,
        limitRate: {
            id: 'app',
            throttle: 10000,
        },
    });
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [sending, setSending] = useState(false)
    const [messageSent, setMessageSent] = useState(false)
    const sendEmail = () => {
        if (sending) return
        if (name.length < 1) {
            return makeToast("Please provide your name", true)
        }
        if (email.length < 1) {
            return makeToast("Please provide your email", true)
        }
        if (message.length < 10) {
            return makeToast("message should at least have ten characters or more", true)
        }
        setSending(true)

        emailjs
            .send(`${process.env.NEXT_PUBLIC_SERVICE_ID}`, `${process.env.NEXT_PUBLIC_TEMPLATE_ID}`, {
                from_name: name,
                from_email: email,
                from_phone: phone,
                from_message: message
            }, {
                publicKey: process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY,
            })
            .then(
                () => {
                    makeToast("message was sent successfully")
                    setName("")
                    setPhone("")
                    setEmail("")
                    setMessage("")
                    setSending(false)
                    setMessageSent(true)
                },
                () => {
                    makeToast("message failed to send??")
                    setSending(false)
                },
            );
    }
    return (
        <>
            <ToastContainer />
            <Header page='contact' />
            <Hero2 title='Contact Us'
                image='assets/img/bg/hoteloffice.png'
                path={
                    [
                        {
                            title: "home",
                            path: "/"
                        },
                        {
                            title: "contactus",
                            path: ""
                        }
                    ]}
            />
            <div className="space overflow-hidden contact-area-1 position-relative z-index-common">
                <div className="container">
                    <div className="contact-wrap1">
                        <div className="row gx-60 gy-40">
                            <div className="col-xl-4 col-lg-5">
                                <div className="contact-feature">
                                    <div className="box-icon">
                                        <i className="fas fa-map-location-dot"></i>
                                    </div>
                                    <div className="media-body">
                                        <h3 className="box-title">Address</h3>
                                        <p className="box-text">
                                            No. 1 Sherwood Crescent, Cnr. Simon Mazorodze, Waterfalls, Harare, Zimbabwe
                                        </p>
                                    </div>
                                </div>
                                <div className="contact-feature">
                                    <div className="box-icon" data-theme-color="#FFAC00">
                                        <i className="fas fa-phone-volume"></i>
                                    </div>
                                    <div className="media-body">
                                        <h3 className="box-title">Phone</h3>
                                        <p className="box-text"><a className='no-underline' href={`tel:${MINISTRY_CONTACTS[0].number}`}>{MINISTRY_CONTACTS[0].fomarted}</a></p>
                                        <p className="box-text"><a className='no-underline' href={`tel:${MINISTRY_CONTACTS[1].number}`}>{MINISTRY_CONTACTS[1].fomarted}</a></p>
                                    </div>
                                </div>
                                <div className="contact-feature">
                                    <div className="box-icon" data-theme-color="#122F2A">
                                        <i className="fas fa-envelope"></i>
                                    </div>
                                    <div className="media-body">
                                        <h3 className="box-title">Email</h3>
                                        <p className="box-text"><a href={`mailto:${MINISTRY_MAIL}`}>{MINISTRY_MAIL}</a></p>
                                    </div>
                                </div>
                                <div className="contact-feature" data-theme-color="#FF5528">
                                    <div className="box-icon">
                                        <i className="fas fa-comment-question"></i>
                                    </div>
                                    <div className="media-body">
                                        <h3 className="box-title">Have Questions?</h3>
                                        <p className="box-text">Discover more by visiting us</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-8 col-lg-7">
                                <div className="contact-map">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1287.2410861304356!2d31.041809641626415!3d-17.882023830281728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931a36c1aa514bb%3A0xb5ee40da1333aabe!2sYadah%20Hotel!5e0!3m2!1sen!2szw!4v1738570144812!5m2!1sen!2szw"
                                        allowFullScreen={true}
                                        loading="lazy"
                                        className='w-full h-full'
                                        referrerPolicy="no-referrer-when-downgrade">
                                    </iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="contact-page-form-wrap space-top">
                        <div className="row gy-40">
                            <div className="col-xl-6 align-self-end">
                                <div className="contact-thumb1-1">
                                    <Image src="/assets/img/normal/contact_1_1.png" alt="img"
                                        width={869} height={614} />
                                </div>
                            </div>
                            <div className="col-xl-6">
                                {/* <!--==============================
                                Contact Area
==============================--> */}
                                <div className="contact-form-v1 contact-page-form h-full">
                                    <div className="contact-form style-border ajax-contact h-full" >
                                        {
                                            messageSent ? (
                                                <div className="flex  h-full justify-center items-center flex-col">
                                                    <BiSmile size={50} className='text-colorSecondary' />
                                                    <span className='text-center'>
                                                        You message was well received and we will respond as soon as possible . Please stay tuned
                                                    </span>

                                                </div>
                                            ) : (
                                                <div className="row">
                                                    <div className="form-group style-border col-12">
                                                        <input type="text"
                                                            value={name} onChange={(e) => setName(e.target.value)}
                                                            className="form-control" name="name" id="name" placeholder="Your Name" />
                                                    </div>
                                                    <div className="form-group style-border col-12">
                                                        <input type="email"
                                                            value={email} onChange={(e) => setEmail(e.target.value)}
                                                            className="form-control" name="email" id="email" placeholder="Email Address" />
                                                    </div>
                                                    <div className="form-group style-border col-12">
                                                        <input type="number"
                                                            value={phone} onChange={(e) => setPhone(e.target.value)}
                                                            className="form-control" name="number" id="number" placeholder="Phone Number" />
                                                    </div>
                                                    <div className="form-group style-border col-12">
                                                        <textarea value={message} name="message" id="message"
                                                            onChange={(e) => setMessage(e.target.value)}
                                                            placeholder="Type Your Message"></textarea>
                                                    </div>
                                                    <div className="form-btn col-12">
                                                        <button className="th-btn" onClick={sendEmail}>
                                                            {sending ? (<><CgSpinner size={20} className=' animate-spin' /></>) : (<>Send a Message</>)}
                                                        </button>
                                                    </div>
                                                </div>)
                                        }
                                        <p className="form-messages mb-0 mt-3"></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <Footer />
        </>
    )
}
