import { createClient } from '@/utils/supabase/client'

// 学生一覧を取得するHOOKS
export const fetchStudents = async () => {
  const supabase = createClient()

  // 現在のユーザー情報を確認（デバッグ用）
  await supabase.auth.getUser()

  // まず、usersテーブルから全件取得を試す（RLS確認用）
  const { data: allUsers, error: allUsersError } = await supabase
    .from('users')
    .select('id, name, role, is_deleted')
    .eq('role', 'student')

  console.log('All users with role=student:', allUsers?.length, allUsers)
  if (allUsersError) console.error('allUsersError:', allUsersError)

  // usersテーブルとstudentsテーブルを結合して取得
  const { data, error } = await supabase
    .from('users')
    .select(
      `
      id,
      name,
      students (
        grade_id,
        class_id,
        club_id,
        room_number,
        parent_name,
        phone_number
      )
    `,
      { count: 'exact' }
    )
    .eq('role', 'student')
    .eq('is_deleted', false)

  if (error) {
    console.error('Error fetching students:', error)
    return { data: null, error }
  }

  return { data, error: null }
}
