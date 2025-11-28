import "./globals.css";

export const metadata = {
  title: "Landing Page",
  description: "AutoBot Assignment",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        {children}
      </body>
    </html>
  );
}
