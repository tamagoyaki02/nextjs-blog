// import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = 'Hiraoku Blog'
export const siteTitle = 'Hiraoku Blog'

type BlogLayout = {
  children: React.ReactNode
  home?: boolean
}

export default function Layout({ children, home }: BlogLayout) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <h1 className={styles.header_tit}>{name}</h1>
            <div className={styles.header_imgFlex}>
              <Image
                priority
                src="/images/profile.jpg"
                className={styles.header_borderCircle}
                height={65}
                width={65}
                alt={name}
              />
              <h2 className={styles.header_homeSubtit}>Next.js 備忘録 ブログ</h2>
            </div>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <h2 className={styles.header_titM}>
                  <Link href="/">
                    <a className={styles.header_colorInherit}>{name}</a>
                  </Link>
                </h2>
                <Image
                  priority
                  src="/images/profile.jpg"
                  className={styles.header_borderCircle}
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
          </>
        )}
      </header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <div>
          <Link href="/">
            <a className={styles.footer_link}>
              <p className={styles.footer_subtit}>Hiraoku blog</p>
            </a>
          </Link>
          <p className={styles.footer_copyright}>Copyright © 2021. Hiraoku</p>
        </div>
      </footer>
    </div>
  )
}
