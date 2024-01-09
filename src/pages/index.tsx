import dynamic from "next/dynamic"
import Head from 'next/head'

const DynamicMap = dynamic(() => import ('../../components/Map'), {ssr: false});

export default function Home() {
  return (
    <div>
    <Head>
      <title>Expo & Millennium Line map</title>
      <link rel="icon" href="/images/logo.png" />
    </Head>
    <DynamicMap />
  </div>
  )
}
