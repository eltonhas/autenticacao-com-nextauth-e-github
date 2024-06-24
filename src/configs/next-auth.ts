import type { NextAuthOptions, Session } from 'next-auth'
import type { JWT } from 'next-auth/jwt'
import GitHubProvider, { type GithubProfile } from 'next-auth/providers/github'

export const authOptions: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
      profile(profile: GithubProfile) {
        return {
          id: profile.id.toString(),
          name: profile.name,
          email: profile.email,
          image: profile.avatar_url,
          githubProfile: profile,
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, account, profile }) {
      if (account) {
        token.githubProfile = profile as GithubProfile
      }

      return token
    },
    async session({ session, token }: { session: Session; token: JWT }) {
      session.user.githubProfile = token.githubProfile as GithubProfile
      return session
    },
  },
}
