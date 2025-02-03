import React from 'react'

export default function MotivationalQoutes() {
    return (
        <section className=" space overflow-hidden">
            <div className="container">
                <div className="title-area text-center">
                    <span className="sub-title after-none before-none"><i
                        className="far fa-heart text-theme"></i>Qoutes</span>
                    <h2 className="sec-title">Some of the populer qoutes</h2>
                </div>
                <div className="testi-slider3 slider-area">

                    <button data-slider-prev="#testiSlide3" className="slider-arrow style-border slider-prev"><i
                        className="far fa-arrow-left"></i></button>
                    <button data-slider-next="#testiSlide3" className="slider-arrow style-border slider-next"><i
                        className="far fa-arrow-right"></i></button>
                </div>
            </div>
        </section>
    )
}
