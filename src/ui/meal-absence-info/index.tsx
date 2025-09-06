import dayjs from '@/libs/dayjs'
import styles from './styles.module.css'
import { Utensils } from 'lucide-react'

// 食事の欠食情報をテキストに変換する関数
// meals配列: [朝食, 夕食] の順番で、trueが欠食、falseが食事あり
function getMealText(meals: boolean[]): string {
  if (!meals || meals.length < 2) return '欠食しない'

  const [breakfast, dinner] = meals

  if (!breakfast && !dinner) {
    return '欠食しない'
  } else if (breakfast && dinner) {
    return '朝と夕'
  } else if (breakfast && !dinner) {
    return '朝のみ'
  } else if (!breakfast && dinner) {
    return '夕のみ'
  }

  return '欠食しない'
}

type Props = {
  startDate: Date
  endDate: Date
  meals: {
    startMeal: boolean[]
    endMeal: boolean[]
  }
  reason: string
}

export default function MealAbsenceInfo({ startDate, endDate, meals, reason }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <Utensils size={32} color="var(--main-blue)" />
        <p className={styles.titleText}>欠食情報</p>
      </div>

      <div className={styles.content}>
        <div className={styles.labels}>
          <p>欠食期間</p>
          <p>欠食する食事</p>
          <p>欠食理由</p>
        </div>

        <div className={styles.values}>
          <p>
            {dayjs(startDate).format('YYYY/MM/DD(ddd)')} 〜 {dayjs(endDate).format('YYYY/MM/DD(ddd)')}
          </p>
          <p>
            開始日: {getMealText(meals.startMeal)} / 終了日: {getMealText(meals.endMeal)}
          </p>
          <p>{reason}</p>
        </div>
      </div>
    </div>
  )
}
