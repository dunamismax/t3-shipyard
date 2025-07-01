import baseConfig from '@t3-shipyard/config-tailwind'
import type { Config } from 'tailwindcss'

export default {
  presets: [baseConfig],
  content: [
    '../../packages/ui/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
} satisfies Config