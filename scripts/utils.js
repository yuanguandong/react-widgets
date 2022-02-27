const chalk = require("chalk");
const { spawn: _spawn } = require("child_process");

const spawn = async (command,args,options) => {
  return new Promise((resolve) => {
    const proc = _spawn(command,args,options);
    const a = proc.stdout.pipe(process.stdout);
    console.log('a',a)
    proc.stderr.pipe(process.stderr);
    proc.on("close", (...restArgs) => {
      resolve(restArgs);
    });
  });
};

const log = (msg, color = "green", ...arg) =>
  console.log(chalk[color](msg, arg));

module.exports = { spawn, log };
