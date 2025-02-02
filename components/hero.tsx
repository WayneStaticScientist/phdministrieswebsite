import Link from 'next/link'
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
                            <span className="sub-title after-none">2 Corinthians 9:8-10</span>
                            <h1 className="hero-title">
                                <span className="text-xl">The Year of</span>
                                <span className="title2">
                                    Abudant  <span className="text-theme2 d-inline-block">Grace</span>
                                    <span className="title2">and  Harvest</span>

                                </span>
                            </h1>
                            <p className="text-xs">
                                8 And God is able to bless you abundantly, so that in all things at all times, having all that you need, you will abound in every good work.
                                9 As it is written: &quot;They have freely scattered their gifts to the poor;
                                their righteousness endures forever. &quot;
                                10 Now he who supplies seed to the sower and bread for food will also supply and increase your store of seed and will enlarge the harvest of your righteousness.
                            </p>
                            <div className="btn-wrap">
                                <Link href="/" className="th-btn no-underline">
                                    Partner with us
                                    <i className="fa-solid fa-arrow-up-right ms-2" />
                                </Link>
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
