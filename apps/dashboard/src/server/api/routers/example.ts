import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";

export const exampleRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),
  getAll: publicProcedure.query(() => {
    return [
      {
        id: "1",
        name: "Example 1",
      },
      {
        id: "2",
        name: "Example 2",
      },
    ];
  }),
});
