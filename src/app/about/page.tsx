import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '../../components/Container'
import { PiInstagramLogo, PiSpotifyLogo, PiTiktokLogo } from 'react-icons/pi'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({
    className,
    href,
    children,
    icon: Icon,
}: {
    className?: string
    href: string
    icon: React.ComponentType<{ className?: string }>
    children: React.ReactNode
}) {
    return (
        <li className={clsx(className, 'flex')}>
            <Link
                href={href}
                className="group flex text-sm font-medium text-zinc-800 transition hover:text-sky-500 dark:text-zinc-200 dark:hover:text-sky-500">
                <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-sky-500" />
                <span className="ml-4">{children}</span>
            </Link>
        </li>
    )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
            <path
                fillRule="evenodd"
                d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
            />
        </svg>
    )
}

export const metadata: Metadata = {
    title: 'About',
    description: 'Share The Hedge Publishing - About Page',
}

export default function About() {
    return (
        <Container className="mt-16 sm:mt-32">
            <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
                <div className="lg:pl-20">
                    <div className="max-w-xs px-2.5 lg:max-w-none">
                        <Image
                            src={portraitImage}
                            alt=""
                            sizes="(min-width: 1024px) 32rem, 20rem"
                            className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
                        />
                    </div>
                </div>
                <div className="lg:order-first lg:row-span-2">
                    <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                        Share The Hedge
                    </h1>
                    <h2 className="text-2xl">Founded 2024</h2>
                    <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
                        <p>
                            Introducing Share The Hedge, a groundbreaking publishing imprint that redefines the
                            traditional author-publisher relationship. In this innovative platform, authors unite to
                            form a community where collaboration and mutual support are at the forefront. At Share The
                            Hedge, it is all about sharing information, knowledge, contacts, and support to help each
                            other thrive in the ever-evolving world of publishing.
                        </p>
                        <p>
                            Gone are the days of isolated writers navigating the daunting publishing landscape alone.
                            Share The Hedge fosters an environment of camaraderie, where authors work together to
                            amplify their voices and reach new heights of success. By pooling their collective
                            expertise, authors can tap into a vast network of resources, gaining invaluable insights and
                            expanding their professional connections.
                        </p>
                        <p>
                            With Share The Hedge, authors can access a wealth of shared knowledge, benefiting from the
                            diverse experiences and perspectives of their peers. From navigating the intricacies of
                            manuscript editing to mastering the art of book marketing, every author can find guidance
                            and support within this vibrant community.
                        </p>
                        <p>
                            Moreover, Share The Hedge empowers authors to take ownership of their careers. By
                            participating in joint marketing initiatives, cross-promotions, and collaborative events,
                            authors can leverage their combined strengths to reach wider audiences and maximize their
                            impact. Together, they create a powerful synergy that propels their collective success to
                            new heights.
                        </p>
                        <p>
                            Whether you are an established author looking for fresh opportunities or an aspiring writer
                            seeking guidance and mentorship, Share The Hedge is the publishing imprint that will
                            revolutionize your journey. Join this dynamic community and experience the transformative
                            power of collaboration, as you share information, knowledge, contacts, and support to unlock
                            your true potential as an author.
                        </p>
                        <p>Together, we can achieve greatness.</p>
                    </div>
                </div>
                <div className="lg:pl-20">
                    <ul role="list">
                        <SocialLink href="#" icon={PiInstagramLogo}>
                            Follow on Instagram
                        </SocialLink>
                        <SocialLink href="#" icon={PiTiktokLogo} className="mt-4">
                            Follow on TikTok
                        </SocialLink>
                        <SocialLink href="#" icon={PiSpotifyLogo} className="mt-4">
                            Follow on Spotify
                        </SocialLink>

                        <SocialLink
                            href="mailto:inquiries@sharethehedge.pub"
                            icon={MailIcon}
                            className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40">
                            inquiries@ShareTheHedge.pub
                        </SocialLink>
                    </ul>
                </div>
            </div>
        </Container>
    )
}
