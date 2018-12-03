import { Diff, Intersection } from 'utility-types'

import prodConfig from './prod'
import devConfig from './dev'

export type IConfig = Readonly<{
  api: string,
}>

export type IBaseConfig = Intersection<{
  // Future base types
}, IConfig>
const baseConfig = {
  // Future base values
}

export type IOverrideConfig = Diff<IConfig, IBaseConfig> & Partial<IBaseConfig>
let envConfig: IOverrideConfig

switch (process.env.NODE_ENV) {
  case 'prod':
  case 'production':
    envConfig = prodConfig
    break
  case 'dev':
  case 'development':
  default:
    envConfig = devConfig
    break
}

const config: IConfig = Object.assign<{}, IBaseConfig, IOverrideConfig>({}, baseConfig, envConfig)

export default config
