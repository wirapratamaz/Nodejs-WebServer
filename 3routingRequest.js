// const requestListener = (request, response) => {
//     const { url } = request;

//     //*kondisi mendapatkan nilai url
//     if(url === '/'){
//         //*kombinasi method request
//         if(method === 'GET'){
//             //
//         }
    
//     }
//     if(url === '/about'){
//         //
//     }
// };

//!latihan 
const http = require('http');
const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'text/html');
    response.statusCode = 200;

    //* ambil properti url dengan teknik destructuring object
    const { method, url } = request;

    if(url === '/'){
        if(method === 'GET'){
            response.end('<h1>Ini adalah homepage</h1>');
        } else {
            response.end(`<h1>Halaman tidak dapat diakses dengan ${method} request</h1>`)
        }
    }else if (url === '/about') {
        if(method === 'GET'){
            response.end('<h1>Halo! Ini adalah halaman about<h1>');
        } else if (method === 'POST') {
            let body = [];

            request.on('data', (chunk) => {
                body.push(chunk);
            })

            request.on('end', () => {
                body = Buffer.concat(body).toString();
                const { name } = JSON.parse(body);
                response.end(`<h1>Hallo, ${name}! Ini adalah halaman about<h1>`);
            })
        } else {
            response.end(`<h1>Halaman tidak dapat diakses menggunakan ${method} request!<h1>`);
        }
    }else{
        response.end(`<h1>Halaman tidak ditemukan!<h1>`);
    }

}

const server = http.createServer(requestListener);
 
const port = 5000;
const host = 'localhost';
 
server.listen(port, host, () => {
    console.log(`Server berjalan pada http://${host}:${port}`);
});