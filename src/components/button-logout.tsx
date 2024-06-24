'use client'

import { signOut } from 'next-auth/react'

export function ButtonLogout() {
  return (
    <button
      onClick={() => signOut()}
      className="z-50 mt-11 flex w-1/2 cursor-pointer items-center justify-center gap-2 rounded-lg bg-button-background py-4 text-2xl text-text-light transition-all hover:opacity-70 md:w-1/3"
    >
      Logout
    </button>
  )
}
