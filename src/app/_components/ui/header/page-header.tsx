'use client'

import { usePathname } from 'next/navigation'
import styles from './page-header.module.css'
import { Button } from '@mantine/core'
import { Plus } from 'lucide-react'

const pageTitles: Record<string, string> = {
  '/': 'ホーム',
  '/students/on-leave': '帰省者一覧',
  '/reports': 'すべての申請',
  '/students': '寮生一覧',
  '/notifications': 'お知らせ管理',
  '/code': '招待コードの管理',
  '/students/leaders': '指導寮生の管理',
  '/settings': '設定',
}

export const PageHeader = () => {
  const pathname = usePathname()

  // 現在のパスに基づいてタイトルを取得
  const getPageTitle = (path: string): string => {
    // 完全一致を優先
    if (pageTitles[path]) {
      return pageTitles[path]
    }

    // 部分一致を検索（サブページの場合）
    const matchingPath = Object.keys(pageTitles).find((key) => key !== '/' && path.startsWith(key))

    return matchingPath ? pageTitles[matchingPath] : 'ページが見つかりません'
  }

  const currentTitle = getPageTitle(pathname)

  return (
    <div className={styles.pageHeader}>
      <h2 className={styles.pageHeaderTitle}>{currentTitle}</h2>
      {pathname === '/notifications' && (
        // TODO ボタンコンポーネントはラップして使う
        <Button className={styles.pageHeaderButton}>
          <Plus />
          お知らせを新規作成
        </Button>
      )}
    </div>
  )
}
