// app/layout.tsx
import Navbar from "../components/Header/Navbar";
import "../globals.css";
import { AuthProvider } from "@/context/AuthProvider";

export const metadata = {
  title: "My App",
  description: "Next.js Application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <Navbar />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
