const path = require("path")
const fs = require("fs")
const { name } = require("../package.json")
const template = require("./template")
const colors = require("./colors")

const theme = JSON.stringify(template({ colors }), null, 2)

fs.writeFile(path.join(__dirname, `../themes/${name}.json`), theme, function(err) {
  if (err) {
    return console.log(err)
  }

  console.log("The file was saved!")
})
