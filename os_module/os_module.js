const os = require("os");

// console.log(`CPU architecture : ${os.arch()}`);
// console.log(`Plateform : ${os.platform()}`);
// console.log(`CPUS : ${os.cpus()}`);
// console.log(`homeDirectory : ${os.homedir()}`);
// console.log(`Hostname : ${os.hostname()}`);
// console.log(`Network interfaces : ${os.networkInterfaces()}`);
// console.log(`Free memory : ${os.freemem}`);
// console.log(`Machine : ${os.machine()}`);
// console.log(`End of line : ${os.EOL}`);

const freeMem = os.freemem();
const arch = os.arch();
const userInf = os.userInfo();
const Plateform = os.platform();
const hostname = os.hostname();
const uptime = os.uptime();
const totmem = os.totalmem();
const type = os.type();
console.log({
  freeMem,
  arch,
  userInf,
  Plateform,
  hostname,
  totmem,
  uptime,
  type,
});
