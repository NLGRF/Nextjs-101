import Link from "next/link"
import Head from "next/head"
import { DefaultLayout } from "../components/layouts/default"
export default function Index() {
  return (
    <DefaultLayout>
      <Head>
        <title>Home Page</title>
      </Head>
        Home Page
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
    </DefaultLayout>
  )
}
