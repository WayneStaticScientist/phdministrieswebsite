import Link from 'next/link'
import React from 'react'

export default function DynamicContentWcu() {
    return (
        <>
            <div className="why-sec-1 mt-32 space-bottom overflow-hidden">
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
                                    <span className="sub-title after-none before-none"><i className="far fa-heart text-theme"></i>
                                        Partner With Us</span>
                                    <h2 className="sec-title">Together, We Can Make A Difference</h2>
                                    <p>
                                        PHD Ministries has a lot of activities which demand financial resources including infrastructure development and humanitarian support.
                                        PHD Ministries like any other God&apos;s Ministry is a non-profit making organisation which relies on Partners and donors for the success of all its projects which are meant to spread God&apos;s gospel.
                                        Without your partnering hand the success of the Ministries&apos; activities and projects slows down, therefore it is important for you to support God&apos;s work through giving.
                                        One who gives with an open heart is sowing a seed in God&apos;s field and he will reap in abundance.
                                        Imagine yourself having paid for a brick laid during construction, facilitating a seat during one service or feeding an orphan even just one meal would make a great difference in the eyes of God and He will reward you abundantly.
                                    </p>
                                </div>
                                <div className="progress-bar-wrap">
                                    <h3 className="progress-bar_title">Donations</h3>
                                    <div className="progress">
                                        <div className="progress-bar bg-theme" style={{ width: "55%" }} >
                                        </div>
                                        <div className="progress-value text-theme"><span className="counter-number">55</span>%</div>
                                    </div>
                                </div>
                                <div className="progress-bar-wrap mt-20">
                                    <h3 className="progress-bar_title">Charity</h3>
                                    <div className="progress">
                                        <div className="progress-bar bg-theme2" style={{ width: "85%" }}>
                                        </div>
                                        <div className="progress-value text-theme2"><span className="counter-number">85</span>%</div>
                                    </div>
                                </div>

                                <div className="btn-wrap mt-35">
                                    <Link href="/partnership" className="th-btn p-3 no-underline ">Learn More <i
                                        className="fas fa-arrow-up-right ms-2"></i></Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
