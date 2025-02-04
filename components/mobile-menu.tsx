import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function MobileMenu({ page, display, toggleDisplay }: { page: string, display: boolean, toggleDisplay: (e: boolean) => void }) {
    return (
        <>
            <div className={`th-menu-wrapper fixed  z-50 h-screen flex ${display ? 'th-body-visible' : 'hidden'}`}>
                <div className="th-menu-area text-center ">
                    <button className="th-menu-toggle" onClick={() => toggleDisplay(!display)}><i className="fal fa-times"></i></button>
                    <div className="mobile-logo  ">
                        <Link href="/" className='flex justify-center'>
                            <Image
                                src="/assets/img/logo.png"
                                alt="Phd Ministries Logo"
                                width={98}
                                height={80}
                            />
                        </Link>
                    </div>
                    <div className="th-mobile-menu">
                        <ul>
                            <li className="">
                                <Link href="/" className={`no-underline text-green-500`}>
                                    <span className={`${page == 'home' ? 'text-colorSecondary' : ''}`}>Home</span></Link>
                            </li>
                            <li><Link href="/prophetwmagaya" className='no-underline'>
                                <span className={`${page == 'pwm' ? 'text-colorSecondary' : ''}`}>Prophet W Magaya</span></Link></li>
                            <li><Link href="/visit" className='no-underline'>
                                <span className={`${page == 'visit' ? 'text-colorSecondary' : ''}`}>Visit</span></Link></li>
                            <li><Link href="/partnership" className='no-underline'>
                                <span className={`${page == 'partnership' ? 'text-colorSecondary' : ''}`}>Partnership</span></Link></li>
                            <li className="menu-item-has-children no-underline">
                                < Link href="/" className='no-underline'>
                                    <span className={`${page == 'about' ? 'text-colorSecondary' : ''}`}>About</span> </Link>
                                <ul className="sub-menu">
                                    <li>
                                        <Link href="/phdministries" className='no-underline'>
                                            PHD Ministries
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/wateroflife" className='no-underline'>
                                            Water of Life
                                        </Link>
                                    </li>
                                    <li><Link href="/statementoffaith" className='no-underline'>
                                        Statement of Faith
                                    </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="menu-item-has-children">
                                <Link href="/" className='no-underline'>
                                    <span className={`${page == 'ministry' ? 'text-colorSecondary' : ''}`}>Ministries</span></Link>
                                <ul className="sub-menu">
                                    <li><Link href="/yadahtv" className='no-underline'>
                                        Yadah TV</Link></li>
                                    <li><Link href="/charity" className='no-underline'>
                                        Charity</Link></li>
                                    <li><Link href="/offices" className='no-underline'>
                                        Our Offices</Link></li>
                                </ul>
                            </li>
                            <li>
                                <Link href="/contact" className='no-underline'>
                                    <span className={`${page == 'contact' ? 'text-colorSecondary' : ''}`}>Contact Us</span></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
