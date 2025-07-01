import {
  type GetServerSidePropsContext,
  type NextApiRequest,
  type NextApiResponse,
} from 'next'
import { getServerSession } from 'next-auth'

// You can use this to pass a custom NextAuth.js configuration object to `getServerSession`
// `authOptions` is a NextAuth.js configuration object
export const authOptions = {
  // Configure one or more authentication providers
  // providers: [
  //   GoogleProvider({
  //     clientId: env.GOOGLE_CLIENT_ID,
  //     clientSecret: env.GOOGLE_CLIENT_SECRET,
  //   }),
  // ],
}

/**
 * Wrapper for `getServerSession` so that you don't need to pass `authOptions` to every call.
 * @see https://next-auth.js.org/configuration/nextjs
 */
export const getServerAuthSession = (ctx: {
  req: GetServerSidePropsContext['req'] | NextApiRequest
  res: GetServerSidePropsContext['res'] | NextApiResponse
}) => {
  return getServerSession(ctx.req, ctx.res, authOptions)
}
