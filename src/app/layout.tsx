import MainHeader from "@/components/layout/MainHeader";
import "./globals.css";
import { Inter } from "next/font/google";
import { NotificationContextProvider } from "@/store/NotificationContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next Events",
  description: "Most interesting events in the area",
  // viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainHeader />
        <main className="flex min-h-screen flex-col items-center">
          <NotificationContextProvider>{children}</NotificationContextProvider>
        </main>
      </body>
    </html>
  );
}
