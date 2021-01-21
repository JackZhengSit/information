module.exports = {
  // env: {
  //   development: {
  //     sourceMaps: true,
  //     retainLines: true,
  //   },
  // },
  presets: [
    "@vue/cli-plugin-babel/preset",
    ["@babel/preset-env", { modules: "commonjs" }],
  ],
  // plugins: ["@babel/plugin-proposal-object-rest-spread"],
};
