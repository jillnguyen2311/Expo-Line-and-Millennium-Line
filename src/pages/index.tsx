import dynamic from "next/dynamic"
import Head from 'next/head'
import Image from "next/image";

const DynamicMap = dynamic(() => import ('../../components/Map'), {ssr: false});

export default function Home() {
  return (
    <div>
    <Head>
      <title>Expo & Millennium Line map</title>
      <link rel="icon" href="/images/logo.png" />
    </Head>

    <div style={headerStyle}>
        <h1>Expo & Millennium Line stations map</h1>
        <Image
          src="/images/logo.png"
          width={70}
          height={70}
          alt="logo"
        />
      </div>
    <DynamicMap />
  </div>
  )
}

const headerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor:'#E0DFDF',
  gap: 10,
  padding: '5px',
  fontFamily: 'Arial, sans-serif',
  fontSize: 25
};
