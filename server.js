const http = require('http');
//*http.createServer() = berfungsi untuk membuat HTTP server yang merupakan instance dari http.server

// const requestListener = (request, response) => {
//     response.setHeader('Content-Type', 'text/html');
//     response.statusCode = 200;//*kode status 200
//     response.end('<h1>Halo HTTP Server!</h1>');//*menampilkan konten
// };

// const server = http.createServer(requestListener);
// const port = 5000;
// const host = 'localhost';

// server.listen(port, host, () => {
//     console.log(`Server berjalan pada http://${host}:${port}`);
// });

//!mendapatkan nilai method dari request menggunakan request.method
// const requestListener = (request, response) => {
//     const method = request.method;
// };

//*atau dengan cara object destructuring
// const requestListener = (request, response) => {
//     const { method } = request;
// };

//! Properti Method
// const requestListener = (request, response) => {
//     const { method } = request;

//     if(method === 'GET'){
//         //response 
//     }

//     if(method === 'POST'){
//         //response
//     }
// };

//!LATIHAN FULL
const requestListener = (request, response) => {
    //*nilai MIME types
    //*mengubah Content-Type menjadi JSON
    response.setHeader('Content-Type', 'application/json');
    response.setHeader('X-Powered-By', 'NodeJS');//*buat nama propertinya secara mandiri
    const { method, url } = request;

    if(url === '/'){
        if(method === 'GET'){
            response.statusCode = 200;
            response.end(JSON.stringify({
                message: 'Ini adalah homepage',
            }));
        } else {
            response.statusCode = 400;
            response.end(JSON.stringify({
                message: `Halaman tidak dapat diakses dengan ${method} request!`,
            }));
        }
    } else if(url === '/about'){
        if(method === 'GET'){
            response.statusCode = 200;
            response.end(JSON.stringify({
                message: 'Ini adalah halaman about',
            }));
        } else if(method === 'POST'){
            let body = [];

            request.on('data', (chunk) => {
                body.push(chunk);
            });

            request.end('end', () => {
                body = Buffer.concat(body).toString();
                const { name } =JSON.parse(body);
                response.statusCode = 200;
                response.end(JSON.stringify({
                    message: `Haii, ${name}! ini adalah halaman about`,
                }));
            });
        } else {
            response.statusCode = 400;
            response.end(JSON.stringify({
                message: `Halaman tidak dapat diakses dengan ${method} request!`,
            }));
        }
    } else {
        response.statusCode = 404;
        //*mengubah objek JavaScript menjadi JSON string menggunakan JSON.stringify().
        response.end(JSON.stringify({
            message: 'Halaman tidak ditemukan!'
        }));
    }
}

const server = http.createServer(requestListener);
    const port = 5000;
    const host = 'localhost';

    server.listen(port, host, () => {
        console.log(`Server berjalan pada http://${host}:${port}`);
});

