import Link from "next/link"
import Head from "next/head"

import { useRouter } from "next/router"

import  { useTheme } from 'next-themes'
import React, { useState, useEffect } from 'react'

const Container = props => {
    const [mounted, setMounted] = useState(false);
    const { resolvedTheme, setTheme } = useTheme();
  
    // After mounting, we have access to the theme
    useEffect(() => setMounted(true), []);

    const { children, ...customMeta } = props;
    const router = useRouter();
    const meta = {
      title: 'vista1nik',
      description: `Software Engineer`,
      image: 'https://vista1nik.com/static/images/banner.png',
      type: 'website',
      ...customMeta
    };
    
    return (
        <div className="mx-auto max-w-3xl w-full">
            <Head>
                <title>{meta.title}</title>
                <meta name="robots" content="follow, index" />
                <meta content={meta.description} name="description" />
                <meta property="og:url" content={`https://vista1nik.com${router.asPath}`} />
                <link rel="canonical" href={`https://vista1nik.com${router.asPath}`} />
                <meta property="og:type" content={meta.type} />
                <meta property="og:site_name" content="vista1nik" />
                <meta property="og:description" content={meta.description} />
                <meta property="og:title" content={meta.title} />
                <meta property="og:image" content={meta.image} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@vista1nik" />
                <meta name="twitter:title" content={meta.title} />
                <meta name="twitter:description" content={meta.description} />
                <meta name="twitter:image" content={meta.image} />
                {meta.date && (
                <meta property="article:published_time" content={meta.date} />
                )}
            </Head>
            <div className="my-16 flex items-center justify-between select-none">
                <div className="flex items-center gap-1">
                    <Link href="/">
                        <a draggable="false" className="text-lg -ml-2 px-2 py-1 rounded transition hover:bg-light-gray-1 dark:hover:bg-dark-gray-6">vista1nik</a>
                    </Link>
                    {props.page && <p draggable="false" className="px-2 text-light-gray-3 dark:text-dark-gray-3">/</p>}
                    {props.page && <a draggable="false" className="text-lg px-2 py-1 rounded transition hover:bg-light-gray-1 dark:hover:bg-dark-gray-6" href="#">{props.page}</a>}
                </div>
                <button
                    aria-label="Toggle Dark Mode"
                    type="button"
                    className="w-9 h-9 flex transition items-center justify-center rounded-lg hover:bg-light-gray-1 dark:hover:bg-dark-gray-6"
                    onClick={() =>
                        setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
                    }
                >
                    {mounted && (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        className="w-5 h-5 text-light-gray-4 dark:text-dark-gray-4"
                    >
                        {resolvedTheme === 'dark' ? (
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                        />
                        ) : (
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                        />
                        )}
                    </svg>
                    )}
                </button>
            </div>
            <div>
                {props.children}
            </div>
            <div className="my-16">
                <p className="text-light-gray-4 dark:text-dark-gray-4">{new Date().getFullYear()} &copy; vista1nik • <a className="border-b border-current transition hover:text-light-black dark:hover:text-dark-white" href="https://github.com/vista1nik/vista1nik.com">source</a> </p>
            </div>
        </div>
    )
}

export default Container