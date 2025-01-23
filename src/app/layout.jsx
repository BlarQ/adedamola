import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Adedamola Ogunlala",
  description: "FrontEnd Developer | Expertise in React.js, Next.js, and Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-[whitesmoke]`}>
        <div className='fixed inset-x-0 z-[10] bg-[whitesmoke] shadow-sm'>
          <Header />
        </div>

        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
