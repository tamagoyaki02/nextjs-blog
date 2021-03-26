import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'
import Head from 'next/head'
import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import { GetStaticProps, GetStaticPaths } from 'next'

type PostProps = {
  postData: {
    title: string
    date: string
    contentHtml: string
  }
}

//id.jsではどんな静的ページを生成する必要があるのかを判断してる -> .mdファイルからidを取得
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

//ビルド時に、コンテンツ内容を各記事idに基づいて、getStaticPropsでデータをとってくる。必ずオブジェクト型で、keyにpropsを絶対持ってるルール
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id as string)
  return {
    props: {
      postData
    }
  }
}

//結果getPostDataで取得したpostDataオブジェクトがここに引数として入る
export default function Post({ postData }: PostProps) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  )
}


