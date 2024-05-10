module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest',
    },
    // Include any patterns your project needs to transform
    transformIgnorePatterns: ['/node_modules/'],
    // Add if using ES modules
    moduleNameMapper: {
        '^(\\.{1,2}/.*)\\.js$': '$1',
    },
};