// vetur.config.js
// https://vuejs.github.io/vetur/guide/setup.html#advanced
/** @type {import('vls').VeturConfig} */
module.exports = {
    // **optional** default: `{}`
    // override vscode settings
    // Notice: It only affects the settings used by Vetur.
    settings: {
      "vetur.useWorkspaceDependencies": true,
      "vetur.experimental.templateInterpolationService": true
    },
    // **optional** default: `[{ root: './' }]`
    // support monorepos
    projects: [
      // './client', // shorthand for only root.
      {
        root: './src',
        // Below configs are relative to root property.
        package: '../package.json',
        tsconfig: './tsconfig.json',
      }
    ]
  }