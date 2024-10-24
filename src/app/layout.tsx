import { Inter} from 'next/font/google'
import '@/styles/index.scss'

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

const fontInter = Inter({
	subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${fontInter.variable}`}>
      <body>{children}</body>
    </html>
  )
}
