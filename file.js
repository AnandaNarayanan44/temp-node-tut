const {readFileSync,writeFileSync}=require('fs')

const first=readFileSync('content/txt1.txt','utf8')
const second=readFileSync('content/txt2.txt','utf8')

console.log(first, second)

writeFileSync('content/result',`here is the result ${first} , ${second}`,{flag:'a'})
writeFileSync('./content/test-result',` These is appended text`,{flag:'a'})
