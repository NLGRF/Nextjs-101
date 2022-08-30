import Link from "next/link"
import Head from "next/head"

export default function About() {
  return (
    <div>
      <Head>
        <title>About Page</title>
      </Head>
        About Page
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
