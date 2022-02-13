const http = require('http')
const fs = require('fs')

const rqListener = (req,res) => {

}
const server = http.createServer((req, res) => {
    const url = req.url
    const method= req.method

    if(url ==="/"){
        res.write("<html>")
        res.write("<header><title>Enter message</title></header>")
        res.write("<body><form name='message' action='/message' method='POST'><input type='text' /><button type='submit'>Submit</button></form></body>")
        res.write("</html>")
        return res.end()
    }
    if (url === "/message" && method ==='POST') {
        const body = []
        req.on("data",(chunk) => {
            console.log(chunk)
            body.push(chunk)
        })
        req.on('end',() => {
            const parsedBody = Buffer.concat(body).toString()
            const message = parsedBody.split("=")[1]
            fs.writeFileSync("message.txt", message)
            console.log(parsedBody)
        })
        
        res.statusCode = 302
        res.setHeader('Location','/')
        return res.end()
    }
    
    res.end()
})

server.listen(3000)