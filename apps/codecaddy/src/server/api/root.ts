import { createTRPCRouter } from "../trpc";
import { snippetRouter } from "./snippet";

export const appRouter = createTRPCRouter({
  snippet: snippetRouter,
});

export type AppRouter = typeof appRouter;
