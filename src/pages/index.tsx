import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { Header, Hero, Row } from 'src/components'
import { IMovie } from 'src/interfaces/app.interface'
import { API_REQUEST } from 'src/services/Api.service'





export default function Home({ trending, topRated }: HomeProps): JSX.Element {




  return (
    <div className='relative h-[200vh]'>
      <Head>
        <title>Home - Hojiakbar</title>
        <meta name="description" content="For watching movies you should sign to app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <Header />
      <main className='relative pl-4 pb-24 lg:space-y-24 lg:pl-16'>
        <Hero trending={trending} />
        <section>
          <Row title='Top Rated' movies={topRated}/>
        </section>
      </main>
    </div>
  )
}


export const getServerSideProps: GetServerSideProps = async () => {
  const trending = await fetch(API_REQUEST.trending).then(res => res.json())
  const topRated = await fetch(API_REQUEST.top_rated).then(res => res.json())
  return {
    props: {
      trending: trending.results,
      topRated: topRated.results,

    }
  }
}

interface HomeProps {
  trending: IMovie[]
  topRated: IMovie[]

}