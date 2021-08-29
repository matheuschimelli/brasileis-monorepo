
const rootDir = process.env.NODE_ENV === 'development' ? 'src' : 'dist'

if (process.env.NODE_ENV === 'development') {
  module.exports = {
    type: 'postgres',
    logging: false,
    synchronize: false,
    migrationsRun: true,
    url: process.env.POSTGRESQL_URL,
    entities: [rootDir + '/models/**/*.{js,ts}'],
    migrations: [rootDir + '/database/migrations/*.{js,ts}'],
    subscribers: [rootDir + '/subscribers/**/*.{js,ts}'],
    seeds: [rootDir + '/database/migrations/seeds/**/*.{js,ts}'],
    factories: [rootDir + '/database/migrations/factories/**/*.{js,ts}'],
    cli: {
      migrationsDir: './src/database/migrations'
    }
  }
} else {
  module.exports = {
    type: 'postgres',
    logging: false,
    synchronize: false,
    migrationsRun: true,
    url: process.env.POSTGRESQL_URL,
    entities: [rootDir + '/models/**/*.{js,ts}'],
    migrations: [rootDir + '/database/migrations/*.{js,ts}'],
    subscribers: [rootDir + '/subscribers/**/*.{js,ts}'],
    seeds: [rootDir + '/database/migrations/seeds/**/*.{js,ts}'],
    factories: [rootDir + '/database/migrations/factories/**/*.{js,ts}'],
    cli: {
      migrationsDir: './src/database/migrations'
    },
    extra: {
      ssl: process.env.SSL || false
    }
  }
}
