import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-gray-50">
        {/* 1. Navbar (Top Navigation) */}
        <header className="bg-blue-900 text-white p-4 shadow-md z-10">
          <h1 className="text-xl font-bold">Next.js University Template</h1>
        </header>

        <div className="flex flex-1 overflow-hidden">
          {/* 2. Sidebar (Side Navigation) */}
          <aside className="w-64 bg-white border-r shadow-sm p-4 hidden md:block">
            <nav className="space-y-2">
              <a
                href="#"
                className="block p-2 rounded hover:bg-gray-100 text-gray-700"
              >
                Dashboard
              </a>
              <a
                href="#"
                className="block p-2 rounded hover:bg-gray-100 text-gray-700"
              >
                Students
              </a>
              <a
                href="#"
                className="block p-2 rounded hover:bg-gray-100 text-gray-700"
              >
                Settings
              </a>
            </nav>
          </aside>

          {/* 3. Main Container (Dynamic Content Area) */}
          <main className="flex-1 p-6 overflow-y-auto">{children}</main>
        </div>

        {/* 4. Footer (Bottom layout) */}
        <footer className="bg-gray-800 text-white text-center p-3 text-sm">
          © {new Date().getFullYear()} Professional Web Development Class.
        </footer>
      </body>
    </html>
  );
}
