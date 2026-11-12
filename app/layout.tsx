import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'OceanBass Studios | Create. Animate. Inspire.',
  description: 'Premium 3D motion graphics, product visualisation and digital experiences.',
  icons: { icon: '/ob-ocean-emblem.png' },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>
}
