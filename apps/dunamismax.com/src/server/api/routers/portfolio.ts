import { z } from 'zod'

import { createTRPCRouter, publicProcedure } from '../trpc'

export const portfolioRouter = createTRPCRouter({
  getAll: publicProcedure.query(() => {
    return []
  }),
  getById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(() => {
      return null
    }),
})
