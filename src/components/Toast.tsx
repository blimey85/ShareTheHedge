import React from 'react'
import Img from 'next/image'
import {
    ExclamationCircleIcon,
    InformationCircleIcon,
    ExclamationTriangleIcon,
    CheckCircleIcon,
} from '@heroicons/react/24/outline'

export default function Toast({
    varient = 'success',
    heading = 'Notification Header',
    isToastVisible,
    setIsToastVisible,
}: any) {
    setTimeout(() => {
        setIsToastVisible(false)
    }, 4900)
    return (
        <>
            {isToastVisible && (
                <div className="pill-animation fixed left-1/2 top-5 z-50 mx-auto h-12 w-80 -translate-x-1/2 rounded-full bg-zinc-800 shadow-xl ring-2 ring-white/30">
                    <div className="inner-animation flex h-full w-full items-center justify-between gap-4 px-2">
                        <Img
                            src="/images/cute.png"
                            height={36}
                            width={36}
                            alt=""
                            className="h-9 w-9 rounded-full"
                        />
                        <p className="font-medium text-zinc-400">{heading}</p>
                        {getSymbolIcon(varient)}
                    </div>
                </div>
            )}
        </>
    )
}

function getSymbolIcon(varient: string) {
    switch (varient) {
        case 'success':
            return (
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-green-300/20">
                    <CheckCircleIcon className="h-6 w-6 text-green-300" />
                </span>
            )
        case 'error':
            return (
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-red-300/20">
                    <ExclamationCircleIcon className="h-6 w-6 text-red-300" />
                </span>
            )
        case 'warning':
            return (
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-yellow-300/20">
                    <ExclamationTriangleIcon className="h-6 w-6 text-yellow-300" />
                </span>
            )
        case 'info':
            return (
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-300/20">
                    <InformationCircleIcon className="h-6 w-6 text-blue-300" />
                </span>
            )
    }
}
