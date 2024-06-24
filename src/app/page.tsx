import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'

import { ButtonLogout } from '@/_component/button-logout'

export default async function Home() {
  const session = await getServerSession()

  if (!session) {
    return redirect('/auth')
  }

  console.log(session.user.githubProfile)

  return (
    <div className="flex w-full max-w-4xl flex-col px-4 md:mx-auto">
      Olá {session?.user?.name}
      <ButtonLogout />
    </div>
  )
}
