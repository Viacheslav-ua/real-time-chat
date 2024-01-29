import type { Metadata } from "next";
import "../globals.css";
import { Inter as FontSans } from "next/font/google";
import { ToasterContext } from '@/features/context'
import { cn } from "@/shared/utils/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Messenger",
  description: "Real time chat",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <ToasterContext />
        {children}
      </body>
    </html>

    // <html lang="en">
    //   <body>
    //     {/* <AuthContext> */}
    //       {/* <ToasterContext /> */}
    //       {/* <ActiveStatus /> */}
    //       {children}
    //     {/* </AuthContext> */}
    //   </body>
    // </html>
  );
}