import { Almarai } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import Header from "@/components/common/nav/Header";
import Footer from "@/components/common/footer/Footer";

const almarai = Almarai({
  subsets: ["arabic"],
  weight: ["300","400", "700", "800"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${almarai.className} bg-background antialiased`}
        dir="rtl"
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <div >{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
