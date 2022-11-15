// module.exports = {
//   // plugins: [
//   //   "@babel/plugin-transform-block-scoping",
//   //   "@babel/plugin-transform-arrow-functions",
//   //   "@babel/plugin-transform-strict-mode",
//   // ],
//   // presets: ["./my-preset.js"], // plugin을 preset으로 분리. (함수)
//   presets: ["@babel/preset-env"], // babel/preset-env
// };

// # 프리셋 - babel/preset-env 브라우저 설정
// module.exports = {
//   presets: [
//     [
//       "@babel/preset-env",
//       {
//         targets: {
//           chrome: "79", // 크롬 79까지 지원하는 코드를 만든다.
//         },
//       },
//     ],
//   ],
// };

module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        useBuiltIns: "usage", // 폴리필 사용 방식 지정
        corejs: {
          // 폴리필 버전 지정
          version: 2,
        },
      },
    ],
  ],
};
