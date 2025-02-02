import React from 'react'

export default function Complimentaries() {
    return (
        <div className="why-sec-1 overflow-hidden space-bottom overflow-hidden">
            <div className="container">
                <div className="row gx-80">
                    <div className="col-xl-6">
                        <div className="why-img-box1">
                            <div className="img1">
                                <img src="assets/img/normal/why-thumb1-1.png" alt="img" />
                            </div>
                            <div className="why-img-shape">
                                <img src="assets/img/shape/why_shape1_1.png" alt="img" />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="why-wrap-1">
                            <div className="title-area mb-25">
                                <span className="sub-title after-none before-none">
                                    <i className="far fa-heart text-theme" /> Why Choose Us
                                </span>
                                <h2 className="sec-title">Together, We Can Make A Difference</h2>
                                <p>
                                    Our secure online donation platform allows you to make
                                    contribution quickly and safely. Choose from various payment
                                    methods and set up one-time or recurring donations with ease.
                                    Your support helps us continue our mission.
                                </p>
                            </div>
                            <div className="progress-bar-wrap">
                                <h3 className="progress-bar_title">Donations</h3>
                                <div className="progress">
                                    <div
                                        className="progress-bar bg-theme"
                                        style={{ width: "55%" }}
                                    ></div>
                                    <div className="progress-value text-theme">
                                        <span className="counter-number">55</span>%
                                    </div>
                                </div>
                            </div>
                            <div className="progress-bar-wrap mt-20">
                                <h3 className="progress-bar_title">Charity</h3>
                                <div className="progress">
                                    <div
                                        className="progress-bar bg-theme2"
                                        style={{ width: "85%" }}
                                    ></div>
                                    <div className="progress-value text-theme2">
                                        <span className="counter-number">85</span>%
                                    </div>
                                </div>
                            </div>
                            <div className="mt-40">
                                <div className="row gy-40">
                                    <div className="col-sm-6">
                                        <div className="why-feature-grid">
                                            <div className="box-icon bg-theme">
                                                <img src="assets/img/icon/why-icon1-1.svg" alt="icon" />
                                            </div>
                                            <div className="media-body">
                                                <h4 className="box-title">Global Community</h4>
                                                <p className="box-text">
                                                    Volunteers are the heart of our organization. Join our
                                                    team to make a hands.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="why-feature-grid">
                                            <div className="box-icon bg-theme2">
                                                <img src="assets/img/icon/why-icon1-2.svg" alt="icon" />
                                            </div>
                                            <div className="media-body">
                                                <h4 className="box-title">Crowdfunding</h4>
                                                <p className="box-text">
                                                    Join our monthly giving program to provide consistent
                                                    support
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="btn-wrap mt-35">
                                <a href="about.html" className="th-btn">
                                    Learn More <i className="fas fa-arrow-up-right ms-2" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
