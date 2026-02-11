import "./globals.css";
import Header from "./components/Header";

export const metadata = {
  title: "BukuLedger | Bookkeeping Malaysia",
  description: "Bookkeeping for MSMEs and SMEs across Malaysia. Simpan kira untuk SME di Malaysia.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        <Header />


        <main>{children}</main>

        <footer className="border-t mt-16">
          <div className="max-w-6xl mx-auto px-6 py-10 text-sm text-gray-500">
            <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
              <p>© {new Date().getFullYear()} BukuLedger Malaysia</p>
              <p className="text-gray-400">
                Bookkeeping for MSMEs & SMEs across Malaysia
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
