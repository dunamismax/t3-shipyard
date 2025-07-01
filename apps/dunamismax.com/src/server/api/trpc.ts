import { initTRPC, TRPCError } from '@trpc/server'
import { type NextRequest } from 'next/server'
import superjson from 'superjson'
import { ZodError } from 'zod'

import { prisma } from '@/server/db/client'

/**
 * 1. CONTEXT
 *
 * This section defines the "contexts" that are available in the backend API.
 *
 * The `context` is created for each incoming request and is passed down to all procedures.
 *
 * A tRPC context is a plain object that is passed through every procedure in a call flow.
 * It is typically used to pass useful resources to the procedures, such as a database connection,
 * authentication information, or the current user's session.
 *
 * @see https://trpc.io/docs/context
 */
export const createTRPCContext = (_opts: { req: NextRequest }) => {
  return {
    prisma,
  }
}

/**
 * 2. INITIALIZATION
 *
 * This is where the tRPC API is initialized, connecting the context and transformer.
 */
const t = initTRPC.context<typeof createTRPCContext>().create({
  transformer: superjson,
  errorFormatter({ shape, error }) {
    return {
      ...shape,
      data: {
        ...shape.data,
        zodError: error.cause instanceof ZodError ? error.cause.flatten() : null,
      },
    }
  },
})

/**
 * 3. ROUTER & PROCEDURE (base for all other routers)
 *
 * This is where you define your base router and procedure helpers.
 *
 * This will be used to create all your tRPC routers and procedures.
 * @link https://trpc.io/docs/router
 * @link https://trpc.io/docs/procedures
 */
export const createTRPCRouter = t.router

/**
 * Public (unauthenticated) procedure
 *
 * This is the base piece you use to build new queries and mutations on your tRPC API.
 * It does not guarantee that a user querying is authorized, but it does guarantee that
 * the user is not logged in if they are not.
 */
export const publicProcedure = t.procedure

/**
 * Protected (authenticated) procedure
 *
 * If you want a query or mutation to only be accessible to logged in users, use this.
 * It verifies the session is valid and throws an error if not.
 */
export const protectedProcedure = publicProcedure
