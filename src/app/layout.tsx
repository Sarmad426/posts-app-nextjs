import "./globals.css";

export const metadata = {
  title: "Add Posts To your Feed",
  description: "Add Post,Like Them or Delete them",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="text-center bg-gray-200">{children}</body>
    </html>
  );
}
