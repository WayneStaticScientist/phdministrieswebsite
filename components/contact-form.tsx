import React, { useState } from 'react'
import { toast, Bounce } from 'react-toastify';
import emailjs from '@emailjs/browser';
import { BiSmile } from 'react-icons/bi';
import { CgSpinner } from 'react-icons/cg';

export default function ContactForm({ messageText, buttonText, success, type }: {
    messageText?: string | null,
    buttonText?: string | null,
    success?: string | null,
    type?: string | null
}) {
    const makeToast = (message: string, error = false) => {
        if (error) {
            toast.error(message, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
            });
        } else {
            toast.success(message, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
            });
        }
    }
    emailjs.init({
        publicKey: process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY,
        limitRate: {
            id: 'app',
            throttle: 10000,
        },
    });
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [sending, setSending] = useState(false)
    const [messageSent, setMessageSent] = useState(false)
    const sendEmail = () => {
        if (sending) return
        if (name.length < 1) {
            return makeToast("Please provide your name", true)
        }
        if (email.length < 1) {
            return makeToast("Please provide your email", true)
        }
        if (message.length < 10) {
            return makeToast("message should at least have ten characters or more", true)
        }
        setSending(true)

        emailjs
            .send(`${process.env.NEXT_PUBLIC_SERVICE_ID}`, `${process.env.NEXT_PUBLIC_TEMPLATE_ID}`, {
                from_name: name,
                from_email: email,
                from_phone: phone,
                from_message: message,
                from_typee: type ? type : "Message"
            }, {
                publicKey: process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY,
            })
            .then(
                () => {
                    makeToast("message was sent successfully")
                    setName("")
                    setPhone("")
                    setEmail("")
                    setMessage("")
                    setSending(false)
                    setMessageSent(true)
                },
                () => {
                    makeToast("message failed to send??")
                    setSending(false)
                },
            );
    }
    return (
        <div className="contact-form-v1 contact-page-form h-full">
            <div className="contact-form style-border ajax-contact h-full" >
                {
                    messageSent ? (
                        <div className="flex  h-full justify-center items-center flex-col">
                            <BiSmile size={50} className='text-colorSecondary' />
                            <span className='text-center'>
                                {success ? <>{success}</> : <>
                                    You message was well received and we will respond as soon as possible . Please stay tuned
                                </>}
                            </span>

                        </div>
                    ) : (
                        <div className="row">
                            <div className="form-group style-border col-12">
                                <input type="text"
                                    value={name} onChange={(e) => setName(e.target.value)}
                                    className="form-control" name="name" id="name" placeholder="Your Name" />
                            </div>
                            <div className="form-group style-border col-12">
                                <input type="email"
                                    value={email} onChange={(e) => setEmail(e.target.value)}
                                    className="form-control" name="email" id="email" placeholder="Email Address" />
                            </div>
                            <div className="form-group style-border col-12">
                                <input type="number"
                                    value={phone} onChange={(e) => setPhone(e.target.value)}
                                    className="form-control" name="number" id="number" placeholder="Phone Number" />
                            </div>
                            <div className="form-group style-border col-12">
                                <textarea value={message} name="message" id="message"
                                    onChange={(e) => setMessage(e.target.value)}
                                    placeholder={`${messageText ? messageText : 'Type Your Message'}`}></textarea>
                            </div>
                            <div className="form-btn col-12">
                                <button className={type == 'Prayer Request' ? 'p-3 bg-colorSecondary rounded-full text-white hover:bg-colorPrimary hover:ring-2 hover:ring-white' : "th-btn p-3 "} onClick={sendEmail}>
                                    {sending ? (<><CgSpinner size={20} className=' animate-spin' /></>) : (<>
                                        {
                                            buttonText ? (<>{buttonText}</>) : (<>Send a Message</>)
                                        }</>)}
                                </button>
                            </div>
                        </div>)
                }
                <p className="form-messages mb-0 mt-3"></p>
            </div>
        </div>
    )
}
