import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { Header, Hero, Modal, Row } from 'src/components'
import { IMovie } from 'src/interfaces/app.interface'
import { API_REQUEST } from 'src/services/Api.service'
import { useContext } from 'react';
import { AuthContext } from 'src/context/Auth.context'
import { useInfoStore } from 'src/store'





export default function Home({ trending, topRated, tvTopRated, popular, documentary, comedy, family }: HomeProps): JSX.Element {
const {isLoading}=useContext(AuthContext)
const {setModal, modal}=useInfoStore()
if(isLoading) return <>{null}</>

  return (
    <div className='relative min-h-screen'>
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
          <Row title='TV Show' movies={tvTopRated} isBig={true}/>
          <Row title='Popular' movies={popular}/>
          <Row title='Documentary' movies={documentary.reverse()}/>
          <Row title='Comedy' movies={comedy}/>
          <Row title='Family' movies={family.reverse()}/>
        </section>
      </main>
    {modal && <Modal/>}
    </div>
  )
}


export const getServerSideProps: GetServerSideProps = async () => {
  const [trending, topRated, tvTopRated, popular, documentary, comedy, family]= await Promise.all([
    fetch(API_REQUEST.trending).then(res => res.json()),
    fetch(API_REQUEST.top_rated).then(res => res.json()),
    fetch(API_REQUEST.tv_top_rated).then(res => res.json()),
    fetch(API_REQUEST.popular).then(res => res.json()),
    fetch(API_REQUEST.documentary).then(res => res.json()),
    fetch(API_REQUEST.comedy).then(res => res.json()),
    fetch(API_REQUEST.family).then(res => res.json())
  ])



  return {
    props: {
      trending: trending.results,
      topRated: topRated.results,
      tvTopRated: tvTopRated.results,
      popular: popular.results,
      documentary: documentary.results,
      comedy: comedy.results,
      family: family.results,
 

    }
  }
}

interface HomeProps {
  trending: IMovie[]
  topRated: IMovie[]
  tvTopRated: IMovie[]
  popular: IMovie[]
  documentary: IMovie[]
  comedy: IMovie[]
  family: IMovie[]
 
}