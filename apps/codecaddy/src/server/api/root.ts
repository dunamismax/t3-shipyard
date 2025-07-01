import { createTRPCRouter } from "~/server/api/trpc";
import { snippetRouter } from "~/server/api/routers/snippet";

export const appRouter = createTRPCRouter({
  snippet: snippetRouter,
});

export type AppRouter = typeof appRouter;
