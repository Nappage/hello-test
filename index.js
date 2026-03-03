#!/usr/bin/env node

function hello() {
  return 'Hello from Mac mini!';
}

if (require.main === module) {
  console.log(hello());
}

module.exports = { hello };
