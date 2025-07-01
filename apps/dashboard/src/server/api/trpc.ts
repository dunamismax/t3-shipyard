import { initTRPC, TRPCError } from "@trpc/server";
import { type CreateNextContextOptions } from "@trpc/server/adapters/next";
import superjson from "superjson";
import { ZodError } from "zod";

import { getServerAuthSession } from "../auth";
import { prisma } from "../db/client";

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
export const createTRPCContext = async (opts: CreateNextContextOptions) => {
  const { req, res } = opts;

  // Get the session from the server using the getServerSession wrapper function
  const session = await getServerAuthSession({ req, res });

  return {
    session,
    prisma,
  };
};

/**
 * 2. INITIALIZATION
 *
 * This is where the tRPC API is initialized, connecting the context and transformer.
 */
const t = initTRPC.context<typeof createTRPCContext>().transformer(superjson).build();

/**
 * 3. ROUTER & PROCEDURE (base for all other routers)
 *
 * This is where you define your base router and procedure helpers.
 *
 * This will be used to create all your tRPC routers and procedures.
 * @link https://trpc.io/docs/router
 * @link https://trpc.io/docs/procedures
 */
export const createTRPCRouter = t.router;

/**
 * Public (unauthenticated) procedure
 *
 * This is the base piece you use to build new queries and mutations on your tRPC API.
 * It does not guarantee that a user querying is authorized, but it does guarantee that
 * the user is not logged in if they are not.
 */
export const publicProcedure = t.procedure;

/**
 * Protected (authenticated) procedure
 *
 * If you want a query or mutation to only be accessible to logged in users, use this.
 * It verifies the session is valid and throws an error if not.
 */
export const protectedProcedure = t.procedure.use(({ ctx, next }) => {
  if (!ctx.session || !ctx.session.user) {
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }
  return next({
    ctx: {
      // infers the `session` as non-nullable
      session: { ...ctx.session, user: ctx.session.user },
    },
  });
});