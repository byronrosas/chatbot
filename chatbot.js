
const http = require('http')
const Bot = require('messenger-bot')

var bot = new Bot({
  token: 'fgfhj',
  verify: 'caa0c30f2a9d88022fb6fc13b59cdc0a',
  app_secret: '750b2742257a7fe6321901656030a19a'
})

bot.on('error', (err) => {
  console.log(err.message)
})

bot.on('message', (payload, reply) => {
  var text = payload.message.text

  bot.getProfile(payload.sender.id, (err, profile) => {
    if (err) throw err

    reply({ text }, (err) => {
      if (err) throw err

      console.log(`Echoed back to ${profile.first_name} ${profile.last_name}: ${text}`)
    })
  })
})

http.createServer(bot.middleware()).listen(3000)
console.log('Echo bot server running at port 3000.')