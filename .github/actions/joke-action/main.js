"use strict";

import getJoke from "./joke";
import { setOutput } from "@action/core";

async function run() {
  const joke = await getJoke();
  console.log(joke);
  setOutput("joke-output", joke);
}

run();
