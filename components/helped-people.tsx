import { useTestimonies } from '@/stores/data/testimonies'
import Image from 'next/image'
import React from 'react'

export default function HelpedPeople() {
    const testimonies = useTestimonies()
    return (
        <>
            <section className="space overflow-hidden" id="donation-sec">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="title-area text-center">
                                <span className="sub-title before-none after-none"><i className="far fa-heart text-theme"></i> Lets
                                    Testimonies</span>
                                <h2 className="sec-title">See the Power of God in healing </h2>
                            </div>
                        </div>
                    </div>
                    <div className="row gy-30">
                        {
                            Object.values(testimonies).map((e, i) => {
                                return (
                                    <div className="col-xl-6" key={i}>
                                        <div className="donation-card style3">
                                            <div className="box-thumb">
                                                <Image src={e.image} alt="image" width={e.width} height={e.height} />
                                                <div className="donation-card-tag">85%</div>
                                                <div className="donation-card-shape"
                                                    data-mask-src="assets/img/donation/donation-card-shape2-1.png"></div>
                                            </div>
                                            <div className="box-content">
                                                <h3 className="box-title"><a href="blog-details.html">{e.title}</a>
                                                </h3>
                                                <p>{e.summary}
                                                </p>

                                                <a href="" className="th-btn style6">read more<i
                                                    className="fas fa-arrow-up-right ms-2"></i></a>
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
