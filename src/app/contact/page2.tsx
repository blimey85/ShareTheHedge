'use client'

import { Button } from '../../components/Button'
import { SimpleLayout } from '../../components/SimpleLayout'
import { useState } from 'react'
import { Container } from '../../components/Container'
import Image from 'next/image'
import contactPortraitImage from '@/images/contact-portrait.jpg'

export default function ContactForm() {
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')

    async function sendEmail() {
        try {
            await fetch('/api/mailjet', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    firstname,
                    lastname,
                    email,
                    subject,
                    message,
                }),
            })
            setFirstname('')
            setLastname('')
            setEmail('')
            setSubject('')
            setMessage('')
            alert('Thanks for contacting us, we will get back to you soon!')
        } catch (err) {
            // TOAST error
            console.error(err)
            alert("We can't submit the form, try again later?")
        }
    }
    return (
        <Container className="mt-16 sm:mt-32">
            <form className="container" onSubmit={sendEmail}>
                <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
                    <div className="lg:pl-20">
                        <div className="max-w-xs px-2.5 lg:max-w-none">
                            <Image
                                src={contactPortraitImage}
                                alt=""
                                sizes="(min-width: 1024px) 32rem, 20rem"
                                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
                            />
                        </div>
                    </div>
                    <div className="lg:order-first lg:row-span-2">
                        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
                            Share The Hedge
                        </h1>
                        <h2 className="text-2xl">Founded 2024</h2>
                        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                            <div>
                                <div className="mt-2.5">
                                    <input
                                        type="text"
                                        value={firstname}
                                        onChange={(e) =>
                                            setFirstname(e.target.value)
                                        }
                                        name="firstname"
                                        id="first-name"
                                        placeholder="First Name"
                                        aria-label="First Name"
                                        autoComplete="given-name"
                                        required
                                        className="w-full flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 sm:text-sm dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10"
                                    />
                                </div>
                            </div>
                            <div>
                                <div className="mt-2.5">
                                    <input
                                        type="text"
                                        value={lastname}
                                        onChange={(e) =>
                                            setLastname(e.target.value)
                                        }
                                        name="lastname"
                                        placeholder="Last Name"
                                        aria-label="Last Name"
                                        id="last-name"
                                        autoComplete="family-name"
                                        required
                                        className="w-full flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 sm:text-sm dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <div className="mt-2.5">
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                        name="email"
                                        placeholder="Email Address"
                                        aria-label="Email Address"
                                        id="email"
                                        autoComplete="email"
                                        required
                                        className="w-full flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 sm:text-sm dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <div className="mt-2.5">
                                    <input
                                        type="text"
                                        value={subject}
                                        onChange={(e) =>
                                            setSubject(e.target.value)
                                        }
                                        placeholder="Subject"
                                        aria-label="Subject"
                                        id="subject"
                                        autoComplete=""
                                        required
                                        className="w-full flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 sm:text-sm dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <div className="mt-2.5">
                                    <textarea
                                        value={message}
                                        onChange={(e) =>
                                            setMessage(e.target.value)
                                        }
                                        name="message"
                                        id="message"
                                        placeholder="Message"
                                        aria-label="Message"
                                        rows={4}
                                        className="w-full flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 sm:text-sm sm:leading-6 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10"
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="mt-8 flex justify-end">
                            <Button className="w-full">Send Message</Button>
                        </div>
                    </div>
                </div>
            </form>
        </Container>
    )
}
