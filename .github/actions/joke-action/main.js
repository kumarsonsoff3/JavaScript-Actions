"use strict";

const getJoke = require("./joke");
const core = require("@action/core");

async function run() {
  const joke = await getJoke();
  console.log(joke);
  core.setOutput("joke-output", joke);
}

run();
