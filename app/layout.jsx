import "./globals.css";

export const metadata = {
  title: "CV",
  icons: {
    icon: "/CvIcon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
