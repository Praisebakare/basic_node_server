const http = require('http')
const port = 3000

const endpoint = {
    slackUsername: "praise_bakare",
    backend: true,
    age: 18,
    bio: "I am a backend junior developer, student of landmark university"
}

const requestHandler = (req, res) => {
   console.log(req.url)
   res.end(JSON.stringify(endpoint))
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})