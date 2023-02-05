const express = require("express")

const server = express()

server.all("/", (req, res) => {
  res.send('<meta http-equiv="refresh" content="0; URL=https://bobeebeatz.ml/"/>')
})

function keepAlive() {
  server.listen(3000, () => {
    console.log("Ya estamos listos.")
  })
}

module.exports = keepAlive
