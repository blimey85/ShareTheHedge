import { type Metadata } from 'next'
import Image from 'next/image'
import parse from 'html-react-parser'

import { SimpleLayout } from '../../components/SimpleLayout'
import {
    PiGoodreadsLogoBold,
    PiHouseBold,
    PiInstagramLogoBold,
    PiSpotifyLogoBold,
    PiTiktokLogoBold,
    PiYoutubeLogoBold,
} from 'react-icons/pi'
import Link from 'next/link'
// import oliviaImage from '@/images/olivia_office.jpg'

const people = [
    {
        name: 'Lindsay Sellers',
        genre: 'Romance & Spicy Romance',
        imageUrl: '/images/lindsay_selfie.jpg',
        imageHeight: 533,
        imageWidth: 800,
        bio: 'Prepare to ignite your senses with the sizzling debut novel from indie spicy romance author Lindsay Sellers! In this highly anticipated release, Sellers takes readers on a captivating journey filled with passion, desire, and unexpected twists.<br /><br />With her unique storytelling style and daring characters, she delves into the depths of love and lust, leaving readers breathless and begging for more. Brace yourself for a rollercoaster ride of steamy encounters, forbidden desires, and heart-pounding suspense as this rising star in the world of spicy romance introduces herself with a scorching debut that is sure to leave you craving for more.',
        tiktokUrl: 'https://www.tiktok.com/@authorlindsaysellers',
        instagramUrl: 'https://www.instagram.com/authorlindsaysellers',
        youtubeUrl: '',
        goodreadsUrl: '',
        spotifyUrl: '',
        websiteUrl: 'https://lindsaysellers.com/',
    },
    {
        name: 'Oswald Corbett',
        genre: 'Thriller & Historical Fiction',
        imageUrl: '/images/oswald_portrait.jpg',
        imageHeight: 533,
        imageWidth: 800,
        bio: 'Prepare to be spellbound by the electrifying storytelling of Oswald Corbett, an exciting new voice in thrillers. With his debut novel, Corbett thrusts readers into a heart-pounding world of suspense and mystery that will leave them gasping for breath.<br /><br />Seamlessly blending psychological thrills and pulse-pounding action, he weaves a web of intrigue that keeps readers guessing until the very last page. With an uncanny ability to create complex characters, Corbett takes readers on a rollercoaster ride through twisted plots and unexpected twists. Get ready to be captivated by his gripping storytelling and immerse yourself in a world where nothing is as it seems.',
        tiktokUrl: 'https://www.tiktok.com/@oswaldcorbett',
        instagramUrl: 'https://www.instagram.com/oswaldcorbett',
        youtubeUrl: '',
        goodreadsUrl: '',
        spotifyUrl:
            'https://open.spotify.com/playlist/3JXq1TdRFSqpIUGUwpc2V8?si=5b35c9cdd2e6428b',
        websiteUrl: 'https://oswaldcorbett.com/',
    },
    {
        name: 'Olivia Garamendi',
        genre: 'Romance & RomCom',
        imageUrl: '/images/olivia_office.jpg',
        imageHeight: 534,
        imageWidth: 800,
        bio: 'Olivia Garamendi, a rising star in the world of indie romance, is set to captivate readers with her debut novel. With a mesmerizing storytelling ability that effortlessly captures the essence of love and desire, her book promises an unforgettable journey of heartache, passion, and self-discovery.<br /><br />With her something storytelling, Olivia skillfully delves into the intricacies of human connections, leaving readers yearning for more. With a unique voice that resonates with authenticity and an innate talent for evoking deep emotions, Olivia Garamendi is destined to make an indelible mark on the realm of romance literature with her highly anticipated first release.',
        tiktokUrl: 'https://www.tiktok.com/@oliviagaramendi',
        instagramUrl: 'https://www.instagram.com/oliviagaramendi',
        youtubeUrl: '',
        goodreadsUrl: '',
        spotifyUrl:
            'https://open.spotify.com/playlist/6nA4Y7q18qCyqF4c1fhQpY?si=708334f412374cdb',
        websiteUrl: 'https://oliviagaramendi.com/',
    },
]

function LinkIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
            <path
                d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
                fill="currentColor"
            />
        </svg>
    )
}

export const metadata: Metadata = {
    title: 'Authors',
    description: 'Indie authors we work with.',
}

export default function Authors() {
    return (
        <SimpleLayout
            title="Meet our Authors."
            intro="Discover a world of imagination and creativity with our unique collection of indie authors, each bringing their own distinctive voice and compelling narratives. These talented individuals have been handpicked for their innovative storytelling and diverse range of genres. From riveting thrillers that will keep you on the edge of your seat, to heartwarming romances that explore the complexities of love, our indie authors have crafted stories that will captivate your mind and stir your soul. Embark on an unforgettable literary journey that promises to entertain, inspire, and challenge you, as you delve into the rich and varied worlds these authors have created.">
            <div className="mx-auto max-w-7xl">
                <ul
                    role="list"
                    className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {people.map((person) => (
                        <li key={person.name}>
                            <div className="overflow-hidden rounded-2xl">
                                <Image
                                    src={person.imageUrl}
                                    width={person.imageWidth}
                                    height={person.imageHeight}
                                    alt=""
                                    // sizes="(min-width: 1024px) 32rem, 20rem"
                                    className="aspect-[3/2] w-full rounded-2xl object-cover duration-500 ease-in hover:scale-105"
                                />
                            </div>
                            <h2 className="mt-6 text-lg font-semibold leading-8 text-gray-900 dark:text-white">
                                <Link
                                    className="transition duration-200 ease-in hover:text-teal-300 dark:hover:text-teal-400"
                                    href={person.websiteUrl}>
                                    {person.name}
                                </Link>
                            </h2>
                            <p className="text-base leading-7 text-gray-600 dark:text-gray-400">
                                {person.genre}
                            </p>
                            <p className="mt-4 text-base leading-7 text-gray-600 dark:text-gray-400">
                                {parse(person.bio)}
                            </p>
                            <ul role="list" className="mt-6 flex gap-x-6">
                                {person.instagramUrl && (
                                    <li>
                                        <a
                                            href={person.instagramUrl}
                                            className="text-gray-400 hover:text-gray-500">
                                            <span className="sr-only">
                                                Instagram
                                            </span>
                                            <PiInstagramLogoBold size={20} />
                                        </a>
                                    </li>
                                )}
                                {person.tiktokUrl && (
                                    <li>
                                        <a
                                            href={person.tiktokUrl}
                                            className="text-gray-400 hover:text-gray-500">
                                            <span className="sr-only">
                                                TikTok
                                            </span>
                                            <PiTiktokLogoBold size={20} />
                                        </a>
                                    </li>
                                )}
                                {person.youtubeUrl && (
                                    <li>
                                        <a
                                            href={person.youtubeUrl}
                                            className="text-gray-400 hover:text-gray-500">
                                            <span className="sr-only">
                                                Youtube
                                            </span>
                                            <PiYoutubeLogoBold size={20} />
                                        </a>
                                    </li>
                                )}
                                {person.goodreadsUrl && (
                                    <li>
                                        <a
                                            href={person.goodreadsUrl}
                                            className="text-gray-400 hover:text-gray-500">
                                            <span className="sr-only">
                                                Twitter
                                            </span>
                                            <PiGoodreadsLogoBold size={20} />
                                        </a>
                                    </li>
                                )}
                                {person.spotifyUrl && (
                                    <li>
                                        <a
                                            href={person.spotifyUrl}
                                            className="text-gray-400 hover:text-gray-500">
                                            <span className="sr-only">
                                                Twitter
                                            </span>
                                            <PiSpotifyLogoBold size={20} />
                                        </a>
                                    </li>
                                )}
                                {person.websiteUrl && (
                                    <li>
                                        <a
                                            href={person.websiteUrl}
                                            className="text-gray-400 hover:text-gray-500">
                                            <span className="sr-only">
                                                Twitter
                                            </span>
                                            <PiHouseBold size={20} />
                                        </a>
                                    </li>
                                )}
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>
        </SimpleLayout>
    )
}
