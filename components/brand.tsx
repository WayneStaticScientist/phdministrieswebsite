import React from 'react'

export default function Brand() {
    return (
        <div
            className="bg-theme-dark overflow-hidden brand-area-1 bg-mask"
            style={{ maskImage: "assets/img/shape/brand-bg-shape1.png" }}
        >
            <div className="container">
                <div className="brand-wrap1 text-center">
                    <h3 className="brand-wrap-title text-white">
                        Trusted by over{" "}
                        <span className="text-theme2">
                            <span className="counter-number">90</span>K+
                        </span>{" "}
                        companies worldwide
                    </h3>
                    <div
                        className="swiper th-slider swiper-initialized swiper-horizontal swiper-backface-hidden"
                        id="brandSlider1"
                        data-slider-options='{"breakpoints":{"0":{"slidesPerView":2},"576":{"slidesPerView":"2"},"768":{"slidesPerView":"2"},"992":{"slidesPerView":"3"},"1200":{"slidesPerView":"4"},"1400":{"slidesPerView":"5", "spaceBetween": "90"}}}'
                    >
                        <div className="swiper-wrapper" id="swiper-wrapper-2b32ae79b6bd36b4" aria-live="off"
                            style={{ transitionDuration: "1000ms", transform: "translate3d(0px, 0px, 0px)", transitionDelay: "0ms" }}>
                            <div className="swiper-slide">
                                <a href="blog.html" className="brand-box">
                                    <img src="assets/img/brand/brand2-1.svg" alt="Brand Logo" />
                                </a>
                            </div>
                            <div className="swiper-slide">
                                <a href="blog.html" className="brand-box">
                                    <img src="assets/img/brand/brand2-2.svg" alt="Brand Logo" />
                                </a>
                            </div>
                            <div className="swiper-slide">
                                <a href="blog.html" className="brand-box">
                                    <img src="assets/img/brand/brand2-3.svg" alt="Brand Logo" />
                                </a>
                            </div>
                            <div className="swiper-slide">
                                <a href="blog.html" className="brand-box">
                                    <img src="assets/img/brand/brand2-4.svg" alt="Brand Logo" />
                                </a>
                            </div>
                            <div className="swiper-slide">
                                <a href="blog.html" className="brand-box">
                                    <img src="assets/img/brand/brand2-5.svg" alt="Brand Logo" />
                                </a>
                            </div>
                            <div className="swiper-slide">
                                <a href="blog.html" className="brand-box">
                                    <img src="assets/img/brand/brand2-1.svg" alt="Brand Logo" />
                                </a>
                            </div>
                            <div className="swiper-slide">
                                <a href="blog.html" className="brand-box">
                                    <img src="assets/img/brand/brand2-2.svg" alt="Brand Logo" />
                                </a>
                            </div>
                            <div className="swiper-slide">
                                <a href="blog.html" className="brand-box">
                                    <img src="assets/img/brand/brand2-3.svg" alt="Brand Logo" />
                                </a>
                            </div>
                            <div className="swiper-slide">
                                <a href="blog.html" className="brand-box">
                                    <img src="assets/img/brand/brand2-4.svg" alt="Brand Logo" />
                                </a>
                            </div>
                            <div className="swiper-slide">
                                <a href="blog.html" className="brand-box">
                                    <img src="assets/img/brand/brand2-5.svg" alt="Brand Logo" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
