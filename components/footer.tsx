import React from 'react'

export default function Footer() {
    return (
        <footer className="footer-wrapper footer-layout2">
            <div
                className="shape-mockup footer-bg-shape2-1 jump"
                data-left={0}
                data-top={0}
            >
                <div className="color-masking2">
                    <div
                        className="masking-src"
                        data-mask-src="assets/img/shape/footer-bg-shape2-1.png"
                    />
                    <img src="assets/img/shape/footer-bg-shape2-1.png" alt="img" />
                </div>
            </div>
            <div
                className="shape-mockup footer-bg-shape2-2 jump-reverse"
                data-right={0}
                data-bottom={0}
            >
                <div className="color-masking">
                    <div
                        className="masking-src"
                        data-mask-src="assets/img/shape/footer-bg-shape2-2.png"
                    />
                    <img src="assets/img/shape/footer-bg-shape2-2.png" alt="img" />
                </div>
            </div>
            <div className="widget-area space-top">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-md-6 col-xl-auto">
                            <div className="widget footer-widget">
                                <div className="th-widget-about">
                                    <div className="about-logo">
                                        <a href="index.html">
                                            <img src="assets/img/logo-white.svg" alt="Donat" />
                                        </a>
                                    </div>
                                    <p className="about-text mb-3">
                                        {" "}
                                        Our secure online donation platform allows you to make
                                        contributions quickly
                                    </p>
                                    <div className="info-card style2">
                                        <div className="box-icon bg-theme">
                                            <i className="fal fa-phone" />
                                        </div>
                                        <div className="box-content">
                                            <p className="box-text">Call us any time:</p>
                                            <h4 className="box-title">
                                                <a href="tel:16336547896">+163-3654-7896</a>
                                            </h4>
                                        </div>
                                    </div>
                                    <div className="info-card style2">
                                        <div className="box-icon bg-theme2">
                                            <i className="fal fa-envelope-open" />
                                        </div>
                                        <div className="box-content">
                                            <p className="box-text">Email us any time:</p>
                                            <h4 className="box-title">
                                                <a href="mailto:info@donat.com">info@donat.com</a>
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
                                            <a href="about.html">About Us</a>
                                        </li>
                                        <li>
                                            <a href="blog.html">Our News</a>
                                        </li>
                                        <li>
                                            <a href="about.html">Our Campaign</a>
                                        </li>
                                        <li>
                                            <a href="contact.html">Privacy policy</a>
                                        </li>
                                        <li>
                                            <a href="contact.html">Contact Us</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-xl-auto">
                            <div className="widget widget_nav_menu footer-widget">
                                <h3 className="widget_title">Our Service</h3>
                                <div className="menu-all-pages-container">
                                    <ul className="menu">
                                        <li>
                                            <a href="donate-now.html">Give Donation</a>
                                        </li>
                                        <li>
                                            <a href="faq.html">Education Support</a>
                                        </li>
                                        <li>
                                            <a href="faq.html">Food Support</a>
                                        </li>
                                        <li>
                                            <a href="faq.html">Health Support</a>
                                        </li>
                                        <li>
                                            <a href="gallery.html">Our Campaign </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-auto">
                            <div className="widget newsletter-widget footer-widget">
                                <h3 className="widget_title">Newsletter</h3>
                                <p className="footer-text mb-4">
                                    Subscribe to Our Newsletter. Regular inspection and feedback
                                    mechanisms
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
                                    <a href="https://www.facebook.com/">
                                        <i className="fab fa-facebook-f" />
                                    </a>
                                    <a href="https://www.twitter.com/">
                                        <i className="fab fa-twitter" />
                                    </a>
                                    <a href="https://www.linkedin.com/">
                                        <i className="fab fa-linkedin-in" />
                                    </a>
                                    <a href="https://www.behance.com/">
                                        <i className="fab fa-behance" />
                                    </a>
                                    <a href="https://www.vimeo.com/">
                                        <i className="fab fa-vimeo-v" />
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
                        Copyright 2024 <a href="index.html">Donat.</a> All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>

    )
}
