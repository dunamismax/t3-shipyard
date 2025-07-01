import { z } from 'zod'
import { publicProcedure, createTRPCRouter } from '~/server/api/trpc'

interface Message {
  username: string
  message: string
  timestamp: string
}

const chatMessages: Message[] = []

export const chatRouter = createTRPCRouter({
  getMessages: publicProcedure.query(() => {
    return chatMessages
  }),
  postMessage: publicProcedure
    .input(
      z.object({
        username: z.string(),
        message: z.string(),
        timestamp: z.string(),
      })
    )
    .mutation(({ input }: { input: any }) => {
      chatMessages.push(input)
      return input
    }),
})
