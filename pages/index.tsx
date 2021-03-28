import { GetStaticProps } from 'next'
// const GetStaticProps = require('next');
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import Image from 'next/image'

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
    img_path: string
  }[]
}

export default function Home({ allPostsData }: Props) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.top} ${utilStyles.padding1px}`}>
        <ul className={utilStyles.top_list}>
          {allPostsData.map(({ id, date, title, description, img_path }) => (
            <li className={utilStyles.top_listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a className={utilStyles.top_postLink}>
                  <Image
                    priority
                    src={`/images/${img_path}`}
                    className={utilStyles.top_postthumnail}
                    height={250}
                    width={500}
                    alt={title}
                  />
                  <div className={utilStyles.top_postCard}>
                    <h2 className={utilStyles.top_postTitle}>{title}</h2>
                    <p className={utilStyles.top_postDesp}>{description}</p>
                  </div>
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
