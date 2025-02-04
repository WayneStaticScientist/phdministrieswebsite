import Footer from '@/components/footer'
import Header from '@/components/header'
import Hero2 from '@/components/secondary-headers/hero2'
import { useTestimonies } from '@/stores/data/testimonies'
import { SocialMediaHandles } from '@/stores/personal/contacts'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function PartWithUs() {
    const testimonies = useTestimonies()
    return (
        <>
            <Header page='partnership' />
            <Hero2 title='Partner With Us'
                image='assets/img/bg/partners.jpg'
                path={
                    [
                        {
                            title: "home",
                            path: "/"
                        },
                        {
                            title: "partnership",
                            path: ""
                        }
                    ]}
            />
            <section className="th-blog-wrapper blog-details space-top space-extra2-bottom">
                <div className="container">
                    <div className="row gx-40">
                        <div className="col-xxl-8 col-lg-7">
                            <div className="th-blog blog-single">
                                <div className="blog-img">
                                    <Image src="/assets/img/blog/blog-s-1-1.jpg" alt="Blog Image"
                                        width={850}
                                        height={456}
                                    />
                                </div>
                                <div className="blog-content">
                                    <div className="blog-meta">
                                        <Link href="blog.html"><i className="fas fa-calendar-days"></i>July 05, 2024</Link>
                                        <Link href="blog.html"><i className="fas fa-tags"></i>Education</Link>
                                        <Link href="blog.html"><i className="fas fa-comments"></i>Comments (03)</Link>
                                    </div>
                                    <h2 className="blog-title">What is Partnership</h2>
                                    <p>Partnering with Yadah-Tv means partnering with us as Prophetic Healing and Deliverance Ministries (PHD Ministries). Partnering is the act of giving to the house of God for the support of God’s ministry. Being a Partner means you are equally concerned with the spreading of God’s Word to all places. You understand the vision and mission of the visionary or leader of the Ministry. A partner becomes a very important person of the Ministry who is different from other ordinary congregants. You commit yourself through using the resources that you have (be it time, financial or material) in order for God’s word to progress. Just like a cheerful giver to the house of God, a partner is abundantly blessed by the Almighty for supporting His work.</p>
                                    <blockquote className="bg-white">
                                        <p>PHD Ministries has a lot of activities which demand financial resources including infrastructure development and humanitarian support. PHD Ministries like any other God’s Ministry is a non-profit making organisation which relies on Partners and donors for the success of all its projects which are meant to spread God’s gospel.</p>
                                        <cite>PHDMinistries</cite>
                                    </blockquote>
                                    <p> Without your partnering hand the success of the Ministries’ activities and projects slows down, therefore it is important for you to support God’s work through giving. One who gives with an open heart is sowing a seed in God’s field and he will reap in abundance. Imagine yourself having paid for a brick laid during construction, facilitating a seat during one service or feeding an orphan even just one meal would make a great difference in the eyes of God and He will reward you abundantly.</p>
                                    <div className="row gx-30 mt-30">
                                        <div className="col-md-6 mb-30">
                                            <div className="blog-radius-img">
                                                <Image className="w-100"
                                                    src="/assets/img/blog/blog_inner_1.jpg" alt="Blog Image"
                                                    width={365}
                                                    height={250}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-30">
                                            <div className="blog-radius-img">
                                                <Image className="w-100" src="/assets/img/blog/blog_inner_2.jpg" alt="Blog Image"
                                                    width={365}
                                                    height={250} />
                                            </div>
                                        </div>
                                    </div>
                                    <h2>Why partner with Yadah TV?</h2>
                                    <p>PHD Ministries has a lot of activities which demand financial resources including infrastructure development and humanitarian support. PHD Ministries like any other God’s Ministry is a non-profit making organisation which relies on Partners and donors for the success of all its projects which are meant to spread God’s gospel. Without your partnering hand the success of the Ministries’ activities and projects slows down, therefore it is important for you to support God’s work through giving. One who gives with an open heart is sowing a seed in God’s field and he will reap in abundance. Imagine yourself having paid for a brick laid during construction, facilitating a seat during one service or feeding an orphan even just one meal would make a great difference in the eyes of God and He will reward you abundantly.</p>
                                    <div className="share-links clearfix ">
                                        <div className="row justify-content-between">
                                            <div className="col-md-auto">
                                                <span className="share-links-title">Tags:</span>
                                                <div className="tagcloud">
                                                    <Link href="/partnership" className='no-underline'>Partnership</Link>
                                                    <Link href="/prophetwmagaya" className='no-underline'>prophetwmagaya</Link>
                                                </div>
                                            </div>
                                            <div className="col-md-auto text-xl-end">
                                                <span className="share-links-title">Share:</span>
                                                <div className="th-social align-items-center">
                                                    <Link href={`${SocialMediaHandles.facebook.url}`}><i className="fab fa-facebook-f"></i></Link>
                                                    <Link href={`${SocialMediaHandles.twitter.url}`}><i className="fab fa-twitter"></i></Link>
                                                    <Link href={`${SocialMediaHandles.instagram.url}`}><i className="fab fa-instagram"></i></Link>
                                                    <Link href={`${SocialMediaHandles.youtube.url}`}><i className="fab fa-youtube"></i></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="th-comment-form ">
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
                            <aside className="sidebar-area">
                                <div className="widget widget_search  ">
                                    <form className="search-form">
                                        <input type="text" placeholder="Enter Keyword" />
                                        <button type="submit"><i className="far fa-search"></i></button>
                                    </form>
                                </div>
                                <div className="widget widget_categories  ">
                                    <h3 className="widget_title">Category</h3>
                                    <ul>
                                        <li>
                                            <Link className='no-underline' href="/">Home</Link>
                                            <span><i className="fas fa-arrow-right"></i></span>
                                        </li>
                                        <li>
                                            <Link className='no-underline' href="/prophetwmagaya">Prophet Magaya</Link>
                                            <span><i className="fas fa-arrow-right"></i></span>
                                        </li>
                                        <li>
                                            <Link className='no-underline' href="/visit">Visit Us</Link>
                                            <span><i className="fas fa-arrow-right"></i></span>
                                        </li>
                                        <li>
                                            <Link className='no-underline' href="/contact">Contact Us</Link>
                                            <span><i className="fas fa-arrow-right"></i></span>
                                        </li>

                                    </ul>
                                </div>
                                <div className="widget  ">
                                    <h3 className="widget_title">Some Testimonies</h3>
                                    <div className="recent-post-wrap">
                                        {
                                            Object.values(testimonies).map((e, i) => {
                                                return (
                                                    <div className="recent-post" key={i}>
                                                        <div className="media-img">
                                                            <Link href="blog-details.html">
                                                                <Image className='w-28 h-28' src={e.image} alt="image" width={e.width} height={e.height} />
                                                            </Link>
                                                        </div>
                                                        <div className="media-body">
                                                            <div className="recent-post-meta">
                                                                <Link href={e.path}><i className="fas fa-calendar-days"></i>{e.date}</Link>
                                                            </div>
                                                            <h4 className="post-title"><Link className="text-inherit" href="blog-details.html">{e.summary}</Link></h4>
                                                        </div>
                                                    </div>)
                                            })
                                        }

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
