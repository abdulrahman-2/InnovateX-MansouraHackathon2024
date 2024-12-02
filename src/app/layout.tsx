import { Almarai } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import Header from "@/components/common/nav/Header";
import Footer from "@/components/common/footer/Footer";
import StoreProvider from "@/components/layout/StoreProvider";
import Notifications from "@/components/layout/Notifications";

const almarai = Almarai({
  subsets: ["arabic"],
  weight: ["300", "400", "700", "800"],
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
        className={`${almarai.className} bg-background antialiased min-h-screen flex flex-col justify-between`}
        dir="rtl"
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <StoreProvider>
            <Header />
            <div>{children}</div>
            <Notifications />
            <Footer />
          </StoreProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
