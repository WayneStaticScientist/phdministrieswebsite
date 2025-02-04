import Footer from '@/components/footer'
import Header from '@/components/header'
import Hero2 from '@/components/secondary-headers/hero2'
import Image from 'next/image'
import React from 'react'

export default function CharityPage() {
    return (
        <>
            <Header />
            <Hero2 title='Charity'
                image='assets/img/bg/charity.jpg'
                path={
                    [
                        {
                            title: "home",
                            path: "/"
                        },
                        {
                            title: "charity",
                            path: ""
                        }
                    ]}
            />
            <section className="testi-area-1 space overflow-hidden" id="testi-sec">
                <div className="shape-mockup testi-bg-shape1-1 jump-reverse d-xl-block d-none" data-top="5%" data-right="0">
                    <Image src="/assets/img/shape/footer-bg-shape3.png" alt="img"
                        width={208}
                        height={176} />
                </div>
                <div className="shape-mockup testi-bg-shape1-2" data-top="28%" data-left="5%">
                    <Image src="/assets/img/shape/testimonial_shape1_1.png" alt="img"
                        width={548}
                        height={563} />
                </div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="title-area text-center">
                                <span className="sub-title">Charity</span>
                                <h2 className="sec-title">Our Goal</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row gx-0 justify-content-end">
                        <div className="col-lg-5">
                            <div className="swiper th-slider testi-thumb-slider1" data-slider-options='{"effect":"fade","loop":false}'>
                                <div className="">
                                    <div className="">
                                        <div className="testi-box-img">
                                            <Image className="testi-img" src="/assets/img/testimonial/testi_1_1.png" alt="img"
                                                width={400}
                                                height={300}
                                            />
                                            <div className="testi-card_review">
                                                <i className="fas fa-star"></i>
                                                5.0
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="testi-slider1">
                                <div className="r">
                                    <div className="">
                                        <div className="testi-card">
                                            <p className="box-text">Another Ministry is the humanitarian arm of PHD MINISTRIES which is headed by Prophet W. Magaya and the Yadah TV team. The ministry is committed to catering to the needs of widows, dwarfs, the elderly, physically challenged, orphans and the destitute. The ministry provides scholarships to orphans and children of the underprivileged, with educational support given from primary to tertiary levels. There is also a rehabilitation program for armed robbers, prostitutes and militants.</p>
                                            <h3 className="box-title">PHD Ministries</h3>
                                            <p className="box-desig">No. 1 Sherwood Crescent, Cnr. Simon Mazorodze, Waterfalls, Harare, Zimbabwe</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="slider-pagination"></div>
                                <div className="slider-pagination2"></div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <div className="overflow-hidden space">
                <div className="container">
                    <div className="row gy-30 gx-30 filter-active">
                        <div className="col-md-6 col-xxl-auto col-lg-4 filter-item">
                            <div className="gallery-card">
                                <div className="gallery-img">
                                    <Image src="/assets/img/gallery/gallery_1_1.png" alt="gallery image"
                                        width={300}
                                        height={490}
                                    />
                                    <a href="/assets/img/gallery/gallery_1_1.png" className="icon-btn popup-image"><i className="fas fa-eye"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xxl-auto col-lg-4 filter-item">
                            <div className="gallery-card">
                                <div className="gallery-img">
                                    <Image src="/assets/img/gallery/gallery_1_2.png" alt="gallery image"
                                        width={300}
                                        height={312}
                                    />
                                    <a href="/assets/img/gallery/gallery_1_2.png" className="icon-btn popup-image"><i className="fas fa-eye"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xxl-auto col-lg-4 filter-item">
                            <div className="gallery-card">
                                <div className="gallery-img">
                                    <Image src="/assets/img/gallery/gallery_1_3.png" alt="gallery image"
                                        height={312}
                                        width={300} />
                                    <a href="/assets/img/gallery/gallery_1_3.png" className="icon-btn popup-image"><i className="fas fa-eye"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xxl-auto col-lg-4 filter-item">
                            <div className="gallery-card">
                                <div className="gallery-img">
                                    <Image src="/assets/img/gallery/gallery_1_4.png" alt="gallery image"
                                        width={300}
                                        height={462} />
                                    <a href="/assets/img/gallery/gallery_1_4.png" className="icon-btn popup-image"><i className="fas fa-eye"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xxl-auto col-lg-4 filter-item">
                            <div className="gallery-card">
                                <div className="gallery-img">
                                    <Image src="/assets/img/gallery/gallery_1_6.png" alt="gallery image"
                                        width={630}
                                        height={400} />
                                    <a href="/assets/img/gallery/gallery_1_6.png" className="icon-btn popup-image"><i className="fas fa-eye"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xxl-auto col-lg-4 filter-item">
                            <div className="gallery-card">
                                <div className="gallery-img">
                                    <Image src="/assets/img/gallery/gallery_1_5.png" alt="gallery image"
                                        width={300}
                                        height={502} />
                                    <a href="/assets/img/gallery/gallery_1_5.png" className="icon-btn popup-image"><i className="fas fa-eye"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xxl-auto col-lg-4 filter-item">
                            <div className="gallery-card">
                                <div className="gallery-img">
                                    <Image src="/assets/img/gallery/gallery_1_7.png" alt="gallery image"
                                        width={300}
                                        height={250} />
                                    <a href="/assets/img/gallery/gallery_1_7.png" className="icon-btn popup-image"><i className="fas fa-eye"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xxl-auto col-lg-4 filter-item">
                            <div className="gallery-card">
                                <div className="gallery-img">
                                    <Image src="/assets/img/gallery/gallery_1_9.png" alt="gallery image"
                                        width={630}
                                        height={244} />
                                    <a href="/assets/img/gallery/gallery_1_9.png" className="icon-btn popup-image"><i className="fas fa-eye"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xxl-auto col-lg-4 filter-item">
                            <div className="gallery-card">
                                <div className="gallery-img">
                                    <Image src="/assets/img/gallery/gallery_1_8.png" alt="gallery image"
                                        width={300}
                                        height={244} />
                                    <a href="/assets/img/gallery/gallery_1_8.png" className="icon-btn popup-image"><i className="fas fa-eye"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
