import type { Config } from 'tailwindcss'
import sharedConfig from '@t3-shipyard/config-tailwind'

export default {
  ...sharedConfig,
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
} satisfies Config