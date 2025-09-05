'use client'

import { Student } from '../../types/student'
import { Table } from '@mantine/core'
import Badge from '@/app/_components/ui/badge'
type Props = {
  students: Student[]
}

export default function StudentTable({ students }: Props) {
  const rows = students.map((student) => {
    return (
      <Table.Tr key={student.id}>
        <Table.Td>
          {student.grade}年{student.class}組
        </Table.Td>
        <Table.Td>{student.name}</Table.Td>
        <Table.Td>{student.club || '-'}</Table.Td>
        <Table.Td>{student.roomNumber}号室</Table.Td>
        <Table.Td>{<Badge variant={student.status} />}</Table.Td>
      </Table.Tr>
    )
  })

  return (
    <Table verticalSpacing="sm" stickyHeader>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>学年</Table.Th>
          <Table.Th>名前</Table.Th>
          <Table.Th>部活動</Table.Th>
          <Table.Th>部屋番号</Table.Th>
          <Table.Th>在寮/帰省</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  )
}
