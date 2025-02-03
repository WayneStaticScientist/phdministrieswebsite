import Image from 'next/image'
import React from 'react'

export default function VideoSection() {
    return (

        <div className="video-area-3">
            <div
                className="shape-mockup video-bg-shape3-1"
                data-top={0}
                data-left={0}
                data-bottom={0}
            >
                <Image src="/assets/img/shape/video_bg_shape3_1.png" alt="img"
                    width={133} height={640} />
            </div>
            <div
                className="shape-mockup video-bg-shape3-2"
                data-top={0}
                data-right={0}
                data-bottom={0}
            >
                <Image src="/assets/img/shape/video_bg_shape3_2.png" alt="img"
                    width={134} height={640} />
            </div>
            <div className="video-thumb3-1 video-box-center">
                <Image src="/assets/img/normal/video-thumb3-1.png" alt="img"
                    width={1920} height={640} />
                <a
                    href="https://www.youtube.com/watch?v=zwwL2KQXnuE"
                    className="play-btn style7 popup-video"
                >
                    <i className="fa-sharp fa-solid fa-play" />
                </a>
            </div>
        </div>

    )
}
