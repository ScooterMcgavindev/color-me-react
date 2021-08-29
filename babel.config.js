module.exports = {
  presets: ["@babel/preset-env",
    ["@babel/preset-react", { runtime: "automatic" }], // dont need to import react when just using jsx in a file
  ],
  "plugins": [
    [
      "@babel/plugin-proposal-class-properties",
      {
        "loose": true
      }
    ],
    [
      '@babel/plugin-proposal-private-methods',
      {
        "loose": true
      }
    ],
    [
      '@babel/plugin-proposal-private-property-in-object',
      {
        "loose": true
      }
    ]
  ]
};

