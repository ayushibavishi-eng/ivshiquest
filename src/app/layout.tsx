import type { Metadata, Viewport } from "next";
import { Lexend } from "next/font/google";
import { APP_NAME } from "@/lib/constants";
import { getResolvedStudentThemeId } from "@/services/theme";
import "./globals.css";

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: APP_NAME,
    template: `%s · ${APP_NAME}`,
  },
  description:
    "An AI-powered learning companion that helps students in grades 4–8 get curious about learning.",
  applicationName: APP_NAME,
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_NAME,
  },
  formatDetection: {
    telephone: false,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#1a6c76",
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const themeId = await getResolvedStudentThemeId();

  return (
    <html
      lang="en"
      data-theme={themeId}
      className={`${lexend.variable} h-full antialiased`}
    >
      <body className="min-h-full font-sans">{children}</body>
    </html>
  );
}
