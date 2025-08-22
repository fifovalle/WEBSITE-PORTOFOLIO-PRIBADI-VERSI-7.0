import "./globals.css";
import { Inter, Bebas_Neue } from "next/font/google";

const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--huruf-inter",
});

const bebasNeue = Bebas_Neue({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--huruf-bebas-neue",
});

export const metadata = {
  title: "Naufal FIFA",
  description: "Portofolio Naufal FIFA",
  icons: {
    icon: "/a.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${bebasNeue.variable} santialiased`}>
        {children}
      </body>
    </html>
  );
}
