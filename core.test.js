const assert = require('assert');
const Tool = require('./core');

(async function () {
  const out = Tool.format("select 'from here' as note from users where id=1 and active=true");
  assert.ok(out.startsWith('SELECT') && out.includes("'from here'") && out.includes('\nFROM users') && out.includes('\n  AND'));
  console.log('ok, tool assertions passed');
})().catch(function (error) {
  console.error(error);
  process.exitCode = 1;
});
