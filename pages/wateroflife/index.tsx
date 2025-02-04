import Footer from '@/components/footer'
import Header from '@/components/header'
import Hero2 from '@/components/secondary-headers/hero2'
import Image from 'next/image'
import React from 'react'

export default function WaterOfLifePage() {
    return (
        <>
            <Header page='about' />
            <Hero2 title='Water of Life'
                image='assets/img/bg/wol.jpg'
                path={
                    [
                        {
                            title: "home",
                            path: "/"
                        },
                        {
                            title: "water of life",
                            path: ""
                        }
                    ]}
            />
            <div className="overflow-hidden space" id="about-sec">
                <div className="shape-mockup about-bg-shape1-1 jump-reverse" data-top="10%" data-right="5%">
                    <Image
                        src="/assets/img/shape/heart-shape1.png" alt="shape"
                        width={149}
                        height={169} />
                </div>
                <div className="container">
                    <div className="row gy-4 align-items-center">
                        <div className="col-xl-7">
                            <div className="img-box1">
                                <div className="img1" data-mask-src="assets/img/normal/about_1_1-mask.png">
                                    <Image src="/assets/img/bg/wol.png" alt="About"
                                        width={690}
                                        height={690} />
                                </div>
                                <div className="about-shape1-1 jump">
                                    <Image
                                        src="/assets/img/shape/about_shape1_1.png" alt="img"
                                        width={539}
                                        height={518} />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5">
                            <div className="about-wrap1">
                                <div className="title-area mb-30">
                                    <span className="sub-title before-none">
                                        Water Of Life</span>
                                    <div className='text-gray-800 mb-32'>
                                        A power-packed anointed with the power and anointing of our Lord Christ to meet your point of need.
                                        You could be ailing, it carries your healing.
                                        You could be in bondage it carries your deliverance, whatsoever you might require in your life the water of life carries your answers to it.
                                        We thank God Almighty for yet another power-packed mantle set to transform lives of thousands around the globe.
                                    </div>
                                    <h2 className="sec-title">Revelation 22:1-2 [NLT]</h2>
                                    <p className="">22 Then the angel showed me a river with the water of life clear as crystal flowing from the throne of God and of the Lamb.
                                        21 It flowed each side of the river grew a tree of life, bearing twelve crops of fruit, with a fresh crop each month. The leaves were used for medicine to heal the nations. Where there is life there is production. Where there is life there is movement . when the water of life touches you, you must see fruits.
                                        The water of life is set to heal nations in the mighty name of Jesus Christ.</p>
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
