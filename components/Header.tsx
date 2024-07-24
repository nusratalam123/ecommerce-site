import Link from "next/link";

import React from "react";
import styles from "../styles/header.module.css";
import Center from "./Center";

const Header: React.FC = () => {
  return (
    <>
      <div className={styles.backgroundColor}>
        <Center>
          <div className={styles.wrapper}>
            <header className={styles.logo1}>
              <h1>Ecommerce-site</h1>
            </header>
            <nav className={styles.navbar}>
              <Link className={styles.navLink} href="/">
                Home
              </Link>
              <Link className={styles.navLink} href="/products">
                All products
              </Link>
              <Link className={styles.navLink} href="/categories">
                Categories
              </Link>
              <Link className={styles.navLink} href="/account">
                Account
              </Link>
              <Link className={styles.navLink} href="/cart">
                Cart(0)
              </Link>
            </nav>
          </div>
        </Center>
      </div>
    </>
  );
};

export default Header;

// export default function Header() {
//   return
//   <>
//     <header>
//       <Link href="/">Home</Link>
//     </header>
//     <nav />
//     <Link href="/">Home</Link>
//     <Link href="/products">All products</Link>
//     <Link href="/categories">Categories</Link>
//     <Link href="/account">Account</Link>
//     <Link href="/cart">Cart(0)</Link>
//     <nav />
//   </>;

// }
