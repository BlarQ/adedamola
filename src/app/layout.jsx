import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Adedamola Ogunlala",
  description: "FrontEnd Developer | Expertise in React.js, Next.js, and Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[whitesmoke] scroll-smooth`}>
        <div>
          <Header />
        </div>

        {children}
      
      </body>
    </html>
  );
}
