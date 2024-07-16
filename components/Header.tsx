import Link from "next/link";

import React from "react";
import styles from "../styles/header.module.css";

const Header: React.FC = () => {
  return (
    <>
      <div className={styles.backgroundColor}>
        <div className={styles.wrapper}>
          <header className={styles.logo1}>
           <h1>Ecommerce-site</h1>
          </header>
          <nav className={styles.navbar}>
            <Link href="/">Home</Link>
            <Link href="/products">All products</Link>
            <Link href="/categories">Categories</Link>
            <Link href="/account">Account</Link>
            <Link href="/cart">Cart(0)</Link>
          </nav>
        </div>
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
