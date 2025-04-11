import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { EditorProvider } from "../context/editor/editorProvider";
import { ActiveProvider } from "@/context/active/activeProvider";
import { PreviousTabProvider } from "@/context/previousTab/previousTabProvider";

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
          <PreviousTabProvider>
            <body>{children}</body>
          </PreviousTabProvider>
        </ActiveProvider>
      </EditorProvider>
    </html>
  );
}
