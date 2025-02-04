import React from 'react'
import 'pure-react-carousel/dist/react-carousel.es.css';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import { MotivationaWords } from '@/stores/data/qoutes-spoked';
import Image from 'next/image';
import { CgChevronLeft, CgChevronRight } from 'react-icons/cg';
export default function MotivationalQoutes() {

    return (
        <>
            <section className=" space overflow-hidden">
                <div className="container">
                    <div className="title-area text-center">
                        <span className="sub-title after-none before-none"><i
                            className="far fa-heart text-theme"></i>Qoutes</span>
                        <h2 className="sec-title">Some of the populer qoutes</h2>
                    </div>
                    <CarouselProvider
                        className='h-80 w-full'
                        naturalSlideWidth={100}
                        naturalSlideHeight={150}
                        totalSlides={MotivationaWords.length}
                        visibleSlides={1}
                        infinite={true}
                        isPlaying={true}
                        interval={3000}
                    >
                        <Slider>
                            {MotivationaWords.map((e, i) => {
                                return (
                                    <Slide index={i} key={i}>
                                        <div className="swiper-slide p-3">
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
                                        </div>
                                    </Slide>

                                )
                            })}
                        </Slider>
                        <div className='flex justify-between'>
                            <ButtonBack>
                                <CgChevronLeft size={20} />
                            </ButtonBack>
                            <ButtonNext>
                                <CgChevronRight size={20} />
                            </ButtonNext>
                        </div>
                    </CarouselProvider>
                </div>
            </section>

        </>
    )
}
