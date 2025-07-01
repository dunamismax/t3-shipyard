import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";

export const portfolioRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.project.findMany();
  }),
  getById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.project.findUnique({ where: { id: input.id } });
    }),
});
