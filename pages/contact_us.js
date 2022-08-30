import Link from "next/link"
import Head from "next/head"

export default function ContactUs() {
  return (
  <div>
    <Head>
      <title>Contact Us Page</title>
    </Head>
      Contact Us Page
    <ul>
      <li>
        <Link href="/">index</Link>
      </li>
      <li>
        <Link href="/about">about</Link>
      </li>
      <li>
        <Link href="/contact_us">contact us</Link>
      </li>
    </ul>
  </div>
  )
}
