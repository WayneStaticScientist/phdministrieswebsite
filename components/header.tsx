import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="th-header header-layout2">
            <div className="sticky-wrapper">
                {/* Main Menu Area */}
                <div className="container">
                    <div className="menu-area">
                        <div className="header-logo">
                            <a href="index.html">
                                <img src="assets/img/logo.svg" alt="Donat" />
                            </a>
                        </div>
                        <div className="menu-area-wrap">
                            <nav className="main-menu d-none d-lg-block">
                                <ul>
                                    <li className="menu-item-has-children">
                                        <a href="index.html">Home</a>
                                        <ul className="mega-menu mega-menu-content">
                                            <li>
                                                <div className="container">
                                                    <div className="row gy-4">
                                                        <div className="col-lg-4">
                                                            <div className="mega-menu-box">
                                                                <div className="mega-menu-img">
                                                                    <img
                                                                        src="assets/img/pages/index.jpg"
                                                                        alt="Home One"
                                                                    />
                                                                    <div className="btn-wrap">
                                                                        <a href="index.html" className="th-btn ">
                                                                            Multipage
                                                                        </a>
                                                                        <a href="home-1-op.html" className="th-btn ">
                                                                            Onepage
                                                                        </a>
                                                                        <a href="home-1-rtl.html" className="th-btn ">
                                                                            RTL
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                                <h3 className="mega-menu-title">
                                                                    <a href="index.html">Home One</a>
                                                                </h3>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4">
                                                            <div className="mega-menu-box">
                                                                <div className="mega-menu-img">
                                                                    <img
                                                                        src="assets/img/pages/home-2.jpg"
                                                                        alt="Home Two"
                                                                    />
                                                                    <div className="btn-wrap">
                                                                        <a href="home-2.html" className="th-btn ">
                                                                            Multipage
                                                                        </a>
                                                                        <a href="home-2-op.html" className="th-btn ">
                                                                            Onepage
                                                                        </a>
                                                                        <a href="home-2-rtl.html" className="th-btn ">
                                                                            RTL
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                                <h3 className="mega-menu-title">
                                                                    <a href="home-2.html">Home Two</a>
                                                                </h3>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4">
                                                            <div className="mega-menu-box">
                                                                <div className="mega-menu-img">
                                                                    <img
                                                                        src="assets/img/pages/home-3.jpg"
                                                                        alt="Home Three"
                                                                    />
                                                                    <div className="btn-wrap">
                                                                        <a href="home-3.html" className="th-btn ">
                                                                            Multipage
                                                                        </a>
                                                                        <a href="home-3-op.html" className="th-btn ">
                                                                            Onepage
                                                                        </a>
                                                                        <a href="home-3-rtl.html" className="th-btn ">
                                                                            RTL
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                                <h3 className="mega-menu-title">
                                                                    <a href="home-3.html">Home Three</a>
                                                                </h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="about.html">About Us</a>
                                    </li>
                                    <li className="menu-item-has-children">
                                        <a href="#">Donations</a>
                                        <ul className="sub-menu">
                                            <li>
                                                <a href="donation.html">Donations</a>
                                            </li>
                                            <li>
                                                <a href="donation-details.html">Donation Details</a>
                                            </li>
                                            <li>
                                                <a href="donate-now.html">Donate Now</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="menu-item-has-children">
                                        <a href="#">Pages</a>
                                        <ul className="sub-menu">
                                            <li className="menu-item-has-children">
                                                <a href="#">Shop</a>
                                                <ul className="sub-menu">
                                                    <li>
                                                        <a href="shop.html">Shop</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-details.html">Shop Details</a>
                                                    </li>
                                                    <li>
                                                        <a href="cart.html">Cart Page</a>
                                                    </li>
                                                    <li>
                                                        <a href="checkout.html">Checkout</a>
                                                    </li>
                                                    <li>
                                                        <a href="wishlist.html">Wishlist</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="team.html">Volunteers</a>
                                            </li>
                                            <li>
                                                <a href="team-details.html">Volunteer Details</a>
                                            </li>
                                            <li>
                                                <a href="add-team.html">Become A Volunteer</a>
                                            </li>
                                            <li>
                                                <a href="gallery.html">Gallery</a>
                                            </li>
                                            <li>
                                                <a href="pricing.html">Pricing</a>
                                            </li>
                                            <li>
                                                <a href="faq.html">FAQS</a>
                                            </li>
                                            <li>
                                                <a href="testimonial.html">Testimonials</a>
                                            </li>
                                            <li>
                                                <a href="error.html">Error Page</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="menu-item-has-children">
                                        <a href="#">Blog</a>
                                        <ul className="sub-menu">
                                            <li>
                                                <a href="blog.html">Blog</a>
                                            </li>
                                            <li>
                                                <a href="blog-details.html">Blog Details</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="contact.html">Contact Us</a>
                                    </li>
                                </ul>
                            </nav>
                            <p className="header-notice">
                                <img
                                    className="me-1"
                                    src="assets/img/icon/heart-icon.svg"
                                    alt="img"
                                />
                                Are you ready to help them? Let’s become a volunteers...
                            </p>
                        </div>
                        <div className="header-button">
                            <button
                                type="button"
                                className="icon-btn style2 searchBoxToggler d-lg-block d-none"
                            >
                                <i className="far fa-search" />
                            </button>
                            <button type="button" className="icon-btn sideMenuToggler">
                                <span className="badge">5</span>
                                <i className="fa-regular fa-cart-shopping" />
                            </button>
                            <a href="contact.html" className="th-btn style3 d-xl-block d-none">
                                <i className="fas fa-heart me-2" /> Donate Now
                            </a>
                            <button type="button" className="icon-btn th-menu-toggle d-lg-none">
                                <i className="far fa-bars" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>

    );
};

export default Header;