import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>DeMolay Palhoça</title>
        <meta name="description" content="Capítulo Palhoça Nº 516 DeMolay SC Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <main>
        <Image src="/logo.png" width={300} height={300} alt="logo" />
        <h1>Capítulo Palhoça Nº 516</h1>
      </main>
    </>
  )
}
