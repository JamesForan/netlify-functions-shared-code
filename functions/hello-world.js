exports.handler = (event, context, callback) => {
  try {
    console.log('hello-world started')
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify('hello-world'),
    }
  } catch (error) {
    const message = 'testing errors'
    console.log(message)
    return {
      statusCode: '400',
      headers: { 'Content-Type': 'Text' },
      body: message,
    }
  } finally {
    console.log('and we are done')
  }
}