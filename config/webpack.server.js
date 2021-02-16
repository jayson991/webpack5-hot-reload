require('@babel/register')
const webpack = require('webpack')
const webpackDevServer = require('webpack-dev-server')

const config = require('./webpack.dev.js')

webpackDevServer.addDevServerEntrypoints(config, { ...config.devServer, open: false })
const compiler = webpack(config)
const server = new webpackDevServer(compiler, { ...config.devServer, open: false })

const PORT = 8080
server.listen(PORT, 'localhost', () => {
  console.log(`Server listening on http://localhost:${PORT}`)
})
