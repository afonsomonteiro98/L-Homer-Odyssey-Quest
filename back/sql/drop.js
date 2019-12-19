const connection = require('./config')

connection.query(`DROP TABLE user`, (err) => {
    if(err) console.log(err);
    console.log('query complete');
    connection.end();
})