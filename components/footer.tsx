import { MINISTRY_CONTACTS, MINISTRY_MAIL, SocialMediaHandles } from '@/stores/personal/contacts'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export default function Footer() {
    const [loaded, setLoaded] = useState(false)
    useEffect(() => {
        setLoaded(true)
    }, [])
    return (
        <>{loaded ? (<>
            <>
                <footer className="footer-wrapper footer-default"
                    style={{
                        backgroundImage: "url(assets/img/bg/footer-default-bg-mask.png)"
                    }}>
                    <div className="footer-bg-shape2 shape-mockup jump"
                        style={{
                            top: "20%",
                            right: 0
                        }} >
                        <img src="assets/img/shape/footer-bg-shape3.png" alt="img" />
                    </div>
                    <div className="footer-bg-shape3 shape-mockup d-none" style={{
                        bottom: 0,
                        right: 0
                    }}>
                        <img src="assets/img/shape/footer-bg-shape2.png" alt="img" />
                    </div>
                    <div className="footer-top">
                        <div className="container">
                            <div className="subscribe-box">
                                <div className="row gy-40 align-items-center justify-content-center">
                                    <div className="col-xl-6">
                                        <h4 className="subscribe-box_title">Subscribe to Our Newsletter</h4>
                                        <p className="subscribe-box_text">Regular inspections and feedback mechanisms</p>
                                    </div>
                                    <div className="col-xl-6 col-lg-8">
                                        <form className="newsletter-form">
                                            <div className="form-group">
                                                <input className="form-control" type="email" placeholder="Enter Email Address" required />
                                            </div>
                                            <button type="submit" className="th-btn style3"><i className="fas fa-paper-plane"></i></button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="widget-area">
                        <div className="container">
                            <div className="row justify-content-between">
                                <div className="col-md-6 col-xl-auto">
                                    <div className="widget footer-widget">
                                        <div className="th-widget-about">
                                            <div className="p-3">
                                                <Link href="/" >
                                                    <Image src="/assets/img/logo.png"
                                                        alt="Donat"
                                                        width={98}
                                                        height={80}
                                                    />
                                                </Link>
                                            </div>
                                            <p className="about-text mb-3">
                                                The Praise That Pushes Away Darkness
                                            </p>
                                            <a href="#" className="th-btn p-3 no-underline"><i className="fas fa-heart me-2"></i> Donate Now</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-xl-auto">
                                    <div className="widget widget_nav_menu footer-widget">
                                        <h3 className="widget_title">Quick Links</h3>
                                        <div className="menu-all-pages-container">
                                            <ul className="menu">
                                                <li>
                                                    <Link className='no-underline' href="/partnership">Partnership</Link>
                                                </li>
                                                <li>
                                                    <Link className='no-underline' href="/visit">Visit Us</Link>
                                                </li>
                                                <li>
                                                    <Link className='no-underline' href="/yadahtv">Yadah Tv</Link>
                                                </li>
                                                <li>
                                                    <Link className='no-underline' href="/donations">Donations</Link>
                                                </li>
                                                <li>
                                                    <Link className='no-underline' href="/contact">Contact Us</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-xl-auto">
                                    <div className="widget widget_nav_menu footer-widget">
                                        <h3 className="widget_title">About</h3>
                                        <div className="menu-all-pages-container">
                                            <ul className="menu">
                                                <li>
                                                    <Link href="/phdministries" className='no-underline'>Phd Ministries</Link>
                                                </li>
                                                <li>
                                                    <Link href="/wateroflife" className='no-underline'>Water of Life</Link>
                                                </li>
                                                <li>
                                                    <Link href="/offices" className='no-underline'>Our offices</Link>
                                                </li>

                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-xl-auto">
                                    <div className="widget footer-widget">
                                        <div className="th-widget-contact">
                                            <h3 className="widget_title">Contact Us</h3>
                                            <div className="info-card">
                                                <div className="box-icon">
                                                    <i className="fal fa-phone"></i>
                                                    <div className="bg-shape1 bg-mask"
                                                        style={{
                                                            maskImage: 'url(assets/img/shape/info_card_icon_bg_shape_1_1.png)'
                                                        }}></div>
                                                    <div className="bg-shape2 bg-mask"
                                                        style={{
                                                            maskImage: 'url(assets/img/shape/info_card_icon_bg_shape_1_1.png)'
                                                        }}></div>
                                                </div>
                                                <div className="box-content">
                                                    <p className="box-text">Call us any time:</p>
                                                    <h4 className="box-title">{MINISTRY_CONTACTS.map((e, i) => {
                                                        return (
                                                            <h4 className="box-title " key={i}>
                                                                <a className='no-underline' href={`tel:${e.number}`}>{e.fomarted}</a>
                                                            </h4>
                                                        )
                                                    })}</h4>
                                                </div>
                                            </div>
                                            <div className="info-card">
                                                <div className="box-icon">
                                                    <i className="fal fa-envelope-open"></i>
                                                    <div className="bg-shape1 bg-mask"
                                                        style={{
                                                            maskImage: 'url(assets/img/shape/info_card_icon_bg_shape_1_1.png)'
                                                        }}></div>
                                                    <div className="bg-shape2 bg-mask"
                                                        style={{
                                                            maskImage: 'url(assets/img/shape/info_card_icon_bg_shape_1_1.png)'
                                                        }}
                                                    ></div>
                                                </div>
                                                <div className="box-content">
                                                    <p className="box-text">Email us any time:</p>
                                                    <h4 className="box-title">   <a className='no-underline' href={`mailto:${MINISTRY_MAIL}`}>{MINISTRY_MAIL}</a></h4>
                                                </div>
                                            </div>
                                            <div className="th-social style2">
                                                <a href={`${SocialMediaHandles.facebook.url}`}>
                                                    <i className="fab fa-facebook-f" />
                                                </a>
                                                <a href={`${SocialMediaHandles.twitter.url}`}>
                                                    <i className="fab fa-twitter" />
                                                </a>
                                                <a href={`${SocialMediaHandles.youtube.url}`}>
                                                    <i className="fab fa-youtube" />
                                                </a>
                                                <a href={`${SocialMediaHandles.instagram.url}`}>
                                                    <i className="fab fa-instagram" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="copyright-wrap m-0 p-0">
                        <div className="container">
                            <div className="row justify-content-center gy-3  align-items-center">
                                <div className="col-lg-12">
                                    <p className="copyright-text text-center">
                                        <i className="fal fa-copyright"></i>     Copyright {new Date().getFullYear()} <Link href="/">PHDMinistries</Link> All Rights Reserved.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer >
            </></>) : <></>}
        </>
    )
}
