import "./globals.css";
import { Inter } from "next/font/google";
import MainNav from "../components/MainNav";
import Dashboard from "@/components/Dashboard";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div id="modal-root">
        <MainNav />
        <Dashboard>{children}</Dashboard>
        </div>
      </body>
    </html>
  );
}
