// 수정금지

import type { Metadata } from "next";
import "../globals.css";
import Container from "../components/Container";
import StyledComponentsRegistry from "@/lib/Registry";

export const metadata: Metadata = {
  title: "likelionFE",
  description: "HUFS Global likelion 1114 FE session",
  icons: {
    icon: "/logo_TabImg.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>

          <Container>{children}</Container>

        </StyledComponentsRegistry>
      </body>
    </html>
  );
}