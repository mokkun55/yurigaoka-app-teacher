'use client'

import styles from './styles.module.css'
import { useState } from 'react'
import Status from './_components/status'
import DateSelect from './_components/date-select'

export default function OnLeavePage() {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date())

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <DateSelect selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
        <Status selectedDate={selectedDate} />
      </div>
    </div>
  )
}
