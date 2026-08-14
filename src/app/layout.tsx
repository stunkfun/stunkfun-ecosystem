import "./globals.css";

export const metadata = {
  title: "STUNK — Launch The Next Big Thing",
  description:
    "Launch onchain coins paired with stocks, memes, currencies & more."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
