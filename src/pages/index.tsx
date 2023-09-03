import { RegistrationFormWrapper } from '@/Components/form/RegistrationFormWrapper'
import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>BK Invest Application Form </title>
        <meta name="description" content="BK Invest Application Form" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <RegistrationFormWrapper/> 
       
    </>
  )
}
