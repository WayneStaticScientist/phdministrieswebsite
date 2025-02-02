import React from 'react'

export default function Citations() {
    return (
        <>
            <section className="" id="contact-sec">
                <div className="cta-wrap3 style2 bg-theme-dark">
                    <div className="row gx-0">
                        <div className="col-xl-7">
                            <div className="cta-content-wrap">
                                <div className="title-area text-xl-start text-center mb-40">
                                    <span className="sub-title after-none before-none justify-content-xl-start justify-content-center">
                                        PRAYER REQUEST
                                    </span>
                                    <h2 className="sec-title text-white text-sm">
                                        We welcome visitors from across the globe to stay with us and witness first-hand proof that Jesus Christ is the same yesterday, today and forever!
                                    </h2>
                                </div>
                                <form
                                    action="https://html.themeholy.com/donat/demo/mail.php"
                                    method="POST"
                                    className="contact-form ajax-contact"
                                >
                                    <div className="row">
                                        <div className="form-group col-md-6 style-dark">
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="name"
                                                id="name"
                                                placeholder="Your name"
                                            />
                                        </div>
                                        <div className="form-group col-md-6 style-dark">
                                            <input
                                                type="email"
                                                className="form-control"
                                                name="email"
                                                id="email"
                                                placeholder="Your Email Address..."
                                            />
                                        </div>
                                        <div className="form-group col-xxl-4 col-md-6 style-dark">
                                            <input
                                                type="number"
                                                className="form-control"
                                                name="number"
                                                id="number"
                                                placeholder="Phone Number..."
                                            />
                                        </div>
                                        <div className="form-group col-xxl-4 col-md-6 style-dark">
                                            <input
                                                type="number"
                                                className="form-control"
                                                name="zip"
                                                id="zip"
                                                placeholder="Zip Code..."
                                            />
                                        </div>
                                        <div className="form-group col-xxl-4 col-xl-12">
                                            <button className="th-btn style3 w-100">
                                                Get Involved Today
                                            </button>
                                        </div>
                                    </div>
                                    <p className="form-messages mb-0 mt-3" />
                                </form>
                            </div>
                        </div>
                        <div className="col-xl-5">
                            <div className="contact-map">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3644.7310056272386!2d89.2286059153658!3d24.00527418490799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fe9b97badc6151%3A0x30b048c9fb2129bc!2sAngfuztheme!5e0!3m2!1sen!2sbd!4v1651028958211!5m2!1sen!2sbd"
                                    allowFullScreen={true}
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section
                className="space"
                id="team-sec"
                data-bg-src="assets/img/bg/gray-bg2.png"
            >
                <div
                    className="shape-mockup team-bg-shape3-1 d-xxl-block d-none"
                    data-top="0%"
                    data-left="0%"
                    data-bottom={0}
                >
                    <img src="assets/img/shape/team_bg_shape3_1.png" alt="img" />
                </div>
                <div
                    className="shape-mockup team-bg-shape3-2 d-xxl-block d-none"
                    data-top="0%"
                    data-right="0%"
                    data-bottom={0}
                >
                    <img src="assets/img/shape/team_bg_shape3_2.png" alt="img" />
                </div>
                <div
                    className="shape-mockup team-bg-shape3-3 spin d-xxl-block d-none"
                    data-top="15%"
                    data-left="20%"
                >
                    <div className="color-masking2">
                        <div
                            className="masking-src"
                            data-mask-src="assets/img/shape/team_bg_shape3_3.png"
                        />
                        <img src="assets/img/shape/team_bg_shape3_3.png" alt="img" />
                    </div>
                </div>
                <div
                    className="shape-mockup team-bg-shape3-4 jump d-xxl-block d-none"
                    data-top="18%"
                    data-right="10%"
                >
                    <img src="assets/img/shape/team_bg_shape3_4.png" alt="img" />
                </div>
                <div
                    className="shape-mockup team-bg-shape3-5 spin d-xxl-block d-none"
                    data-bottom="18%"
                    data-left="10%"
                >
                    <img src="assets/img/shape/team_bg_shape3_5.png" alt="img" />
                </div>
                <div
                    className="shape-mockup team-bg-shape3-6 spin d-xxl-block d-none"
                    data-bottom="10%"
                    data-right="10%"
                >
                    <div className="color-masking">
                        <div
                            className="masking-src"
                            data-mask-src="assets/img/shape/team_bg_shape3_6.png"
                        />
                        <img src="assets/img/shape/team_bg_shape3_6.png" alt="img" />
                    </div>
                </div>

            </section>
        </>

    )
}
