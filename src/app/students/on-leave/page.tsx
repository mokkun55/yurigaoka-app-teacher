'use client'

import styles from './styles.module.css'
import { useState } from 'react'
import Status from './_components/status'

export default function OnLeavePage() {
  const [selectedDate, _setSelectedDate] = useState<Date>(new Date())

  return (
    <div className={styles.container}>
      <Status selectedDate={selectedDate} />
    </div>
  )
}
