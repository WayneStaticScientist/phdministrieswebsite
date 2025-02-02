import React from 'react'

export default function Faqs() {
    return (
        <div
            className="space overflow-hidden faq-area-2"
            data-bg-src="assets/img/bg/gray-bg2.png"
        >
            <div
                className="shape-mockup faq-shape2-1 jump-reverse"
                data-top="20%"
                data-left={0}
            >
                <img src="assets/img/shape/hand-bg-shape2-1.png" alt="img" />
            </div>
            <div className="container">
                <div className="row gy-60 gx-60">
                    <div className="col-xl-7">
                        <div className="faq-wrap2">
                            <div className="title-area">
                                <span className="sub-title after-none before-none">
                                    <i className="far fa-heart text-theme" />
                                    Frequently Asked Questions
                                </span>
                                <h2 className="sec-title">Have Any Questions For Us?</h2>
                            </div>
                            <div className="accordion" id="faqAccordion">
                                <div className="accordion-card style2">
                                    <div className="accordion-header" id="collapse-item-1">
                                        <button
                                            className="accordion-button "
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapse-1"
                                            aria-expanded="true"
                                            aria-controls="collapse-1"
                                        >
                                            What motivates you to donate to our charity?
                                        </button>
                                    </div>
                                    <div
                                        id="collapse-1"
                                        className="accordion-collapse collapse show"
                                        aria-labelledby="collapse-item-1"
                                        data-bs-parent="#faqAccordion"
                                    >
                                        <div className="accordion-body">
                                            <p className="faq-text">
                                                Explore the variety of volunteer opportunities available.
                                                From event planning and fundraising to fieldwork and
                                                administrative support, there are many ways to lend your
                                                talents. Find the perfect fit for your skills and interests.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-card style2">
                                    <div className="accordion-header" id="collapse-item-2">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapse-2"
                                            aria-expanded="false"
                                            aria-controls="collapse-2"
                                        >
                                            How did you hear about our organization?
                                        </button>
                                    </div>
                                    <div
                                        id="collapse-2"
                                        className="accordion-collapse collapse "
                                        aria-labelledby="collapse-item-2"
                                        data-bs-parent="#faqAccordion"
                                    >
                                        <div className="accordion-body">
                                            <p className="faq-text">
                                                Explore the variety of volunteer opportunities available.
                                                From event planning and fundraising to fieldwork and
                                                administrative support, there are many ways to lend your
                                                talents. Find the perfect fit for your skills and interests.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-card style2">
                                    <div className="accordion-header" id="collapse-item-3">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapse-3"
                                            aria-expanded="false"
                                            aria-controls="collapse-3"
                                        >
                                            How frequently do you prefer to volunteer?
                                        </button>
                                    </div>
                                    <div
                                        id="collapse-3"
                                        className="accordion-collapse collapse "
                                        aria-labelledby="collapse-item-3"
                                        data-bs-parent="#faqAccordion"
                                    >
                                        <div className="accordion-body">
                                            <p className="faq-text">
                                                Explore the variety of volunteer opportunities available.
                                                From event planning and fundraising to fieldwork and
                                                administrative support, there are many ways to lend your
                                                talents. Find the perfect fit for your skills and interests.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5">
                        <div className="faq-img-box2">
                            <div className="img1">
                                <img src="assets/img/normal/faq_2_1.png" alt="img" />
                            </div>
                            <div className="faq-img-shape">
                                <img src="assets/img/shape/faq-shape2-1.png" alt="img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
