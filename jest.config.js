/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  roots: ['<rootDir>/__tests__/'], //测试的根路径
  clearMocks: true, //每次测试用例时自动清除上一次实例,上下文和结果。
  moduleDirectories: ['node_modules', 'src'], // 测试用例忽略数组中模块
  moduleFileExtensions: ['js', 'ts', 'vue', 'tsx', 'jsx', 'json', 'node'], // 从左到右依次来检索文件的格式类型
  modulePaths: ['<rootDir>/src', '<rootDir>/node_modules'], // 测试模块
  testMatch: [
    '**/tests/**/*.[jt]s?(x)',
    '**/?(*.)+(spec|test).[tj]s?(x)',
    '(/__tests__/.*|(\\.|/)(test|spec))\\.(js|ts)$',
  ],
  testPathIgnorePatterns: ['<rootDir>/tests/server/', '<rootDir>/tests/__mocks__/', '/node_modules/'],
  moduleNameMapper: {
    '\\.(vs|fs|vert|frag|glsl|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/tests/__mocks__/fileMock.ts',
    '\\.(sass|s?css|less)$': '<rootDir>/tests/__mocks__/styleMock.ts',
    '\\?worker$': '<rootDir>/tests/__mocks__/workerMock.ts',
    '^/@/(.*)$': '<rootDir>/src/$1',
  },
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testEnvironment: 'jsdom', // 默认为node 测试的场景
  collectCoverage: false, //指出是否收集测试时的覆盖率信息,开启会导致测试的执行速度变慢
  coverageDirectory: 'coverage', // Jest应该输出其覆盖率文件的目录。
  collectCoverageFrom: ['src/**/*.{js,ts,vue}'], // 用正则通配模式数组来指出仅哪些文件需要收集覆盖率信息
  coveragePathIgnorePatterns: ['^.+\\.d\\.ts$'], // 根据正则来忽视覆盖的目标文件
  verbose: true, //每个测试是否应该在运行报告。所有错误仍然会显示在底部后执行。
}
