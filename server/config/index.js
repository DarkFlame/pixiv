let env = (process.env.NODE_ENV || 'development').trim()
module.exports = require("./config." + env)
