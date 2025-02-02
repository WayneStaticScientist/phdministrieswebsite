import React from 'react'

export default function Hero() {
    return (
        <div className="th-hero-wrapper  hero-3" id="hero">
            <div
                className=" shape-mockup hero-shape-3-1 d-lg-block d-none"
                data-top="20%"
                data-left="50%"
            >
                <div className="color-masking shake">
                    <div
                        className="masking-src"
                        data-mask-src="assets/img/hero/hero-bg-shape2-3.png"
                    />
                    <img src="assets/img/hero/hero-bg-shape2-3.png" alt="shape" />
                </div>
            </div>
            <div
                className=" shape-mockup hero-shape-3-2 jump"
                data-top="25%"
                data-left="5%"
            >
                <div className="color-masking">
                    <div
                        className="masking-src"
                        data-mask-src="assets/img/hero/hero-bg-shape2-1.png"
                    />
                    <img src="assets/img/hero/hero-bg-shape2-1.png" alt="shape" />
                </div>
            </div>
            <div
                className="shape-mockup  hero-shape-3-3 jump"
                data-bottom={0}
                data-left="-2%"
            >
                <div className="color-masking2">
                    <div
                        className="masking-src"
                        data-mask-src="assets/img/shape/hand-shape3.png"
                    />
                    <img src="assets/img/shape/hand-shape3.png" alt="shape" />
                </div>
            </div>
            <div
                className="hero-bg-3-1 bg-hero "
                style={{ backgroundImage: "url(assets/img/hero/hero_bg_3_1.jpg)" }}
                data-bg-src="assets/img/hero/hero_bg_3_1.jpg"
                data-mask-src="assets/img/hero/hero-bg-shape3-1.png"
            />
            <div className="container ">
                <div className="row gx-40 align-items-center">
                    <div className="col-lg-6">
                        <div className="hero-style3">
                            <span className="sub-title after-none">Give Hope For Homeless</span>
                            <h1 className="hero-title">
                                <span className="title1">Donate For A</span>
                                <span className="title2">
                                    Better <span className="text-theme2 d-inline-block">World</span>
                                </span>
                            </h1>
                            <p className="hero-text">
                                Explore the variety of volunteer opportunities available. From event
                                planning and fundraising to fieldwork and administrative support
                            </p>
                            <div className="btn-wrap">
                                <a href="about.html" className="th-btn">
                                    Discover Now
                                    <i className="fa-solid fa-arrow-up-right ms-2" />
                                </a>
                                <a
                                    href="https://www.youtube.com/watch?v=_sI_Ps7JSEk"
                                    className="play-btn style3 popup-video"
                                >
                                    <i className="fas fa-play" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
