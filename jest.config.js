module.exports = {
  setupFiles: ['<rootDir>/test/setup.js'],
  moduleNameMapper: { '^.*[.](less|LESS)$': '<rootDir>/test/EmptyModule' },
  snapshotSerializers: ['enzyme-to-json/serializer'],
};
