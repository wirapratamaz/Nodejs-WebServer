// const requestListener = (request, response) => {
//     response.setHeader('Content-Type', 'text/html');
//     response.setHeader('X-Powered-By', 'NodeJS');//*buat nama propertinya secara mandiri
// }

//!LAtihan mengubah dan menambah nilai header response
const requestListener = (request, response) => {
    //*mengubah Content-Type menjadi JSON
    response.setHeader('Content-Type', 'application/json');
    response.setHeader('X-Powered-By', 'NodeJS');//*buat nama propertinya secara mandiri
}