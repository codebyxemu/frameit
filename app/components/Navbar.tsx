import Link from "next/link"
import Image from "next/image"
import styles from './Navbar.module.css'

export function NavigationBar() {
    return (
      <nav className={styles.nav}>
        <Link href="/">
          <Image className={styles.image} src={"/zeppelin-black.png"} alt={"Zeppelin Logo"} height={50} width={50} />
        </Link>

        <ul className={styles.links}>

        <li>
          <Link href="/about">
            About
          </Link>
        </li>

        <li>
          <Link href="/pricing">
            Pricing
          </Link>
        </li>

        </ul>
      </nav>
    )
}