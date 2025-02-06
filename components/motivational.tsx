import React from 'react'
import 'pure-react-carousel/dist/react-carousel.es.css';
import { MotivationaWords } from '@/stores/data/qoutes-spoked';
import Image from 'next/image';
import { useRef, } from 'react';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import Swiper styles (essential!)
import 'swiper/css/navigation'; // If using navigation
import 'swiper/css/pagination'; // If using pagination
import 'swiper/css/autoplay'; // If using autoplay (if needed)
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
export default function MotivationalQoutes() {
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

            <section className="overflow-hidden space  arrow-wrap">
                <div className="container">
                    <div className="title-area text-center">
                        <span className="sub-title after-none before-none"><i
                            className="far fa-heart text-theme"></i>Prophet Magaya Qoutes</span>
                        <h2 className="sec-title">some of the  qoutes</h2>
                    </div>
                    <div className="testi-slider3 slider-area">

                        <Swiper
                            className=""

                            modules={[Autoplay, Pagination, Navigation]}
                            ref={swiperRef}
                            {...sliderOptions}
                        >
                            <div className="swiper-wrapper">
                                {MotivationaWords.map((e, i) => {
                                    return (
                                        <SwiperSlide key={i}>
                                            <div className="testi-card3">
                                                <div className="testi-card-shape  bg-mask"
                                                    style={{
                                                        maskImage: `url("assets/img/shape/testi-card-bg-shape3-1.png")`
                                                    }}></div>
                                                <div className="testi-card_review">
                                                    <i className="fas fa-star"></i>
                                                    5.0
                                                </div>
                                                <div className="testi-card_profile">
                                                    <div className="box-thumb">
                                                        <Image src={e.image} alt="img"
                                                            width={1417}
                                                            height={1012} />

                                                    </div>
                                                    <div className="media-left">
                                                        <h3 className="testi-card_name">Prophet W Magaya</h3>
                                                        <span className="testi-card_desig">Visionary, Founder</span>
                                                    </div>
                                                </div>
                                                <p className="testi-card_text">
                                                    {e.word}
                                                </p>
                                            </div>
                                        </SwiperSlide>

                                    )
                                })}   </div>
                        </Swiper>
                        <button data-slider-prev="#testiSlide3" className="slider-arrow style-border slider-prev" onClick={() => { swiperRef.current?.swiper.slidePrev() }}><i
                            className="far fa-arrow-left"></i></button>
                        <button data-slider-next="#testiSlide3" className="slider-arrow style-border slider-next" onClick={() => swiperRef.current?.swiper.slideNext()}><i
                            className="far fa-arrow-right"></i></button>
                    </div>
                </div >
            </section >
        </>
    )
}
