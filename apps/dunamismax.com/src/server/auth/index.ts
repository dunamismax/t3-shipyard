import {
  type GetServerSidePropsContext,
  type NextApiRequest,
  type NextApiResponse,
} from "next";
import { getServerSession } from "next-auth";
import { authOptions as nextAuthOptions } from "./[...nextauth]";

/**
 * Wrapper for `getServerSession` so that you don't need to pass `authOptions` to every call.
 * @see https://next-auth.js.org/configuration/nextjs
 */
export const getServerAuthSession = (ctx: {
  req: GetServerSidePropsContext["req"] | NextApiRequest;
  res: GetServerSidePropsContext["res"] | NextApiResponse;
}) => {
  return getServerSession(ctx.req, ctx.res, nextAuthOptions);
};
