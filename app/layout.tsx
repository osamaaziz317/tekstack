import "./globals.css";
import localFont from "next/font/local";

const poppinsSans = localFont({
  src: [
    { path: "../public/fonts/poppins/Poppins-100.ttf", weight: "100", style: "normal" },
    { path: "../public/fonts/poppins/Poppins-100-italic.ttf", weight: "100", style: "italic" },
    { path: "../public/fonts/poppins/Poppins-200.ttf", weight: "200", style: "normal" },
    { path: "../public/fonts/poppins/Poppins-200-italic.ttf", weight: "200", style: "italic" },
    { path: "../public/fonts/poppins/Poppins-300.ttf", weight: "300", style: "normal" },
    { path: "../public/fonts/poppins/Poppins-300-italic.ttf", weight: "300", style: "italic" },
    { path: "../public/fonts/poppins/Poppins-400.ttf", weight: "400", style: "normal" },
    { path: "../public/fonts/poppins/Poppins-400-italic.ttf", weight: "400", style: "italic" },
    { path: "../public/fonts/poppins/Poppins-500.ttf", weight: "500", style: "normal" },
    { path: "../public/fonts/poppins/Poppins-500-italic.ttf", weight: "500", style: "italic" },
    { path: "../public/fonts/poppins/Poppins-600.ttf", weight: "600", style: "normal" },
    { path: "../public/fonts/poppins/Poppins-600-italic.ttf", weight: "600", style: "italic" },
    { path: "../public/fonts/poppins/Poppins-700.ttf", weight: "700", style: "normal" },
    { path: "../public/fonts/poppins/Poppins-700-italic.ttf", weight: "700", style: "italic" },
    { path: "../public/fonts/poppins/Poppins-800.ttf", weight: "800", style: "normal" },
    { path: "../public/fonts/poppins/Poppins-800-italic.ttf", weight: "800", style: "italic" },
    { path: "../public/fonts/poppins/Poppins-900.ttf", weight: "900", style: "normal" },
    { path: "../public/fonts/poppins/Poppins-900-italic.ttf", weight: "900", style: "italic" },
  ],
  variable: "--font-poppins-sans",
  display: "swap",
});

const quicksandSans = localFont({
  src: [
    { path: "../public/fonts/quicksand/Quicksand-300.ttf", weight: "300", style: "normal" },
    { path: "../public/fonts/quicksand/Quicksand-400.ttf", weight: "400", style: "normal" },
    { path: "../public/fonts/quicksand/Quicksand-500.ttf", weight: "500", style: "normal" },
    { path: "../public/fonts/quicksand/Quicksand-600.ttf", weight: "600", style: "normal" },
    { path: "../public/fonts/quicksand/Quicksand-700.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-quicksand-sans",
  display: "swap",
});

const questrialSans = localFont({
  src: "../public/fonts/questrial/Questrial-400.ttf",
  variable: "--font-questrial-sans",
  display: "swap",
});

const gendy = localFont({
  src: "../public/fonts/Gendy.otf",
  variable: "--font-gendy",
  display: "swap",
});

export const metadata = {
  title: "Tekstack - AI-Driven Workflow Automation",
  description: "Intelligent system architecture and AI-driven solutions for modern enterprises.",
  openGraph: {
    title: "Tekstack - AI-Driven Workflow Automation",
    description: "Intelligent system architecture and AI-driven solutions for modern enterprises.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-theme="light"
      suppressHydrationWarning={true}
      className={`${poppinsSans.variable} ${quicksandSans.variable} ${questrialSans.variable} ${gendy.variable}`}
    >
      <body className="font-sans bg-[#FFFFFF] text-[#252522] antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
