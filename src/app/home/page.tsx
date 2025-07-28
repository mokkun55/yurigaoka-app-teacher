import styles from './styles.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      {/* 寮の状態 */}
      <div className={styles.dormitoryStatus}>
        <div className={styles.title}>寮の状態 (本日)</div>
        <div className={styles.statusContainer}>
          {/* 在寮人数 */}
          {/* 帰省者数 */}
        </div>
      </div>

      {/* 承認待ちの申請 */}
      <div className={styles.approvalItems}>
        <div className={styles.title}>
          承認待ちの申請 <span className={styles.count}>(7件)</span>
        </div>
        <div className={styles.approvalList}>{/* アイテム */}</div>
      </div>
    </div>
  )
}
