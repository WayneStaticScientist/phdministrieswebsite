import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaPerson } from 'react-icons/fa6';
const DynamicMobileHeader = dynamic(() => import('./mobile-menu'), { ssr: false });

const Header = ({ page }: { page: string }) => {
    const [navbar, setNavBar] = useState(false)
    const toggleView = () => {
        setNavBar(!navbar)
    }
    return (
        <>
            <DynamicMobileHeader page={page} display={navbar} toggleDisplay={setNavBar} />
            <header className="th-header header-layout2">
                <div className="sticky-wrapper ">
                    <div className="w-full lg:pl-28 lg:pr-20 pr-8 pl-8" >
                        <div className="menu-area">
                            <div className="header-logo">
                                <Link href="/">
                                    <Image
                                        src="/assets/img/logo.png"
                                        alt="Phd Ministries Logo"
                                        width={98}
                                        height={80}
                                    />
                                </Link>
                            </div>
                            <div className="menu-area-wrap">
                                <nav className="main-menu d-none d-lg-block">
                                    <ul>
                                        <li className="">
                                            <Link href="/" className={`no-underline `}>
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
                                </nav>
                                <p className="header-notice flex">

                                    Prophetic Healing and Deliverance Ministries</p>
                            </div>
                            <div className="header-button hidden">
                                <Link href="/partnership" className="hidden xl:flex hover:bg-colorPrimary bg-colorSecondary p-3 rounded-full text-white items-center gap-x-3 no-underline">
                                    <FaPerson className='' />
                                    Partner
                                </Link>
                                <Link href="#" className="hidden xl:flex hover:bg-colorSecondary bg-colorPrimary p-3 rounded-full text-white items-center gap-x-3 no-underline">
                                    <i className="fas fa-heart me-2"></i>
                                    Donate
                                </Link>
                                <button type="button" className="icon-btn th-menu-toggle d-lg-none"><i
                                    className="far fa-bars" onClick={toggleView}></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;