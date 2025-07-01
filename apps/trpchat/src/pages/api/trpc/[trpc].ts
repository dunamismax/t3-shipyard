import { createNextApiHandler } from '@trpc/server/adapters/next'

import { appRouter } from '../root'
import { createContext } from '../context'

// export API handler
export default createNextApiHandler({
  router: appRouter,
  createContext: createContext,
  onError: ({ path, error }) => {
    console.error(`❌ tRPC failed on ${path ?? ''}: ${error.message}`)
  },
})
