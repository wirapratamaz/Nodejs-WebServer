// const requestListener = (request, response) => {
//     //* memberitahu client bahwa request resource yang diminta tidak ada.
//     response.statusCode = 404;//* status message

//     //* 404 defaultnya 'not found'
//     response.statusMessage = 'User is not found';
// }

//!Mengubah respon code
const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'text/html');

    const { method, url } = request;

    if(url === '/'){
        if(method === 'GET'){
            response.statusCode = 200;
            response.end('<h1> Ini adalah homepage <h1>');
        } else {
            response.statusCode = 400;
            response.end(`<h1>Halaman tidak dapat diakses dengan ${method} request!<h1>`);
        }
    } else if(url === '/about'){
        if(method === 'GET'){
            response.statusCode = 200;
            response.end('<h1> Ini adalah halaman about <h1>');
        } else if(method === 'POST'){
            let body = [];

            request.on('data', (chunk) => {
                body.push(chunk);
            });

            request.end('end', () => {
                body = Buffer.concat(body).toString();
                const { name } =JSON.parse(body);
                response.statusCode = 200;
                response.end(`<h1> Hali, ${name}! ini adalah halaman about <h1>`);
            });
        } else {
            response.statusCode = 400;
            response.end(`<h1> Halaman tidak dapat diakses dengan ${method} request!<h1>`);
        }
    } else {
        response.statusCode = 404;
        response.end('<h1> Halaman tidak ditemukan <h1>');
    }
}