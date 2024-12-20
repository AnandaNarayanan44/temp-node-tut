const{readFile,writeFile}=require('fs')

readFile('./content/txt1.txt','utf8',(err,result)=>{
if(err){
    console.log(err)
    return;
}
const first=result
readFile('./content/txt2.txt','utf8',(err,result)=>{
    if(err){
        console.log(err)
        return;
    }
    const second=result
    writeFile('./content/async-result.txt',`First:${first} And Second:${second}`,(err,result)=>{
    if(err)
    {
        console.log(err)
        return;
    }
    })
})
})