import Image from 'next/image'

import Details from '@/assets/details.svg'
import GitHubLogo from '@/assets/github.svg'
import GitHubLines from '@/assets/github-lines.svg'

export default function Auth() {
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
      <button className="mt-24 flex items-center gap-2 rounded-lg bg-button-background px-6 py-5 text-2xl text-text-light">
        <Image src={GitHubLogo} alt="github logo" width={24} height={24} />
        Login com GitHub
      </button>
      <Image
        src={Details}
        alt="Linha de  detalhes roxa"
        className="fixed bottom-0 size-3/4 md:hidden"
      />
      <Image
        src={GitHubLines}
        alt="Linha de  detalhes roxa"
        className="bottom-0 left-10 hidden size-auto md:fixed md:flex"
      />
    </main>
  )
}
