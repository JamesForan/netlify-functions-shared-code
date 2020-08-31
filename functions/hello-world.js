const utils = require('utils')

exports.handler = (event, context, callback) => {
  try {
    console.log('hello-world started')
    const message = {}
    message.hello = utils.hello()
    message.goodbye = utils.goodbye()
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(message),
    }
  } catch (error) {
    console.log(error)
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'Text' },
      body: JSON.stringify(error),
    }
  } finally {
    console.log('and we are done')
  }
}