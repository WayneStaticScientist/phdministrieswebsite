import { BooksInterface, useBooksStates } from '@/stores/data/books'
import Image from 'next/image'
import Link from 'next/link'
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
                    <div className="grid xl:grid-cols-3 gap-y-16 gap-x-24">
                        {Object.values(books).map((e: BooksInterface, i: number) => {
                            return (
                                <div className="w-full" key={i}>
                                    <div className="feature-card p-0 flex flex-col items-center">
                                        <div className="box-icon">
                                            <Image src={e.image}
                                                className='w-full h-16' alt="icon" width={510} height={500} />
                                        </div>
                                        <span className='font-bold'>{e.title}</span>
                                        <Link href={e.downloadUrl}>
                                            <button className="bg-colorPrimary w-fit p-3 rounded-xl text-white mb-3">Download</button>
                                        </Link>
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
