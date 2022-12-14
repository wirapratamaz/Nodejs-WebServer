// const requestListener = (request, response) => {
//     //*variabel body dan inisialisasikan nilainya dengan array kosong
//     let body = [];//*menampung buffer pada stream

//     //*event data request
//     //*array body(chunk) dibawa callback function
//     request.on('data', (chunk) => {
//         body.push(chunk);
//     });

//     //*event end
//     request.on('end', () => {
//         body = Buffer.concat(body).toString();
//         //*ubah variable body menjadi string melalui Buffer.concat(body).toString()
//     });
// };

//!Latihan
const http = require('http');
 
const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'text/html');
    response.statusCode = 200;
 
    const { method } = request;
 
    if(method === 'GET') {
        response.end('<h1>Hello!</h1>');
    }
    
    //*logika POST
    if(method === 'POST') {
        let body = [];

        request.on('data', (chunk) => {
            body.push(chunk);
        });

        request.on('end', () => {
            body = Buffer.concat(body).toString();
            //*ubah JSON sting menjadi js object
            const { name } =JSON.parse(body);
            response.end(`<h1>Hai, ${name}!<h1>`);
        });
    }
};
 
const server = http.createServer(requestListener);
 
const port = 5000;
const host = 'localhost';
 
server.listen(port, host, () => {
    console.log(`Server berjalan pada http://${host}:${port}`);
});
