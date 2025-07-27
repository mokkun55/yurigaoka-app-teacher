import type { Metadata } from 'next'
import './globals.css'
import { Toaster } from 'react-hot-toast'
import dayjs from 'dayjs'

dayjs.locale('ja')

export const metadata: Metadata = {
  title: '帰省届管理ツール',
  description: '百合が丘寮の帰省届管理ツール',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body className="">
        <div className="">
          <Toaster />
          {children}
        </div>
      </body>
    </html>
  )
}
