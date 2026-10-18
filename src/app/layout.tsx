import type { Metadata } from "next";
import type { ReactNode } from "react";

import "./globals.css";

export const metadata: Metadata = {
  title: "FLUX® — Sound, Made Physical",
  description:
    "A concept in spatial audio, sculptural product design and the future of listening.",
  applicationName: "FLUX Audio",
  keywords: [
    "FLUX Audio",
    "spatial audio",
    "premium audio",
    "product design",
    "concept website",
  ],
  openGraph: {
    title: "FLUX® — Sound, Made Physical",
    description:
      "An entirely new relationship between sound, space and the objects that connect them.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}