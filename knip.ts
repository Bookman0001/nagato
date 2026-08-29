import type { KnipConfig } from 'knip'

const config: KnipConfig = {
  ignoreDependencies: ['autoprefixer', 'undici'],
  ignoreWorkspaces: ['src/utils/$path.ts'],
}

export default config
