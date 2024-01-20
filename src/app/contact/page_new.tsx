'use client'

import React from 'react'
import { useForm } from 'react-hook-form'
import { object, string } from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const UserRegistrationForm = () => {
    const validationSchema = object().shape({
        username: string()
            .required('Username is required')
            .min(3, 'Username must be at least 3 characters'),
        email: string()
            .required('Email is required')
            .email('Invalid email address'),
        password: string()
            .required('Password is required')
            .min(8, 'Password must be at least 8 characters'),
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
        console.log(data)
    }

    return (
        <div className="m-auto flex w-1/2 flex-col gap-4">
            <h1 className="bold text-2xl underline">Registration Form</h1>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-2">
                <div className="input-wrapper flex flex-col">
                    <label htmlFor="username">Username</label>
                    <input
                        id="username"
                        autoComplete="true"
                        type="text"
                        {...register('username')}
                        className="w-full flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-sky-500 focus:outline-none focus:ring-4 focus:ring-sky-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-sky-400 dark:focus:ring-sky-400/10 sm:text-sm"
                    />
                    {errors.username && (
                        <p className="text-xs italic text-red-500">
                            {errors.username.message}
                        </p>
                    )}
                </div>

                <div className="input-wrapper flex flex-col">
                    <label htmlFor="email">Email</label>
                    <input
                        autoComplete="true"
                        type="email"
                        id="email"
                        {...register('email')}
                        className="w-full flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-sky-500 focus:outline-none focus:ring-4 focus:ring-sky-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-sky-400 dark:focus:ring-sky-400/10 sm:text-sm"
                    />
                    {errors.email && (
                        <p className="text-xs italic text-red-500">
                            {errors.email.message}
                        </p>
                    )}
                </div>

                <div className="input-wrapper flex flex-col">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        {...register('password')}
                        className="w-full flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-sky-500 focus:outline-none focus:ring-4 focus:ring-sky-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-sky-400 dark:focus:ring-sky-400/10 sm:text-sm"
                    />
                    {errors.password && (
                        <p className="text-xs italic text-red-500">
                            {errors.password.message}
                        </p>
                    )}
                </div>

                <div className="input-wrapper">
                    <button
                        type="submit"
                        className="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}

export default UserRegistrationForm
