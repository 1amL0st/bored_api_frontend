module.exports = {
  "roots": [
    "<rootDir>/../source"
  ],
  "testMatch": [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)"
  ],
  "moduleNameMapper":{
    "\\.(css|less|sass|scss)$": "<rootDir>/../__mocks__/crutch.ts",
    "\\.(gif|ttf|eot|svg)$": "<rootDir>/../__mocks__/crutch.ts",
    "^components(.*)$": "<rootDir>/../source/components$1",
    "^store(.*)$": "<rootDir>/../source/store$1",
  },
  "transform": {
    "^.+\\.(js|ts)x?$": "ts-jest"
  },
}