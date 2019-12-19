/* global module */

module.exports = {
    clearMocks: true,
    collectCoverage: true,
    coverageDirectory: 'coverage',
    collectCoverageFrom: [
        'src/**/*.{js,jsx}'
    ],
    moduleNameMapper: {
        '\\.(css|less)$': 'identity-obj-proxy'
    },
    setupFiles: [
        '<rootDir>/jest-setup.js'
    ]
};
