module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.md$/i,
      use: "raw-loader",
    });

    return config;
  },
};
