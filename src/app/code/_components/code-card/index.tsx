import styles from './styles.module.css'
import dayjs from '@/libs/dayjs'
import { Copy, Trash } from 'lucide-react'
import { toast } from 'react-hot-toast'

type Props = {
  code: string
  usageCount: number
  limitDate: Date
}

export default function CodeCard({ code, usageCount, limitDate }: Props) {
  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    toast.success('コードをコピーしました')
  }

  const handleDelete = async () => {
    try {
      // 削除処理
    } catch (e) {
      console.error(e)
      toast.error('コードを削除できませんでした')
    }
    toast.success('コードを削除しました')
  }

  return (
    <div className={styles.container}>
      <div className={styles.codeContainer}>
        <p className={styles.code}>{code}</p>
        <div className={styles.bottom}>
          <p className={styles.limitDate}>{dayjs(limitDate).format('YYYY/MM/DD')} 23:59</p>
          <p className={styles.usageCount}>使用回数: {usageCount}回</p>
        </div>
      </div>

      <div className={styles.buttonContainer}>
        <button className={styles.button} onClick={handleCopy}>
          <Copy size={24} color="var(--sub-text)" />
        </button>
        <button className={styles.button} onClick={handleDelete}>
          <Trash size={24} color="var(--red)" />
        </button>
      </div>
    </div>
  )
}
