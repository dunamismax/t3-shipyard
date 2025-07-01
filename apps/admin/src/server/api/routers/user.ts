import { createTRPCRouter, protectedProcedure } from '../trpc'

export const userRouter = createTRPCRouter({
  getAll: protectedProcedure.query(async () => {
    // This is a placeholder. In a real app, you'd use ctx.prisma.user.findMany()
    return []
  }),
})
