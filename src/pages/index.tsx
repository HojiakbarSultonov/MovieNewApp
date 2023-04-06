import Head from 'next/head'
import { Header } from 'src/components'





export default function Home() {
 
  return (
    <div className='relative h-[200vh]'>
      <Head>
        <title>Home - Hojiakbar</title>
        <meta name="description" content="For watching movies you should sign to app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <Header />
      <main>

      </main>
    </div>
  )
}
