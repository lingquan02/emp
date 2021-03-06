const withESbuild = require('@efox/emp-esbuild')
module.exports = withESbuild(({config}) => {
  config.plugin('mf').tap(args => {
    args[0] = {
      ...args[0],
      ...{
        name: 'esbuildReactDemo',
        filename: 'emp.js',
        remotes: {
          '@emp/demo1': 'demo1@http://localhost:8001/emp.js',
        },
        exposes: {},
        shared: [],
      },
    }
    return args
  })
})
