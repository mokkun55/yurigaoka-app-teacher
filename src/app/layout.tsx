import type { Metadata } from 'next'
import './globals.css'
import { Toaster } from 'react-hot-toast'
import dayjs from 'dayjs'
import '@mantine/core/styles.css'
import { MantineProvider } from '@mantine/core'
import styles from './layout.module.css'
import { SidebarItem } from './_components/ui/sidebar/item'
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
      <body>
        <div className={styles.container}>
          <MantineProvider>
            <Toaster />
            {/* サイドバー */}
            <div className={styles.sidebar}>
              <div className={styles.sidebarHeader}>
                <h1 className={styles.sidebarHeaderTitle}>帰省届管理ツール</h1>
              </div>

              <div className={styles.sidebarContent}>
                <div className={styles.sidebarItem}>
                  <SidebarItem label="ホーム" isActive={true} />
                  <SidebarItem label="帰省者一覧" isActive={false} />
                  <SidebarItem label="すべての申請" isActive={false} />
                  <SidebarItem label="寮生一覧" isActive={false} />
                  <SidebarItem label="お知らせ管理" isActive={false} />
                  <SidebarItem label="招待コードの管理" isActive={false} />
                  <SidebarItem label="指導寮生の管理" isActive={false} />
                  <SidebarItem label="設定" isActive={false} />
                </div>
              </div>
            </div>

            {/* メインコンテンツ */}
            <div className={styles.mainContent}>
              {/* ヘッダー */}
              <div className={styles.header}>
                <h2>現在アクティブなタブ</h2>
              </div>
              <div className={styles.content}>{children}</div>
            </div>
          </MantineProvider>
        </div>
      </body>
    </html>
  )
}
