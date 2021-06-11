const core = require('@actions/core');
const github = require('@actions/github');

try {
  const cypress_chrome = core.getInput('cypress_chrome')
  console.log(`cypress test ${cypress_chrome}`)
  // const payload = JSON.stringify(github.context, undefined, 2)
  // console.log(`The event payload abcd: ${payload}`);
  console.log('this is a test')
} catch (error) {
  core.setFailed(error.message);
}