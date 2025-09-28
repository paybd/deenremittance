import type { Metadata } from "next";
import { Hind_Siliguri } from "next/font/google";
import "./globals.css";

const hind = Hind_Siliguri({
  weight: ["400", "500", "600", "700"],
  subsets: ["bengali", "latin"],
});



export const metadata: Metadata = {
  title: "দ্বীন রেমিট্যান্স - দ্রুত, নিরাপদ ও সাশ্রয়ী টাকা পাঠান",
  description:
    "দ্রুত, নিরাপদ এবং সাশ্রয়ী আন্তর্জাতিক রেমিট্যান্স সেবা। বিশ্বের যেকোনো প্রান্ত থেকে বাংলাদেশে কয়েকটি ক্লিকেই টাকা পাঠান।",
  icons: {
    icon: '/logo.ico',
    shortcut: '/logo.ico',
    apple: '/logo.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn">
      <body className={`${hind.className} antialiased bg-white text-slate-900`}>
        {children}
      </body>
    </html>
  );
}
