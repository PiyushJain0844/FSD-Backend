// Create your own server using http module
import http from "http";
const server = http.createServer((request, response) => {
    response.setHeader("content-type","text/html");
    response.end('response from server end');
});
server.listen(PORT, HOST, () => {
    const PORT = process.env.PORT || 8000;
    const HOSt = process.env.HOST || 'localhost';
    console.log("Server is running on port http://localhost.8000")
}); 