import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaPeopleGroup } from 'react-icons/fa6';

const Header = ({ page }: { page: string }) => {
    return (
        <header className="th-header header-layout2">
            <div className="sticky-wrapper ">
                <div className="w-full pl-28 pr-20" >
                    <div className="menu-area ">
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
                            </nav>
                            <p className="header-notice flex">

                                Prophetic Healing and Deliverance Ministries</p>
                        </div>
                        <div className="header-button">
                            <Link href="/" className="no-underline th-btn flex gap-x-2">
                                <FaPeopleGroup />
                                Partner
                            </Link>
                            <Link href="/" className="no-underline th-btn flex">
                                <i className="fas fa-heart me-2"></i>
                                Donate
                            </Link>
                            <button type="button" className="icon-btn th-menu-toggle d-lg-none"><i
                                className="far fa-bars"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;