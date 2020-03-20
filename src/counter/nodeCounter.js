const fs = require('fs')
const path = require('path')

const counterFile = path.resolve('/data/counter.txt')

const COUNTER_LIMIT = 20
const INTERVAL = 1000
let counterData = 0
if (fs.existsSync(counterFile)) {
  const fileData = fs.readFileSync(counterFile)
  counterData = parseInt(fileData, 10)
}

const stopCounter = counterData + COUNTER_LIMIT

const recursiveCounter = () => {
  if (counterData === stopCounter) {
    counterData = 0
  }
  console.log(counterData)
  counterData++
  fs.writeFileSync(counterFile, counterData)
  setTimeout(recursiveCounter, INTERVAL)
}

recursiveCounter()