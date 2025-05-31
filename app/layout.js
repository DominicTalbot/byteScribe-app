import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ByteScribe",
  description: "A Journal App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <div className="bg-[url('/bg.jpg')] opacity-50 fixed -z-10 inset-0" />
        <Header/>
        <main className="min-h-screen">{children}</main>

        <footer className="bg-orange-100 py-12 bg-opacity-300">
          <div className="mx-auto px-4 text-center text-grey-900">
            <p>From Talbot Design Co.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
