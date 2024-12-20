const os=require('os')

console.log(os.userInfo())

console.log('The Uptime of the system ',os.uptime())

const currentOS={
    name:os.type(),
    release:os.release(),
    totmem:os.totalmem(),
    cpu:os.cpus()
}

console.log(currentOS)