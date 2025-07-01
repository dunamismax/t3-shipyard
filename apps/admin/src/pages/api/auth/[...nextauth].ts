import { type NextApiRequest, type NextApiResponse } from 'next'
import NextAuth from 'next-auth'
// import GoogleProvider from "next-auth/providers/google";

import { env } from '../../../../env.mjs'
import { authOptions as nextAuthOptions } from '../../../src/server/auth/index'

export default async function auth(req: NextApiRequest, res: NextApiResponse) {
  return await NextAuth(req, res, nextAuthOptions)
}
