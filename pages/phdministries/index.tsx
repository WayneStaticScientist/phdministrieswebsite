import Footer from '@/components/footer'
import Header from '@/components/header'
import Hero2 from '@/components/secondary-headers/hero2'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function PHDMinistriesPage() {
    return (
        <>
            <Header page='about' />
            <Hero2 title='Phd Ministries'
                image='assets/img/bg/phd.jpg'
                path={
                    [
                        {
                            title: "home",
                            path: "/"
                        },
                        {
                            title: "Phd ministries roadmap",
                            path: ""
                        }
                    ]}
            />
            <section className="donation-details space-top space-extra2-bottom">
                <div className="container">
                    <div className="row gx-40">
                        <div className="col-xxl-8 col-lg-7">
                            <div className="page-img">
                                <Image src="/assets/img/bg/vision1.jpg" alt="Blog Image"
                                    width={840}
                                    height={500} />
                                <div className="tag">RoadMap</div>
                            </div>
                            <div className="blog-content">
                                <h2 className="h3 page-title mt-n2">Our Story</h2>
                                <p className="mb-35">
                                    Prophetic, Healing and Deliverance Ministries was founded by Prophet W Magaya on the 28th of October 2012 with an attendance of only 45 people and by 2013 January, the attendance had risen to 500.
                                    The services were being held at Zengeza 4 High, a local School in the Prophet’s hometown of Chitungwiza. From the Zengeza 4 High location, the Ministry moved to a number of locations to accommodate the increase in numbers.
                                    In 2013 the Ministry moved to the unit L Community hall in Chitungwiza, but due to the rapid growth of the congregants, the hall couldn’t sustain the numbers and we had to use the Unity L Grounds. In March 2013, 3000 people gathered for the Big Sunday at the Unity L Grounds.
                                    In the same year, we moved to Railton Sports Club and in December 2013 we moved to our current location, famously known as the Blue-Shade. Our growth from this period, up until now had been astronomical e.g December 2013 we had about 9000 congregants 2014 February we had an estimate of 50 000 congregants 2014 November we reached 200 000 congregants in 2015, we clocked a million members and from there, our growth has been incremental, impacting lives in every continent.
                                    We are a point of need ministry focusing on Prophecy, Healing and Deliverance. God uses PWM as an instrument of Prophecy, Healing and Deliverance to set free those in bondage through the name of our Lord Jesus Christ.
                                    Through the God of PWM- theGod of impossibilities, people are healed from various deases, HIV, cancer, skin diseases, various inabilities and/paralysis. We conduct live services on Wednesday, Fridays and Sundays on our television Channel, Yadah TV with Prophet W Magaya.</p>

                                <p className="mb-40 mt-30">Amplify our message by sharing our mission with your network. Use social media, word of mouth, and community engagement to raise awareness about our work. Every share brings us closer to achieving our mission and reaching more people in need. From signing petitions to contacting policymakers, your advocacy can drive meaningful change and amplify our impact.</p>
                            </div>

                            <div className="th-comment-form p-0 shadow-none mt-60">
                                <div className="form-title">
                                    <h3 className="blog-inner-title h4 mb-2">Leave a Reply</h3>
                                    <p className="form-text">Your email address will not be published. Required fields are marked</p>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 form-group style-border">
                                        <input type="text" placeholder="Your Name" className="form-control" />
                                    </div>
                                    <div className="col-md-6 form-group style-border">
                                        <input type="text" placeholder="Your Email" className="form-control" />
                                    </div>
                                    <div className="col-12 form-group style-border">
                                        <input type="text" placeholder="Website" className="form-control" />
                                    </div>
                                    <div className="col-12 form-group style-border">
                                        <textarea placeholder="Type Your Message" className="form-control" />
                                    </div>
                                    <div className="col-12 form-group mb-0">
                                        <button className="th-btn btn-fw">SUBMIT COMMENT</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-4 col-lg-5">
                            <aside className="sidebar-area donation-sidebar">
                                <div className="widget  " data-bg-src="assets/img/bg/gray-bg2.png" data-overlay="gray" data-opacity="5">
                                    <div className="author-widget-wrap">
                                        <div className="author-tag">Founder : </div>
                                        <div className="avater">
                                            <Image src="/assets/img/blog/blog-author.jpg" alt="avater"
                                                width={120}
                                                height={120}
                                            />
                                        </div>
                                        <div className="author-info">
                                            <h4 className="name"><Link className="text-inherit no-underline" href="/prophetwmagaya">Prophet W.Magaya</Link></h4>
                                            <span className="meta">
                                                <i className="fas fa-tags"></i>Founder and Visionary
                                            </span>

                                        </div>
                                    </div>
                                </div>
                                <div className="widget  " data-bg-src="assets/img/bg/gray-bg2.png" data-overlay="gray" data-opacity="5">
                                    <div className="widget-donation-wrap">
                                        <div className="donate-price">{new Date().getFullYear() - 2013}</div>
                                        <h4 className="title">years of service</h4>
                                        <Link className="th-btn no-underline p-3" href="/visit">visit us</Link>
                                    </div>
                                </div>

                            </aside>
                        </div>
                    </div>
                </div>
            </section >
            <Footer />
        </>
    )
}
