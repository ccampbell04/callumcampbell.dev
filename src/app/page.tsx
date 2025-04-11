"use client";

import Image from "next/image";
import styles from "./page.module.css";

import NavBar from "@/components/NavBar/NavBar";
import Explorer from "@/components/Explorer/Explorer";
import { useActiveContext } from "@/context/active/useActiveContext";
import { Editor } from "@/components/Editor/Editor";

export default function Home() {
  const activeContext = useActiveContext();
  const { activeEditor } = activeContext;

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.layout}>
          <NavBar />
          <Explorer />
          {activeEditor && <Editor file={activeEditor} />}
        </div>
      </main>
      <footer className={styles.footer}>Callum Campbell, 2025</footer>
    </div>
  );
}
