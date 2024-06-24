'use client'

import Image from 'next/image'
import { signIn } from 'next-auth/react'

import GitHubLogo from '@/assets/github.svg'

export function ButtonLogin() {
  return (
    <button
      onClick={() => signIn('github', { callbackUrl: '/' })}
      className="z-50 mt-24 flex cursor-pointer items-center gap-2 rounded-lg bg-button-background px-6 py-5 text-2xl text-text-light hover:opacity-70"
    >
      <Image src={GitHubLogo} alt="github logo" width={24} height={24} />
      Login com GitHub
    </button>
  )
}
