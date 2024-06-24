import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'

import Details from '@/assets/detail-image.svg'
import { ButtonLogout } from '@/components/button-logout'
import { authOptions } from '@/configs/next-auth'

export default async function Home() {
  const session = await getServerSession(authOptions)

  if (!session) {
    return redirect('/auth')
  }

  console.log(session.user.githubProfile)

  return (
    <div className="flex w-full max-w-4xl flex-col items-center px-4 pb-10 md:mx-auto">
      <Image
        src={session.user.image}
        alt="avatar user"
        className="z-50 mt-14 size-28 rounded-full"
        width={150}
        height={150}
      />
      <div className="z-50 mt-6 flex flex-col items-center text-5xl md:flex-row">
        Boas vindas,&#160; <p className="font-bold"> {session?.user?.name}</p>
      </div>
      <p className="z-50 mt-4 text-lg text-text-medium">
        Que tal analisarmos seu GitHub?
      </p>

      <div className="relative w-full md:flex md:justify-between">
        <section className="mt-11 flex w-full flex-col items-center px-5 md:items-start">
          <div className="z-50 flex w-2/3 items-center justify-between border-t px-8 py-8">
            <p className="text-xl">
              Repositórios ({session.user.githubProfile.public_repos})
            </p>
            <a
              href={session.user.githubProfile.repos_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-icons-color">
                <ArrowUpRight size={20} className="text-white" />
              </div>
            </a>
          </div>
          <div className="z-50 flex w-2/3 items-center justify-between border-t px-8 py-8">
            <p className="text-xl">
              Gists ({session.user.githubProfile.public_gists})
            </p>
            <a
              href={session.user.githubProfile.gists_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-icons-color">
                <ArrowUpRight size={20} className="text-white" />
              </div>
            </a>
          </div>
          <div className="z-50 flex w-2/3 items-center justify-between border-b border-t px-8 py-8">
            <p className="text-xl">
              Seguidores ({session.user.githubProfile.followers})
            </p>
            <a
              href={session.user.githubProfile.followers_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-icons-color">
                <ArrowUpRight size={20} className="text-white" />
              </div>
            </a>
          </div>
          <ButtonLogout />
        </section>

        <Image
          src={Details}
          alt="Quadrados coloridos"
          width={450}
          height={450}
          className="absolute bottom-0 left-40 z-0 md:bottom-9 md:left-[500px]"
        />
      </div>
    </div>
  )
}
