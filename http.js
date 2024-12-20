const http=require('http')

const server=http.createServer((req,res)=>{
    if(req.url==='/')
    {
        res.write('home page')
        res.end()
    }
    else if(req.url==='/about')
    {
        res.write('about page')
        res.end()
    }
    else{
        res.end(
            `
            <h1>Oops!</h1>
            <p>page not found</p>
            <a href='/'>back to home</a> 
            `
        )
    }
    

})

server.listen(5000,()=>{console.log('server started....')})