import { GetStaticProps } from 'next'
// const GetStaticProps = require('next');
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = await getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

//Props型目線では、allPostsDataというkeyで型として反応する必要がある(Home関数で引数でkeyとしてデータを受け取ってる)
type Props = {
  //allPostsDataというkey：3つのオブジェクトを配列で持つ
  allPostsData: {
    id: string
    title: string
    date: string
    description: string
  }[]
}

export default function Home({ allPostsData }: Props) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title, description }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a className={utilStyles.post_Link}>
                  <h2 className={utilStyles.post_title}>{title}</h2>
                  <p className={utilStyles.post_desp}>{description}</p>
                </a>
              </Link>
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}
