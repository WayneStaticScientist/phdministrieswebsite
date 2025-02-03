import React from 'react'

export default function Hero2(
    { title, path, image }:
        { title: string, image: string, path: { title: string, path: string }[] }
) {
    return (
        <div className="breadcumb-wrapper"
            style={{
                backgroundImage: `url(${image})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
            }}
            data-overlay="theme">
            <div className="container">
                <div className="breadcumb-content">
                    <h1 className="breadcumb-title">{title}</h1>
                    <ul className="breadcumb-menu">
                        {
                            path.map((e, i) => {
                                if (e.path && e.path.length > 0) {
                                    return <li key={i}><a href={`${path}`}>{e.title}</a></li>
                                }
                                return <li key={i}>{e.title}</li>
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}
