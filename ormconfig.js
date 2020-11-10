/* eslint-disable @typescript-eslint/no-var-requires */
'use strict'
require('dotenv').config()

const isTest = process.env.NODE_ENV === 'test' ? true : false

module.exports = {
  name: 'default',
  type: 'postgres',
  logging: isTest
    ? process.env.TEST_DB_SCHEMA_LOGGING
    : process.env.DB_SCHEMA_LOGGING,
  host: isTest ? process.env.TEST_DB_HOST : process.env.DB_HOST,
  port: isTest ? process.env.TEST_DB_PORT : process.env.DB_PORT,
  ssl: false,
  username: isTest ? process.env.TEST_DB_USER : process.env.DB_USER,
  password: isTest ? process.env.TEST_DB_PASSWORD : process.env.DB_PASSWORD,
  database: isTest ? process.env.TEST_DB_NAME : process.env.DB_NAME,
  schema: isTest ? process.env.TEST_DB_SCHEMA : process.env.DB_SCHEMA,
  synchronize: isTest
    ? process.env.TEST_DB_SYNCHRONIZE
    : process.env.DB_SYNCHRONIZE,
  entities: ['dist/src/db/entities/**/!(*.test.js)'],
  migrations: ['dist/src/db/migrations/**/!(*.test.js)'],
  subscribers: ['dist/src/db/subscribers/**/!(*.test.js)'],
  cli: {
    entitiesDir: 'dist/src/db/entities',
    migrationsDir: 'dist/src/db/migrations',
    subscribersDir: 'dist/src/db/subscribers',
  },
}
