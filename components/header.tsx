import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaPeopleGroup } from 'react-icons/fa6';

const Header: React.FC = () => {
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
                                        <Link href="/" className='no-underline'>Home</Link>
                                    </li>
                                    <li><Link href="/about" className='no-underline'>Donations</Link></li>
                                    <li className="menu-item-has-children no-underline">
                                        < Link href="/" className='no-underline'>About</Link>
                                        <ul className="sub-menu">
                                            <li>
                                                <Link href="donation.html" className='no-underline'>
                                                    PHD Ministries
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="donation-details.html" className='no-underline'>
                                                    Water of Life
                                                </Link>
                                            </li>
                                            <li><Link href="donate-now.html" className='no-underline'>
                                                Statement of Faith
                                            </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="menu-item-has-children">
                                        <Link href="/" className='no-underline'>Ministries</Link>
                                        <ul className="sub-menu">
                                            <li><Link href="shop.html" className='no-underline'>Yadah TV</Link></li>
                                            <li><Link href="shop-details.html" className='no-underline'>Charity</Link></li>
                                            <li><Link href="cart.html" className='no-underline'>Our Offices</Link></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link href="/" className='no-underline'>Contact Us</Link>
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