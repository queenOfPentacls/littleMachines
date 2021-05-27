const core = require('@actions/core');
const github = require('@actions/github');

try {
  const cypress_chrome = core.getInput('cypress_chrome')
  console.log(cypress_chrome)
  // const run = core.getInput('run')
  // console.log(run)
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}