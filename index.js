const http = require("http")

const server = http.createServer((request, response)=> {
    console.log(request.url)

    if (request.url === "/perro"){
      console.log("están en perro")
    } else if(request.url === "/gato"){
      console.log("está en gato")
    } else if(request.url === "/pez"){
      console.log("está en gato")
    }else{
      console.log("que pei")
    }
    response.write("saca las chelas y alitas")
    response.end()
})

server.listen(3000)
