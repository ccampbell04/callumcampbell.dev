import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { EditorProvider } from "../context/editor/editorProvider";
import { ActiveProvider } from "@/context/active/activeProvider";

export const metadata: Metadata = {
  title: "callumcampbell.dev",
  description: "Personal Portfolio of Callum Campbell",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <EditorProvider>
        <ActiveProvider>
          <body>{children}</body>
        </ActiveProvider>
      </EditorProvider>
    </html>
  );
}
