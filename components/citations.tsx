import React from 'react'

export default function Citations() {
    return (
        <>
            <section className="" id="contact-sec">
                <div className="cta-wrap3 style2 bg-black">
                    <div className="row gx-0">
                        <div className="col-xl-7">
                            <div className="cta-content-wrap">
                                <div className="title-area text-xl-start text-center mb-40">
                                    <span className="sub-title after-none before-none justify-content-xl-start justify-content-center">
                                        PRAYER REQUEST
                                    </span>
                                    <h2 className="sec-title text-white text-sm">
                                        We welcome visitors from across the globe to stay with us and witness first-hand proof that Jesus Christ is the same yesterday, today and forever!
                                    </h2>
                                </div>
                                <form
                                    action="/"
                                    method="/"
                                    className="contact-form ajax-contact"
                                >
                                    <div className="grid grid-cols-3 gap-x-5 gap-y-5">
                                        <div className="">
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="name"
                                                id="name"
                                                placeholder="Your name"
                                            />
                                        </div>
                                        <div className="">
                                            <input
                                                type="email"
                                                className="form-control"
                                                name="email"
                                                id="email"
                                                placeholder="Your Email Address..."
                                            />
                                        </div>
                                        <div className="">
                                            <input
                                                type="number"
                                                className="form-control"
                                                name="number"
                                                id="number"
                                                placeholder="Phone Number..."
                                            />
                                        </div>
                                        <div className="col-span-3">
                                            <textarea
                                                className="rounded-none"
                                                rows={25}
                                                placeholder="Your prayer request"
                                            />
                                        </div>
                                        <div className="">
                                            <button className="w-full bg-primary p-3 pl-8 pr-8 text-white rounded-full">
                                                send prayer request
                                            </button>
                                        </div>
                                    </div>
                                    <p className="form-messages mb-0 mt-3" />
                                </form>
                            </div>
                        </div>
                        <div className="col-xl-5 p-3">
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
