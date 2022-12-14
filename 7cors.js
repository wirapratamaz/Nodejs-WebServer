const response = h.response({error: false, message: 'Catatan berhasil ditambahkan'});
response.header('Access-Control-Allow-Origin', 'http://notesapp-v1.dicodingacademy.com');
//* atau
response.header('Access-Control-Allow-Origin', '*');
return response;

//* penerapan corspada web server
const server = Hapi.sever({
    port: 5000,
    host: 'localhost',
    routes: {
        cors: {
            origin: ['*'],
        },
    },
});