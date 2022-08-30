import Link from "next/link"
import Head from "next/head"
import { CenterLayout } from "../components/layouts/center"
export default function ContactUs() {
  return (
  <CenterLayout>
    <Head>
      <title>Contact Us Page</title>
    </Head>
      Contact Us Page
    <div>
      <Link href="/">index</Link>
      <Link href="/about">about</Link>
      <Link href="/contact_us">contact us</Link>
    </div>
  </CenterLayout>
  )
}
