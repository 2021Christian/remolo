require('dotenv').config();// llama a las variables de entorno

const app = require('./app');
require ('./database');

async function main() {
    
    const port = process.env.PORT || 3000;//si quiero cambiar el puerto lo defino en el .env
    await app.listen(port)
    console.log('server en port: ', port);

}

main();
