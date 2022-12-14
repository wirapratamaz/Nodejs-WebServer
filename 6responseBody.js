// const requestListener = (request, response) => {
//     response.write('<html>');
//     response.write('<body>');
//     response.write('<h1>Hello, World!</h1>');
//     response.write('</body>');
//     response.write('</html>');
//     response.end();//*menulis data terakhir
// };

//*bisa disingkat dengan cara
const requestListener = (request, response) => {
    response.end('<html><body><h1>Hello, World!</h1></body></html>');
};