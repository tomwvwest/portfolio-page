import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "./components/Header";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto_Mono({ subsets: ["latin"] });

export const metadata = {
  title: "Tom West: A Portfolio",
  description: "A portfolio page for Tom West",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        <div className="smooth-scroll lg:pt-24 pt-12">{children}</div>
      </body>
    </html>
  );
}
