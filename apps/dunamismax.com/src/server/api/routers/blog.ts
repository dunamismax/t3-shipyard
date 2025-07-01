import { z } from 'zod'

import { createTRPCRouter, publicProcedure } from '../trpc'

export const blogRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.post.findMany()
  }),
  getById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.post.findUnique({ where: { id: parseInt(input.id) } })
    }),
})
