import { useTestimonies } from '@/stores/data/testimonies'
import Image from 'next/image'
import React, { useRef } from 'react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css'; // Import Swiper styles (essential!)
import 'swiper/css/navigation'; // If using navigation
import 'swiper/css/pagination'; // If using pagination
import 'swiper/css/autoplay'; // If using autoplay (if needed)

import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
export default function HelpedPeople() {
    const testimonies = useTestimonies()
    const swiperRef = useRef<SwiperRef | null>(null);
    const sliderOptions = {  // Swiper options (no 'new' keyword)
        autoHeight: true,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },

        breakpoints: {
            0: { slidesPerView: 1 },
            576: { slidesPerView: 1 },
            768: { slidesPerView: 1 },
            992: { slidesPerView: 2 },
            1200: { slidesPerView: 2 },
        },
        // ... other Swiper options
        navigation: false, // Example: Enable navigation
        pagination: true, // Example: Enable pagination
    };
    return (
        <>

            <section className="blog-area-3 overflow-hidden space-bottom" id="blog-sec" data-bg-src="assets/img/bg/gray-bg2.png">
                <div className="shape-mockup blog-bg-shape3-1" data-top="0" data-left="0" data-right="0">
                    <img src="assets/img/shape/testi_bg_shape3_1.png" alt="img" />
                </div>
                <div className="container">
                    <div className="row justify-content-lg-between justify-content-center align-items-center">
                        <div className="col-lg-7">
                            <div className="title-area text-lg-start text-center">
                                <span className="sub-title after-none before-none"><i className="far fa-heart text-theme"></i>Testimonies</span>
                                <h2 className="sec-title">See the Power of God in healing</h2>
                            </div>
                        </div>

                    </div>
                    <div className="slider-area">
                        <Swiper
                            className=""
                            modules={[Autoplay, Pagination, Navigation]}
                            ref={swiperRef}
                            {...sliderOptions}
                        >
                            <div className="swiper-wrapper">
                                {
                                    Object.values(testimonies).map((e, i) => {
                                        return (
                                            <SwiperSlide className="swiper-slide p-3" key={i}>
                                                <div className="blog-card style2">
                                                    <div className="blog-img">
                                                        <a href="#">
                                                            <Image src={e.image} alt="testimonies"
                                                                width={410}
                                                                height={300} />
                                                        </a>
                                                    </div>
                                                    <div className="blog-content">
                                                        <div className="blog-meta">
                                                            <a href="#" className='no-underline'><i className="fas fa-calendar-days"></i>{e.date}</a>
                                                            <a href="#" className='no-underline'><i className="fas fa-tags"></i>Testimonies</a>
                                                        </div>

                                                        <h3 className="box-title"><a href="#" className='no-underline'>{e.title}</a></h3>
                                                        <p className="blog-text">{e.summary}</p>
                                                        <a href="#" className="th-btn no-underline">Read More <i
                                                            className="fas fa-arrow-up-right ms-2"></i></a>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        )
                                    })
                                }

                            </div>
                        </Swiper>
                    </div>
                </div>
            </section>
        </>
    )
}
