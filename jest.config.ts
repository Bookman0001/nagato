import nextJest from 'next/jest'
import { Config } from '@jest/types'

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig: Config.InitialOptions = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '^src/(.*)$': '<rootDir>/src/$1',
  },
  testEnvironment: 'jest-environment-jsdom',
}

module.exports = createJestConfig(customJestConfig)
