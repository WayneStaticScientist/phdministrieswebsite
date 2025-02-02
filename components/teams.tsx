import React from 'react'

export default function Teams() {
    return (
        <section
            className="space"
            id="team-sec"
            data-bg-src="assets/img/bg/gray-bg2.png"
        >
            <div
                className="shape-mockup team-bg-shape3-1 d-xxl-block d-none"
                data-top="0%"
                data-left="0%"
                data-bottom={0}
            >
                <img src="assets/img/shape/team_bg_shape3_1.png" alt="img" />
            </div>
            <div
                className="shape-mockup team-bg-shape3-2 d-xxl-block d-none"
                data-top="0%"
                data-right="0%"
                data-bottom={0}
            >
                <img src="assets/img/shape/team_bg_shape3_2.png" alt="img" />
            </div>
            <div
                className="shape-mockup team-bg-shape3-3 spin d-xxl-block d-none"
                data-top="15%"
                data-left="20%"
            >
                <div className="color-masking2">
                    <div
                        className="masking-src"
                        data-mask-src="assets/img/shape/team_bg_shape3_3.png"
                    />
                    <img src="assets/img/shape/team_bg_shape3_3.png" alt="img" />
                </div>
            </div>
            <div
                className="shape-mockup team-bg-shape3-4 jump d-xxl-block d-none"
                data-top="18%"
                data-right="10%"
            >
                <img src="assets/img/shape/team_bg_shape3_4.png" alt="img" />
            </div>
            <div
                className="shape-mockup team-bg-shape3-5 spin d-xxl-block d-none"
                data-bottom="18%"
                data-left="10%"
            >
                <img src="assets/img/shape/team_bg_shape3_5.png" alt="img" />
            </div>
            <div
                className="shape-mockup team-bg-shape3-6 spin d-xxl-block d-none"
                data-bottom="10%"
                data-right="10%"
            >
                <div className="color-masking">
                    <div
                        className="masking-src"
                        data-mask-src="assets/img/shape/team_bg_shape3_6.png"
                    />
                    <img src="assets/img/shape/team_bg_shape3_6.png" alt="img" />
                </div>
            </div>

        </section>

    )
}
