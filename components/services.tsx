import React from 'react'

export default function Services() {
    return (
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
    )
}
