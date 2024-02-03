import type { Metadata } from "next";
import "./globals.css";
import { Inter as FontSans } from "next/font/google";
import { ToasterContext } from '@/shared/context/toaster-context'
import { cn } from "@/shared/utils/utils";
import { ThemeProvider } from "@/features/theme/theme-provider";
import { queryClient } from "@/shared/api/query-client";
import { QueryClientProvider } from "@tanstack/react-query";
import { AppSessionProvider } from "@/entities/user/session";

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
    <html lang="uk" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        {/* <AppProvider> */}

        <ThemeProvider>
          <AppSessionProvider>
            <QueryClientProvider client={queryClient}>
              <ToasterContext />
              {children}
            </QueryClientProvider>
          </AppSessionProvider>
        </ThemeProvider>

        {/* </AppProvider> */}

      </body>
    </html>
  );
}