import Footer from '@/components/footer'
import Header from '@/components/header'
import Hero2 from '@/components/secondary-headers/hero2'
import { BooksInterface, useBooksStates } from '@/stores/data/books'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function PhdMinistries() {
    const books = useBooksStates()
    return (
        <>
            <Header />
            <Hero2 title='Prophet Walter Magaya'
                image='assets/img/bg/pwm.jpg'
                path={
                    [
                        {
                            title: "home",
                            path: "/"
                        },
                        {
                            title: "prophetwaltermagaya",
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
                                    <Image src="/assets/img/normal/about_1_1.png" alt="About"
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
                                    <span className="sub-title before-none">Prophet Walter Magaya</span>
                                    <h2 className="sec-title">Founder And Visionary</h2>
                                    <p className="">Prophet Walter Magaya grew up in Chitungwiza and is married to Mother Tendai Katsiga-Magaya who is a banker by profession and together they have been blessed with two lovely children.
                                        Prophet Walter Magaya&apos;s visit to SCOAN Nigeria marked the birth of P.H.D Ministries as he was guided by his God-given mandate by the Holy Spirit through Senior Prophet T.B Joshua.</p>
                                </div>

                                <div className="btn-wrap mt-40">
                                    <Link href="/" className="th-btn no-underline">
                                        Guest House Visit<i className="fas fa-arrow-up-right ms-2"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className='flex items-center w-full justify-center text-4xl'>
                <h2 className="sec-title">Some of the populer Books</h2>
            </div>
            <div className="container mb-36">
                <div className="flex justify-evenly">
                    {Object.values(books).map((e: BooksInterface, i: number) => {
                        return (
                            <div className="col-xl-3 col-lg-4 m-0 " key={i}>
                                <div className="feature-card p-0 flex flex-col items-center">
                                    <div className="box-icon">
                                        <Image src={e.image}
                                            className='w-full h-16' alt="icon" width={510} height={500} />
                                    </div>
                                    <span className='font-bold'>{e.title}</span>
                                    <button className="bg-primary w-fit p-3 rounded-xl text-white mb-3">Download</button>
                                </div>
                            </div>
                        )
                    })}

                </div>

            </div>
            <div className="video-area-3 shape-mockup-wrap mb-36">
                <div className="shape-mockup video-bg-shape3-1"
                    style={{
                        top: "0px",
                        left: "0px",
                        bottom: "0px"
                    }}
                >
                    <Image src="/assets/img/shape/video_bg_shape3_1.png"
                        alt="img"
                        width={133}
                        height={640}
                    />
                </div>
                <div className="shape-mockup video-bg-shape3-2"
                    style={{
                        top: "0px",
                        right: "0px",
                        bottom: "0px"
                    }}>
                    <Image src="/assets/img/shape/video_bg_shape3_2.png" alt="img"
                        width={134} height={640} />
                </div>
                <div className="video-thumb3-1 video-box-center">
                    <Image src="/assets/img/normal/depth.png" alt="img" width={1920} height={640} />
                    <a href="https://www.youtube.com/watch?v=wt0lXvqtE2A" className="play-btn style7 popup-video">
                        <i className="fa-sharp fa-solid fa-play"></i></a>
                </div>
            </div>
            <Footer />
        </>
    )
}
