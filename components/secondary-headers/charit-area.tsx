import { Charities } from '@/stores/data/charity'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function CharitArea() {
    return (
        <>
            <section className="space overflow-hidden background-image shape-mockup-wrap"
                style={{ backgroundImage: "url(assets/img/bg/event-bg1-1.png)" }}>
                <div className="shape-mockup event-bg-shape1-1 movingX d-lg-block d-none"
                    style={{
                        top: 0,
                        right: 0
                    }} >
                    <div className="color-masking2">
                        <div className="masking-src bg-mask"
                            style={{
                                maskImage: "url(assets/img/shape/event_bg_shape1_1.png)"
                            }}></div>
                        <img src="assets/img/shape/event_bg_shape1_1.png" alt="img" />
                    </div>
                </div>
                <div className="container">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-lg-8">
                            <div className="title-area">
                                <span className="sub-title before-none after-none">Charity</span>
                                <h2 className="sec-title text-white">PHD Ministries Charity Events</h2>
                            </div>
                        </div>
                        <div className="col-auto">
                            <div className="sec-btn">
                                <Link className="th-btn  px-8 py-4 no-underline" href="/contact">Contact Us Now <i className="fas fa-arrow-up-right ms-2"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="event-card-wrap">
                        {
                            Charities.map((e, i) => {
                                return (
                                    <div className="event-card" key={i}>
                                        <div className="event-card_img bg-mask"
                                            style={{ maskImage: 'url(assets/img/event/event_card1_1-mask.png)' }}
                                        >
                                            <Image src={e.image} alt="event"
                                                width={400}
                                                height={460} />
                                        </div>
                                        <div className="event-card-hover-wrap">
                                            <div className="event-card-hover_img bg-mask" style={{
                                                maskImage: 'url(assets/img/event/event_card1_2-mask.png)'
                                            }}>
                                                <Image src={e.h}
                                                    width={372}
                                                    height={339}
                                                    alt="event" />
                                                <div className="event-card-date">{i + 1}</div>
                                            </div>
                                            <div className="event-card-content">
                                                <div className="event-card-meta">
                                                    <span className="event-card_location"><i className="far fa-map-marker-alt"></i>Charity {i + 1}</span>
                                                </div>
                                                <h3 className="event-card_title"><Link href="/charity" className='no-underline'>{e.title}</Link></h3>
                                                <Link href="#" className="link-btn no-underline">Donate Now <i className="fas fa-arrow-up-right ms-2"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}
