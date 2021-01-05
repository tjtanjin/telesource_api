const express = require('express')
const router = express.Router()
const Userid = require('../models/models')
const { spawn } = require('child_process')

// test
router.get('/', (req, res) => {
  res.send("Hello World!")
})

// execute code and return result
router.post('/', async (req, res) => {
  let result = ""
  const userid = req.body.userid;
  const sourceVersion = req.body.version;
  const command = "jq -r '.code_snippet' ../telesourcebot/userinfo/" + userid + ".json" + ' | node js-slang/dist/repl/repl.js -c ' + sourceVersion
  const { exec } = require('child_process');
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    const split = stdout.split("\n");
    if (split[1].includes("> Thrown:")) {
      result = split[split.length-4].slice(7)
    } else {
      result = split[split.length-2]
    }
    if (split.length < 4) {
      result = result.slice(2)
    }
    //console.error(`stderr: ${stderr}`);
    result = result.replace(/\u001b\[.*?m/g, '')
    res.status(201).json(result)
  });
})

module.exports = router
