import Image from 'next/image'
import React from 'react'
import { FaPeopleRoof } from 'react-icons/fa6'

export default function Services() {
    return (
        <section
            className="overflow-hidden relative"
            id="service-sec"
            data-bg-src="assets/img/bg/gray-bg2.png"
        >
            <div
                className="shape-mockup absolute top-0 right-0 service-bg-shape2-1 z-3 d-xxl-inline-block d-none"
                data-bottom={0}
                data-left={0}
            >
                {/* <img src="assets/img/shape/service_bg_shape3_1.png" alt="img" /> */}
            </div>
            <div className="container z-1">
                <div className="row gx-80">
                    <div className="col-xl-6">
                        <div className="service-wrap2">
                            <div className="title-area  p-3">
                                <span className="sub-title after-none before-none">
                                    <FaPeopleRoof /> Partner With Us
                                </span>
                                <h2 className="sec-title">
                                    What is Partnership
                                </h2>
                                <p className="sec-text">
                                    Partnering with Yadah-Tv means partnering with us as Prophetic Healing and Deliverance Ministries (PHD Ministries).
                                    Partnering is the act of giving to the house of God for the support of God&apos;s ministry. Being a Partner means you are equally concerned with the spreading of God&apos;s Word to all places. You understand the vision and mission of the visionary or leader of the Ministry.
                                    A partner becomes a very important person of the Ministry who is different from other ordinary congregants.
                                    You commit yourself through using the resources that you have (be it time, financial or material) in order for God’s word to progress.
                                    Just like a cheerful giver to the house of God, a partner is abundantly blessed by the Almighty for supporting His work.
                                </p>
                            </div>
                            <div className="service-bg-shape2-2">
                                <Image src="/assets/img/service/service-thumb3-1.png" alt="img"
                                    width={860}
                                    height={449}
                                />
                                <div className="service-bg-shape2-3 ">
                                    <div className="color-masking2 ">
                                        <div
                                            className="masking-src"
                                            data-mask-src="assets/img/shape/service_bg_shape3_2.png"
                                        />

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="flex flex-col relative">
                            <div className="col-12 p-12 absolute">
                                <Image
                                    src="/assets/img/service/d1.jpg"
                                    alt="Icon"
                                    width={400}
                                    height={300}
                                />
                            </div>
                            <div className="ring-white rounded-xl p-0 ring-2 col-12  absolute left-1/4 top-1/2">
                                <Image
                                    src="/assets/img/service/p2.jpg"
                                    alt="Icon"
                                    className='w-full rounded-xl '
                                    width={400}
                                    height={300}
                                />
                            </div>
                            <div className="col-12 p-12">
                                <Image
                                    src="/assets/img/service/d1.jpg"
                                    alt="Icon"
                                    width={400}
                                    height={300}
                                />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
