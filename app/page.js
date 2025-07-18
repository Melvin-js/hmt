'use client'

import Image from "next/image";
import Link from 'next/link';
import styles from './page.module.css'
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <div className={styles.mainFrame}>
      <Navbar onPage='home' />

    </div>
  );
}
