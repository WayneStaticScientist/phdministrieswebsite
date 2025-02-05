import React from 'react'
import Footer from '@/components/footer'
import Header from '@/components/header'
import { CiLocationOn } from 'react-icons/ci'
import Hero2 from '@/components/secondary-headers/hero2'
import { useOffices, useOfficesInternational } from '@/stores/data/offices'

export default function OfficesPage() {
    const offices = useOffices()
    const officesInternation = useOfficesInternational()
    return (
        <>
            <Header page='ministry' />
            <Hero2 title='Our Offices'
                image='assets/img/bg/hoteloffice.png'
                path={
                    [
                        {
                            title: "home",
                            path: "/"
                        },
                        {
                            title: "offices",
                            path: ""
                        }
                    ]}
            />
            <section className="space overflow-hidden">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-7">
                            <div className="title-area text-center">
                                <span className="sub-title after-none before-none">
                                    Offices
                                </span>
                                <h2 className="sec-title">
                                    Zimbabwe Local Offices
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="mb-32 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-12 gap-y-12">
                        {Object.values(offices).map((e, i) => {
                            return (
                                <div key={i} className="col-xl-12 col-lg-4 col-md-6">
                                    <div className="price-card2">
                                        <div className="price-card_content  flex flex-col gap-y-6">
                                            <h2 className=' font-bold'>{e.title}</h2>
                                            <div className="checklist flex gap-x-3">
                                                <CiLocationOn size={20} /> {e.location}
                                            </div>
                                            <span className='font-bold'>{e.phone}</span>
                                            <a href={`tel:${e.phone}`} className="th-btn no-underline p-3">
                                                call now
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-xl-7">
                            <div className="title-area text-center">
                                <span className="sub-title after-none before-none">
                                    Offices
                                </span>
                                <h2 className="sec-title">
                                    International Offices
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-12 gap-y-12">
                        {Object.values(officesInternation).map((e, i) => {
                            return (
                                <div key={i} className="col-xl-12 col-lg-4 col-md-6">
                                    <div className="price-card2">
                                        <div className="price-card_content  flex flex-col gap-y-6">
                                            <h2 className=' font-bold'>{e.title}</h2>
                                            <div className="checklist flex gap-x-3">
                                                <CiLocationOn size={20} /> {e.location}
                                            </div>
                                            <span className='font-bold'>{e.phone}</span>
                                            <a href={`tel:${e.phone}`} className="th-btn no-underline p-3">
                                                call now
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}
