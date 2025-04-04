module.exports = {
    testEnvironment: 'node',
    testMatch: [
        '**/__tests__/**/*.test.js',
        '**/?(*.)+(spec|test).js'
    ],
    transform: {
        '^.+\.js$': 'babel-jest'
    },
    moduleFileExtensions: ['js', 'json', 'node'],
    coverageDirectory: 'coverage',
    collectCoverage: true,
    collectCoverageFrom: [
        'src/**/*.{js}',
        '!**/node_modules/**'
    ]
};