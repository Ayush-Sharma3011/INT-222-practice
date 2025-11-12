// os module 
// os.pplatform()
// os.release()
// os. arch()
// os.freemen()
//os.totalmen()
// os.uptime()
//os.hostname()
//os.constants
// os.constants.errno.EACCES
// os.constants.signals.SIGNTRAP
// userinfor and networking
// os.userinfo
// os.networkInterface


const os= require('os')
console.log(os.platform());
console.log(os.type());
console.log(os.release());
console.log(os. arch());
console.log(os.freemem());
console.log(os.totalmem());
console.log(os.uptime()/3600);
console.log(os.hostname());
console.log(os.constants.errno.EACCES);
console.log(os.constants.signals.SIGTRAP);

