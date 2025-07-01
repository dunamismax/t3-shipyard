import { z } from "zod";

export const env = z.object({
  DATABASE_URL: z.string().url(),
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
}).parse(process.env);
