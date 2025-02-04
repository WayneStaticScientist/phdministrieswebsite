import Footer from '@/components/footer'
import Header from '@/components/header'
import Hero2 from '@/components/secondary-headers/hero2'
import { MINISTRY_CONTACTS, MINISTRY_MAIL } from '@/stores/personal/contacts'
import React from 'react'

export default function ContactUsPage() {
    return (
        <>
            <Header />
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
                                        <p className="box-text">Discover more by visiting us or joining our community</p>
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
                                    <img src="assets/img/normal/contact_1_1.png" alt="img" />
                                </div>
                            </div>
                            <div className="col-xl-6">
                                {/* <!--==============================
                                Contact Area
==============================--> */}
                                <div className="contact-form-v1 contact-page-form">
                                    <form action="https://html.themeholy.com/donat/demo/mail.php" method="POST" className="contact-form style-border ajax-contact" >
                                        <div className="row">
                                            <div className="form-group style-border col-12">
                                                <input type="text" className="form-control" name="name" id="name" placeholder="Your Name" />
                                            </div>
                                            <div className="form-group style-border col-12">
                                                <input type="email" className="form-control" name="email" id="email" placeholder="Email Address" />
                                            </div>
                                            <div className="form-group style-border col-12">
                                                <input type="number" className="form-control" name="number" id="number" placeholder="Phone Number" />
                                            </div>
                                            <div className="form-group style-border col-12">
                                                <textarea name="message" id="message" className="form-control" placeholder="Type Your Message"></textarea>
                                            </div>
                                            <div className="form-btn col-12">
                                                <button className="th-btn">Send a Message</button>
                                            </div>
                                        </div>
                                        <p className="form-messages mb-0 mt-3"></p>
                                    </form>
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
