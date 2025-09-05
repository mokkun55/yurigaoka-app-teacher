import Badge from '../_components/ui/badge'

export default function StudentsPage() {
  return (
    <div>
      <Badge variant="pending" />
      <Badge variant="approved" />
      <Badge variant="rejected" />
      <Badge variant="canceled" />
      <Badge variant="stay" />
      <Badge variant="leave" />
      <Badge variant="pending" size="big" />
      <Badge variant="approved" size="big" />
      <Badge variant="rejected" size="big" />
      <Badge variant="canceled" size="big" />
      <Badge variant="stay" size="big" />
      <Badge variant="leave" size="big" />
    </div>
  )
}
