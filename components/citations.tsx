import React, { useEffect, useState } from 'react'
import emailjs from '@emailjs/browser';
import { makeToast } from './contact-form'

export default function Citations() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        emailjs.init({
            publicKey: process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY,
            limitRate: {
                id: 'app',
                throttle: 100000,
            },
        });
    }, [])
    const sendRequest = () => {
        if (loading) return makeToast("waiting requesting still sending", true)
        setLoading(true)
        emailjs
            .send(
                `${process.env.NEXT_PUBLIC_SERVICE_ID}`, `${process.env.NEXT_PUBLIC_TEMPLATE_ID}`,
                {
                    from_name: name,
                    from_email: email,
                    from_phone: phone,
                    from_message: "The message <> was sent from the main prayer request section",
                    from_typee: "Prayer Request"
                }, {
                publicKey: process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY,
            })
            .then(
                () => {
                    makeToast("message was sent successfully")
                    setName("")
                    setPhone("")
                    setEmail("")
                    setLoading(false)
                },
                () => {
                    makeToast("message failed to send??")
                    setLoading(false)
                },
            );
    }

    return (
        <>
            <section className="" id="contact-sec">
                <div className="cta-wrap3 style2 bg-theme-dark">
                    <div className="row gx-0">
                        <div className="col-xl-7">
                            <div className="cta-content-wrap">
                                <div className="title-area text-xl-start text-center mb-40">
                                    <span className="sub-title after-none before-none justify-content-xl-start justify-content-center">
                                        PRAYER REQUEST
                                    </span>
                                    <h2 className="sec-title text-white">Reach Us</h2>
                                </div>
                                <div
                                    className="contact-form ajax-contact">
                                    <div className="row">
                                        <div className="form-group col-md-6 ">
                                            <input type="text" className="ring-1 placeholder:text-gray-300   ring-[#ffffff10] focus:ring-[#ffffff10] focus:outline-0  bg-colorPrimary rounded-full focus:bg-colorPrimary" name="name" id="name"
                                                placeholder="Your name"
                                                value={name} onChange={(e) => setName(e.target.value)} />
                                        </div>
                                        <div className="form-group col-md-6 ">
                                            <input type="email" className="ring-1 placeholder:text-gray-300 ring-[#ffffff10] focus:ring-[#ffffff10] focus:outline-0  bg-colorPrimary rounded-full focus:bg-colorPrimary" name="email" id="email"
                                                placeholder="Your Email Address..."
                                                value={email} onChange={(e) => setEmail(e.target.value)} />
                                        </div>
                                        <div className="form-group col-xxl-4 col-md-6 ">
                                            <input type="number" className="ring-1 placeholder:text-gray-300 ring-[#ffffff10] focus:ring-[#ffffff10] focus:outline-0  bg-colorPrimary rounded-full focus:bg-colorPrimary" name="number" id="number"
                                                placeholder="Phone Number..."
                                                value={phone} onChange={(e) => setPhone(e.target.value)} />
                                        </div>
                                        <div className="form-group col-xxl-4 col-md-6 ">
                                            <input type="number" className="ring-1 placeholder:text-gray-300  ring-[#ffffff10] focus:ring-[#ffffff10] focus:outline-0  bg-colorPrimary rounded-full focus:bg-colorPrimary" name="zip" id="zip"
                                                placeholder="Zip Code..." />
                                        </div>
                                        <div className="form-group col-xxl-4 col-xl-12 p-1">
                                            <button className="th-btn style3 w-100 p-3" onClick={sendRequest}>Reach Us Today</button>
                                        </div>
                                    </div>
                                    <p className="form-messages mb-0 mt-3"></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5">
                            <div className="w-full h-full">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1287.2410861304356!2d31.041809641626415!3d-17.882023830281728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931a36c1aa514bb%3A0xb5ee40da1333aabe!2sYadah%20Hotel!5e0!3m2!1sen!2szw!4v1738570144812!5m2!1sen!2szw"
                                    allowFullScreen={true}
                                    loading="lazy"
                                    className='w-full h-full'
                                    referrerPolicy="no-referrer-when-downgrade">
                                </iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

        </>

    )
}
