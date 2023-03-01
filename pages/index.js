import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
    <img width="350px" height="69px" src="components/app_title.jpg">
        <Header title="제약이야기" />
        <p className="description">
          바이오-제약 품질(QC/QA) 취업을 위한 공간
        </p>
      </main>

      <Footer />
    </div>
  )
}
