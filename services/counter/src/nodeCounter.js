const fs = require('fs')
const path = require('path')
const redis = require("redis");

const client = redis.createClient(process.env.REDIS_URL);

const counterFile = path.resolve('/data/counter.txt')

const COUNTER_LIMIT = 20
const INTERVAL = 1000
let counterData = 0
let stopCounter = COUNTER_LIMIT
let resetCount = 0

const recursiveCounter = () => {
  if (counterData === stopCounter) {
    counterData = 0
    resetCount++
    client.set("resetCount", resetCount)
  }
  counterData++
  console.log(counterData)
  client.set("counterData", counterData)
  fs.writeFileSync(counterFile, `Counts: ${counterData} , Reset: ${resetCount}`)
  setTimeout(recursiveCounter, INTERVAL)
}

function startNodeCounter() {
  client.get("counterData", (err, redisCounterData) => {
    counterData = parseInt(redisCounterData || 0, 0)
    client.get("resetCount", (err, redisResetCount) => {
      resetCount = parseInt(redisResetCount || 0, 0)
      recursiveCounter()
    });
  });

}
startNodeCounter()