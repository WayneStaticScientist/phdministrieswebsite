import { allFaqs } from '@/stores/data/faqs'
import { Accordion, AccordionItem } from '@szhsin/react-accordion'
import Image from 'next/image'
import React from 'react'
import { BiChevronDown } from 'react-icons/bi'
export default function Faqs() {
    const faqs = allFaqs()
    return (
        <div
            className="space overflow-hidden faq-area-2 background-image shape-mockup-wrap"
            style={{ backgroundImage: "url(assets/img/bg/gray-bg2.png)" }}
        >
            <div
                className="shape-mockup faq-shape2-1 jump-reverse"
                style={{ top: "20%", left: "0px" }}
            >
                <Image src="/assets/img/shape/hand-bg-shape2-1.png" alt="img"
                    width={208}
                    height={176} />
            </div>
            <div className="container">
                <div className="row gy-60 gx-60">
                    <div className="col-xl-7">
                        <div className="faq-wrap2">
                            <div className="title-area">
                                <span className="sub-title after-none before-none">
                                    <i className="far fa-heart text-theme" />
                                    Frequently Asked Questions
                                </span>
                                <h2 className="sec-title">Have Any Questions For Us?</h2>
                            </div>
                            <div className="accordion" id="faqAccordion">
                                <Accordion className='flex flex-col gap-y-6 p-0 m-0' >
                                    {Object.values(faqs).map((e, i) => {
                                        return (
                                            <AccordionItem key={i}
                                                header={
                                                    <div className='flex justify-between w-full m-0  items-center'>
                                                        <span className=''>{e.title}</span>
                                                        <span className='flex justify-end '>
                                                            <BiChevronDown size={30} className=' flex flex-shrink-0' />
                                                        </span>
                                                    </div>
                                                }
                                                headingTag='h6'
                                                className='flex flex-col w-full items-center bg-white p-3'
                                                buttonProps={{
                                                    className: ({ isEnter }) =>
                                                        isEnter ? 'bg-blue' : 'bg-white',
                                                }}
                                                contentProps={{ className: '' }}
                                                panelProps={{ className: '' }}
                                            >
                                                <span className='p-3'>
                                                    {e.description}
                                                </span>
                                            </AccordionItem>
                                        )
                                    })}
                                </Accordion>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5">
                        <div className="faq-img-box2">
                            <div className="img1">
                                <Image src="/assets/img/normal/faq_2_1.png" alt="img"
                                    width={865}
                                    height={790}
                                />
                            </div>
                            <div className="faq-img-shape">
                                <Image src="/assets/img/shape/faq-shape2-1.png" alt="img"
                                    width={163}
                                    height={790}
                                />
                            </div>
                        </div>
                    </div>
                </div >
            </div >
        </div >

    )
}
