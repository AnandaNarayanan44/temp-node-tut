const path=require('path')

console.log(path.sep)

const join=path.join('content','subfolder','test.txt')
console.log(join)

const base=path.basename(join)
console.log(base)

const together=path.resolve(__dirname,'content','subfolder','test.txt')
console.log(together)

const way2=path.join(__dirname,join)
console.log(way2)