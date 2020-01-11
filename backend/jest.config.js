module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    roots: ['<rootDir>/src/'],
    modulePathIgnorePatterns: [],
    moduleNameMapper: {
        '^src/(.*)$': '<rootDir>/src/$1'
    },
    modulePaths: ['<rootDir>/src/'],
    // collectCoverage: true,
    // collectCoverageFrom: [
    //     "src/**/*.ts",
    // ]
};
