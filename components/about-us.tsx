import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { LuChurch } from 'react-icons/lu'

export default function AboutUs() {
    return (
        <div className="overflow-hidden space shape-mockup-wrap" id="about-sec">
            <div
                className="shape-mockup about-bg-shape2-1 jump-reverse d-lg-inline-block d-none"
                style={{ top: "10%", right: "5%" }}
            >
                <Image src="/assets/img/shape/about-shape1.png" alt="shape" width={539} height={518} />
            </div>
            <div
                className="shape-mockup about-bg-shape3-1 jump"
                style={{ bottom: "20%", right: "5%" }}
            >
                <div className="color-masking2">
                    <div
                        className="masking-src"
                        data-mask-src="assets/img/shape/about_shape3_1.png"
                        style={{ maskImage: "url(assets/img/shape/about_shape3_1.png)" }}
                    >
                        <Image src="/assets/img/shape/about-shape1.png" alt="img"
                            height={198}
                            width={408} />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row gy-60 align-items-center">
                    <div className="col-xl-6">
                        <div className="img-box3">
                            <div className="img1">
                                <Image src="/assets/img/normal/about_3_1.png" alt="About"
                                    width={500} height={553} />
                            </div>
                            <div className="img2 jump">
                                <Image src="/assets/img/normal/about_3_2.png" alt="img"
                                    width={320}
                                    height={273}
                                />
                            </div>
                            <div className="about-shape3-1 jump-reverse">
                                <div className="color-masking2">
                                    <div
                                        className="masking-src bg-mask"
                                        style={{ maskImage: "url(assets/img/shape/about_shape1_1.png)" }}
                                    ></div>
                                    <Image
                                        width={539}
                                        height={518}
                                        src="/assets/img/shape/about_shape1_1.png" alt="img" />
                                </div>

                            </div>

                            <div className="year-counter movingX">
                                <div className="year-counter_number">
                                    <span className="counter-number">100000</span>+ Testimonies
                                </div>
                                <Link className="text-white no-underline ring-2 p-2 ring-white rounded-full hover:bg-white hover:text-black" href="/partnership">
                                    Become a Partner
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 ">
                        <div className="title-area mb-40 mt-40">
                            <span className="sub-title after-none before-none">
                                Phd Ministries
                            </span>
                            <h2 className="sec-title">
                                Founder And Visionary
                            </h2>
                            <p>
                                Prophet Walter Magaya grew up in Chitungwiza and is married to Mother Tendai Katsiga-Magaya who is a banker by profession and together they have been blessed with two lovely children.
                                Prophet Walter Magaya&apos;s visit to SCOAN Nigeria marked the birth of P.H.D Ministries as he was guided by his God-given mandate by the Holy Spirit through Senior Prophet T.B Joshua.
                            </p>
                        </div>
                        <div className="about-wrap3">
                            <p className="mb-30">
                                <span className=' block font-bold'>First Miracle</span>
                                The first notable miracle was that of Mr Nyandoro, who was blind for 3 years and got his sight restored by the power of Jesus Christ of Nazareth working through the Man of God Prophet Walter Magaya. After this miraculous healing Prophet Magaya only shouted “MBIRI KUNA JESU ” as the whole congregation screamed with joy for what the Lord had just done. Prophet Walter Magaya always reminds the congregation that he is not the healer, but Jesus Christ is the healer, and he is just but a vessel being used to do the works of our Lord Jesus Christ. Many amazing testimonies of the power and works of our Lord Jesus Christ continue to be experienced every day in the Ministry and we thank our Lord and saviour Jesus Christ of Nazareth for using Prophet Walter Magaya in this way.
                            </p>
                            <div className="about-feature-grid">
                                <div className="box-icon">
                                    <LuChurch />
                                </div>
                                <div className="media-body">
                                    <h4 className="box-title">{new Date().getFullYear() - 2012} years of service</h4>
                                    <p className="box-text">
                                        No. 1 Sherwood Crescent, Cnr. Simon Mazorodze, Waterfalls, Harare, Zimbabwe
                                    </p>
                                </div>
                            </div>
                            <div className="btn-wrap mt-40">
                                <Link href="/visit" className="th-btn p-3 style3 style-radius no-underline">
                                    Visit Guest House
                                    <i className="fa-solid fa-arrow-up-right ms-2"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
