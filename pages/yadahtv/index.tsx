import Footer from '@/components/footer'
import Header from '@/components/header'
import Hero2 from '@/components/secondary-headers/hero2'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function YadahTvPage() {
    return (
        <>
            <Header page='ministry' />
            <Hero2 title='YadahTV'
                image='assets/img/bg/tv.jpg'
                path={
                    [
                        {
                            title: "home",
                            path: "/"
                        },
                        {
                            title: "yadahtv",
                            path: ""
                        }
                    ]}
            />
            <div className="story-area-1 overflow-hidden space">
                <div className="container">
                    <div className="row gy-40 gx-80 justify-content-between flex-row-reverse align-items-center">
                        <div className="col-xl-7">
                            <div className="story-img-box1">
                                <div className="img1">
                                    <Image src="/assets/img/bg/yadahtv.jpg" alt="img" width={2000} height={2000} />
                                </div>
                                <div className="story-shape1-1 jump-reverse">
                                    <img src="assets/img/shape/story_shape1_1.png" alt="img" />
                                </div>
                                <div className="story-card movingX">
                                    <h5 className="box-title">Yadah Tv Codes</h5>
                                    <p className="box-text">
                                        <span className='flex justify-between'>Frequency:<span className='text-primary'>12562</span></span>
                                        <span className='flex justify-between'>FEC:<span className='text-primary'>5/6</span></span>
                                        <span className='flex justify-between'>Polarization:<span className='text-primary'>HORIZONTAL</span></span>
                                        <span className='flex justify-between'>Symbol Rate:<span className='text-primary'>30000</span></span>
                                    </p>
                                </div>
                                <div className="year-counter">
                                    <p className="year-counter_text">PHD <span>ministries</span></p>
                                    <div className="year-counter_number"><span className="counter-number">{new Date().getFullYear() - 2013}</span></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5">
                            <div className="story-wrap1">
                                <div className="title-area mb-0">
                                    <span className="sub-title before-none">YadahTv</span>
                                    <h2 className="sec-title"> YadahTv </h2>
                                    <p className="mt-30">
                                        Yadah TV is the television station of Prophetic Healing and Deliverance, broadcasting 24/7 around the globe via satellite and on the internet. The purpose of Yadah TV is to preach the Good News to all mankind. That is what we are born for, living for and what we shall die for. Yadah TV is committed to changing lives, changing nations and changing the whole world through the Gospel of our Lord Jesus Christ. Jesus Christ is the inspiration behind Yadah TV; as such, God’s purpose is our purpose. The Bible says, faith cometh by hearing the Word of God (Romans 10:17). The people hear and change. Nations hear and change. The world hears and changes. Yadah TV has a message for the entire world and the message is quite simple: “Jesus Christ is the same yesterday, today and forever”. If people are to believe this, someone has to point the way and that is what Yadah TV is set to do. You can watch Yadah TV online on our official facebook and youtube platform.
                                    </p>
                                    <div className="btn-wrap mt-35">
                                        <Link href="/" className="th-btn style-border no-underline">
                                            Download YadahTv Android <i className="fas fa-arrow-up-right ms-2"></i>
                                        </Link>
                                        <Link href="/" className="th-btn style-border no-underline">
                                            Download YadahTv Ios <i className="fas fa-arrow-up-right ms-2"></i>
                                        </Link>
                                    </div>
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
