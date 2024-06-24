import Image from 'next/image'
import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'

import GitHubLines from '@/assets/github-lines.svg'
import { ButtonLogin } from '@/components/button-login'
import { authOptions } from '@/configs/next-auth'

export default async function Auth() {
  const session = await getServerSession(authOptions)

  if (session) {
    return redirect('/')
  }
  return (
    <main className="relative flex w-full max-w-4xl flex-col items-center px-6 pt-20 md:mx-auto md:pt-80">
      <h1 className="text-center text-5xl md:text-8xl">
        Desbloqueie o poder da{' '}
        <span className="font-bold">Análise do GitHub</span>
      </h1>
      <p className="mt-7 text-center text-xl text-text-medium">
        Eleve o desenvolvimento de software com análises automáticas do GitHub,
        revelando métricas e KPIs inestimáveis para aprimorar a entrega e a
        qualidade do software.
      </p>
      <ButtonLogin />

      <Image
        src={GitHubLines}
        alt="Linha de  detalhes roxa"
        className="bottom-0 left-10 hidden size-auto md:fixed md:flex"
      />
    </main>
  )
}
