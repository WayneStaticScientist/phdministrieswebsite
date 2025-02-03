import Faqs from '@/components/faqs'
import Footer from '@/components/footer'
import Header from '@/components/header'
import Hero2 from '@/components/secondary-headers/hero2'
import { MINISTRY_CONTACTS, MINISTRY_MAIL, SocialMediaHandles } from '@/stores/personal/contacts'
import Image from 'next/image'
import React from 'react'

export default function VisitUs() {
    return (
        <>
            <Header />
            <Hero2 title='Visit Us'
                image='assets/img/bg/visitbg.jpg'
                path={
                    [
                        {
                            title: "home",
                            path: "/"
                        },
                        {
                            title: "visit",
                            path: ""
                        }
                    ]}
            />
            <section className="space">
                <div className="container">
                    <div className="team-details-wrap mb-80">
                        <div className="row gx-60 gy-40">
                            <div className="col-xl-5">
                                <div className="about-card-img">
                                    <img src="assets/img/bg/hotel.png" alt="team image" />
                                </div>
                            </div>
                            <div className="col-xl-7">
                                <div className="about-card">
                                    <div className="about-card-title-wrap">
                                        <div className="media-left">
                                            <h2 className="h3 about-card_title mt-n2">Yadah Hotel</h2>
                                            <p className="about-card_desig">hotel by prophetwaltermagaya</p>
                                        </div>
                                        <div className="th-social style4">
                                            <a target="_blank" href={SocialMediaHandles.facebook.url}><i className="fab fa-facebook-f"></i></a>
                                            <a target="_blank" href={SocialMediaHandles.twitter.url}><i className="fab fa-twitter"></i></a>
                                            <a target="_blank" href={SocialMediaHandles.instagram.url}><i className="fab fa-instagram"></i></a>
                                            <a target="_blank" href={SocialMediaHandles.youtube.url}><i className="fab fa-youtube"></i></a>
                                        </div>
                                    </div>

                                    <p className="about-card_text">
                                        Visit the Guest House at Yadah Hotel.The Man Of God Prophet W Magaya Welcomes you at Yadah Hotel
                                    </p>
                                    <div className="team-details-about-info">
                                        <div className="about-contact">
                                            <div className="icon">
                                                <i className="fas fa-location"></i>
                                            </div>
                                            <div className="media-left">
                                                <h6 className="about-contact-title">Location</h6>
                                                <p className=" text-xs">168 Smuts Road Prospect, Harare</p>
                                            </div>
                                        </div>
                                        <div className="about-contact">
                                            <div className="icon">
                                                <i className="fas fa-envelope"></i>
                                            </div>
                                            <div className="media-left">
                                                <h6 className="about-contact-title">Email Address</h6>
                                                <a href={`mailto:${{ MINISTRY_MAIL }}`} className="text-xs no-underline text-primary">{MINISTRY_MAIL}</a>
                                            </div>
                                        </div>
                                        <div className="about-contact">
                                            <div className="icon">
                                                <i className="fas fa-phone"></i>
                                            </div>
                                            <div className="media-left">
                                                <h6 className="about-contact-title">Phone Number</h6>
                                                <a href={`tel:${MINISTRY_CONTACTS[0].number}`} className="no-underline text-xs">{MINISTRY_CONTACTS[0].fomarted}</a>
                                            </div>
                                        </div>
                                        <div className="about-contact">
                                            <div className="icon">
                                                <i className="fas fa-fax"></i>
                                            </div>
                                            <div className="media-left">
                                                <h6 className="about-contact-title">Phone Number 2</h6>
                                                <a href={`tel:${MINISTRY_CONTACTS[0].number}`} className="no-underline text-xs">{MINISTRY_CONTACTS[1].fomarted}</a>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="https://www.google.com/maps/place/Yadah+Hotel/data=!4m2!3m1!1s0x0:0xb5ee40da1333aabe?sa=X&ved=1t:2428&ictx=111" className="th-btn no-underline">View Location In Google <i className="fas fa-arrow-up-right ms-2"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <div className="video-area-3 shape-mockup-wrap ">
                <div className="shape-mockup video-bg-shape3-1"
                    style={{
                        top: "0px",
                        left: "0px",
                        bottom: "0px"
                    }}
                >
                    <Image src="/assets/img/shape/video_bg_shape3_1.png"
                        alt="img"
                        width={133}
                        height={640}
                    />
                </div>
                <div className="shape-mockup video-bg-shape3-2"
                    style={{
                        top: "0px",
                        right: "0px",
                        bottom: "0px"
                    }}>
                    <Image src="/assets/img/shape/video_bg_shape3_2.png" alt="img"
                        width={134} height={640} />
                </div>
                <div className=" video-box-center">
                    <Image src="/assets/img/normal/yadah-main.png" alt="img" width={1920} height={640} />
                    <h2 className="play-btn style7 popup-video text-5xl font-extrabold text-white">
                        YADAH HOTEL
                    </h2>
                </div>
            </div>
            {/* <div className="">
                <div className="container">
                    <div className="counter-wrap style2 bg-primary ">
                        <div className="counter-card">
                            <div className="media-body">
                                <h2 className="box-number text-white"><span className="counter-number">15</span>k<span className="fw-light">+</span></h2>
                                <p className="box-text text-white">Incredible Volunteers</p>
                            </div>
                        </div>
                        <div className="divider"></div>
                        <div className="counter-card">
                            <div className="media-body">
                                <h2 className="box-number text-white"><span className="counter-number">1</span>k<span className="fw-light">+</span></h2>
                                <p className="box-text text-white">Successful Campaigns</p>
                            </div>
                        </div>
                        <div className="divider"></div>
                        <div className="counter-card">
                            <div className="media-body">
                                <h2 className="box-number text-white"><span className="counter-number">400</span><span className="fw-light">+</span></h2>
                                <p className="box-text text-white">Monthly Donors</p>
                            </div>
                        </div>
                        <div className="divider"></div>
                        <div className="counter-card">
                            <div className="media-body">
                                <h2 className="box-number text-white"><span className="counter-number">35</span>k<span className="fw-light">+</span></h2>
                                <p className="box-text text-white">Team Support</p>
                            </div>
                        </div>
                        <div className="divider"></div>
                    </div>
                </div>
            </div> */}
            <div className='mt-36'></div>
            <Faqs />
            <Footer />
        </>
    )
}
