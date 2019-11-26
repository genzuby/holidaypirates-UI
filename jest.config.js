module.exports = {
  moduleFileExtensions: ["js","scss", "json"],
  transform: {
    "^.+\\.(js|jsx)?$": "babel-jest"
  },
  testEnvironment: "node",
  "moduleNameMapper": {
    "^.+\\.(css|less|scss)$": "identity-obj-proxy"
  },
  "globals": {
    "window": {}
  },
  testMatch: ["<rootDir>/**/*.spec.(js)"],
  transformIgnorePatterns: ["<rootDir>/node_modules/"]
};
