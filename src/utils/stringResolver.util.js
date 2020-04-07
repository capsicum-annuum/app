export class StringResolver {
  constructor() {
    this.DEFAULT_OPEN_CHAR = '{'
    this.DEFAULT_CLOSE_CHAR = '}'
  }

  getConfig(options) {
    const opts = options || {}

    const config = {
      openChar: opts.openChar || this.DEFAULT_OPEN_CHAR,
      closeChar: opts.closeChar || this.DEFAULT_CLOSE_CHAR,
    }

    return config
  }

  resolve(message, params, opts) {
    if (!params) {
      return message
    }

    const config = this.getConfig(opts)
    let msg = message

    Object.keys(params).forEach((paramName) => {
      msg = msg.replace(config.openChar + paramName + config.closeChar, params[paramName])
    })

    return msg
  }
}
