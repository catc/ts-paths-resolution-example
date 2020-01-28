const moduleAlias = require('module-alias')
const { resolve } = require('path')

const prod = process.env.NODE_ENV === 'production'

const src = prod ? 'dist' : 'server'

moduleAlias.addAliases({
	":utils": resolve(__dirname, src, 'utils'),
})
