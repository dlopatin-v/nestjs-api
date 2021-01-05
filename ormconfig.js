const detectTSNode = require('detect-ts-node')

const commonConfig = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'denis',
  password: '5618131Sd',
  database: 'nestjs',
  synchronize: false,
  dropSchema: false,
  migrationsRun: false,
  logging: true
}

const srcConfig = {
  entities: ['**/*.entity.ts'],
  migrations: ['src/migration/**/*.ts'],
  subscribers: ['src/subscriber/**/*.ts'],
  cli: {
    migrationsDir: 'src/migration',
    subscribersDir: 'src/subscriber'
  }
}

const distConfig = {
  entities: [__dirname + '/dist/**/*.entity.js'],
  migrations: [__dirname + '/dist/migration/**/*.js'],
  subscribers: [__dirname + '/dist/subscriber/**/*.js'],
  cli: {
    migrationsDir: __dirname + '/dist/migration',
    subscribersDir: __dirname + '/dist/subscriber'
  }
}

const result = {}
let key

// Append common configs to final object
for (key in commonConfig) {
  if (commonConfig.hasOwnProperty(key)) {
    result[key] = commonConfig[key]
  }
}

if (detectTSNode) {
  // if ts-node append src configuration
  for (key in srcConfig) {
    if (srcConfig.hasOwnProperty(key)) {
      result[key] = srcConfig[key]
    }
  }
} else {
  // else append dist configuration
  for (key in distConfig) {
    if (distConfig.hasOwnProperty(key)) {
      result[key] = distConfig[key]
    }
  }
}

module.exports = result
