import type { Metadata } from "next";
import "../globals.css";
import { Inter as FontSans } from "next/font/google";
import { ToasterContext } from '@/shared/context/toaster-context'
import { cn } from "@/shared/utils/utils";
import { AuthContext } from "@/shared/context/auth-context";
import { ThemeProvider } from "@/features/theme/theme-provider";
import { ToggleTheme } from "@/features/theme/toggle-theme";

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
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
          <ThemeProvider>
            <AuthContext>
              <ToasterContext />
              <ToggleTheme />
              {children}
            </AuthContext>
          </ThemeProvider>

        </body>
    </html>
  );
}