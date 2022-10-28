import Head from "next/head"

export default function HeadInfo({info}) {
  const {title, keyword, contents} = info;
  const defaultInfo = HeadInfo.defaultProps.info
  
  return (
    <Head>
      <title>{title ? title : defaultInfo.title}</title>
      <meta keyword={keyword ? keyword : defaultInfo.keyword} />
      <meta content={contents ? contents : defaultInfo.contents} />
    </Head>
  )
}

HeadInfo.defaultProps = {
  info : {
    title: 'NextJS Project',
    keyword: 'NextJs Front-App Project',
    contents: 'NextJs Front-App Project'
  }  
}