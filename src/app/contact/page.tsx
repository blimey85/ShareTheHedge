'use client'

import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { object, string } from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Button } from '../../components/Button'
import { Container } from '../../components/Container'
import Image from 'next/image'
import contactPortraitImage from '@/images/contact-portrait.jpg'
import Toast from '../../components/Toast'

const ContactForm = () => {
    const [isToastVisible, setIsToastVisible] = useState(false)
    const [toastVarient, setToastVarient] = useState('success')
    const [toastHeading, setToastHeading] = useState('Notification Header')
    const validationSchema = object().shape({
        firstname: string().required('First Name is required').min(2, 'First name must be at least 2 characters'),
        lastname: string().required('Last Name is required').min(2, 'Last Name must be at least 2 characters'),
        email: string().required('Email Address is required').email('Invalid email address'),
        subject: string().required('Subject is required').min(3, 'Subject must be at least 3 characters'),
        message: string().required('Message is required').min(20, 'Message must be at least 20 characters'),
    })

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(validationSchema),
    })

    // Form submission handler
    const onSubmit = (data: any) => {
        const firstname = data.firstname
        const lastname = data.lastname
        const email = data.email
        const subject = data.subject
        const message = data.message

        try {
            fetch('/api/mailjet', {
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

            // alert('Thanks for contacting us, we will get back to you soon!')
            if (!isToastVisible) {
                setIsToastVisible(true)
                setToastVarient('success')
                setToastHeading('Contact Form Submitted')
            }
        } catch (err) {
            // console.error(err)
            // alert("We can't submit the form, try again later?")
            if (!isToastVisible) {
                setIsToastVisible(true)
                setToastVarient('error')
                setToastHeading('Error submitting form.')
            }
        }
    }

    return (
        <Container className="mt-16 sm:mt-32">
            {isToastVisible && (
                <Toast
                    varient={toastVarient}
                    heading={toastHeading}
                    isToastVisible={isToastVisible}
                    setIsToastVisible={setIsToastVisible}
                />
            )}
            <form className="container" onSubmit={handleSubmit(onSubmit)}>
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
                        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                            Drop Us a Line
                        </h1>
                        <h2 className="text-2xl">We would love to hear from you.</h2>
                        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                            <div>
                                <div className="mt-2.5">
                                    <input
                                        type="text"
                                        {...register('firstname')}
                                        name="firstname"
                                        id="first-name"
                                        placeholder="First Name"
                                        aria-label="First Name"
                                        autoComplete="first name"
                                        className="w-full flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-sky-500 focus:outline-none focus:ring-4 focus:ring-sky-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-sky-400 dark:focus:ring-sky-400/10 sm:text-sm"
                                    />
                                    {errors.firstname && (
                                        <p className="text-xs italic text-red-500">{errors.firstname.message}</p>
                                    )}
                                </div>
                            </div>
                            <div>
                                <div className="mt-2.5">
                                    <input
                                        type="text"
                                        {...register('lastname')}
                                        name="lastname"
                                        placeholder="Last Name"
                                        aria-label="Last Name"
                                        id="last-name"
                                        autoComplete="last name"
                                        className="w-full flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-sky-500 focus:outline-none focus:ring-4 focus:ring-sky-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-sky-400 dark:focus:ring-sky-400/10 sm:text-sm"
                                    />
                                    {errors.lastname && (
                                        <p className="text-xs italic text-red-500">{errors.lastname.message}</p>
                                    )}
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <div className="mt-2.5">
                                    <input
                                        type="email"
                                        {...register('email')}
                                        name="email"
                                        placeholder="Email Address"
                                        aria-label="Email Address"
                                        id="email"
                                        autoComplete="email"
                                        className="w-full flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-sky-500 focus:outline-none focus:ring-4 focus:ring-sky-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-sky-400 dark:focus:ring-sky-400/10 sm:text-sm"
                                    />
                                    {errors.email && (
                                        <p className="text-xs italic text-red-500">{errors.email.message}</p>
                                    )}
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <div className="mt-2.5">
                                    <input
                                        type="text"
                                        {...register('subject')}
                                        placeholder="Subject"
                                        aria-label="Subject"
                                        id="subject"
                                        className="w-full flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-sky-500 focus:outline-none focus:ring-4 focus:ring-sky-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-sky-400 dark:focus:ring-sky-400/10 sm:text-sm"
                                    />
                                    {errors.subject && (
                                        <p className="text-xs italic text-red-500">{errors.subject.message}</p>
                                    )}
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <div className="mt-2.5">
                                    <textarea
                                        {...register('message')}
                                        name="message"
                                        id="message"
                                        placeholder="Message"
                                        aria-label="Message"
                                        rows={4}
                                        className="w-full flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-sky-500 focus:outline-none focus:ring-4 focus:ring-sky-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-sky-400 dark:focus:ring-sky-400/10 sm:text-sm sm:leading-6"
                                    />
                                    {errors.message && (
                                        <p className="text-xs italic text-red-500">{errors.message.message}</p>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="mt-8 flex justify-end">
                            <Button type="submit" className="w-full">
                                Send Message
                            </Button>
                        </div>
                    </div>
                </div>
            </form>
        </Container>
    )
}

export default ContactForm
