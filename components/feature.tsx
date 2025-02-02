import React from 'react'

export default function Feature() {
    return (
        <>
            <section className="feature-area-1 position-relative space-bottom">
                <div
                    className="feature-bg-wrap"
                    data-bg-src="assets/img/bg/gray-bg2.png"
                    data-mask-src="assets/img/bg/feature-bg-mask-1.png"
                >
                    <div className="feature-bg-shape1-1" />
                </div>
                <div className="container">
                    <div className="row gy-30 gx-30 justify-content-end">
                        <div className="col-xl-3 col-lg-4">
                            <div className="feature-card">
                                <div className="feature-card-bg-shape">
                                    <img
                                        src="assets/img/shape/feature-card-bg-shape1-1.png"
                                        alt="img"
                                    />
                                </div>
                                <div className="box-icon">
                                    <img src="assets/img/icon/feature-icon1-1.svg" alt="icon" />
                                </div>
                                <h3 className="box-title">Fundraising Trust</h3>
                                <p className="box-text">
                                    Stay updated with the latest news, events, and impact stories from
                                    our organization. Subscribe to our newsletter.
                                </p>
                                <a className="link-btn style2" href="about.html">
                                    View Details <i className="fa-solid fa-arrow-up-right ms-2" />
                                </a>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4">
                            <div className="feature-card">
                                <div className="feature-card-bg-shape">
                                    <img
                                        src="assets/img/shape/feature-card-bg-shape1-1.png"
                                        alt="img"
                                    />
                                </div>
                                <div className="box-icon">
                                    <img src="assets/img/icon/feature-icon1-2.svg" alt="icon" />
                                </div>
                                <h3 className="box-title">Charity Donate</h3>
                                <p className="box-text">
                                    Stay updated with the latest news, events, and impact stories from
                                    our organization. Subscribe to our newsletter.
                                </p>
                                <a className="link-btn style2" href="about.html">
                                    View Details <i className="fa-solid fa-arrow-up-right ms-2" />
                                </a>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4">
                            <div className="feature-card">
                                <div className="feature-card-bg-shape">
                                    <img
                                        src="assets/img/shape/feature-card-bg-shape1-1.png"
                                        alt="img"
                                    />
                                </div>
                                <div className="box-icon">
                                    <img src="assets/img/icon/feature-icon1-1.svg" alt="icon" />
                                </div>
                                <h3 className="box-title">Treatment Help</h3>
                                <p className="box-text">
                                    Stay updated with the latest news, events, and impact stories from
                                    our organization. Subscribe to our newsletter.
                                </p>
                                <a className="link-btn style2" href="about.html">
                                    View Details <i className="fa-solid fa-arrow-up-right ms-2" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>{" "}
            {/*==============================
About Area  
==============================*/}
            <div className="overflow-hidden space" id="about-sec">
                <div
                    className="shape-mockup about-bg-shape2-1 jump-reverse d-lg-inline-block d-none"
                    data-top="10%"
                    data-right="5%"
                >
                    <img src="assets/img/shape/heart-shape1.png" alt="shape" />
                </div>
                <div
                    className="shape-mockup about-bg-shape3-1 jump"
                    data-bottom="20%"
                    data-right="5%"
                >
                    <div className="color-masking2">
                        <div
                            className="masking-src"
                            data-mask-src="assets/img/shape/about_shape3_1.png"
                        />
                        <img src="assets/img/shape/about_shape3_1.png" alt="img" />
                    </div>
                </div>
                <div className="container">
                    <div className="row gy-60 align-items-center">
                        <div className="col-xl-6">
                            <div className="img-box3">
                                <div className="img1">
                                    <img src="assets/img/normal/about_3_1.png" alt="About" />
                                </div>
                                <div className="img2 jump">
                                    <img src="assets/img/normal/about_3_2.png" alt="img" />
                                </div>
                                <div className="about-shape3-1 jump-reverse">
                                    <div className="color-masking2">
                                        <div
                                            className="masking-src"
                                            data-mask-src="assets/img/shape/about_shape1_1.png"
                                        />
                                        <img src="assets/img/shape/about_shape1_1.png" alt="img" />
                                    </div>
                                </div>
                                <div className="year-counter movingX">
                                    <div className="year-counter_number">
                                        <span className="counter-number">266300</span>+ Children in
                                        Africa Need School
                                    </div>
                                    <a className="link-btn style2" href="contact.html">
                                        Become a Volunteer
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="title-area mb-40">
                                <span className="sub-title after-none before-none">
                                    <i className="text-theme far fa-heart" /> About Us
                                </span>
                                <h2 className="sec-title">
                                    Give Time, Change Lives Volunteer Opportunities
                                </h2>
                                <p>
                                    Our secure online donation platform allows you to make
                                    contribution quickly and safely. Choose from various payment
                                    methods and set up one-time or recurring donations with ease. Your
                                    support helps us continue our mission.
                                </p>
                            </div>
                            <div className="about-wrap3">
                                <p className="mb-30">
                                    Discover the inspiring stories of individuals and communities
                                    transformed by our programs. Our success stories highlight the
                                    real-life impact of your donations and the resilience of those we
                                    help. These narratives showcase the power of compassion &amp;
                                    generosity.
                                </p>
                                <div className="about-feature-grid">
                                    <div className="box-icon">
                                        <img src="assets/img/icon/about-icon3-1.svg" alt="icon" />
                                    </div>
                                    <div className="media-body">
                                        <h4 className="box-title">32 Years of Experiences</h4>
                                        <p className="box-text">
                                            Join our monthly giving program to provide consistent support
                                            to our initiatives. Regular contributions,
                                        </p>
                                    </div>
                                </div>
                                <div className="btn-wrap mt-40">
                                    <a href="about.html" className="th-btn style3 style-radius">
                                        About More <i className="fa-solid fa-arrow-up-right ms-2" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*==============================
Service Area  
==============================*/}
            <section
                className="overflow-hidden space"
                id="service-sec"
                data-bg-src="assets/img/bg/gray-bg2.png"
            >
                <div
                    className="shape-mockup service-bg-shape2-1 d-xxl-inline-block d-none"
                    data-bottom={0}
                    data-left={0}
                >
                    <img src="assets/img/shape/service_bg_shape3_1.png" alt="img" />
                </div>
                <div className="container">
                    <div className="row gx-80">
                        <div className="col-xl-6">
                            <div className="service-wrap2">
                                <div className="title-area">
                                    <span className="sub-title after-none before-none">
                                        <i className="far fa-heart text-theme" /> Our Services
                                    </span>
                                    <h2 className="sec-title">
                                        We’re Helping People i Need Around the World
                                    </h2>
                                    <p className="sec-text">
                                        Discover the inspiring stories of individuals and communities
                                        transformed by our programs. Our success stories highlight the
                                        real-life impact of your donations and the resilience of those
                                        we help. These narratives showcase the power of compassion and
                                        generosity.
                                    </p>
                                </div>
                                <div className="service-bg-shape2-2">
                                    <img src="assets/img/service/service-thumb3-1.png" alt="img" />
                                    <div className="service-bg-shape2-3">
                                        <div className="color-masking2">
                                            <div
                                                className="masking-src"
                                                data-mask-src="assets/img/shape/service_bg_shape3_2.png"
                                            />
                                            <img
                                                src="assets/img/shape/service_bg_shape3_2.png"
                                                alt="img"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="row gy-30">
                                <div className="col-12">
                                    <div className="service-card2">
                                        <div className="service-card-icon">
                                            <img
                                                src="assets/img/icon/service-icon/service-card-icon1-1.svg"
                                                alt="Icon"
                                            />
                                        </div>
                                        <div className="box-content">
                                            <h3 className="box-title">
                                                <a href="about.html">Healthy Foods</a>
                                            </h3>
                                            <p className="box-text">
                                                Share stories and experiences from current volunteers to
                                                inspire others to join. Allow user to sign up for volunteer
                                                opportunities.
                                            </p>
                                            <a href="about.html" className="icon-btn">
                                                <i className="fas fa-arrow-up-right" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="service-card2">
                                        <div className="service-card-icon">
                                            <img
                                                src="assets/img/icon/service-icon/service-card-icon1-2.svg"
                                                alt="Icon"
                                            />
                                        </div>
                                        <div className="box-content">
                                            <h3 className="box-title">
                                                <a href="about.html">Education Support</a>
                                            </h3>
                                            <p className="box-text">
                                                Share stories and experiences from current volunteers to
                                                inspire others to join. Allow user to sign up for volunteer
                                                opportunities.
                                            </p>
                                            <a href="about.html" className="icon-btn">
                                                <i className="fas fa-arrow-up-right" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="service-card2">
                                        <div className="service-card-icon">
                                            <img
                                                src="assets/img/icon/service-icon/service-card-icon1-3.svg"
                                                alt="Icon"
                                            />
                                        </div>
                                        <div className="box-content">
                                            <h3 className="box-title">
                                                <a href="about.html">Medical Help</a>
                                            </h3>
                                            <p className="box-text">
                                                Share stories and experiences from current volunteers to
                                                inspire others to join. Allow user to sign up for volunteer
                                                opportunities.
                                            </p>
                                            <a href="about.html" className="icon-btn">
                                                <i className="fas fa-arrow-up-right" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}
