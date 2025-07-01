import { createTRPCRouter, publicProcedure } from '../trpc'
import { z } from 'zod'

export const postRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }: { ctx: { prisma: any } }) => {
    return ctx.prisma.post.findMany({
      orderBy: { createdAt: 'desc' },
    })
  }),
  getById: publicProcedure
    .input(z.number())
    .query(async ({ ctx, input }: { ctx: { prisma: any }; input: number }) => {
      return ctx.prisma.post.findUnique({
        where: { id: input },
      })
    }),
  create: publicProcedure
    .input(z.object({ name: z.string().min(1) }))
    .mutation(
      async ({
        ctx,
        input,
      }: {
        ctx: { prisma: any }
        input: { name: string }
      }) => {
        return ctx.prisma.post.create({
          data: { name: input.name },
        })
      }
    ),
})
