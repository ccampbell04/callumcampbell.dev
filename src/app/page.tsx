"use client";

import Image from "next/image";
import styles from "./page.module.css";

import NavBar from "@/components/NavBar";
import Explorer from "@/components/Explorer";
import { useActiveContext } from "@/context/active/useActiveContext";

export default function Home() {
  const activeContext = useActiveContext();
  const { activeEditor, setActiveEditor } = activeContext;

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <NavBar />
        <Explorer />
        {activeEditor && <p>{activeEditor}</p>}
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
