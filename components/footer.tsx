import { MINISTRY_CONTACTS, MINISTRY_MAIL, SocialMediaHandles } from '@/stores/personal/contacts'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        <footer className="footer-wrapper footer-layout2 shape-mockup-wrap">
            <div
                className="shape-mockup footer-bg-shape2-1 jump"
                style={{
                    top: "0px",
                    left: "0px"
                }}
            >
                <div className="color-masking2"
                >
                    <div
                        className="masking-src bg-mask"
                        style={{
                            maskImage: "url(\"assets/img/shape/footer-bg-shape2-1.png\")"
                        }}
                    />
                    <Image
                        src="/assets/img/shape/footer-bg-shape2-1.png" alt="img"
                        width={338}
                        height={176}
                    />
                </div>
            </div>
            <div
                className="shape-mockup footer-bg-shape2-2 jump-reverse"
                style={{
                    right: "0px",
                    bottom: "0px"
                }}
            >
                <div className="color-masking">
                    <div
                        className="masking-src bg-mask"
                        style={{
                            maskImage: "url(\"assets/img/shape/footer-bg-shape2-2.png\")"
                        }}
                    />
                    <Image
                        src="/assets/img/shape/footer-bg-shape2-2.png"
                        alt="img"
                        width={440}
                        height={261}
                    />
                </div>
            </div>
            <div className="widget-area space-top">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-md-6 col-xl-auto">
                            <div className="widget footer-widget">
                                <div className="th-widget-about">
                                    <div className="about-logo">
                                        <Link href="/">
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
                                    <div className="info-card style2">
                                        <div className="box-icon bg-theme">
                                            <i className="fal fa-phone" />
                                        </div>
                                        <div className="box-content">
                                            <p className="box-text">Call us any time:</p>
                                            {MINISTRY_CONTACTS.map((e, i) => {
                                                return (
                                                    <h4 className="box-title " key={i}>
                                                        <a className='no-underline' href={`tel:${e.number}`}>{e.fomarted}</a>
                                                    </h4>
                                                )
                                            })}

                                        </div>
                                    </div>
                                    <div className="info-card style2">
                                        <div className="box-icon bg-theme2">
                                            <i className="fal fa-envelope-open" />
                                        </div>
                                        <div className="box-content">
                                            <p className="box-text">Email us any time:</p>
                                            <h4 className="box-title">
                                                <a href={`mailto:${MINISTRY_MAIL}`}>{MINISTRY_MAIL}</a>
                                            </h4>
                                        </div>
                                    </div>
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
                            <div className="widget newsletter-widget footer-widget">
                                <h3 className="widget_title">Newsletter</h3>
                                <p className="footer-text mb-4">
                                    Stay Up-To-Date & Get Subscribe!
                                </p>
                                <form className="newsletter-form">
                                    <div className="form-group style-dark">
                                        <input
                                            className="form-control"
                                            type="email"
                                            placeholder="Enter your email"
                                            required
                                        />
                                    </div>
                                    <button type="submit" className="th-btn style5">
                                        <i className="fas fa-paper-plane" />
                                    </button>
                                </form>
                                <div className="th-social style6">
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
            <div className="copyright-wrap bg-theme text-center">
                <div className="container">
                    <p className="copyright-text">
                        Copyright {new Date().getFullYear()} <Link href="/">PHDMinistries</Link> All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>

    )
}
