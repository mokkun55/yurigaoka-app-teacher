import styles from './styles.module.css'
import { Report } from '../../_type/report'
import dayjs from '@/libs/dayjs'
import { Calendar, FileText } from 'lucide-react'
import Badge from '@/ui/badge'
import HomecomingInfo from '@/ui/homecoming-info'
type Props = {
  report: Report
}

const reportTypeMap = {
  homecoming: '帰省・欠食届',
  meal: '欠食届のみ',
}

// TODO 後で動的に取得
const homecomingInfoMock = {
  startDate: new Date('2025-01-01'),
  endDate: new Date('2025-01-02'),
  homeName: '実家',
  address: '大阪府大阪市大阪区1-1-1',
  phoneNumber: '090-1234-5678',
  reason: '家族の用事',
  specialReason: '祖母の体調不良のため',
  // 帰省の場合欠食もするのでここで管理
  meals: {
    startMeal: [false, false],
    endMeal: [false, false],
  },
}

export default function DetailModal({ report }: Props) {
  return (
    <div className={styles.container}>
      {/* ヘッダー */}
      <div className={styles.header}>
        <div className={styles.studentInfo}>
          <div className={styles.grade}>
            {report.grade}年 {report.class}組
          </div>
          <h1 className={styles.name}>{report.name}</h1>
        </div>

        {/* 申請info */}
        <div className={styles.applyInfo}>
          <div className={styles.labels}>
            <div className={styles.labelText}>
              <Calendar size={16} />
              申請日
            </div>
            <div className={styles.labelText}>
              <FileText size={16} />
              申請種別
            </div>
          </div>
          <div className={styles.values}>
            <div className={styles.date}>{dayjs(report.createdAt).format('YYYY年M月D日 (ddd)')}</div>
            <div className={styles.applyType}>{reportTypeMap[report.type]}</div>
          </div>
        </div>

        {/* ステータス */}
        <div className={styles.status}>
          <Badge variant={report.status} size="big" />
        </div>

        {/* 帰省情報 */}
        {report.type === 'homecoming' && <HomecomingInfo {...homecomingInfoMock} />}

        {/* 欠食情報 */}

        {/* 差し戻し理由 */}

        <div className={styles.buttonContainer}>{/* ボタンたち */}</div>
      </div>
    </div>
  )
}
