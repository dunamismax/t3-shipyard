import { z } from 'zod'

import { createTRPCRouter, publicProcedure, protectedProcedure } from '../trpc'

export const exampleRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }: { input: { text: string } }) => {
      return {
        greeting: `Hello ${input.text}`,
      }
    }),
  getSecretMessage: protectedProcedure.query(() => {
    return 'you can now see this secret message!'
  }),
})
