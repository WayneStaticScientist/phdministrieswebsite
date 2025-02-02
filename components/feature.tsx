import { BooksInterface, useBooksStates } from '@/stores/data/books'
import Image from 'next/image'
import React from 'react'

export default function Feature() {
    const books = useBooksStates()
    return (
        <>
            <section className="feature-area-1 position-relative space-bottom ">
                <div
                    className="feature-bg-wrap background-image bg-mask"
                    style={{
                        backgroundImage: "url(assets/img/bg/gray-bg2.png)",
                        maskImage: "url(assets/img/bg/feature-bg-mask-1.png)"
                    }}
                >
                    <div className="feature-bg-shape1-1" />
                </div>
                <div className="container">
                    <div className="row gy-30 gx-30 justify-content-end">
                        {Object.values(books).map((e: BooksInterface, i: number) => {
                            return (
                                <div className="col-xl-3 col-lg-4 m-0 h-80" key={i}>
                                    <div className="feature-card p-0 flex flex-col items-center">
                                        <div className="box-icon">
                                            <Image src={e.image}
                                                className='w-full h-16' alt="icon" width={510} height={500} />
                                        </div>
                                        <span className='font-bold'>{e.title}</span>
                                        <button className="bg-primary w-fit p-3 rounded-xl text-white mb-3">Download</button>
                                    </div>
                                </div>
                            )
                        })}

                    </div>

                </div>
            </section>
        </>

    )
}
