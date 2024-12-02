import localFont from "next/font/local";
import "./globals.css";
import Hero from "@/components/shared/Hero";
import Footer from "@/components/shared/Footer";
import { FormProvider } from "@/components/context/FormContext";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Dog-Tag",
  description: "Dog-Tag",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Hero />
    <FormProvider>
    {children}
    </FormProvider>
        <Footer />
      </body>
    </html>
  );
}
