const express = require("express")
const server = express()

server.all("/", (req, res) => {
  res.send('<meta http-equiv="refresh" content="0; URL=https://awemeseperdon.ml/"/>')
})

function keepAlive() {
  server.listen(3000, () => {
    console.log("servidor listo")
      console.clear()
  })
}

module.exports = keepAlive;
