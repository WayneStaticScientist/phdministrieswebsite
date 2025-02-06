import { allFaqs } from '@/stores/data/faqs'
import Image from 'next/image'
import React from 'react'
export default function Faqs() {
    const faqs = allFaqs()
    return (
        <div
            className="space overflow-hidden faq-area-2 background-image shape-mockup-wrap"
            style={{ backgroundImage: "url(assets/img/bg/gray-bg2.png)" }}
        >
            <div
                className="shape-mockup faq-shape2-1 jump-reverse"
                style={{ top: "20%", left: "0px" }}
            >
                <Image src="/assets/img/shape/hand-bg-shape2-1.png" alt="img"
                    width={208}
                    height={176} />
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
                                {Object.values(faqs).map((e, i) => {
                                    return (
                                        <div className="accordion-card style2" key={i}>
                                            <div className="accordion-header" id={`collapse-item-${i}`}>
                                                <button className={`accordion-button collapsed `} type="button" data-bs-toggle="collapse"
                                                    data-bs-target={`#collapse-${i}`} aria-expanded='false'
                                                    aria-controls={`collapse-${i}`}>{e.title}</button>
                                            </div>
                                            <div id={`collapse-${i}`} className={`accordion-collapse collapse`}
                                                aria-labelledby={`collapse-item-${i}`} data-bs-parent="#faqAccordion">
                                                <div className="accordion-body">
                                                    <p className="faq-text">{e.description}</p>
                                                </div>
                                            </div>
                                        </div>

                                    )
                                })}

                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5">
                        <div className="faq-img-box2">
                            <div className="img1">
                                <Image src="/assets/img/normal/faq_2_1.png" alt="img"
                                    width={865}
                                    height={790}
                                />
                            </div>
                            <div className="faq-img-shape">
                                <Image src="/assets/img/shape/faq-shape2-1.png" alt="img"
                                    width={163}
                                    height={790}
                                />
                            </div>
                        </div>
                    </div>
                </div >
            </div >
        </div >

    )
}
