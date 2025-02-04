import Footer from '@/components/footer'
import Header from '@/components/header'
import Hero2 from '@/components/secondary-headers/hero2'
import Image from 'next/image'
import React from 'react'

export default function StatementOfFaith() {
    return (
        <>
            <Header page='about' />
            <Hero2 title='Statement Of Faith'
                image='assets/img/bg/stat.jpg'
                path={
                    [
                        {
                            title: "home",
                            path: "/"
                        },
                        {
                            title: "statementoffaith",
                            path: ""
                        }
                    ]}
            />
            <div className="overflow-hidden space-top mb-32">

                <div className="container">
                    <div className="row gx-80 justify-content-between">
                        <div className="col-xl-5">
                            <div className="faq-img-box1">
                                <div className="img1">
                                    <Image src="/assets/img/normal/faq_1_1.png" alt="img"
                                        width={725}
                                        height={579}
                                    />
                                </div>
                                <div className="mask-shape bg-mask"
                                    style={{ maskImage: "url('assets/img/normal/faq_1_1-mask.png')" }}
                                ></div>
                                <div className="img2 jump">
                                    <Image src="/assets/img/normal/faq_1_2.png" alt="img"
                                        width={300}
                                        height={310}
                                    />
                                </div>
                                <div className="img3 spin">
                                    <Image src="/assets/img/shape/hand-group-shape1.png" alt="img"
                                        height={166}
                                        width={145}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-7">
                            <div className="faq-wrap1">
                                <div className="title-area">
                                    <span className="sub-title before-none">Statement of Faith</span>
                                    <h2 className="sec-title"></h2>
                                </div>
                                <div>
                                    We acknowledge and trust: We all go to the Father God Jehovah through our Lord Jesus Christ. John.14:6 6 Jesus said to him “I am the way, the truth, and the life. No one comes to the Father except through Me.”We are all God’s people but not all are God’s children. You become God’s child by accepting Jesus Christ as your personal Saviour and being prepared to live for Him through following His proper ways. Those who believe in Him will have rest. Matthew.11:28-30 28 “Come to me, all you who are weary and burdened, and I will give you rest. 29 Take my yoke upon you and learn from me, for I am gentle and humble in heart, and you will find rest for your souls. 30 For my yoke is easy and my burden is light.” The Holy Bible is God Jehovah’s manual of creation: – before creation – during creation – after creation. 2 Timothy.3:16-17 16 All Scripture is given by inspiration of God, and is profitable for doctrine, for reproof, for correction, for instruction in righteousness, 17 that the man of God may be complete, thoroughly equipped for every good work.
                                    <br />
                                    <br />
                                    <br />
                                    The word is God’s message of divine favour, grace and truth to guide and protect us from sin. Hosea.4:6 6 My people are destroyed for lack of knowledge. Because you have rejected knowledge, I also will reject you from being priest for Me; Because you have forgotten the law of your God, I also will forget your children. Mark.16:15-16 15 “And He said to them, “Go into all the world and preach the gospel to every creature.16 He who believes and is baptized will be saved; but he who does not believe will be condemned.” Reading the word strengthens your mind and shapes your soul thereby cementing your relationship with the Almighty God. Sin is for the darkness and its dark kingdom while the word brings light to mankind pushing away darkness and sin. He who hates the word loves the world. And he who loves the world falls into sin. 1 John.2:15-17 15 Love not the world, neither the things that are in the world. If any man loves the world, the love of the Father is not in him. 16 For all that is in the world, the lust of the flesh, and the lust of the eyes, and the pride of life, is not of the Father, but is of the world. 17 And the world passeth away, and the lust thereof: but he that doeth the will of God abideth for ever. Deliverance is the casting away of evil spirits setting you free from tormenting demons and the evil spirits. It frees you from all spiritual, physical and economic bondage. Mark.16:17-18 17 “And these signs will follow those who believe: In My name they will cast out demons; they will speak with new tongues; 18 they will take up serpents; and if they drink anything deadly, it will by no means hurt them; they will lay hands on the sick, and they will recover.”
                                    <br />
                                    <br />
                                    <br />
                                    Demonstration of God’s power is a true practical way to tell the world that God’s word is still alive today as it was 2000 years ago and beyond for it will remain so till Jesus Christ comes back. Isaiah.40:8 ,The grass withers, the flower fades, But the word of our God stands forever.” Healing, miracles and deliverance are all part of demonstration of God’s power , they are still happening today. Matthew.24:37-39 37 ,But as the days of Noah were, so also will the coming of the Son of Man be. 38 For as in the days before the flood, they were eating and drinking, marrying and giving in marriage, until the day that Noah entered the ark, 39 and did not know until the flood came and took them all away, so also will the coming of the Son of Man be.”
                                    <br />
                                    <br />
                                    <br />
                                    Maintaining deliverance is very important. Receiving deliverance is good but you can be worse off if you fail to maintain your deliverance. You need God more after deliverance than before your deliverance. Stay away from the past bad ways so that you do not invite the evil spirits again into your life. Matthew.12:43-45 43, When an unclean spirit goes out of a man, he goes through dry places, seeking rest, and finds none. 44 Then he says, I will return to my house from which I came. And when he comes, he finds it empty, swept, and put in order. 45 Then he goes and takes with him seven other spirits more wicked than himself, and they enter and dwell there, and the last state of that man is worse than the first. So shall it also be with this wicked generation.” We give all glory to God the Almighty. Let there be light. the light that pushes away the darkness
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
