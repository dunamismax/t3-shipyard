import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";

export const snippetRouter = createTRPCRouter({
  create: publicProcedure
    .input(
      z.object({
        title: z.string().min(1),
        code: z.string().min(1),
        language: z.string().min(1),
        tags: z.array(z.string()).optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const { title, code, language, tags } = input;
      const snippet = await ctx.prisma.snippet.create({
        data: {
          title,
          code,
          language,
          tags: {
            connectOrCreate: tags?.map((tag) => ({
              where: { name: tag },
              create: { name: tag },
            })),
          },
        },
      });
      return snippet;
    }),

  getAll: publicProcedure.query(async ({ ctx }) => {
    return ctx.prisma.snippet.findMany({
      orderBy: { createdAt: "desc" },
      include: { tags: true },
    });
  }),

  findById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      return ctx.prisma.snippet.findUnique({
        where: { id: input.id },
        include: { tags: true },
      });
    }),

  findByTag: publicProcedure
    .input(z.object({ tag: z.string() }))
    .query(async ({ ctx, input }) => {
      return ctx.prisma.snippet.findMany({
        where: { tags: { some: { name: input.tag } } },
        orderBy: { createdAt: "desc" },
        include: { tags: true },
      });
    }),

  search: publicProcedure
    .input(z.object({ query: z.string() }))
    .query(async ({ ctx, input }) => {
      return ctx.prisma.snippet.findMany({
        where: {
          OR: [
            { title: { contains: input.query, mode: "insensitive" } },
            { tags: { some: { name: { contains: input.query, mode: "insensitive" } } } },
          ],
        },
        orderBy: { createdAt: "desc" },
        include: { tags: true },
      });
    }),
});
