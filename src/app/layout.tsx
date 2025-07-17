import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'College Event Aggregator',
  description: 'Discover tech talks, hackathons, and workshops from colleges nationwide',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-background">
          {/* Header */}
          <header className="border-b border-border bg-card">
            <div className="container mx-auto px-4 py-4">
              <nav className="flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold text-foreground">
                  EventWhen
                </Link>
                <div className="flex space-x-6">
                  <Link 
                    href="/" 
                    className="text-foreground hover:text-primary transition-colors font-medium"
                  >
                    Dashboard
                  </Link>
                  <Link 
                    href="/submit" 
                    className="text-foreground hover:text-primary transition-colors font-medium"
                  >
                    Submit Event
                  </Link>
                </div>
              </nav>
            </div>
          </header>

          {/* Main Content */}
          <main className="container mx-auto px-4 py-8">
            {children}
          </main>

          {/* Footer */}
          <footer className="border-t border-border bg-card mt-16">
            <div className="container mx-auto px-4 py-6">
              <div className="text-center text-muted-foreground">
                <p>&copy; 2024 EventWhen. Connecting students with opportunities.</p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}
